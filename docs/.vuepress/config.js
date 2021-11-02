module.exports = {
    // SEO
    title: "asen",
    description: "asen 的第一个vuepress",
    head: [
        ['link',{rel:'icon',href:'/asen-logo.png'}],
        ['meta',{name:'author',content:'阿森'}],
        ['meta',{name:'Keywords',content:'vuepress 介绍，vuepress 说明'}]
    ],
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/asen-logo.png',
        // 数组形式
        // sidebar: [
        //     {
        //         title: '美丽的css',   // 必要的
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 1,    // 可选的, 默认值是 1
        //         children: [
        //             '/css/a-css',
        //             '/css/b-css',
        //             '/css/c-css',
        //         ]
        //     },
        // ],
        // 对象形式
        sidebar: {
            '/css/': [
                'a-css',
                'b-css',
                'c-css'
            ],
            '/javascript/': [
                'a-js',
                'b-js',
                'c-js'
            ],
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about/' },
            {
                text: 'Languages',
                items: [
                    {
                        text: 'Group1',
                        items: [
                            { text: 'Home', link: '/' },
                            { text: 'Guide', link: '/about/' }
                        ]
                    },
                    {
                        text: 'Group2',
                        items: [
                            { text: 'Home', link: '/' },
                            { text: 'Guide', link: '/about/' }
                        ]
                    }
                ]
            },
            { text: 'External', link: 'https://google.com' },
        ]
    }
}