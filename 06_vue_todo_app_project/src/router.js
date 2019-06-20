import Vue from 'vue'
import Router from 'vue-router'

import LoginView from './views/LoginView';
import TodoView from './views/TodoView';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', component: LoginView},
        {path: '/todo', component: TodoView}
    ]
});
