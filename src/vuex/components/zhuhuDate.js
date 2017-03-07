import * as types from '../zhuhu-types.js'
import axios from 'axios'
var moment = require('moment');

const state = {
    NewsListRoot: [],
    NewsLatest: {},
    time: moment(),
    Loading: true,
    NewsDetail: {},
    Themes: {},
    ThemesList: {}
}

const getters = {
    [types.DONE_NEWS_LIST_ROOT]: state => {
        return state.NewsListRoot
    },
    [types.DONE_NEWS_LATEST]: state => {
        return state.NewsLatest
    },
    [types.DONE_NEWS_DETAIL]: state => {
        return state.NewsDetail
    },
    [types.DONE_LOADING]: state => {
        return state.Loading
    },
    [types.DONE_THEMES]: state => {
        return state.Themes
    },
    [types.DONE_THEMES_LIST]: state => {
        return state.ThemesList
    }
}

const mutations = {
    [types.TOGGLE_NEWS_LATEST](state, all) {
        state.NewsListRoot.push(all)
        state.NewsLatest = all
        state.Loading = false
    },
    [types.TOGGLE_NEWS_LATEST_MORE](state, all) {
        state.NewsListRoot.push(all)
        state.time.subtract(1, "days")
        state.Loading = false
    },
    [types.TOGGLE_NEWS_DETAIL](state, all) {
        String.prototype.replaceAll = function (s1, s2) {
            return this.replace(new RegExp(s1, "gm"), s2);
        }
        all.body = all.body.replaceAll('src=\"', 'src=\"http://lovestreet.leanapp.cn/zhihu/resource?url=')
        all.body = all.body.replaceAll('<div class=\"img-place-holder\"></div>', '')
        state.NewsDetail = all.body
        state.Loading = false
    },
    [types.TOGGLE_THEMES](state, all) {
        state.Themes = all
        state.Loading = false
    },
    [types.TOGGLE_THEMES_LIST](state, all) {
        state.ThemesList = all
        state.Loading = false
    },
}

const actions = {
    // 获取首页消息列表
    [types.FECTH_NEWS_LATEST]({commit}) {
        state.Loading = true
        axios.get('http://lovestreet.leanapp.cn/zhihu/news/latest')
            .then(res => {
                commit(types.TOGGLE_NEWS_LATEST, res.data)
            }).catch(err => console.log(err))
    },
    // 首页下方按钮点击加载更多消息
    [types.FECTH_NEWS_LATEST_MORE]({commit}) {
        state.Loading = true
        var _now = state.time.format("YYYYMMDD")
        axios.get('http://lovestreet.leanapp.cn/zhihu/before/' + _now)
            .then(res => {
                commit(types.TOGGLE_NEWS_LATEST_MORE, res.data)
            }).catch(err => console.log(err))
    },
    // 获取信息详情
    [types.FETCH_NEWS_DETAIL]({commit}, id) {
        state.Loading = true
        axios.get('http://lovestreet.leanapp.cn/zhihu/news/' + id)
            .then(res => {
                commit(types.TOGGLE_NEWS_DETAIL, res.data)
            }).catch(err => console.log(err))
    },
    // 获取日报主题
    [types.FETCH_THEMES]({commit}) {
        state.Loading = true
        axios.get('http://lovestreet.leanapp.cn/zhihu/themes')
            .then(res => {
                commit(types.TOGGLE_THEMES, res.data)
            }).catch(err => console.log(err))
    },
    // 获取主题条目列表
    [types.FETCH_THEMES_list]({commit}, id) {
        state.Loading = true
        axios.get('http://lovestreet.leanapp.cn/zhihu/themes/' + id)
            .then(res => {
                commit(types.TOGGLE_THEMES_LIST, res.data)
            }).catch(err => console.log(err))
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
