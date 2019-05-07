<template>
  <div class="search">
    <div class="search-head">
      <div class="icon-home" @click="goHome"> 
        <i class="el-icon-s-home"></i>
      </div>
      <input type="text" class="search-input" placeholder="请输入要查询的内容" 
        ref="searchInput" @input="getSearchRealtedTitle" 
        v-model="inputVal">
      <span class="cancel"  @click="fallback">取消</span>
    </div>
    <div class="search-history">
        <div class="search-history-clear">
          <i class="el-icon-delete"></i>
          <span>清除记录</span>
        </div>
    
     
        <div class="search-history-line">搜索记录</div>
        <div>
          <ul>
            <li></li>
          </ul>
        </div> 


    </div>
    <div class="search-related" 
      v-show="searchRealtedOnlyTitleItems.length">
      <ul class="search-related-items">
        <li 
          v-for="item of searchRealtedOnlyTitleItems"
          :key="item.id"
          class="search-related-item"
          @click="gotoWiki(item.id, item.title)"
        >   
          {{item.title}}
        </li>
      </ul>
      <div class="black" @click="clearSearchData"></div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    data () {
      return {
        searchTipsPage: 0,
        searchHistoryList: [],
        inputVal: '',
        throttleGetSearchRealtedTitleFunc: null,
      }
    },
    activated () {
      this.inputAutofocus(),
      this.getSearchHistotyList()

    },
    beforeRouteLeave (to, from, next) {
      this.clearSearchData()
      next()
    },
    computed: {
      ...mapGetters(['searchRealtedOnlyTitleItems' ])
    },
    methods: {
      ...mapActions(['dispatchSearchRelatedAjax']),
      ...mapMutations(['clearSearchRelatedData']),
      goHome () {
        this.$router.push('/home')
      },
      inputAutofocus () {
        this.$nextTick() 
          .then(() => {
            this.$refs.searchInput.focus()
          })
      },
  
      fallback() {
        this.$router.go(-1)
      },
      
      getSearchRealtedTitle (e) {
        if (this.throttleGetSearchRealtedTitleFunc == null) {
          const throttleGetSearchRealtedTitleFunc = (e) => { this.dispatchSearchRelatedAjax(e.target.value)}
          throttleGetSearchRealtedTitleFunc(e)
        }
      },
      clearSearchData () {
        this.inputVal = ''
        this.clearSearchRelatedData()
      },
      gotoWiki (id, title) {
        this.$router.push(`/wiki/${title}`)
      }
    }
  }
</script>

  
 
 
  }
}

<style lang="scss" scoped>
  .search {
    width: 100%;
    min-height: calc(100vh - 60px);
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    .search-head {
      width: 100%;
      display: flex;
       
      align-items: flex-start;
      height: 48px;
      padding: 6px 10px;
      box-shadow: 0 1px 2px 0px #ccc;
      position: fixed;
      top: 0;
      
      z-index: 1;
      background-color: #fff;
      .icon-home {
        height: 36px;
        width: 42px;
        position: absolute;
        .el-icon-s-home {
          margin: 9px 12px;
          color: #666;
          font-size: 18px;
          z-index: 9;
        }
      }  
      .search-input {
        flex-grow: 1;
        height: 36px;
        border-radius: 6px;
        font-size: 16px;
        padding: 0 42px;
        background-color: #fff;
        box-shadow: inset 0 0 5px 1px #ccc;
        border: none;
        outline: none;
        font-family: inherit;
      }
      .cancel {
        height: 36px;
        line-height: 36px;
        color: #333;
        padding: 0 10px;
      }
    }
    .search-history {
      overflow: hidden;
      position: relative;
      top: 48px;
      font-size: 12px;
      
      margin: 20px;
      .search-history-clear {
        float: right;
        padding: 5px;
        
        cursor: pointer;
        .el-icon-delete {
          margin: 0 2px;
          vertical-align:middle;
          height: 13px;
          weight: 13px;
        }
        span {
           
        }
      }
      .search-history-line {
        font-weight: 600;
        font-size: 13px;
        padding: 5px;
      }
    }
    
  }





  .search-related {
    position: absolute;
    top: 52px;
    left: 0;
    width: 100%;
    min-height: calc(100vh - 50px);
    .search-related-items {
      padding: 10px 20px 20px 20px;
      width: 100%;
      .search-related-item {
        border-bottom: 1px solid #ececec;
        color: #666;
        width: 100%;
        overflow: hidden;
        padding: 10px;
      }

    }

  }
</style>