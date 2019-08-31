from voluptuous import *

schema = Schema({
    Required('pid'): All(int, Length(min=5, max=5)),
    Required('lid'): All(int, Length(min=5, max=5)),
    Required('cid'): All(int, Length(min=5, max=5)),
    Required('fid'): All(int, Length(min=5, max=5)),
    Required('image'): str,
    Required('content'): str,
    Required('label'): str,
    Required('keyword'): str,
    Required('ptime'): Datetime,
    Required('ltime'): Datetime,
    Required('ctime'): Datetime,
    Required('isre'): Boolean,
    Required('aes_score'): Decimal,
    Required('phonenum'): All(int, Length(min=11, max=11)),
    Required('follower'): All(int, Length(min=11, max=11)),
    Required('followee'): All(int, Length(min=11, max=11))
})

# like_schema = Schema({
#     Required('lid'): All(int, Length(min=5, max=5)),
#     Required('ltime'): Datetime,
#     Required('pid'): All(int, Length(min=5, max=5)),
#     Required('phonenum'): All(int, Length(min=11, max=11))
# })
#
# comment_schema = Schema({
#     Required('cid'): All(int, Length(min=5, max=5)),
#     Required('content'): str,
#     Required('ctime'): Datetime,
#     Required('pid'): All(int, Length(min=5, max=5)),
#     Required('phonenum'): All(int, Length(min=11, max=11))
# })
#
# follow_schema = Schema({
#     Required('fid'): All(int, Length(min=5, max=5)),
#     Required('follower'): All(int, Length(min=11, max=11)),
#     Required('followee'): All(int, Length(min=11, max=11))
# })