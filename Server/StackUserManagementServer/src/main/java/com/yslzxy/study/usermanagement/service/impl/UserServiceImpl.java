package com.yslzxy.study.usermanagement.service.impl;

import com.yslzxy.study.usermanagement.mapper.UserMapper;
import com.yslzxy.study.usermanagement.pojo.User;
import com.yslzxy.study.usermanagement.service.UserService;
import com.yslzxy.study.usermanagement.util.TokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by zhouxinyang on 2019/9/4
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;


        @Override
       public String login(User user){
            String  token=null;
            User user1=userMapper.getUserByPhone(user.getPhoneNum());
            if(user1==null){
                return "无此用户";
            }
            if(user1.getPassword().equals(user.getPassword())){
               token = TokenUtil.updateUserToken(
                        userMapper, user1);
            }else{
                token="密码错误";
            }
            return token;
        }
        @Override
        public String signIn(User user){
            System.out.println(user.getPhoneNum());
           User user1=userMapper.getUserByPhone(user.getPhoneNum());
           if(user1==null){
             //  System.out.println(user);
               String token = TokenUtil.updateUserToken(
                       userMapper, user);
               userMapper.addUser(user);

               return token;
           }else{
               return "该用户已被注册";
           }
        }
        @Override
        public User getUserInfo(String phoneNum){
            return userMapper.getUserByPhone(phoneNum);
        }
        @Override
        public String updateUserInfo(User user){
            if(userMapper.getUserByPhone(user.getPhoneNum())==null){
                return "无此用户";
            }
            else{
                userMapper.updateUser(user);
                String token=TokenUtil.updateUserToken(userMapper,user);
                return token;
            }
        }


}
