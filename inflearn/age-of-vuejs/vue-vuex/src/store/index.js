import {createStore} from 'vuex'
import userStore from '@/store/modules/userStore'
import todoStore from '@/store/modules/todoStore'

export default createStore({
  modules : {userStore, todoStore},
});