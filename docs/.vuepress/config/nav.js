// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '基础',
    link: '/base/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '设计模式',
        items: [
            {text: '创建型', link: '/pages/612b73/'},
            {text: '行为型', link: '/pages/744152/'},
            {text: '结构型', link: '/pages/8507dd/'},
        ]
      },
      {
        text: '操作系统',
        items: [
            {text: 'Linux命令行手册', link: '/pages/54a248/'},
        ]
      },
      {
        text: '算法学习',
        items: [
            {text: 'Leetcode-算法思想', link: '/pages/5aee27/'},
            {text: 'Leetcode-数据结构', link: '/pages/db89b8/'},
        ]
      },
      {
        text: '前端',
        items: [
          { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
          { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
          { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
          { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
          { text: '《JavaScript教程》笔记', link: '/note/javascript/' },
          { text: '《JavaScript高级程序设计》笔记', link: '/note/js/' },
          { text: '《ES6 教程》笔记', link: '/note/es6/' },
          { text: '《Vue》笔记', link: '/note/vue/' },
          { text: '《React》笔记', link: '/note/react/' },
          {
            text: '《TypeScript 从零实现 axios》',
            link: '/note/typescript-axios/',
          },
          {
            text: '《Git》学习笔记',
            link: '/note/git/',
          },
          {
            text: 'TypeScript笔记',
            link: '/pages/51afd6/',
          },
          {
            text: 'JS设计模式总结笔记',
            link: '/pages/4643cd/',
          },
        ],
      },
    ],
  },
  {
    text: '学习',
    link: '/charging/',
    items: [
      { text: '量化交易', link: '/pages/7c452a/' },
      { text: '学习方法', link: '/pages/0ab16b/' },
    ],
  },
  {
    text: '百科',
    link: '/wiki/',
    items: [
      { text: 'rime-pure', link: '/pages/7128fc/' },
      { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
      { text: '常见问题', link: '/pages/66a644/' },
      { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
      { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
      { text: '软件安装', link: '/pages/860274/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '学习', link: '/pages/f2a556/' },
      { text: '面试', link: '/pages/aea6571b7a8bae86/' },
      { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
      { text: '实用技巧', link: '/pages/baaa02/' },
      { text: '友情链接', link: '/friends/' },
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
