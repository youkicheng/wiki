<template>
  <div id="app">
    <Header></Header>
    <div class="">
     <router-view></router-view>
    </div>
    <nav id="nav">
      <router-link to="/home" class="home">
        <i class="el-icon-menu"></i>
        <div class="home-font" >主页</div>
      </router-link>
      <router-link to="/search" class="search">
         <i class="el-icon-search"></i>
      </router-link>
      <router-link to="/collection" class="collection">
        <i class="el-icon-star-on"></i>
        <div class="collection-font">收藏</div>
      </router-link>
    </nav>
  </div>
</template>

<script>
  import Header from './views/Header.vue'
  export default {
    components: {
      Header
    }
  }
</script>
<style lang="scss">
* {
  text-decoration: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: scroll;
  overflow: hidden;
  
}
#app {
  
}
#nav {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 999;
  left: 0;
  bottom: 0;
  border-top: solid 1px #ccc;
  > * {
    width: 50px;
    font-size: 10px;
    font-weight: 600;
    color: #333;  
    .el-icon-menu, .el-icon-star-on, .el-icon-search {
      font-size: 22px;
      display: block;
      width: 1em;
      margin: 0 auto;
    }   
    .home-font, .collection-font {
       text-align: center;
    }
 

  }
  
}

</style>
