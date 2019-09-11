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
                    postdic['likes'] = LikeTable.get_count_by_pid(LikeTable, pid=post.pid)
                    postdic['isliked'] = True if LikeTable.get_by_pp(LikeTable, pid=post.pid, phonenum=phonenum) is not None else False
                    # current comment
                    postdic['comments'] = CommentTable.get_count_by_pid(CommentTable, pid=post.pid)
                    comment = CommentTable.get_selfcomment(CommentTable, pid=post.pid, phonenum=post.phonenum)
                    postdic['selfcomment'] = comment.content if comment is not None else ""
                    # current user info
                    usr = User.partly_out(User, User.get(User, post.phonenum))
                    postdic['user'] = usr
                    # content
                    images = Image.get_by_pid(Image, pid=post.pid)
                    imgs = list()
                    for image in images:
                        imgs.append(Image.out(Image, image))
                    postdic['images'] = imgs
                    res.append(postdic)
                data['message'] = res
                data['status'] = 200
            except Exception as e:
                data['status'] = 406
                data['message'] = str(e)

        return jsonify(data)

    @app.route('/user/get_user_info', methods=['POST'])
    def get_user_info():
        data = {}
        phonenum = request.form.get('phonenum')
        tar_phonenum = request.form.get('tar_phonenum')
        try:
            schema(
                {
                    "phonenum": phonenum,
                    "tar_phonenum": tar_phonenum
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
            if User.get(User, phonenum=tar_phonenum) is None:
                data['status'] = 404
                data['message'] = "User {} doesn't exist".format(tar_phonenum)
            try:
                userdict = User.out(User, User.get(User, phonenum=tar_phonenum))
                userdict['followers'] = FollowTable.get_count_of_followers(FollowTable, followee=tar_phonenum)
                userdict['following'] = FollowTable.get_count_of_followees(FollowTable, follower=tar_phonenum)
                if phonenum != tar_phonenum:
                    # follow status
                    userdict['followed'] = True if FollowTable.get_by_ff(FollowTable, phonenum,
                                                                        tar_phonenum) is not None else False
                userdict['posts'] = Post.get_posts(Post, phonenum=tar_phonenum)
                data['message'] = [userdict]
                data['status'] = 200
            except Exception as e:
                data['status'] = 406
                data['message'] = str(e)

        return jsonify(data)

    ###########################################
    # post
    ###########################################
    # for one user, get all posts
    # phonenum == tar_phonenum is allowed(mine page)
    # check auth(phonenum) firstly
    @app.route('/timeline/get_posts', methods=['POST'])
    def get_posts():
        data = {}
        phonenum = request.form.get('phonenum')         # logined user's phonenum
        tar_phonenum = request.form.get('tar_phonenum')     # target  user's
        time = request.form.get('time')                 # for refresh
        try:
            schema(
                {
                    "phonenum": phonenum,
                    "tar_phonenum": tar_phonenum,
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
            if User.get(User, tar_phonenum) is None:
                data['status'] = 404
                data['message'] = "User {} doesn't exist".format(tar_phonenum)
            else:
                try:
                    posts = Post.get_user_posts(Post, phonenum=tar_phonenum, time=time)
                    res = list()
                    for post in posts:
                        postdic = Post.out(Post, post)
                        # current like
                        postdic['likes'] = LikeTable.get_count_by_pid(LikeTable, pid=post.pid)
                        postdic['isliked'] = True if LikeTable.get_by_pp(LikeTable, pid=post.pid, phonenum=phonenum) is not None else False
                        # current comment
                        postdic['comments'] = CommentTable.get_count_by_pid(CommentTable, pid=post.pid)
                        comment = CommentTable.get_selfcomment(CommentTable, pid=post.pid, phonenum=post.phonenum)
                        postdic['selfcomment'] = comment.content if comment is not None else ""
                        # current user info
                        usr = User.partly_out(User, User.get(User, post.phonenum))
                        postdic['user'] = usr
                        # content
                        images = Image.get_by_pid(Image, pid=post.pid)
                        imgs = list()
                        for image in images:
                            imgs.append(Image.out(Image, image))
                        postdic['images'] = imgs
                        res.append(postdic)
                    data['message'] = res
                    data['status'] = 200
                except Exception as e:
                    data['status'] = 406
                    data['message'] = str(e)

        return jsonify(data)

    # in discover or rank page, when user click the image, this api is invoked
    @app.route('/post/get_one_post', methods=['POST'])
    def get_one_post():
        data = {}
        phonenum = request.form.get('phonenum')         # logined user's phonenum
        pid = int(request.form.get('pid'))
        try:
            schema(
                {
                    "phonenum": phonenum,
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
                try:
                    post = Post.get(Post, pid=pid)
                    postdic = Post.out(Post, post)
                    # current like
                    postdic['likes'] = LikeTable.get_count_by_pid(LikeTable, pid=pid)
                    postdic['isliked'] = True if LikeTable.get_by_pp(LikeTable, pid=pid, phonenum=phonenum) is not None else False
                    # current comment
                    postdic['comments'] = CommentTable.get_count_by_pid(CommentTable, pid=pid)
                    comment = CommentTable.get_selfcomment(CommentTable, pid=pid, phonenum=post.phonenum)
                    postdic['selfcomment'] = comment.content if comment is not None else ""
                    # current user info
                    usr = User.partly_out(User, User.get(User, post.phonenum))
                    postdic['user'] = usr
                    # content
                    images = Image.get_by_pid(Image, pid=pid)
                    imgs = list()
                    for image in images:
                        imgs.append(Image.out(Image, image))
                    postdic['images'] = imgs
                    data['message'] = [postdic]
                    data['status'] = 200
                except Exception as e:
                    data['status'] = 406
                    data['message'] = str(e)

        return jsonify(data)

    # to ensure the balance between about 10k likes and high score
    # when number of likes is small, to expand the influence of the aes_score
    # and when it is large(alpha*total user), to expand the affect of the likes
    #
    #                                       likes                comments
    # weight = (Aes_score - 50) + 40 * --------------- + 10 * --------------
    #                                   total * alpha          total * beta
    #
    # const alpha = 10%, beta = 50%
    # total = 100
    # user creates one post
    # check auth(phonenum) firstly
    @app.route('/post/create_post', methods=['POST'])
    def create_post():
        data = {}
        count = int(request.form.get('count'))
        ptime = request.form.get('ptime')
        phonenum = request.form.get('phonenum')
        try:
            schema(
                {
                    "count": count,
                    "ptime": ptime,
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

        # basic validation has passed
        if conforms_to_schema:
            images = list()
            _conforms_to_schema = True
            # count round validation to keep _conforms_to_schema true
            for idx in range(count):
                if _conforms_to_schema:
                    url = request.form.get('url_' + str(idx))
                    label = request.form.get('label_' + str(idx))
                    import decimal
                    aes_score = decimal.Decimal(request.form.get('aes_score_' + str(idx)))
                    try:
                        schema(
                            {
                                "url": url,
                                "label": label,
                                "aes_score": aes_score
                            }
                        )
                        images.append([url, label, aes_score])
                    except MultipleInvalid as e:
                        data['status'] = 400
                        _conforms_to_schema = False
                        if "expected" in e.msg:
                            data['message'] = e.path[0] + " is not in the correct format"
                        else:
                            data['message'] = e.msg + " for " + e.path[0]

            if _conforms_to_schema:
                post = Post(ptime=ptime,
                            phonenum=phonenum)
                try:
                    pid, _ = Post.add(Post, post)
                    for [url, label, aes_score] in images:
                        image = Image(url=url,
                                      label=label,
                                      aes_score=aes_score,
                                      weight=aes_score-50,
                                      pid=pid)
                        _ = Image.add(Image, image)
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
            # check post secondly
            if Post.get(Post, pid) is None:
                data['status'] = 404
                data['message'] = "Post {} doesn't exist".format(pid)
            else:
                # check post thirdly
                try:
                    _ = Post.delete(Post, pid)
                    _ = Image.delete_post(Image, pid)
                    # 还需删除所有包含的likes和comments
                    _ = LikeTable.delete_post(LikeTable, pid)
                    _ = CommentTable.delete_post(CommentTable, pid)
                    data['status'] = 200
                    data['message'] = 'deleted successfully!'
                except Exception as e:
                    data['status'] = 406
                    data['message'] = str(e)

        return jsonify(data)

    # for each post, get the number of likes
    # check auth(phonenum) firstly
    @app.route('/post/re_post', methods=['POST'])
    def re_post():
        data = {}
        pid = int(request.form.get('pid'))
        ptime = request.form.get('ptime')
        phonenum = request.form.get('phonenum')
        try:
            schema(
                {
                    "pid": pid,
                    "ptime": ptime,
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
                post = Post(ptime=ptime,
                            phonenum=phonenum)
                try:
                    new_pid, _ = Post.add(Post, post)
                    images = Image.get_by_pid(Image, pid)
                    for image in images:
                        new_image = Image(url=image.url,
                                          label=image.label,
                                          aes_score=image.aes_score,
                                          weight=image.weight,
                                          pid=new_pid)
                        _ = Image.add(Image, new_image)
                    data['message'] = 're-post successfully!'
                    data['status'] = 200
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
                    lens = LikeTable.get_count_by_pid(LikeTable, pid=pid)
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
            elif LikeTable.get_by_pp(LikeTable, pid, phonenum):
                data['status'] = 400
                data['message'] = 'repeat liking is forbidden'
            else:
                like = LikeTable(ltime=ltime,
                                 pid=pid,
                                 phonenum=phonenum)
                images = Image.get_by_pid(Image, pid)
                try:
                    _ = LikeTable.add(LikeTable, like)
                    for image in images:
                        image.weight += 4
                        _ = Image.update(Image, image)
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
            elif LikeTable.get_by_pp(LikeTable, pid, phonenum) is None:
                data['status'] = 400
                data['message'] = 'repeat unliking is forbidden'
            else:
                # check like thirdly
                try:
                    # consider the inconvenience of obtaining the lid ...
                    # _ = LikeTable.delete(LikeTable, lid)
                    like = LikeTable.get_by_pp(LikeTable, pid, phonenum)
                    _ = LikeTable.delete(LikeTable, like.lid)
                    images = Image.get_by_pid(Image, pid)
                    for image in images:
                        image.weight -= 4
                        _ = Image.update(Image, image)
                    data['status'] = 200
                    data['message'] = 'unliked successfully!'
                except Exception as e:
                    data['status'] = 406
                    data['message'] = str(e)

        return jsonify(data)

    ###########################################
    # comment
    ###########################################
    # for each post, get the number of comments
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
                    lens = CommentTable.get_count_by_pid(CommentTable, pid=pid)
                    data['message'] = lens
                    data['status'] = 200
                except Exception as e:
                    data['status'] = 406
                    data['message'] = str(e)

        return jsonify(data)

    # for each post, get comments
    # check auth(phonenum) firstly
    @app.route('/comment/get_all_comments', methods=['POST'])
    def get_all_comments():
        data = {}
        phonenum = request.form.get('phonenum')
        pid = int(request.form.get('pid'))
        try:
            schema(
                {
                    "phonenum": phonenum,
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
                    comments = CommentTable.get_by_pid(CommentTable, pid=pid)
                    res = list()
                    for comment in comments:
                        comdict = CommentTable.out(CommentTable, comment)
                        usr = User.partly_out(User, User.get(User, comment.phonenum))
                        comdict['isself'] = True if usr['phonenum'] == phonenum else False
                        comdict['user'] = usr
                        res.append(comdict)
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
                images = Image.get_by_pid(Image, pid)
                try:
                    _ = CommentTable.add(CommentTable, comment)
                    for image in images:
                        image.weight += 1
                        _ = Image.update(Image, image)
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
            elif CommentTable.get(CommentTable, cid) is None:
                data['status'] = 400
                data['message'] = 'repeat uncommenting is forbidden'
            else:
                # check comment thirdly
                try:
                    _ = CommentTable.delete(CommentTable, cid)
                    images = Image.get_by_pid(Image, pid)
                    for image in images:
                        image.weight -= 1
                        _ = Image.update(Image, image)
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
            if User.get(User, phonenum) is None:
                data['status'] = 404
                data['message'] = "User {} doesn't exist".format(phonenum)
            else:
                try:
                    lens = FollowTable.get_count_of_followers(FollowTable, followee=phonenum)
                    data['message'] = lens
                    data['status'] = 200
                except Exception as e:
                    data['status'] = 406
                    data['message'] = str(e)

        return jsonify(data)

    @app.route('/follow/get_all_followers', methods=['POST'])
    def get_all_followers():
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
            if User.get(User, phonenum) is None:
                data['status'] = 404
                data['message'] = "User {} doesn't exist".format(phonenum)
            else:
                try:
                    followers = FollowTable.get_followers(FollowTable, followee=phonenum)
                    res = list()
                    for follower in followers:
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
            if User.get(User, phonenum) is None:
                data['status'] = 404
                data['message'] = "User {} doesn't exist".format(phonenum)
            else:
                try:
                    lens = FollowTable.get_count_of_followees(FollowTable, follower=phonenum)
                    data['message'] = lens
                    data['status'] = 200
                except Exception as e:
                    data['status'] = 406
                    data['message'] = str(e)

        return jsonify(data)

    @app.route('/follow/get_all_followees', methods=['POST'])
    def get_all_followees():
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
            if User.get(User, phonenum) is None:
                data['status'] = 404
                data['message'] = "User {} doesn't exist".format(phonenum)
            else:
                try:
                    followees = FollowTable.get_followees(FollowTable, follower=phonenum)
                    res = list()
                    for followee in followees:
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
            elif FollowTable.get_by_ff(FollowTable, phonenum, followee):
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
            if User.get(User, followee) is None:
                data['status'] = 404
                data['message'] = "User {} doesn't exist".format(followee)
            elif phonenum == followee:
                data['status'] = 400
                data['message'] = 'self-unfollowing is forbidden'
            elif FollowTable.get_by_ff(FollowTable, phonenum, followee) is None:
                data['status'] = 400
                data['message'] = 'repeat unfollowing is forbidden'
            else:
                try:
                    # consider the inconvenience of obtaining the fid ...
                    # _ = FollowTable.delete(FollowTable, fid)
                    follow = FollowTable.get_by_ff(FollowTable, phonenum, followee)
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
                images = Image.get_by_weight(Image, start=pre, end=cur)
                res = list()
                for image in images:
                    imgdic = Image.out(Image, image)
                    post = Post.get(Post, image.pid)
                    imgdic['likes'] = LikeTable.get_count_by_pid(LikeTable, pid=post.pid)
                    imgdic['isliked'] = True if LikeTable.get_by_pp(LikeTable, pid=post.pid,
                                                                   phonenum=phonenum) is not None else False
                    usr = User.partly_out(User, User.get(User, post.phonenum))
                    imgdic['user'] = usr
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
    @app.route('/recommend/recommend_images', methods=['POST'])
    def recommend_images():
        data = {}
        phonenum = request.form.get('phonenum')
        # token = request.form.get('token')
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
                images = Image.get_recommended(Image)
                # import random
                # random.shuffle(images)
                res = list()
                for image in images:
                    res.append(Image.out(Image, image))
                data['message'] = res
                data['status'] = 200
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
                            res[u.phonenum] = 1
                        res[u.phonenum] += 1

                res = sorted(res.items(), key=lambda x: x[1], reverse=True)
                from Stack.config import U_RECOMMEND_LIMIT
                count = 0
                ans = list()
                for pn, cnt in res:
                    if pn != phonenum and FollowTable.get_by_ff(FollowTable, phonenum, pn) is None:
                        userdict = User.out(User, User.get(User, phonenum=pn))
                        userdict['count'] = cnt
                        ans.append(userdict)
                        count += 1
                    if count >= U_RECOMMEND_LIMIT:
                        break
                data['message'] = ans
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
                posts = Post.get_all_posts(Post, phonenum)
                res = dict()
                for post in posts:
                    images = Image.get_by_pid(Image, post.pid)
                    for image in images:
                        labels = image.label.split()
                        for label in labels:
                            if label not in res:
                                res[label] = 1
                            res[label] += 1

                res = sorted(res.items(), key=lambda x: x[1], reverse=True)
                from Stack.config import L_RECOMMEND_LIMIT
                count = 0
                ans = list()
                for label, cnt in res:
                    if label != '其它':
                        images = Image.search(Image, keyword=label)
                        for image in images:
                            if Post.get_by_pp(Post, image.pid, phonenum) is None:
                                ans.append(Image.out(Image, image))
                                count += 1
                    if count >= L_RECOMMEND_LIMIT:
                        break
                data['message'] = ans
                data['status'] = 200
            except Exception as e:
                data['status'] = 406
                data['message'] = str(e)

        return jsonify(data)

    ###########################################
    # search
    ###########################################
    # search posts in discover page
    @app.route('/discover/search_user', methods=['POST'])
    def search_user():
        data = {}
        keyword = request.form.get('keyword')
        phonenum = request.form.get('phonenum')
        try:
            schema(
                {
                    "keyword": keyword,
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
                userlist = list()
                users = User.search(User, keyword=keyword)
                for user in users:
                    if user.phonenum != phonenum:
                        userlist.append(User.out(User, user))
                data['message'] = userlist
                data['status'] = 200
            except Exception as e:
                data['status'] = 406
                data['message'] = str(e)

        return jsonify(data)

    @app.route('/discover/search_label', methods=['POST'])
    def search_label():
        data = {}
        keyword = request.form.get('keyword')
        phonenum = request.form.get('phonenum')
        try:
            schema(
                {
                    "keyword": keyword,
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
                labellist = list()
                images = Image.search(Image, keyword=keyword)
                for image in images:
                    # if Post.get_by_pp(Post, image.pid, phonenum) is None:
                    labellist.append(Image.out(Image, image))
                data['message'] = labellist
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