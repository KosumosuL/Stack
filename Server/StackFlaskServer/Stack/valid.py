from voluptuous import *

schema = Schema({
    'pid': int,
    'lid': int,
    'cid': int,
    'fid': int,
    'period': int,
    'count': int,
    'url': str,
    'content': str,
    'token': str,
    'label': str,
    'keyword': str,
    'ptime': lambda v: datetime.datetime.strptime(v, '%Y-%m-%d %H:%M:%S'),
    'ltime': lambda v: datetime.datetime.strptime(v, '%Y-%m-%d %H:%M:%S'),
    'ctime': lambda v: datetime.datetime.strptime(v, '%Y-%m-%d %H:%M:%S'),
    'ftime': lambda v: datetime.datetime.strptime(v, '%Y-%m-%d %H:%M:%S'),
    'isre': Boolean,
    'aes_score': Decimal,
    'phonenum': All(str, Length(min=11, max=11)),
    'tar_phonenum': All(str, Length(min=11, max=11)),
    'follower': All(str, Length(min=11, max=11)),
    'followee': All(str, Length(min=11, max=11))
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