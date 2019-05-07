<template>
  <div class="header">
    <div class="icon-home"> 
      <i class="el-icon-s-home"></i>
    </div>
    
    <router-link to="/search" class="search">
      <div class="search-box">
        <span>搜索口袋维基</span>
        <i class="el-icon-search"></i>
      </div>
    </router-link>
  </div>
 
</template>

<script>

</script>

<style lang="scss" scoped>
  * {
    text-decoration: none;
    margin: 0;
    padding: 0;
  }
  .header {
    width: 100%;

    padding: 6px 10px;

    background-color: #fff;
    position: relative;
    margin-bottom: -10px;
    
   
    .icon-home {
      height: 36px;
      width: 42px;
      position: absolute;
      .el-icon-s-home {
        margin: 9px 12px;
        color: #666;
        font-size: 18px;
      }
    }
    .search-box {
      height: 36px;
      margin: 0 auto;
      border-radius: 6px;
      text-align: center;
      font-size: 17px;
      background-color: #fff;
      box-shadow: inset 0 0 5px 1px #ccc;
      span {
        line-height: 36px;
        color: #999;
      }
      .el-icon-search {
        float: right;
        margin: 9px 12px;
        color: #666;
        font-size: 18px;
      }


  
     }
  }
  
   


</style>