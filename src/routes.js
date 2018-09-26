import Login from './components/Login.vue'
import Chatroom from './components/Chatroom.vue'

export const routes = [
    { path: '', component: Login},
    { path: '/chatroom:room&:id', name:'chatroom', component: Chatroom},
    { path: '*', redirect: '/'}
    
]