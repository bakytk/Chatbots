import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	
  state: {
	  items: [],
  },
	
  getters: {
	  
	  GET_ITEMS: state => () => {
     	return state.items},
  },
	
  mutations: {
	  
	  SET_ITEMS (state, list) {
      	state.items = list;}
  },
	
  actions: {
	  
	  loadItems ({ commit }) {
		  
      	Vue.axios
        	.get('https://test-bot.club/nlp', 
				 { 'headers': { 'Authorization': 'Bearer ' + Vue.$cookies.get('zimad_token') }}
			).then(r => r.data)
			.then(d => { 
			
				if (d.success) {commit('SET_ITEMS', d.data ); }
		  }).catch(err => { console.error ( err); });
    	},
  },
	  
  modules: {
  }
})
