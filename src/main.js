import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import Primevue from 'primevue/config'
import Material from '@primeuix/themes/matherial'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import {
    Button,
    Column,
    ConfirmDialog,
    Dialog,
    FileUpload,
    InputIcon,
    InputNumber,
    Select,
    SelectButton,
    Toolbar
} from "primevue";
import i18n from "./i18n.js";
import router from "./router.js";
import pinia from "./pinia.js";



createApp(App)
    .use(i18n)
    .use(router)
    .use(pinia)
    .use(Primevue, {theme: {preset: Material}, ripple: true})
    .use(ConfirmationService)
    .use(dialogService)
    .use(ToastService)
    .component('pv-button',Button)
    .component('pv-card', Card)
    .component('pv-column',Column)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-checkbox', Checkbox)
    .component('pv-select', Select)
    .component('pv-select-button', SelectButton)
    .component('pv-file-upload', FileUpload)
    .component('pv-float-labet', FloatLabel)
    .component('pv-icon-field',Iconfield)
    .component('pv-inpunt-icon',InputIcon)
    .component('pv-input-number',InputNumber)
    .component('pv-menu',Menu)
    .component( 'pv-rating', Rating)
    .component('pv-row',Row)
    .component('pv-select', Select)
    .component('pv-select-button', SelectButton)
    .component('pv-tag', Tag)
    .component('pv-textarea',Textarea)
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component()
    .directive('pv-input', Input)
    .mount('#app')
