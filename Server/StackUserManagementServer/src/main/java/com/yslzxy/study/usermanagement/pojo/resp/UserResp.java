package com.yslzxy.study.usermanagement.pojo.resp;

import com.yslzxy.study.usermanagement.pojo.BaseResp;
import com.yslzxy.study.usermanagement.pojo.User;

/**
 * Created by zhouxinyang on 2019/9/8
 */
public class UserResp extends BaseResp {
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
