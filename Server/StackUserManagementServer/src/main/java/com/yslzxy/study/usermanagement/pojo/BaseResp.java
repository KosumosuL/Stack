package com.yslzxy.study.usermanagement.pojo;

/**
 * Created by zhouxinyang on 2019/9/7
 */
public class BaseResp {
    private String errNo;
    private String errMessage;
    private String token;
    private String permission;

    public String getErrNo() {
        return errNo;
    }

    public void setErrNo(String errNo) {
        this.errNo = errNo;
    }

    public String getErrMessage() {
        return errMessage;
    }

    public void setErrMessage(String errMessage) {
        this.errMessage = errMessage;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getPermission() {
        return permission;
    }

    public void setPermission(String permission) {
        this.permission = permission;
    }
}
