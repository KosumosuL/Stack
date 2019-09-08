package com.yslzxy.study.usermanagement.service.impl;

import com.yslzxy.study.usermanagement.pojo.User;
import com.yslzxy.study.usermanagement.service.UserService;
import com.yslzxy.study.usermanagement.util.MD5Util;
import com.yslzxy.study.usermanagement.util.TokenUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Calendar;
import java.util.Date;

import static org.junit.Assert.*;

/**
 * Created by zhouxinyang on 2019/9/4
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceImplTest {
    @Autowired
    private UserServiceImpl userServiceImpl;
    @Test
    public void login() {
        User user=new User();
        user.setPhoneNum("18260066551");
        user.setPassword("123");
        System.out.println(userServiceImpl.login(user));


    }

    @Test
    public void signIn() {
        User user=new User();
        user.setPhoneNum("18865167158");
        user.setPassword(MD5Util.MD5Encode("123","UTF-8"));
        user.setPhoto("123");
        user.setBio("123");
        user.setEmail("123");
        user.setGender(1);
        user.setName("123");
        user.setToken(TokenUtil.createToken("0"));
        user.setUsername("123");
        Date date=new Date();
        Calendar calendar=Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.DATE,1);
        user.setExtime(calendar.getTime());
        System.out.println(userServiceImpl.signIn(user));

    }
    @Test
    public void testA(){
        User user=new User();
        user.setPhoneNum("18260066551");
        user.setPassword(MD5Util.MD5Encode("123","UTF-8"));
        String areaPasswd = MD5Util.MD5Encode("12345", "UTF-8");
        // System.out.println(areaPasswd);
        user.setPassword(areaPasswd);
        user.setPhoto("123");
        user.setBio("123");
        user.setEmail("12345");
        user.setGender(1);
        user.setName("321");
        user.setToken(TokenUtil.createToken("0"));
        user.setUsername("123");
    //    user.setExtime(new Date());
        userServiceImpl.updateUserInfo(user);
    }
}