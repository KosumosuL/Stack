import time, datetime

# 时间有三种展现方式：时间戳，时间元组，格式化的时间
# print(time.time())  # 当前时间戳
# print(int(time.time()))
# now = time.strftime('%Y-%m-%d %H:%M:%S')
# print(now)  # 格式化的时间
# delta = datetime.timedelta(days=7)
# print((time-delta).strftime('%Y-%m-%d %H:%M:%S'))
# print(time.strftime('%Y-%m-%d'))
# print(time.strftime('%H:%M:%S'))
# print(time.gmtime())  # 获取标准时区的时间元组，如果传入了时间戳，就是把时间戳转换成时间元组
# print(time.gmtime(1516194265))

# from voluptuous import *
#
# schema = Schema({'time': lambda v: datetime.datetime.strptime(v, '%Y-%m-%d %H:%M:%S')})
# t = '2019-09-01 14:46:47'
# print(t)
# print(type(t))
# data = {'time': t}
# print(schema(data))

now = datetime.datetime.now()
print(now.strftime('%Y-%m-%d %H:%M:%S'))
delta = datetime.timedelta(days=7)
print((now-delta).strftime('%Y-%m-%d %H:%M:%S'))

t = datetime.datetime.strptime('2019-09-01 15:24:07', '%Y-%m-%d %H:%M:%S')
print(t)
print(t<now)
print(t>now-delta)

a = dict()
a[1]=4
a[2]=1
a[3]=9
print(a)
a=sorted(a.items(),key = lambda x:x[1],reverse = True)
print(a)

print(10/75)