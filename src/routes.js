import Login from './components/Login.vue'
import Chatroom from './components/Chatroom.vue'

export const routes = [
    { path: '', component: Login},
    { path: '/chatroom:id', component: Chatroom}
]