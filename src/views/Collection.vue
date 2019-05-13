<template>
  <div class="collection">
    <nav class="collection-nav"> 
      <div class="collection-favorites" :favoritesList="favoritesList">我的收藏</div>
      <div class="collection-history">历史</div>
     
    </nav>
      <div>
        <Favorites></Favorites>
      </div>
  </div>
</template>

<script>
import Favorites from './Favorites.vue'
export default {
  components: {
    Favorites
  },
  data () {
    return {
      favoritesList: []
    }
  },
  methods: {
    getFavorites () {
      this.favoritesList = []
      Object.keys(localStorage).forEach(key => {
        if (key.match(/^\d+$/)) {
          this.favoritesList.push([key,JSON.parse(this.$local.get(key))])
        }
      })
    },
    activated () {
      this.getFavorites()
    } 
  }



}
</script>

<style lang="scss" scoped>
  .collection {
    width: 100%;
    min-height: calc(100vh - 98px);
    margin: 10px 0 50px 0;
    .collection-nav {
      width: 100%;
      display: flex;
      justify-content: space-around;
       box-shadow: 0 1px 2px 0px #ccc;
       .collection-favorites, .collection-history {
         padding: 16px;
         width: 48%;
         text-align: center;
         cursor: pointer;
       }
    }
  }
</style>