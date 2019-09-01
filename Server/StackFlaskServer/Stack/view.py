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
    @app.route('/home/get_posts', methods=['POST'])
    def get_posts():
        data = {}
        phonenum = request.form.get('phonenum')
        try:
            schema(
                {
                    "phonenum": phonenum
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            data['status'] = 400
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
            except Exception as e:
                data['status'] = 406
                data['message'] = str(e)

        return jsonify(data)

    # user creates one post
    # check auth(phonenum) firstly
    @app.route('/home/create_post', methods=['POST'])
    def create_post():
        data = {}
        image = request.form.get('image')
        ptime = request.form.get('ptime')
        label = request.form.get('label')
        import decimal
        aes_score = decimal.Decimal(request.form.get('aes_score'))
        phonenum = request.form.get('phonenum')
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
            data['status'] = 400
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            post = Post(image=image,
                        ptime=ptime,
                        label=label,
                        aes_score=aes_score,
                        phonenum=phonenum)
            try:
                _ = Post.add(Post, post)
                data['status'] = 200
                data['message'] = 'post successfully!'
            except Exception as e:
                data['status'] = 406
                data['message'] = str(e)

        return jsonify(data)

    # user deletes one post
    # check auth(phonenum) firstly
    @app.route('/home/delete_post', methods=['POST'])
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
            data['status'] = 400
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            # check like thirdly
            try:
                _ = Post.delete(Post, pid)
                # 还需删除所有包含的likes和comments
                data['status'] = 200
                data['message'] = 'deleted successfully!'
            except Exception as e:
                data['status'] = 406
                data['message'] = str(e)

        return jsonify(data)

    # user repost/retweet one post
    # check auth(phonenum) firstly
    @app.route('/home/re_post', methods=['POST'])
    def re_post():
        data = {}
        ptime = request.form.get('ptime')
        pid = int(request.form.get('pid'))
        phonenum = request.form.get('phonenum')
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
            data['status'] = 400
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
                post = Post(image=origin_post.image,
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
                    data['message'] = str(e)

        return jsonify(data)

    ###########################################
    # like
    ###########################################
    # for each post, get the number of likes
    # check auth(phonenum) firstly
    @app.route('/home/get_likes', methods=['POST'])
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
            data['status'] = 400
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
                    lens = LikeTable.getcountbypid(LikeTable, pid=pid)
                    data['message'] = lens
                    data['status'] = 200
                except Exception as e:
                    data['status'] = 406
                    data['message'] = str(e)

        return jsonify(data)

    # user likes one post
    # check auth(phonenum) firstly
    @app.route('/home/like_post', methods=['POST'])
    def like_post():
        data = {}
        ltime = request.form.get('ltime')
        pid = int(request.form.get('pid'))
        phonenum = request.form.get('phonenum')
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
            data['status'] = 400
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
            elif LikeTable.getbypp(LikeTable, pid, phonenum):
                data['status'] = 400
                data['message'] = 'repeat liking is forbidden'
            else:
                like = LikeTable(ltime=ltime,
                                 pid=pid,
                                 phonenum=phonenum)
                try:
                    _ = LikeTable.add(LikeTable, like)
                    data['status'] = 200
                    data['message'] = 'liked successfully!'
                except Exception as e:
                    data['status'] = 406
                    data['message'] = str(e)

        return jsonify(data)

    # user unlikes one post
    # check auth(phonenum) firstly
    @app.route('/home/unlike_post', methods=['POST'])
    def unlike_post():
        data = {}
        # lid = int(request.form.get('lid'))
        pid = int(request.form.get('pid'))
        phonenum = request.form.get('phonenum')
        try:
            schema(
                {
                    "pid": pid,
                    "phonenum": phonenum
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            data['status'] = 400
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
                    # consider the inconvenience of obtaining the lid ...
                    # _ = LikeTable.delete(LikeTable, lid)
                    like = LikeTable.getbypp(LikeTable, pid, phonenum)
                    _ = LikeTable.delete(LikeTable, like.lid)
                    data['status'] = 200
                    data['message'] = 'unliked successfully!'
                except Exception as e:
                    data['status'] = 406
                    data['message'] = str(e)

        return jsonify(data)

    ###########################################
    # comment
    ###########################################
    # for each post, get comments
    # check auth(phonenum) firstly
    @app.route('/home/get_comments', methods=['POST'])
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
            data['status'] = 400
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
                except Exception as e:
                    data['status'] = 406
                    data['message'] = str(e)

        return jsonify(data)

    # user comments on one post
    # check auth(phonenum) firstly
    @app.route('/home/comment_post', methods=['POST'])
    def comment_post():
        data = {}
        content = request.form.get('content')
        ctime = request.form.get('ctime')
        pid = int(request.form.get('pid'))
        phonenum = request.form.get('phonenum')
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
            data['status'] = 400
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
                comment = CommentTable(content=content,
                                       ctime=ctime,
                                       pid=pid,
                                       phonenum=phonenum)
                try:
                    _ = CommentTable.add(CommentTable, comment)
                    data['status'] = 200
                    data['message'] = 'commented successfully!'
                except Exception as e:
                    data['status'] = 406
                    data['message'] = str(e)

        return jsonify(data)

    # user un-comments on one post
    # check auth(phonenum) firstly
    @app.route('/home/uncomment_post', methods=['POST'])
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
            data['status'] = 400
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
                    data['message'] = str(e)

        return jsonify(data)

    ###########################################
    # follow
    ###########################################
    # for each user, get followers -> the ones who are following you
    # check auth(phonenum==followee) firstly
    @app.route('/mine/get_followers', methods=['POST'])
    def get_followers():
        data = {}
        phonenum = request.form.get('phonenum')
        try:
            schema(
                {
                    "phonenum": phonenum
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            data['status'] = 400
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            try:
                followers = FollowTable.get_followers(FollowTable, followee=phonenum)
                res = list()
                for follower in followers:
                    # print(FollowTable.out(FollowTable, follower))
                    user = User.get(User, phonenum=follower.follower)
                    res.append(User.out(User, user))
                data['message'] = res
                data['status'] = 200
            except Exception as e:
                data['status'] = 406
                data['message'] = str(e)

        return jsonify(data)

    # for each user, get followees -> the ones you are following
    # check auth(phonenum) firstly
    @app.route('/mine/get_followees', methods=['POST'])
    def get_followees():
        data = {}
        phonenum = request.form.get('phonenum')
        try:
            schema(
                {
                    "phonenum": phonenum
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            data['status'] = 400
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            try:
                followees = FollowTable.get_followees(FollowTable, follower=phonenum)
                res = list()
                for followee in followees:
                    # print(FollowTable.out(FollowTable, followee))
                    user = User.get(User, phonenum=followee.followee)
                    res.append(User.out(User, user))
                data['message'] = res
                data['status'] = 200
            except Exception as e:
                data['status'] = 406
                data['message'] = str(e)

        return jsonify(data)

    # user follow another one
    # check auth(phonenum) firstly
    @app.route('/home/follow_user', methods=['POST'])
    def follow_user():
        data = {}
        ftime = request.form.get('ftime')
        phonenum = request.form.get('phonenum')
        followee = request.form.get('followee')
        try:
            schema(
                {
                    "ftime": ftime,
                    "phonenum": phonenum,
                    "followee": followee
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            data['status'] = 400
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            # check user secondly
            if User.get(User, followee) is None:
                data['status'] = 404
                data['message'] = "User {} doesn't exist".format(followee)
            elif phonenum == followee:
                data['status'] = 400
                data['message'] = 'self-following is forbidden'
            elif FollowTable.getbyff(FollowTable, phonenum, followee):
                data['status'] = 400
                data['message'] = 'repeat following is forbidden'
            else:
                follow = FollowTable(ftime=ftime,
                                     follower=phonenum,
                                     followee=followee)
                try:
                    _ = FollowTable.add(FollowTable, follow)
                    data['status'] = 200
                    data['message'] = 'followed successfully!'
                except Exception as e:
                    data['status'] = 406
                    data['message'] = str(e)

        return jsonify(data)

    # user un-follow another one
    # check auth(phonenum) firstly
    @app.route('/home/unfollow_user', methods=['POST'])
    def unfollow_user():
        data = {}
        # fid = int(request.form.get('fid'))
        phonenum = request.form.get('phonenum')
        followee = request.form.get('followee')
        try:
            schema(
                {
                    "phonenum": phonenum,
                    "followee": followee
                }
            )
            conforms_to_schema = True
        except MultipleInvalid as e:
            data['status'] = 400
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            # check follew thirdly
            try:
                # consider the inconvenience of obtaining the fid ...
                # _ = FollowTable.delete(FollowTable, fid)
                follow = FollowTable.getbyff(FollowTable, phonenum, followee)
                _ = FollowTable.delete(FollowTable, follow.fid)
                data['status'] = 200
                data['message'] = 'unfollowed successfully!'
            except Exception as e:
                data['status'] = 406
                data['message'] = str(e)

        return jsonify(data)

    ###########################################
    # rank
    ###########################################
    # for ranking list, get all posts by number of likes in last week
    @app.route('/home/get_posts_by_likes', methods=['POST'])
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
    @app.route('/home/get_posts_by_aes_score', methods=['POST'])
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
    @app.route('/discover/recommend_posts', methods=['POST'])
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
    @app.route('/discover/search', methods=['POST'])
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


    # for testing
    @app.route('/')
    def index():
        return jsonify({'message': 'test'})

    @app.route('/api/test', methods=['POST'])
    def test():
        phonenum = request.form.get('phonenum')
        print(request.form)
        print(phonenum)
        if phonenum == '18260071012':
            return jsonify({'message': 'success'})
        else:
            return jsonify({'message': 'fail'})