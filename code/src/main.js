import { createApp } from 'vue'

import App from './App.vue'

import router from './router/index.js'
import store from './store/index.js'


function startApp()
{
    let app = createApp( App )
                .use( store )
                .use( router );

    return app;
}

let app = null;


app = startApp();
app.mount('#app');
