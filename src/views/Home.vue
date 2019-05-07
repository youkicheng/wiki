<template>
  <div class="home">
    <nav class="home-nav">
      <router-link :to="{name:'recommend'}" class="recommend">
        <div >推荐</div>
      </router-link>
      <router-link :to="{name:'hotTopic'}" class="hot-topic">
        <div>热榜</div>
      </router-link>
      <div></div>
    </nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .home-nav {
    display: flex;
    justify-content: space-around;
    height: 28px;
    width: 100%;
    align-items: center;
    
    top: 0;
    z-index: 1;
    padding: 25px 0 20px 0;
    box-shadow: 0 1px 2px 0px #ccc;
    .recommend, .hot-topic {
      font-size: 15px;
      font-weight: 600;
      color: #666;
      padding: 10px 20px;
      margin: 0 20px;
      letter-spacing: 2px;
      position: relative;
    }
    
    .recommend {
      left: 5px;
    }
    .hot-topic {
      left: 30px;
    }

  }
  

</style>