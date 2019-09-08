package com.yslzxy.study.usermanagement.service;

import com.yslzxy.study.usermanagement.pojo.User;

/**
 * Created by zhouxinyang on 2019/9/4
 */
public interface UserService {
     String login(User user);
     String signIn(User user);
     User getUserInfo(String phoneNum);
     String updateUserInfo(User user);
}
