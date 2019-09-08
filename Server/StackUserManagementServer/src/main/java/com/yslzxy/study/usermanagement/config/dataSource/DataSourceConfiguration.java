package com.yslzxy.study.usermanagement.config.dataSource;

import com.mchange.v2.c3p0.ComboPooledDataSource;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.beans.PropertyVetoException;

/**
 * @author zhouxinyang
 * @description
 * @date 2019-07-04
 */
@Configuration
//自动扫描
@MapperScan("com.ddtc.springboot.mapper")
public class DataSourceConfiguration {
    @Value("${jdbc.driver}")
    private String jdbcDriver;
    @Value("${jdbc.url}")
    private String jdbcUrl;
    @Value("${jdbc.user}")
    private String jdbcUser;
    @Value("${jdbc.password}")
    private String jdbcPassword;

    @Bean(name = "dataSource")
    public ComboPooledDataSource createDataSource() throws PropertyVetoException {
        ComboPooledDataSource dataSource = new ComboPooledDataSource();
        dataSource.setDriverClass(jdbcDriver);
        dataSource.setJdbcUrl(jdbcUrl);
        dataSource.setUser(jdbcUser);
        dataSource.setPassword(jdbcPassword);
        dataSource.setMaxPoolSize(30);
        dataSource.setMinPoolSize(10);
        // 关闭连接后不自动commit
        dataSource.setAutoCommitOnClose(false);
        dataSource.setInitialPoolSize(20);//连接池启动时的初始值
        dataSource.setMaxPoolSize(50);//最大连接数
        dataSource.setMinPoolSize(10);//最小连接数
        dataSource.setMaxIdleTime(60);//最大空闲时间
        dataSource.setIdleConnectionTestPeriod(1800);//每1800秒检查一次连接池中的空闲连接;
        dataSource.setBreakAfterAcquireFailure(false);
        // 连接超时时间
        dataSource.setCheckoutTimeout(100000);
        // 连接失败重试次数
        dataSource.setAcquireRetryAttempts(2);
        return dataSource;
    }
}
