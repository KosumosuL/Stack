import time, datetime

# 时间有三种展现方式：时间戳，时间元组，格式化的时间
print(time.time())  # 当前时间戳
print(int(time.time()))
print(time.strftime('%Y-%m-%d %H:%M:%S'))  # 格式化的时间
print(time.strftime('%Y-%m-%d'))
print(time.strftime('%H:%M:%S'))
print(time.gmtime())  # 获取标准时区的时间元组，如果传入了时间戳，就是把时间戳转换成时间元组
print(time.gmtime(1516194265))

# from voluptuous import *
#
# schema = Schema({'time': lambda v: datetime.datetime.strptime(v, '%Y-%m-%d %H:%M:%S')})
# t = '2019-09-01 14:46:47'
# print(t)
# print(type(t))
# data = {'time': t}
# print(schema(data))