package com.yslzxy.study.usermanagement.controller;

import com.alibaba.fastjson.JSON;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by zhouxinyang on 2019/9/2
 */
@Controller
public class TestController {

    @RequestMapping(value = "/testController", method = RequestMethod.GET)
    public void test(HttpServletRequest request,
                       HttpServletResponse response){
        try {
            response.setHeader("Content-type", "text/html;charset=UTF-8");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().println(JSON.toJSONString("123"));
            response.getWriter().flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
