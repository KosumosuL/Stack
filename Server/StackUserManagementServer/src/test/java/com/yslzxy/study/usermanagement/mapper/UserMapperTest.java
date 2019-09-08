package com.yslzxy.study.usermanagement.mapper;

import com.yslzxy.study.usermanagement.pojo.User;
import com.yslzxy.study.usermanagement.util.MD5Util;
import com.yslzxy.study.usermanagement.util.TokenUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

import static org.junit.Assert.*;

/**
 * Created by zhouxinyang on 2019/9/3
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserMapperTest {
    @Autowired
    private UserMapper userMapper;

    @Test
    public void addUser() {
        User user=new User();
        user.setPhoneNum("18260066551");
        user.setPassword("123");
        user.setPhoto("123");
        user.setBio("123");
        user.setEmail("123");
        user.setGender(1);
        user.setName("123");
        user.setToken("123");
        user.setUsername("123");
        user.setExtime(new Date());
        userMapper.addUser(user);
    }

    @Test
    public void getUserByToken() {

        User user =userMapper.getUserByToken("123");
        System.out.println(user.getExtime());
        System.out.println(user);
    }

    @Test
    public void updateUser() {
        User user=new User();
        user.setPhoneNum("18260066551");
        user.setPassword(MD5Util.MD5Encode("123","UTF-8"));
        String areaPasswd = MD5Util.MD5Encode("123", "UTF-8");
        System.out.println(areaPasswd);
        user.setPassword("202cb962ac59075b964b07152d234b70");
        user.setPhoto("123");
        user.setBio("123");
        user.setEmail("123");
        user.setGender(1);
        user.setName("123");
        user.setToken(TokenUtil.createToken("0"));
        user.setUsername("123");
        user.setExtime(new Date());
        userMapper.updateUserToken(user);
    }
    @Test
    public void test(){


        User user =userMapper.getUserByToken("082ec9ea7c17453995a78c57ccf48e83201909190");
        String token=TokenUtil.updateUserToken(userMapper,user);
        System.out.println(token);
    }
    @Test
    public void testGetUserByPhone(){
        User user=userMapper.getUserByPhone("182600665511");
        System.out.println(user);

    }
    @Test
    public void testUpdateUser(){
        User user=new User();
        user.setPhoneNum("18260066551");
        user.setPassword(MD5Util.MD5Encode("123","UTF-8"));
        String areaPasswd = MD5Util.MD5Encode("123", "UTF-8");
       // System.out.println(areaPasswd);
        user.setPassword(areaPasswd);
        user.setPhoto("123");
        user.setBio("123");
        user.setEmail("12345");
        user.setGender(1);
        user.setName("123");
        user.setToken(TokenUtil.createToken("0"));
        user.setUsername("123");
        user.setExtime(new Date());
        userMapper.updateUser(user);
    }

}