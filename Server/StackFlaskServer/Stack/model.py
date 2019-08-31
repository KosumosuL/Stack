from flask import Flask
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import *
from flask_sqlalchemy import SQLAlchemy

from Stack import db

class User(db.Model):
    __tablename__ = 'user'
    phonenum = db.Column(db.INTEGER, primary_key=True, nullable=False)
    password = db.Column(db.String(32), nullable=False)
    photo = db.Column(db.String(200), nullable=False)
    name = db.Column(db.String(32), nullable=True)
    username = db.Column(db.String(32), nullable=False)
    email = db.Column(db.String(320), nullable=True)
    gender = db.Column(db.Boolean, nullable=True)
    bio = db.Column(db.String(100), nullable=True)

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

class Post(db.Model):
    __tablename__ = 'post'
    pid = db.Column(db.INTEGER, primary_key=True, nullable=False)
    image = db.Column(db.String(200), nullable=False)
    ptime = db.Column(db.DateTime, nullable=False)
    isre = db.Column(db.Boolean, nullable=False)
    label = db.Column(db.String(32), nullable=True)
    aes_score = db.Column(db.DECIMAL, nullable=False)
    phonenum = db.Column(db.INTEGER, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.pid

    def __init__(self, pid, image, ptime, label, aes_score, phonenum, isre=False):
        self.pid = pid
        self.image = image
        self.ptime = ptime
        self.label = label
        self.aes_score = aes_score
        self.phonenum = phonenum
        self.isre = isre

    def get(self, pid):
        return self.query.filter_by(pid=pid).first()

    def getbylabel(self, keyword):
        return self.query.filter_by(label=keyword).order_by(self.aes_score.desc()).all()

    def getbyaesscore(self, start, end):
        from Stack.config import RANK_LIMIT
        return self.query.filter(start < self.ptime, self.ptime <= end).order_by(self.aes_score.desc()).limit(RANK_LIMIT).all()

    def getlastweek(self, start, end):
        return self.query.filter(start < self.ptime, self.ptime <= end).all()

    def getbyuser(self, phonenum):
        return self.query.filter_by(phonenum=phonenum).all()

    def getid(self):
        return self.query.count()

    def add(self, post):
        db.session.add(post)
        return session_commit()

    def update(self, post):
        db.session.update(post)
        return session_commit()

    def delete(self, pid):
        self.query.filter_by(pid=pid).delete()
        return session_commit()

    def out(self, post):
        return {
            'pid': post.pid,
            'image': post.image,
            'ptime': post.ptime,
            'isre': post.isre,
            'label': post.label,
            'aes_score': post.aes_score,
            'phonenum': post.phonenum
        }

class LikeTable(db.Model):
    __tablename__ = 'liketable'
    lid = db.Column(db.INTEGER, primary_key=True, nullable=False)
    ltime = db.Column(db.DateTime, nullable=False)
    pid = db.Column(db.INTEGER, nullable=False)
    phonenum = db.Column(db.INTEGER, nullable=False)

    def __repr__(self):
        return '<LikeTable %r>' % self.lid

    def __init__(self, lid, ltime, pid, phonenum):
        self.lid = lid
        self.ltime = ltime
        self.pid = pid
        self.phonenum = phonenum

    def get(self, lid):
        return self.query.filter_by(lid=lid).first()

    def getbypid(self, pid):
        return self.query.filter_by(pid=pid).all()

    def getcountbypid(self, pid):
        return self.query.filter_by(pid=pid).count()

    def getid(self):
        return self.query.count()

    def add(self, like):
        db.session.add(like)
        return session_commit()

    def update(self, like):
        db.session.update(like)
        return session_commit()

    def delete(self, lid):
        self.query.filter_by(lid=lid).delete()
        return session_commit()

    def out(self, like):
        return {
            'lid': like.lid,
            'ltime': like.ltime,
            'pid': like.pid,
            'phonenum': like.phonenum
        }

class CommentTable(db.Model):
    __tablename__ = 'commenttable'
    cid = db.Column(db.INTEGER, primary_key=True, nullable=False)
    content = db.Column(db.String(50), nullable=False)
    ctime = db.Column(db.DateTime, nullable=False)
    pid = db.Column(db.INTEGER, nullable=False)
    phonenum = db.Column(db.INTEGER, nullable=False)

    def __repr__(self):
        return '<LikeTable %r>' % self.cid

    def __init__(self, cid, content, ctime, pid, phonenum):
        self.cid = cid
        self.content = content
        self.ctime = ctime
        self.pid = pid
        self.phonenum = phonenum

    def get(self, cid):
        return self.query.filter_by(cid=cid).first()

    def getbypid(self, pid):
        return self.query.filter_by(pid=pid).all()

    def getid(self):
        return self.query.count()

    def add(self, comment):
        db.session.add(comment)
        return session_commit()

    def update(self, comment):
        db.session.update(comment)
        return session_commit()

    def delete(self, cid):
        self.query.filter_by(cid=cid).delete()
        return session_commit()

    def out(self, comment):
        return {
            'cid': comment.cid,
            'content': comment.content,
            'ctime': comment.ctime,
            'pid': comment.pid,
            'phonenum': comment.phonenum
        }

class FollowTable(db.Model):
    __tablename__ = 'followtable'
    fid = db.Column(db.INTEGER, primary_key=True, nullable=False)
    ftime = db.Column(db.DateTime, nullable=False)
    follower = db.Column(db.INTEGER, nullable=False)
    followee = db.Column(db.INTEGER, nullable=False)

    def __repr__(self):
        return '<LikeTable %r>' % self.fid

    def __init__(self, fid, ftime, follower, followee):
        self.fid = fid
        self.ftime = ftime
        self.follower = follower
        self.followee = followee

    def get_followees(self, follower):
        return self.query.filter_by(follower=follower).all()

    def get_followers(self, followee):
        return self.query.filter_by(followee=followee).all()

    def getid(self):
        return self.query.count()

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
            'ftime': follow.ftime,
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