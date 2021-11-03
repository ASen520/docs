const headConf = require("./config/headConf");
const pluginsConf = require("./config/pluginsConf");
const navConf = require("./config/navConf");
const sidebarConf = require("./config/sidebarConf");

module.exports = {
    // github pages
    base: "/docs/",
    // SEO
    title: "Smail",
    description: "asen的笔记记录册",
    head: headConf,
    plugins: pluginsConf,
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/asen-logo.png',
        sidebar: sidebarConf,
        nav: navConf
    }
}