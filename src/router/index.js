import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import fj500 from '@/components/fj500'; //404
import fj404 from '@/components/fj404'; //404
import fj403 from '@/components/fj403'; //403
export default new Router({
    routes: [{ //默认的路由视图
            path: '/',
            name: '',
            redirect: 'noLogin'
        },
        {
            path: '/noLogin',
            name: 'noLogin',
            component: resolve => require(['@/components/fjNoLogin'], resolve)
        },
        {
            //工作管理 -> 一标三实
            path: '/fjWorkManage-YiBiaoSanShi',
            name: 'fjWorkManage-YiBiaoSanShi',
            component: resolve => require(['@/components/fjWorkManage-YiBiaoSanShi'], resolve)
        },
        {
            //工作管理 -> 一标三实新建
            path: '/fjWorkManage-YiBiaoSanShi-Details',
            name: 'fjWorkManage-YiBiaoSanShi-Details',
            component: resolve => require(['@/components/fjWorkManage-YiBiaoSanShi-Details'], resolve)
        },
        { //403
            path: '/403',
            name: '403',
            component: fj403
        },
        { //404
            path: '/404',
            name: '404',
            component: fj404
        },
        { //500
            path: '/500',
            name: '500',
            component: fj500
        }

    ]
})