import Vue from 'vue'
import AppNav from "./Nav.vue"
import AppHeader from './AppHeader.vue'
import { Tab, Tabs ,List,Loading,NavBar,Icon,Field,CellGroup,Button,Toast,Form,Checkbox,Cell,Row,Col,Tabbar, TabbarItem,SubmitBar,Search ,Swipe, SwipeItem, Lazyload } from 'vant'
import AppHomeListItem from './AppHomeListItem.vue'

Vue.use(Tab)
Vue.use(Tabs)
Vue.use(List)
Vue.use(Loading)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Field)
Vue.use(CellGroup)
Vue.use(Button)
Vue.use(Toast)
Vue.use(Form)
Vue.use(Checkbox)
Vue.use(Cell)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(SubmitBar)
Vue.use(Search)
Vue.use(Swipe);
Vue.use(SwipeItem)
Vue.use(Lazyload)



Vue.component('app-nav',AppNav)
Vue.component('app-header',AppHeader)
Vue.component('app-home-list-item',AppHomeListItem)