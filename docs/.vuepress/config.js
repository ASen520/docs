const moment = require('moment');

module.exports = {
    // github pages
    base: "/docs/",
    // SEO
    title: "asen",
    description: "asen 的第一个vuepress",
    head: [
        ['link', { rel: 'icon', href: '/asen-logo.png' }],
        ['meta', { name: 'author', content: '阿森' }],
        ['meta', { name: 'Keywords', content: 'vuepress 介绍，vuepress 说明' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: [
        [
            // 调节时间格式
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    moment.locale("zh-cn")
                    return moment(timestamp).fromNow("LLL");
                }
            }
        ],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: "发现新内容可用.",
                    buttonText: "刷新"
                }
            }
        ]
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