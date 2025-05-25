
let vitePressSidebar = [
    {
        "text": "入门",
        "collapsed": true,
        "items": [
            {
                "text": "apiSQL简介",
                "link": "/010@入门/010@apiSQL简介/readme.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "应用场景",
                        "link": "/010@入门/010@apiSQL简介/readme.md#应用场景"
                    }
                ]
            },
            {
                "text": "快速入门",
                "link": "/010@入门/020@快速入门/readme.md"
            },
            {
                "text": "免费版-私有部署",
                "link": "/010@入门/030@免费版-私有部署/readme.md"
            },
            {
                "text": "企业版-私有部署",
                "link": "/010@入门/040@企业版-私有部署/readme.md"
            }
        ]
    },
    {
        "text": "接口开发指南",
        "collapsed": true,
        "items": [
            {
                "text": "接口组",
                "link": "/020@接口开发指南/010@接口组/readme.md"
            },
            {
                "text": "接口",
                "collapsed": true,
                "items": [
                    {
                        "text": "接口介绍",
                        "link": "/020@接口开发指南/020@接口/010@接口介绍/readme.md"
                    },
                    {
                        "text": "接口设计",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "SQL类型",
                                "link": "/020@接口开发指南/020@接口/020@接口设计/010@SQL类型/readme.md"
                            },
                            {
                                "text": "MoreSQL类型",
                                "link": "/020@接口开发指南/020@接口/020@接口设计/020@MoreSQL类型/moreSql.md"
                            },
                            {
                                "text": "JS类型",
                                "link": "/020@接口开发指南/020@接口/020@接口设计/030@JS类型/js.md"
                            }
                        ]
                    },
                    {
                        "text": "接口运行(调试)",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "功能简介",
                                "link": "/020@接口开发指南/020@接口/030@接口运行(调试)/010@功能简介/readme.md"
                            }
                        ]
                    }
                ]
            },
            {
                "text": "动态特性",
                "collapsed": true,
                "items": [
                    {
                        "text": "API属性",
                        "link": "/020@接口开发指南/030@动态特性/0010@API属性.md"
                    },
                    {
                        "text": "批量API",
                        "link": "/020@接口开发指南/030@动态特性/0020@批量API.md"
                    },
                    {
                        "text": "REST",
                        "link": "/020@接口开发指南/030@动态特性/0030@REST.md"
                    },
                    {
                        "text": "SUDB",
                        "link": "/020@接口开发指南/030@动态特性/0040@SUDB.md"
                    }
                ]
            },
            {
                "text": "前后置操作",
                "collapsed": true,
                "items": [
                    {
                        "text": "功能简介",
                        "link": "/020@接口开发指南/040@前后置操作/010@功能简介/功能简介.md"
                    },
                    {
                        "text": "脚本",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "脚本介绍",
                                "link": "/020@接口开发指南/040@前后置操作/020@脚本/0010@脚本介绍.md"
                            },
                            {
                                "text": "前置脚本",
                                "link": "/020@接口开发指南/040@前后置操作/020@脚本/0020@前置脚本.md"
                            },
                            {
                                "text": "后置脚本",
                                "link": "/020@接口开发指南/040@前后置操作/020@脚本/0030@后置脚本.md"
                            },
                            {
                                "text": "公共脚本",
                                "link": "/020@接口开发指南/040@前后置操作/020@脚本/0040@公共脚本.md"
                            },
                            {
                                "text": "ctx对象",
                                "link": "/020@接口开发指南/040@前后置操作/020@脚本/0050@ctx对象.md"
                            }
                        ]
                    }
                ]
            },
            {
                "text": "语法指南",
                "collapsed": true,
                "items": [
                    {
                        "text": "SQL语句",
                        "link": "/020@接口开发指南/050@语法指南/0010@SQL语句.md"
                    },
                    {
                        "text": "JSAPI脚本指南",
                        "link": "/020@接口开发指南/050@语法指南/0020@JSAPI脚本指南.md"
                    }
                ]
            }
        ]
    },
    {
        "text": "项目",
        "collapsed": true,
        "items": [
            {
                "text": "访问控制",
                "link": "/030@项目/0010@访问控制.md"
            },
            {
                "text": "数据网关＆数据源",
                "link": "/030@项目/0020@数据网关＆数据源.md"
            },
            {
                "text": "成员角色＆权限",
                "link": "/030@项目/0030@成员角色＆权限.md"
            },
            {
                "text": "数据管理",
                "link": "/030@项目/0040@数据管理.md"
            }
        ]
    },
    {
        "text": "案例",
        "collapsed": true,
        "items": [
            {
                "text": "APISQL与HertzBeat(实时监控告警)的零代码实现",
                "link": "/040@案例/010@APISQL与HertzBeat(实时监控告警)的零代码实现.md"
            }
        ]
    }
]
export function ymSidebar() {
    return vitePressSidebar;
};
    