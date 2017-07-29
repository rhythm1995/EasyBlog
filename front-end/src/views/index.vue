<style scoped lang="less">
body {
    font-family: Exo, '-apple-system', 'Open Sans', HelveticaNeue-Light, 'Helvetica Neue Light', 'Helvetica Neue', 'Hiragino Sans GB', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
}

header {
    width: 100%;
    height: 35em;
    background: url('../../public/background.jpg') no-repeat;
    background-position: 0 40%;
    background-size: cover;

    span {
        .header-logo-img {
            margin-left: 10%;
            margin-top: 1.5em;
            margin-bottom: 10em;
            width: 5em;
            height: 5em;
            background: url('http://of8t6pu0g.bkt.clouddn.com/head3.jpg') no-repeat;
            background-position: 0 40%;
            background-size: cover;
        }
    }

    .header-topic {
        display: block;
        text-align: center;
        margin: 0 auto;
        h1 {
            font-weight: lighter;
            color: #fff;
            text-shadow: 0 1px 1px #595959;
            font-size: 4em;
            &:hover {
                color: #efefef;
                text-shadow: 0 1px 1px #000;
            }
        }

        h4 {
            font-weight: lighter;
            color: #fff;
            text-shadow: 0 1px 1px #595959;
            font-size: 2em;
            letter-spacing: .8rem;
            &:hover {
                color: #efefef;
                text-shadow: 0 1px 1px #fff;
            }
        }
        .header-menus {
            color: white;
            text-shadow: 0 1px 1px #595959;
            a {
                margin-top: 1em;
                font-size: 1.5em;
                color: #fff;
                &:hover {
                    color: #22eeff;
                }
            }
        }
    }
}
</style>

<template>
    <header>
        <div class="header-logo">
            <a href="http://bugzhang.com/">
                <span>
                    <img class="header-logo-img"></img>
                </span>
            </a>
        </div>
        <div class="header-topic">
            <h1>{{headerTopic}}</h1>
            <h4>{{headerSign}}</h4>
            <span class="header-menus">
                <a :href="menu.url" v-for="menu in headerMenus">{{menu.text}}</a>
            </span>
        </div>
    </header>
</template>

<script>
//注册组件
import ArticlePage from '../src/components/ArticlePage';
var articlePage = Vue.extebd(ArticlePage);

export default {
    data() {
        return {
            headerTopic: 'Bugzhang的博客',
            headerSign: 'Keep clam and carry on',
            headerMenus: [{
                text: '主页 | ',
                url: 'http://bugzhang.com/'
            }, {
                text: '留言板 | ',
                url: 'http://bugzhang.com/'
            }, {
                text: '好友链接 | ',
                url: 'http://bugzhang.com/'
            }, {
                text: '关于我 | ',
                url: 'http://bugzhang.com/'
            }, {
                text: '作品集',
                url: 'http://bugzhang.com/'
            }]
        }
    },

    methods: {
        handleStart() {
            this.$Modal.info({
                title: 'Bravo',
                content: 'Now, enjoy the convenience of iView.'
            });
        }
    }
};
</script>