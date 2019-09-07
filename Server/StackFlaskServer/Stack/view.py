from flask import jsonify, request
from Stack.model import *
from Stack.valid import *
import datetime


def init_api(app):

    # home page
    # show all the posts
    @app.route('/timeline/fresh', methods=['POST'])
    def fresh():
        data = {}
        phonenum = request.form.get('phonenum')
        time = request.form.get('time')
        try:
            schema(
                {
                    "phonenum": phonenum,
                    "ptime": time
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
                posts = Post.get_followees_posts(Post, phonenum=phonenum, time=time)
                res = list()
                for post in posts:
                    postdic = Post.out(Post, post)
                    # current like
                    postdic['likes'] = LikeTable.getcountbypid(LikeTable, pid=post.pid)
                    postdic['isliked'] = True if LikeTable.getbypp(LikeTable, pid=post.pid, phonenum=phonenum) is not None else False
                    # current comment
                    postdic['comments'] = CommentTable.getcountbypid(CommentTable, pid=post.pid)
                    comment = CommentTable.getselfcomment(CommentTable, pid=post.pid, phonenum=post.phonenum)
                    postdic['selfcomment'] = comment.content if comment is not None else ""
                    # current user info
                    usr = User.partly_out(User, User.get(User, post.phonenum))
                    postdic['cur_user'] = usr
                    if post.isre == 0:
                        # content
                        images = Image.getbypid(Image, pid=post.pid)
                        imgs = list()
                        for image in images:
                            imgs.append(Image.out(Image, image))
                        postdic['images'] = imgs
                    else:
                        # origin content
                        images = Image.getbypid(Image, pid=post.isre)
                        imgs = list()
                        for image in images:
                            imgs.append(Image.out(Image, image))
                        postdic['images'] = imgs
                        # origin user info
                        or_usr = User.partly_out(User, User.get(User, Post.get(Post, post.isre)))
                        postdic['ori_user'] = or_usr
                    res.append(postdic)
                data['message'] = res
                data['status'] = 200
            except Exception as e:
                data['status'] = 406
                data['message'] = str(e)

        return jsonify(data)

    ###########################################
    # post
    ###########################################
    # for each user, get all posts
    # check auth(phonenum) firstly
    @app.route('/post/get_posts', methods=['POST'])
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

    # (aes_score-50)+likes*0.005
    # to ensure the balance between about 10k likes and high score
    # when number of likes is small, to expand the influence of the aes_score
    # and when it is large(>10k), to expand the affect of the likes
    # (100-50) == 10k*0.005 == 50
    # user creates one post
    # check auth(phonenum) firstly
    @app.route('/post/create_post', methods=['POST'])
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
            post = Post(ptime=ptime,
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
    @app.route('/post/delete_post', methods=['POST'])
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
                _ = Image.delete_post(Image, pid)
                _ = LikeTable.delete_post(LikeTable, pid)
                _ = CommentTable.delete_post(CommentTable, pid)
                data['status'] = 200
                data['message'] = 'deleted successfully!'
            except Exception as e:
                data['status'] = 406
                data['message'] = str(e)

        return jsonify(data)

    # user repost/retweet one post
    # check auth(phonenum) firstly
    @app.route('/post/re_post', methods=['POST'])
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
                post = Post(ptime=ptime,
                            phonenum=phonenum,
                            isre=pid)
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
    @app.route('/like/get_likes', methods=['POST'])
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
    @app.route('/like/like_post', methods=['POST'])
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
    @app.route('/like/unlike_post', methods=['POST'])
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
    @app.route('/comment/get_comments', methods=['POST'])
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
    @app.route('/comment/comment_post', methods=['POST'])
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
    @app.route('/comment/uncomment_post', methods=['POST'])
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
    @app.route('/follow/get_followers', methods=['POST'])
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
    @app.route('/follow/get_followees', methods=['POST'])
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
    @app.route('/follow/follow_user', methods=['POST'])
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
    @app.route('/follow/unfollow_user', methods=['POST'])
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
    @app.route('/rank/get_rank', methods=['POST'])
    def get_rank():
        data = {}
        phonenum = request.form.get('phonenum')
        period = int(request.form.get('period'))
        cur = request.form.get('time')
        try:
            schema(
                {
                    "phonenum": phonenum,
                    "ptime": cur,
                    "period": period
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

        delta = datetime.timedelta(days=period)
        cur = datetime.datetime.strptime(cur, "%Y-%m-%d %H:%M:%S")
        pre = cur - delta

        if conforms_to_schema:
            try:
                images = Image.get_by_score(Image, start=pre, end=cur)
                res = list()
                for image in images:
                    imgdic = Image.out(Image, image)
                    post = Post.get(Post, image.pid)
                    imgdic['likes'] = LikeTable.getcountbypid(LikeTable, pid=post.pid)
                    imgdic['isliked'] = True if LikeTable.getbypp(LikeTable, pid=post.pid,
                                                                   phonenum=phonenum) is not None else False
                    usr = User.partly_out(User, User.get(User, post.phonenum))
                    imgdic['cur_user'] = usr
                    res.append(imgdic)
                data['message'] = res
                data['status'] = 200
            except Exception as e:
                data['status'] = 406
                data['message'] = str(e)

        return jsonify(data)

    ###########################################
    # recommend
    ###########################################
    # recommend posts in discover page
    @app.route('/recommend/recommend_posts', methods=['POST'])
    def recommend_posts():
        data = {}
        phonenum = request.form.get('phonenum')
        token = request.form.get('token')
        try:
            schema(
                {
                    "phonenum": phonenum,
                    "token": token
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
                data['message'] = str(e)

        return jsonify(data)

    # # for each user, recommend some users for u
    # # check auth(phonenum) firstly
    @app.route('/recommend/recommend_users', methods=['POST'])
    def recommend_users():
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
                res = dict()
                for followee in followees:
                    # print(FollowTable.out(FollowTable, followee))
                    user = User.get(User, phonenum=followee.followee)
                    fs = FollowTable.get_followees(FollowTable, follower=user.phonenum)
                    for f in fs:
                        u = User.get(User, phonenum=f.followee)
                        if u.phonenum not in res:
                            res[u.phonenum] = list()
                        res[u.phonenum].append(user)
                    res.append(User.out(User, user))
                data['message'] = res
                data['status'] = 200
            except Exception as e:
                data['status'] = 406
                data['message'] = str(e)

        return jsonify(data)

    # # for each user, recommend some users for u
    # # check auth(phonenum) firstly
    @app.route('/recommend/recommend_labels', methods=['POST'])
    def recommend_labels():
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
                res = dict()
                for followee in followees:
                    # print(FollowTable.out(FollowTable, followee))
                    user = User.get(User, phonenum=followee.followee)
                    fs = FollowTable.get_followees(FollowTable, follower=user.phonenum)
                    for f in fs:
                        u = User.get(User, phonenum=f.followee)
                        if u.phonenum not in res:
                            res[u.phonenum] = list()
                        res[u.phonenum].append(user)
                    res.append(User.out(User, user))
                data['message'] = res
                data['status'] = 200
            except Exception as e:
                data['status'] = 406
                data['message'] = str(e)

        return jsonify(data)


    ###########################################
    # search
    ###########################################
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
            data['status'] = 400
            conforms_to_schema = False
            if "expected" in e.msg:
                data['message'] = e.path[0] + " is not in the correct format"
            else:
                data['message'] = e.msg + " for " + e.path[0]

        if conforms_to_schema:
            try:
                posts = Post.getbylabel_fuzzy(Post, keyword=keyword)
                res = list()
                for post in posts:
                    res.append(Post.out(Post, post))
                data['message'] = res
                data['status'] = 200
            except Exception as e:
                data['status'] = 406
                data['message'] = str(e)

        return jsonify(data)


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