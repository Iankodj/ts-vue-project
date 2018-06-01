// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

import { Button,
        ButtonGroup,
        ButtonGroupButton,
        ToolBar,
        ToolBarItem,
        ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'

Vue.config.productionTip = false

Vue.use(ButtonsInstaller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, Button, ButtonsInstaller }
})
