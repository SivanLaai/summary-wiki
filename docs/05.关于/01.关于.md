---
title: 关于
date: 2021-07-29 14:57:01
permalink: /about
sidebar: false
article: false
---

## 📚Blog
Hi，你好这是我的个人网站，主要内容是编程基础，机器学习，知识总结。

## 🐼Me
前华为码农，目前CS博士在读。


### 技能
* 熟悉常见前端技术的使用，如vue\nuxt的使用
* 使用过C++/Python参与项目开发
* 博士领域是机器学习


## :email: 联系

- WeChat or QQ: <a :href="qqUrl" class='qq'>574855297</a>
- Email:  <a href="mailto:574855297@qq.com">574855297@qq.com</a>
- GitHub: <https://github.com/SivanLaai>


<script>
  export default {
    data(){
      return {
        qqUrl: 'tencent://message/?uin=574855297&Site=&Menu=yes'
      }
    },
    mounted(){
      const flag =  navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      if(flag){
        //this.qqUrl = 'mqqwpa://im/chat?chat_type=wpa&uin=894072666&version=1&src_type=web&web_src=oicqzone.com'
      }
    }
  }
</script>
