
//import Login from './components/Login.vue'
//import Chatroom from './components/Chatroom.vue'

const Login = resolve => {
    require.ensure(['./components/Login.vue'], () => {
        resolve(require('./components/Login.vue'));
    });
};

const Chatroom = resolve => {
    require.ensure(['./components/Chatroom.vue'], () => {
        resolve(require('./components/Chatroom.vue'));
    });
};

export const routes = [
    {   
        path: '', 
        component: Login
    },
    {   
        path: '/chatroom:room&:id', 
        name:'chatroom', 
        component: Chatroom
    },
    { path: '*', redirect: '/'}
    
]