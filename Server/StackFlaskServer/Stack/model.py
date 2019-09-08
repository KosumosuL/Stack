from flask import Flask
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import *
from flask_sqlalchemy import SQLAlchemy

from Stack import db

class User(db.Model):
    __tablename__ = 'user'
    phonenum = db.Column(db.String(11), primary_key=True, nullable=False)
    password = db.Column(db.String(32), nullable=False)
    photo = db.Column(db.String(200), nullable=False)
    name = db.Column(db.String(32), nullable=True)
    username = db.Column(db.String(32), nullable=False)
    email = db.Column(db.String(320), nullable=True)
    gender = db.Column(db.Boolean, nullable=True)
    bio = db.Column(db.String(100), nullable=True)
    token = db.Column(db.String(100), nullable=True)
    extime = db.Column(db.DateTime, nullable=True)

    def __repr__(self):
        return '<User %r>' % self.phonenum

    def __init__(self, phonenum, password, photo, name, username, email, gender, bio):
        self.phonenum = phonenum
        self.password = password
        self.photo = photo
        self.name = name
        self.username = username
        self.email = email
        self.gender = gender
        self.bio = bio

    def get(self, phonenum):
        return self.query.filter_by(phonenum=phonenum).first()

    # def add(self, user):
    #     db.session.add(user)
    #     return session_commit()
    #
    # def update(self, user):
    #     db.session.update(user)
    #     return session_commit()
    #
    # def delete(self, phonenum):
    #     self.query.filter_by(phonenum=phonenum).delete()
    #     return session_commit()

    def out(self, user):
        return {
            'phonenum': user.phonenum,
            'password': user.password,
            'photo': user.photo,
            'name': user.name,
            'username': user.username,
            'email': user.email,
            'gender': user.gender,
            'bio': user.bio
        }

    def partly_out(self, user):
        return {
            'phonenum': user.phonenum,
            'photo': user.photo,
            'name': user.name,
            'username': user.username
        }

class Post(db.Model):
    __tablename__ = 'post'
    pid = db.Column(db.INTEGER, primary_key=True, nullable=False)
    ptime = db.Column(db.DateTime, nullable=False)
    phonenum = db.Column(db.String(11), nullable=False)

    def __repr__(self):
        return '<Post %r>' % self.pid

    def __init__(self, ptime, phonenum):
        self.ptime = ptime
        self.phonenum = phonenum

    def get(self, pid):
        return self.query.filter_by(pid=pid).first()

    def get_followees_posts(self, phonenum, time):
        from Stack.config import SHOWPOSTS_LIMIT
        return self.query\
            .filter(self.phonenum == FollowTable.followee)\
            .filter(FollowTable.follower == phonenum) \
            .filter(self.ptime < time) \
            .order_by(self.ptime.desc())\
            .limit(SHOWPOSTS_LIMIT)\
            .all()

    def get_user_posts(self, phonenum, time):
        from Stack.config import SHOWPOSTS_LIMIT
        return self.query\
            .filter(self.phonenum == phonenum)\
            .filter(self.ptime < time) \
            .order_by(self.ptime.desc())\
            .limit(SHOWPOSTS_LIMIT)\
            .all()

    def get_by_label(self, keyword):
        return self.query.filter_by(label=keyword).order_by(self.aes_score.desc()).all()

    def get_by_label_fuzzy(self, keyword):
        # keyword cannot be blank(must be checked in frond end)
        return self.query.filter(self.label.like("%" + keyword + "%")).all()

    def add(self, post):
        db.session.add(post)
        db.session.flush()
        return post.pid, session_commit()

    def update(self, post):
        db.session.update(post)
        return session_commit()

    def delete(self, pid):
        self.query.filter_by(pid=pid).delete()
        return session_commit()

    def out(self, post):
        return {
            'pid': post.pid,
            'ptime': str(post.ptime),
            'phonenum': post.phonenum
        }

class Image(db.Model):
    __tablename__ = 'image'
    iid = db.Column(db.INTEGER, primary_key=True, nullable=False)
    url = db.Column(db.String(100), nullable=False)
    label = db.Column(db.String(32), nullable=True)
    aes_score = db.Column(db.DECIMAL, nullable=False)
    weight = db.Column(db.DECIMAL, nullable=False)
    pid = db.Column(db.INTEGER, nullable=False)

    def __repr__(self):
        return '<Image %r>' % self.iid

    def __init__(self, url, label, aes_score, weight, pid):
        self.url = url
        self.label = label
        self.aes_score = aes_score
        self.weight = weight
        self.pid = pid

    def get_by_pid(self, pid):
        return self.query.filter_by(pid=pid).all()

    def get_by_weight(self, start, end):
        from Stack.config import RANK_LIMIT
        return self.query\
            .filter(start < Post.ptime, Post.ptime <= end)\
            .filter(self.pid == Post.pid)\
            .order_by(self.weight.desc())\
            .limit(RANK_LIMIT)\
            .all()

    def get_recommended(self):
        from Stack.config import RECOMMEND_LIMIT
        return self.query\
            .filter(self.weight > 10)\
            .limit(RECOMMEND_LIMIT)\
            .all()


    def add(self, image):
        db.session.add(image)
        return session_commit()

    def delete_post(self, pid):
        self.query.filter_by(pid=pid).delete()
        return session_commit()

    def out(self, image):
        return {
            'iid': image.iid,
            'url': image.url,
            'label': image.label,
            'aes_score': str(image.aes_score),
            'weight': str(image.weight),
            'pid': image.pid
        }


class LikeTable(db.Model):
    __tablename__ = 'liketable'
    lid = db.Column(db.INTEGER, primary_key=True, nullable=False)
    ltime = db.Column(db.DateTime, nullable=False)
    pid = db.Column(db.INTEGER, nullable=False)
    phonenum = db.Column(db.String(11), nullable=False)

    def __repr__(self):
        return '<LikeTable %r>' % self.lid

    def __init__(self, ltime, pid, phonenum):
        self.ltime = ltime
        self.pid = pid
        self.phonenum = phonenum

    def get(self, lid):
        return self.query.filter_by(lid=lid).first()

    def get_by_pp(self, pid, phonenum):
        return self.query.filter(self.pid == pid, self.phonenum == phonenum).first()

    def get_by_pid(self, pid):
        return self.query.filter_by(pid=pid).all()

    def get_count_by_pid(self, pid):
        return self.query.filter_by(pid=pid).count()

    def add(self, like):
        db.session.add(like)
        return session_commit()

    def update(self, like):
        db.session.update(like)
        return session_commit()

    def delete(self, lid):
        self.query.filter_by(lid=lid).delete()
        return session_commit()

    def delete_post(self, pid):
        self.query.filter_by(pid=pid).delete()
        return session_commit()

    def out(self, like):
        return {
            'lid': like.lid,
            'ltime': str(like.ltime),
            'pid': like.pid,
            'phonenum': like.phonenum
        }

class CommentTable(db.Model):
    __tablename__ = 'commenttable'
    cid = db.Column(db.INTEGER, primary_key=True, nullable=False)
    content = db.Column(db.String(50), nullable=False)
    ctime = db.Column(db.DateTime, nullable=False)
    pid = db.Column(db.INTEGER, nullable=False)
    phonenum = db.Column(db.String(11), nullable=False)

    def __repr__(self):
        return '<CommentTable %r>' % self.cid

    def __init__(self, content, ctime, pid, phonenum):
        self.content = content
        self.ctime = ctime
        self.pid = pid
        self.phonenum = phonenum

    def get(self, cid):
        return self.query.filter_by(cid=cid).first()

    def get_selfcomment(self, pid, phonenum):
        return self.query.filter(self.pid==pid, self.phonenum==phonenum).order_by(self.ctime.asc()).first()

    def get_by_pid(self, pid):
        return self.query.filter_by(pid=pid).all()

    def get_count_by_pid(self, pid):
        return self.query.filter_by(pid=pid).count()

    def add(self, comment):
        db.session.add(comment)
        return session_commit()

    def update(self, comment):
        db.session.update(comment)
        return session_commit()

    def delete(self, cid):
        self.query.filter_by(cid=cid).delete()
        return session_commit()

    def delete_post(self, pid):
        self.query.filter_by(pid=pid).delete()
        return session_commit()

    def out(self, comment):
        return {
            'cid': comment.cid,
            'content': comment.content,
            'ctime': str(comment.ctime),
            'pid': comment.pid,
            'phonenum': comment.phonenum
        }

class FollowTable(db.Model):
    __tablename__ = 'followtable'
    fid = db.Column(db.INTEGER, primary_key=True, nullable=False)
    ftime = db.Column(db.DateTime, nullable=False)
    follower = db.Column(db.String(11), nullable=False)
    followee = db.Column(db.String(11), nullable=False)

    def __repr__(self):
        return '<FollowTable %r>' % self.fid

    def __init__(self, ftime, follower, followee):
        self.ftime = ftime
        self.follower = follower
        self.followee = followee

    def get_followees(self, follower):
        return self.query.filter_by(follower=follower).all()

    def get_count_of_followees(self, follower):
        return self.query.filter_by(follower=follower).count()

    def get_followers(self, followee):
        return self.query.filter_by(followee=followee).all()

    def get_count_of_followers(self, followee):
        return self.query.filter_by(followee=followee).count()

    def get_by_ff(self, follower, followee):
        return self.query.filter(self.follower == follower, self.followee == followee).first()

    def add(self, follow):
        db.session.add(follow)
        return session_commit()

    def update(self, follow):
        db.session.update(follow)
        return session_commit()

    def delete(self, fid):
        self.query.filter_by(fid=fid).delete()
        return session_commit()

    def out(self, follow):
        return {
            'fid': follow.fid,
            'ftime': str(follow.ftime),
            'follower': follow.follower,
            'followee': follow.followee
        }

def session_commit():
    try:
        db.session.commit()
    except SQLAlchemyError as e:
        db.session.rollback()
        reason = str(e)
        return reason