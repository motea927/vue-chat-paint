
import Login from './components/Login.vue'
import Chatroom from './components/Chatroom.vue'


export const routes = [
    {   
        path: '', 
        component: resolve => require(['./components/Login.vue'], resolve)
    },
    {   
        path: '/chatroom:room&:id', 
        name:'chatroom', 
        component: resolve => require(['./components/Chatroom.vue'], resolve)
    },
    { path: '*', redirect: '/'}
    
]