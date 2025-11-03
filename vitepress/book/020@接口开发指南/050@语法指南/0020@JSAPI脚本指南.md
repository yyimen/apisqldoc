# JS API 脚本编写指南

本文将演示如何快速编写JS脚本

## 全局方法

类型定义, 为了快速开发API, 请仔细阅读下文
`ctx` 对象包含了接口运行的相关信息
`ctx.gm` 对象提供了一些常用方法及常用的JS库
`ctx.dsHelper` 对象提供了操作当前网关下数据源的接口

```ts
/**
 * Type definitions for apisql
 * js context
 * @version 3.0.1
 * @description js类api
 * @date: 2025-01-02
 */

/// <reference types="node" />

/**
 * js类api 执行自定义脚本的上下文
 * @description 全局变量 ctx ,
 *
 */
declare let ctx: JsApi.Context;

declare namespace JsApi {
    export interface Context {
        /**
         * 数据源接口
         */
        dsHelper: DataSourceHelper;

        /**
         * 接口信息
         */
        apiInfo: ApiInfo;

        /**
         * 扩展数据
         */
        options: Options;
        /**
         * 此次http请求的参数
         */
        request: RequestOpts;

        /**
         * 将要返回的数据赋值到此变量,即可返回
         * 前置脚本:此值未空,中若赋值,则立即返回此值(SQL与后置都不会执行)
         * 后置脚本:此值是SQL的执行结果,可以对数据进一步处理后再次赋值到此属性
         */
        resultObj: ResultObj;
        /**
         * gm 对象提供了一些常用方法及JS库
         */
        gm: GlobalMethods;
    }

    export type RequestOpts = {
        method: string;
        /**
         * @example {"Accept":["application/json, text/plain"],"Accept-Encoding":["gzip, deflate"]}
         *
         */
        header: Record<string, any>;
        /**
         * 编码后的 query values, 不含 '?'
         * @example 'foo=bar&#x26;abc=xyz&#x26;abc=123'
         */
        rawQuery: string;
        requestURI: string;
        /**
         *
         * 解析了 'rawQuery' ,方便使用
         * 详见 querystring.parse()
         *
         * For example, the query string 'foo=bar&#x26;abc=xyz&#x26;abc=123' is parsed into:
         * @example {foo: 'bar',abc: ['xyz', '123']}
         */
        query: Record<string, string | string[]>;
        /**
         * request body
         * 只支持 "application/json;charset=UTF-8"
         */
        body: Record<string, any>;
    };

    export type Options = {
        /**
         * 当前接口执行环境,是不是开发环境,默认 false
         */
        isDev: boolean;
        /**
         * 此次请求的 超时时间,单位毫秒
         */
        timeout: number;
    };

    /**
     * 接口信息
     */
    export type ApiInfo = {
        /**
         * @description 在 API 中编写的sql脚本
         */
        content: string;
    };

    export type ResultObj = {
        /**
         * 执行异常信息, 支持自定义Http返回错误信息
         * @example err="执行失败" ==> httpResponseStatusCode:500,httpResponseBody:{message:"执行失败"}
         * @example err={status:401,message:'认证失败'} =+> httpResponseStatusCode:401,httpResponseBody:{message:"认证失败"}
         */
        err?:
            | string
            | {
                  status: number; //default 500
                  message: string;
              };
        /**
         * 执行的结果,httpResponseBody
         *
         */
        result?: any;
    };

    export type GlobalMethods = {
        /**
         * sleep 函数
         * @example 等一秒, await sleepAsync(1000)
         * @param timeout ms
         * @returns
         */
        sleepAsync: (timeout: number) => Promise<void>;
        /**
         * https://www.npmjs.com/package/axios/v/1.7.7
         */
        axios: object;
        /**
         * 注意 此库原名称 为 'jwt-decode' ,此处将其中的 中划线 ('-') 改成了 下划线('_')
         * https://www.npmjs.com/package/jwt-decode/v/4.0.0
         */
        jwt_decode: object;
        /**
         * https://www.npmjs.com/package/json5/v/2.2.3
         */
        json5: object;
        /**
         * https://www.npmjs.com/package/mqtt/v/5.10.1
         */
        mqtt: object;
        
    };

    /**
     * 网关数据源
     */
    export class DataSourceHelper {
        /**
         * 此网关下的所有数据源名称
         */
        getDataSourceNames(): string[];

        /**
         *
         * @param name 数据源名称
         */
        getDataSource(name: string): DataSource;

        /**
         * 获取指定 数据源 引擎
         * 若数据源不支持多环境,则不区分环境
         * 若支持多环境,则会自动适配当前环境; 开发环境无法访问生产环境的数据源,同理,生产环境也无法访问开发环境的数据源
         *
         * @param dsNam 数据源名称
         */
        getDataSourceEngine(dsName: string, envName: string): { err?: string; eng: DataSourceEngine };
    }

    export class DataSourceEngine {
        /**
         * 执行 SQL 脚本
         * @param  sqlObj
         */
        execSqlObjs(sqlObj: SqlObj | SqlObjs): Promise<{ ok: boolean; err?: string; result?: any }>;
        /**
         * 测试 数据库连接
         */
        testConnect(): Promise<{ ok: boolean; err?: string; result?: any }>;
    }

    /**
     * 多个sqlObj ,支持事务
     */
    export type SqlObjs = {
        /**
         * @description 在 API 中设计的多个sql脚本
         */
        sqlObjs: SqlObj[];
        /**
         * 是否启用事务
         */
        tran: boolean;
    };
    /**
     * 要执行的 SQL 对象, SQL相关的都在这里
     *
     * @example { sql:"SELECT * FROM user"}
     * @example { sql:"SELECT * FROM user WHERE user_id = :userId OR user_name = :userName",params:{userId:1,userName:"张三"}}
     * @example 使用已封装的分页 : { sql:"SELECT * FROM user",page:{pageNum:1,pageSize: 10}}
     *
     * @example 使用自定义SQL, 如mysql中 { sql:"SELECT * FROM user limit :l_start, :l_len ",params:{ l_start: 0, l_len: 10} }
     */
    export type SqlObj = {
        /**
         * @description 参数使用 ':' 声明 , 如 'SELECT * FROM user where name = :userName',其中 'userName' 便是参数名
         * @example SELECT * FROM user WHERE user_id = 1
         * @example SELECT * FROM user WHERE user_id = :userId
         */
        sql: string;
        /**
         * @description sql 参数
         * @example { "userId": 1 }
         */
        params?: Record<string, any>;
        /**
         * 动态过滤
         * @example { "userId": 1 }
         */
        dynFilter?: Record<string, any>;
        /**
         * 分页
         * page 属性存在即分页,若要关闭分页, 则使用 page = null 或 page = undefined
         * @example page: { pageNum: 1, pageSize: 10, }
         * @example page: undefined
         */
        page?: {
            pageNum: number;
            pageSize: number;
        };
        /**
         * 动态排序, 在不修改sql 语句的基础上可以自定义排序
         * 如 sql ="select id,name from user" ,sortby = { "id": "desc" } ,则结果按 id 降序排列
         * @example { "id": "desc" }
         */
        sortby?: Record<string, any>;
        /**
         * @description 是否返回列信息,默认不返回,列信息包括列名,列类型等
         */
        colInfo?: number;

        /**
         * @description 不分页: 限制最大返回行数,如 limitRow = 1000,则最多返回1000行,默认不限制
         * @description 分页: 限制每页最大返回行数,如 limitRow = 1000,则每页最多返回1000行,默认不限制
         */
        limitRow?: number;
    };

    export type DataSource = {
        name: string;
        enableMultipleEnvs: boolean;
        envs: DataSourceEnv[];
    };
}

```

