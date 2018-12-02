/*
 * @Author: lf
 * @Date: 2018-12-02 16:25:04
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-02 18:39:35
 * @文件说明: 配置路由信息
 */
import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login'
import index from '../pages/index'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: login
        },
        {
            path: '/index',
            component: index
        }
    ]
})
