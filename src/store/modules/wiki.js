import axios from 'axios'
 const state = {
   wikiPage: null
 }
 
 const getters = {
   wikiContent (state) {
     let {wikiPage} = state
     

     if (wikiPage) {
         
         return {
            title: wikiPage.lead.display, 
            id: wikiPage.lead.id,
            isCollected: wikiPage.isCollected,
            sections: wikiPage.lead.sections,
            remaining: wikiPage.remaining.sections
            
         }
     }
   }
 }

 const mutations = {
   getWikiPage (state, data) {
       state.wikiPage = data
   },
   toggleWikiCollectedStatus (state, status) {
     state.wikiPage.isCollected = status
     console.log(state.wikiPage)
   }

 }

 const actions = {
   dispathWikiPageAjax ({commit}, title) {
     axios.get(`https://zh.wikipedia.org/api/rest_v1/page/mobile-sections/${title}`)
       .then((res) => {
         console.log("ddd")
         const {data} = res
        
        
         commit('getWikiPage', data)
       }).catch((ex) => {
         // console.info(ex)
       })
   }
 }

 export default {
     state,
     getters,
     mutations,
     actions
 }