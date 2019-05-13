<template>
  <div>
    <ul>
      <li
        v-for="(item, index) of favoritesList"
        :ref="`favoritesItem${index}`"
        :key="item[0]"
      >
        <span>{{item[1]}}</span>
      </li>    
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      favoritesList: {
        type: Array
      }
    },

    
  }
</script>