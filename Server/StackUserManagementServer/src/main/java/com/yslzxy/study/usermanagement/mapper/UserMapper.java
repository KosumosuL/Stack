package com.yslzxy.study.usermanagement.mapper;

import com.yslzxy.study.usermanagement.pojo.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by zhouxinyang on 2019/9/3
 */
@Mapper
public interface UserMapper {
    void addUser(User user);

    User getUserByToken(String token);
    User getUserByPhone(String phone);
    void updateUserToken(User user);
    boolean updateUser(User user);
}