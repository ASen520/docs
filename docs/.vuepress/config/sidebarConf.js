// 对象形式
module.exports = {
    '/ssm/': [
        {
            title: 'SSM框架',
            collapsable: false,
            path: '/ssm/',
            sidebarDepth: 1,
            children: [
                'idea入门',
                {
                    title: 'Mybatis学习',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'mybatis/mybatis开发环境搭建',
                        'mybatis/mybatis查询',
                    ]
                }
            ]
        }
    ]
}
