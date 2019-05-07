import axios from 'axios'
export default {
  dispatchExploreDataAjax({commit}) {
    for (let i = 0; i < 6; i++) {
        axios.get('https://zh.wikipedia.org/api/rest_v1/page/random/summary')
          .then((res) => {
              commit('getRandomDate', res.data)
          })
    }
  }
}