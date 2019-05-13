<template>
  <div class="wiki">
    <div class="content" v-if="wikiPage">
      <p 
        v-for="item of wikiContent.sections"
        :key="`sections${item.id}`"
        v-html="item.text"
        ></p>
      <p
        v-for="item of wikiContent.remaining"
        :key="`remaining${item.id}`"
        v-html="item.text"
      ></p>
    </div>
    <div
      class="collectItem"
      @click="collectItem"
      v-if="wikiPage"
    >{{isCollected ? '已收藏' : '收藏该词条'}}</div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    name: 'wiki',
    props: ['title'],
    data () {
      return {
        hideLoadingPage: false,
        isCollected: false,
      }  
    },
    watch: {
      
    },
    created () {
      this.dispathWikiPageAjax(this.$route.params.userId)
    },
    computed: {
      ...mapState({
        wikiPage: state => state.wiki.wikiPage
      }),
      ...mapGetters(['wikiContent']),
      
    },
    methods:{
      ...mapActions(['dispathWikiPageAjax']),
      ...mapMutations(['getWikiPage']),
     
     
    }


  }
</script>
<style lang="scss" scoped>
  .wiki {
    margin-top: 10px;
    margin-bottom: 48px;
    position: relative;
    padding: 20px;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    .collectItem {
      width: 32%;
      height: 36px;
      line-height: 36px;
      text-align: center;
      letter-spacing: 1px;
      background-color: #fff;
      border-radius: 5px;
      margin: 0 auto;
      background-color: #fff;
      box-shadow: 0 0 1px 1px #999;   
      

    }
  }

</style>

