from flask import jsonify, request
from flask_restful import Api, Resource, reqparse, abort
from Stack.model import *
from Stack.valid import *
import datetime

def init_api(app):

    # home page
    # show all the posts
    # @app.route('/home/get_posts', method=['POST'])
    # def get_posts():
    #     pass
    ###########################################
    # post
    ###########################################
    # for each user, get all posts
    # check auth(phonenum) firstly
    @app.route('/home/get_posts', method=['POST'])
    def get_posts():
        data = {}
        phonenum = int(request.form.get('phonenum'))
        try:
            schema(
                {
                    "phonenum": phonenum
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            try:
                posts = Post.getbyuser(Post, phonenum=phonenum)
                res = list()
                for post in posts:
                    res.append(Post.out(Post, post))
                data['message'] = res
                data['status'] = 200
                data['message'] = 'got all posts successfully!'
            except Exception as e:
                data['status'] = 406
                data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    # user creates one post
    # check auth(phonenum) firstly
    @app.route('/home/create_post', method=['POST'])
    def create_post():
        data = {}
        image = request.form.get('image')
        ptime = datetime.datetime.strptime(request.form.get('ptime'), "%Y-%m-%d %H:%M:%S")
        label = request.form.get('label')
        aes_score = float(request.form.get('aes_score'))
        phonenum = int(request.form.get('phonenum'))
        try:
            schema(
                {
                    "image": image,
                    "ptime": ptime,
                    "label": label,
                    "aes_score": aes_score,
                    "phonenum": phonenum
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            post = Post(pid=Post.getid(Post) + 10000,
                        image=image,
                        ptime=ptime,
                        label=label,
                        aes_score=aes_score,
                        phonenum=phonenum)
            try:
                _ = Post.add(Post, post)
                data['status'] = 200
                data['message'] = 'post successfully!'
            except Exception as e:
                data['status'] = 400
                data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    # user deletes one post
    # check auth(phonenum) firstly
    @app.route('/home/delete_post', method=['POST'])
    def delete_post():
        data = {}
        pid = int(request.form.get('pid'))
        try:
            schema(
                {
                    "pid": pid
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            # check like thirdly
            try:
                _ = Post.delete(Post, pid)
                data['status'] = 200
                data['message'] = 'deleted successfully!'
            except Exception as e:
                data['status'] = 406
                data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    # user repost/retweet one post
    # check auth(phonenum) firstly
    @app.route('/home/re_post', method=['POST'])
    def re_post():
        data = {}
        ptime = datetime.datetime.strptime(request.form.get('ptime'), "%Y-%m-%d %H:%M:%S")
        pid = int(request.form.get('pid'))
        phonenum = int(request.form.get('phonenum'))
        try:
            schema(
                {
                    "ptime": ptime,
                    "pid": pid,
                    "phonenum": phonenum
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            # check post secondly
            origin_post = Post.get(Post, pid)
            if origin_post is None:
                data['status'] = 404
                data['message'] = "Post {} doesn't exist".format(pid)
            else:
                post = Post(pid=Post.getid(Post) + 10000,
                            image=origin_post.image,
                            ptime=ptime,
                            label=origin_post.label,
                            aes_score=origin_post.aes_score,
                            phonenum=phonenum,
                            isre=True)
                try:
                    _ = Post.add(Post, post)
                    data['status'] = 200
                    data['message'] = 'repost successfully!'
                except Exception as e:
                    data['status'] = 406
                    data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    ###########################################
    # like
    ###########################################
    # for each post, get likes
    # check auth(phonenum) firstly
    @app.route('/home/get_likes', method=['POST'])
    def get_likes():
        data = {}
        pid = int(request.form.get('pid'))
        try:
            schema(
                {
                    "pid": pid
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            # check post secondly
            if Post.get(Post, pid) is None:
                data['status'] = 404
                data['message'] = "Post {} doesn't exist".format(pid)
            else:
                try:
                    # likes = LikeTable.getbypid(LikeTable, pid=pid)
                    # res = list()
                    # for like in likes:
                    #     res.append(LikeTable.out(LikeTable, like))
                    # data['message'] = res
                    len = LikeTable.getcountbypid(LikeTable, pid=pid)
                    data['message'] = len
                    data['status'] = 200
                    data['message'] = 'got all likes successfully!'
                except Exception as e:
                    data['status'] = 406
                    data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    # user likes one post
    # check auth(phonenum) firstly
    @app.route('/home/like_post', method=['POST'])
    def like_post():
        data = {}
        ltime = datetime.datetime.strptime(request.form.get('ltime'), "%Y-%m-%d %H:%M:%S")
        pid = int(request.form.get('pid'))
        phonenum = int(request.form.get('phonenum'))
        try:
            schema(
                {
                    "ltime": ltime,
                    "pid": pid,
                    "phonenum": phonenum
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            # check post secondly
            if Post.get(Post, pid) is None:
                data['status'] = 404
                data['message'] = "Post {} doesn't exist".format(pid)
            else:
                like = LikeTable(lid=LikeTable.getid(LikeTable) + 10000,
                                 ltime=ltime,
                                 pid=pid,
                                 phonenum=phonenum)
                try:
                    _ = LikeTable.add(LikeTable, like)
                    data['status'] = 200
                    data['message'] = 'liked successfully!'
                except Exception as e:
                    data['status'] = 406
                    data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    # user unlikes one post
    # check auth(phonenum) firstly
    @app.route('/home/unlike_post', method=['POST'])
    def unlike_post():
        data = {}
        lid = int(request.form.get('lid'))
        pid = int(request.form.get('pid'))
        try:
            schema(
                {
                    "lid": lid,
                    "pid": pid
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            # check post secondly
            if Post.get(Post, pid) is None:
                data['status'] = 404
                data['message'] = "Post {} doesn't exist".format(pid)
            else:
                # check like thirdly
                try:
                    _ = LikeTable.delete(LikeTable, lid)
                    data['status'] = 200
                    data['message'] = 'unliked successfully!'
                except Exception as e:
                    data['status'] = 406
                    data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    ###########################################
    # comment
    ###########################################
    # for each post, get comments
    # check auth(phonenum) firstly
    @app.route('/home/get_comments', method=['POST'])
    def get_comments():
        data = {}
        pid = int(request.form.get('pid'))
        try:
            schema(
                {
                    "pid": pid
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            # check post secondly
            if Post.get(Post, pid) is None:
                data['status'] = 404
                data['message'] = "Post {} doesn't exist".format(pid)
            else:
                try:
                    comments = CommentTable.getbypid(CommentTable, pid=pid)
                    res = list()
                    for comment in comments:
                        res.append(CommentTable.out(CommentTable, comment))
                    data['message'] = res
                    data['status'] = 200
                    data['message'] = 'got all comments successfully!'
                except Exception as e:
                    data['status'] = 406
                    data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    # user comments on one post
    # check auth(phonenum) firstly
    @app.route('/home/comment_post', method=['POST'])
    def comment_post():
        data = {}
        content = request.form.get('content')
        ctime = datetime.datetime.strptime(request.form.get('ctime'), "%Y-%m-%d %H:%M:%S")
        pid = int(request.form.get('pid'))
        phonenum = int(request.form.get('phonenum'))
        try:
            schema(
                {
                    "content": content,
                    "ctime": ctime,
                    "pid": pid,
                    "phonenum": phonenum
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            # check post secondly
            if Post.get(Post, pid) is None:
                data['status'] = 404
                data['message'] = "Post {} doesn't exist".format(pid)
            else:
                comment = CommentTable(cid=CommentTable.getid(CommentTable) + 10000,
                                       content=content,
                                       ctime=ctime,
                                       pid=pid,
                                       phonenum=phonenum)
                try:
                    _ = CommentTable.add(CommentTable, comment)
                    data['status'] = 200
                    data['message'] = 'commented successfully!'
                except Exception as e:
                    data['status'] = 400
                    data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    # user un-comments on one post
    # check auth(phonenum) firstly
    @app.route('/home/uncomment_post', method=['POST'])
    def uncomment_post():
        data = {}
        cid = int(request.form.get('cid'))
        pid = int(request.form.get('pid'))
        try:
            schema(
                {
                    "cid": cid,
                    "pid": pid
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            if Post.get(Post, pid) is None:
                data['status'] = 404
                data['message'] = "Post {} doesn't exist".format(pid)
            else:
                # check comment thirdly
                try:
                    _ = CommentTable.delete(CommentTable, cid)
                    data['status'] = 200
                    data['message'] = 'uncommented successfully!'
                except Exception as e:
                    data['status'] = 406
                    data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    ###########################################
    # follow
    ###########################################
    # for each user, get followers
    # check auth(phonenum==followee) firstly
    @app.route('/mine/get_followers', method=['POST'])
    def get_followers():
        data = {}
        # equals to current user's phonenum
        followee = int(request.form.get('followee'))
        try:
            schema(
                {
                    "followee": followee
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            try:
                followers = FollowTable.get_followers(FollowTable, followee=followee)
                res = list()
                for phonenum in followers:
                    user = User.get(User, phonenum=phonenum)
                    res.append(User.out(User, user))
                data['message'] = res
                data['status'] = 200
                data['message'] = 'got all followers successfully!'
            except Exception as e:
                data['status'] = 406
                data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    # for each user, get followees
    # check auth(phonenum) firstly
    @app.route('/mine/get_followees', method=['POST'])
    def get_followees():
        data = {}
        # equals to current user's phonenum
        follower = int(request.form.get('follower'))
        try:
            schema(
                {
                    "follower": follower
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            try:
                followees = FollowTable.get_followees(FollowTable, follower=follower)
                res = list()
                for phonenum in followees:
                    user = User.get(User, phonenum=phonenum)
                    res.append(User.out(User, user))
                data['message'] = res
                data['status'] = 200
                data['message'] = 'got all followees successfully!'
            except Exception as e:
                data['status'] = 406
                data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    # user follow another one
    # check auth(phonenum) firstly
    @app.route('/home/follow_user', method=['POST'])
    def follow_user():
        data = {}
        ftime = datetime.datetime.strptime(request.form.get('ftime'), "%Y-%m-%d %H:%M:%S")
        follower = int(request.form.get('follower'))
        followee = int(request.form.get('followee'))
        try:
            schema(
                {
                    "ftime": ftime,
                    "follower": follower,
                    "followee": followee
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            follow = FollowTable(fid=FollowTable.getid(FollowTable) + 10000,
                                 ftime=ftime,
                                 follower=follower,
                                 followee=followee)
            try:
                _ = FollowTable.add(FollowTable, follow)
                data['status'] = 200
                data['message'] = 'followed successfully!'
            except Exception as e:
                data['status'] = 406
                data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    # user un-follow another one
    # check auth(phonenum) firstly
    @app.route('/home/unfollow_user', method=['POST'])
    def unfollow_user():
        data = {}
        fid = int(request.form.get('fid'))
        try:
            schema(
                {
                    "fid": fid
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
                # check follew thirdly
                try:
                    _ = FollowTable.delete(FollowTable, fid)
                    data['status'] = 200
                    data['message'] = 'unfollowed successfully!'
                except Exception as e:
                    data['status'] = 406
                    data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    ###########################################
    # rank
    ###########################################
    # for ranking list, get all posts by number of likes in last week
    @app.route('/home/get_posts_by_likes', method=['POST'])
    def get_posts_by_likes():
        data = {}
        start = datetime.datetime.strptime(request.form.get('time'), "%Y-%m-%d %H:%M:%S")
        delta = datetime.timedelta(days=7)
        end = start - delta
        try:
            schema(
                {
                    "ptime": start,
                    "ltime": end
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            try:

                posts = Post.getlastweek(Post, start=start, end=end)
                tmp = list()
                for post in posts:
                    tmp.append([post, LikeTable.getcountbypid(LikeTable, pid=post.pid)])
                tmp.sort(key=lambda x:x[1], reverse=False)

                from Stack.config import RANK_LIMIT
                res = list()
                count = 0
                for post, likes in tmp:
                    count += 1
                    res.append([Post.out(Post, post), likes])
                    if count >= RANK_LIMIT:
                        break
                data['message'] = res
                data['status'] = 200
                data['message'] = 'got all posts successfully!'
            except Exception as e:
                data['status'] = 406
                data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    # for ranking list, get all posts by aes_score in last week
    @app.route('/home/get_posts_by_aes_score', method=['POST'])
    def get_posts_by_aes_score():
        data = {}
        start = datetime.datetime.strptime(request.form.get('time'), "%Y-%m-%d %H:%M:%S")
        delta = datetime.timedelta(days=7)
        end = start - delta
        try:
            schema(
                {
                    "ptime": start,
                    "ltime": end
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            try:
                posts = Post.getbyaesscore(Post, start=start, end=end)
                res = list()
                for post in posts:
                    res.append(Post.out(Post, post))
                data['message'] = res
                data['status'] = 200
                data['message'] = 'got all posts successfully!'
            except Exception as e:
                data['status'] = 406
                data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    ###########################################
    # discover
    ###########################################
    # recommend posts in discover page
    @app.route('/discover/recommend_posts', method=['POST'])
    def recommend_posts():
        data = {}
        start = datetime.datetime.strptime(request.form.get('time'), "%Y-%m-%d %H:%M:%S")
        delta = datetime.timedelta(days=7)
        end = start - delta
        try:
            schema(
                {
                    "ptime": start,
                    "ltime": end
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            try:
                posts = Post.getbyaesscore(Post, start=start, end=end)
                res = list()
                for post in posts:
                    res.append(Post.out(Post, post))
                data['message'] = res
                data['status'] = 200
                data['message'] = 'got all posts successfully!'
            except Exception as e:
                data['status'] = 406
                data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp

    # search posts in discover page
    @app.route('/discover/search', method=['POST'])
    def search():
        data = {}
        keyword = request.form.get('keyword')
        try:
            schema(
                {
                    "keyword": keyword
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            try:
                posts = Post.getbylabel(Post, keyword=keyword)
                res = list()
                for post in posts:
                    res.append(Post.out(Post, post))
                data['message'] = res
                data['status'] = 200
                data['message'] = 'got all posts successfully!'
            except Exception as e:
                data['status'] = 406
                data['message'] = e

        resp = jsonify(data)
        resp.status_code = data['status']
        return resp
