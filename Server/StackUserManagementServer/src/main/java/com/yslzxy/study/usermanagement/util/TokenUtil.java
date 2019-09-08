package com.yslzxy.study.usermanagement.util;
import com.yslzxy.study.usermanagement.mapper.UserMapper;
import com.yslzxy.study.usermanagement.pojo.User;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.UUID;

/**
 * Created by zhouxinyang on 2019/9/4
 */

public class TokenUtil {
    public static String updateUserToken(UserMapper userMapper, User user){
        String token = createToken("0");
        user.setToken(token);
        Date date=new Date();
        Calendar calendar=Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.DATE,1);
        user.setExtime(calendar.getTime());
        userMapper.updateUserToken(user);
        return token;
    }
    public static String createToken(String method) {
        String token = "";
        Date date = new Date();
        // 生成UUID
        UUID uuid = UUID.randomUUID();
        // 去掉UUID的"-"符号
        String[] s = uuid.toString().split("-");
        String uuidString = "";
        for (String string : s) {
            uuidString += string;
        }
        date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * 15);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        token = uuidString + sdf.format(date) + method;
        return token;
    }

}
