
module.exports = {
    theme: 'reco',
    title: "南风知我意",
    description: "无聊到混",
    logo: '/assets/img/logo.png',
    themeConfig: {
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'ff' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'vue'      // 默认文案 “标签”
            }
        },
        // 备案
        record: 'ICP 备案文案',
        recordLink: 'ICP 备案指向链接',
        cyberSecurityRecord: '公安部备案文案',
        cyberSecurityLink: 'https://github.com/crtxr1998/learnNote',
        // 项目开始时间，只填写年份
        type: 'blog',
        startYear: '2020',
        authorAvatar: '/assets/img/logo.png',
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: 'recoluan@qq.com',
                link: 'https://www.recoluan.com'
            },
            // ...
        ]
    }
}