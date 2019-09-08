package com.yslzxy.study.usermanagement.controller;

import com.alibaba.fastjson.JSON;
import com.yslzxy.study.usermanagement.mapper.UserMapper;
import com.yslzxy.study.usermanagement.pojo.BaseResp;
import com.yslzxy.study.usermanagement.pojo.User;
import com.yslzxy.study.usermanagement.pojo.resp.UserResp;
import com.yslzxy.study.usermanagement.service.UserService;
import com.yslzxy.study.usermanagement.util.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by zhouxinyang on 2019/9/4
 */
@Controller
public class UserController {
    @Autowired
    public UserService userService;


    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public void login(HttpServletRequest request, HttpServletResponse response) {
        String phoneNum=request.getParameter("phoneNum");
        String password=request.getParameter("password");

        User user=new User();
        user.setPhoneNum(phoneNum);
        user.setPassword(MD5Util.MD5Encode(password,"UTF-8"));
        String token=userService.login(user);
        BaseResp baseResp=new BaseResp();
        if(token.equals("无此用户")){
            try {
                response.setHeader("Content-type", "text/html;charset=UTF-8");
                response.setCharacterEncoding("UTF-8");
                baseResp.setErrNo("404");
                baseResp.setErrMessage("无此用户");
                response.getWriter().println(JSON.toJSONString(baseResp));
                response.getWriter().flush();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }else if(token.equals("密码错误")){
            try {
                response.setHeader("Content-type", "text/html;charset=UTF-8");
                response.setCharacterEncoding("UTF-8");
                baseResp.setErrNo("404");
                baseResp.setErrMessage("密码错误");
                response.getWriter().println(JSON.toJSONString(baseResp));
                response.getWriter().flush();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }else{
            try {
                response.setHeader("Content-type", "text/html;charset=UTF-8");
                response.setCharacterEncoding("UTF-8");
                baseResp.setErrNo("200");
                baseResp.setErrMessage("登录成功");
                baseResp.setToken(token);
                response.getWriter().println(JSON.toJSONString(baseResp));
                response.getWriter().flush();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }
    @RequestMapping(value = "/signin",method = RequestMethod.POST)
    public void signin(HttpServletRequest request, HttpServletResponse response){
        String phoneNum=request.getParameter("phoneNum");
        String password=request.getParameter("password");
        String email=request.getParameter("email");
        String name=request.getParameter("name");
        int gender=Integer.valueOf(request.getParameter("gender"));
        String username=request.getParameter("username");
        String bio=request.getParameter("bio");
        String photo=request.getParameter("photo");
        User user =new User();
        user.setPhoneNum(phoneNum);
        user.setPassword(MD5Util.MD5Encode(password,"UTF-8"));
        user.setName(name);
        user.setGender(gender);
        user.setUsername(username);
        user.setEmail(email);
        user.setBio(bio);
        user.setPhoto(photo);
        BaseResp baseResp=new BaseResp();
        String token=userService.signIn(user);
        if(token.equals("该用户已被注册")){
            try {
                response.setHeader("Content-type", "text/html;charset=UTF-8");
                response.setCharacterEncoding("UTF-8");
                baseResp.setErrNo("500");
                baseResp.setErrMessage("该用户已被注册");
                response.getWriter().println(JSON.toJSONString(baseResp));
                response.getWriter().flush();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }else{
            try {
                response.setHeader("Content-type", "text/html;charset=UTF-8");
                response.setCharacterEncoding("UTF-8");
                baseResp.setErrNo("200");
                baseResp.setErrMessage("注册成功");
                baseResp.setToken(token);
                response.getWriter().println(JSON.toJSONString(baseResp));
                response.getWriter().flush();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }
    @RequestMapping(value = "/getUserInfo",method = RequestMethod.POST)
    public void getUserInfo(HttpServletRequest request, HttpServletResponse response){

        String phoneNum=request.getParameter("phoneNum");
        User user=userService.getUserInfo(phoneNum);
        UserResp userResp=new UserResp();
        try {
            response.setHeader("Content-type", "text/html;charset=UTF-8");
            response.setCharacterEncoding("UTF-8");
            userResp.setErrNo("200");
            userResp.setErrMessage("成功");
            userResp.setToken(user.getToken());
            userResp.setUser(user);
            response.getWriter().println(JSON.toJSONString(userResp));
            response.getWriter().flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/updateUserInfo",method = RequestMethod.POST)
    public void updateUserInfo(HttpServletRequest request, HttpServletResponse response){
        String phoneNum=request.getParameter("phoneNum");
        String password=request.getParameter("password");
        String email=request.getParameter("email");
        String name=request.getParameter("name");
        int gender=Integer.valueOf(request.getParameter("gender"));
        String username=request.getParameter("username");
        String bio=request.getParameter("bio");
        String photo=request.getParameter("photo");
        User user =new User();
        user.setPhoneNum(phoneNum);
        user.setPassword(MD5Util.MD5Encode(password,"UTF-8"));
        user.setName(name);
        user.setGender(gender);
        user.setUsername(username);
        user.setEmail(email);
        user.setBio(bio);
        user.setPhoto(photo);


        BaseResp baseResp=new BaseResp();
        String token= userService.updateUserInfo(user);
        if(token.equals("无此用户")){
            try {
                response.setHeader("Content-type", "text/html;charset=UTF-8");
                response.setCharacterEncoding("UTF-8");
                baseResp.setErrNo("404");
                baseResp.setErrMessage("无此用户");
                response.getWriter().println(JSON.toJSONString(baseResp));
                response.getWriter().flush();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }else{
            try {
                response.setHeader("Content-type", "text/html;charset=UTF-8");
                response.setCharacterEncoding("UTF-8");
                baseResp.setErrNo("200");
                baseResp.setErrMessage("修改成功");
                baseResp.setToken(token);
                response.getWriter().println(JSON.toJSONString(baseResp));
                response.getWriter().flush();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

}
