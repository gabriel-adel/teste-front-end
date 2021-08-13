<template>
  <HeaderPage/>
    <div class="container">
      <Post/>
    </div>
  <FooterPage/>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import Post from '../components/Posts/Post.vue'
import FooterPage from '../components/FooterPage.vue'

export default{
  name:'home',
  components:{
    HeaderPage,
    Post,
    FooterPage
  }
}
</script>
<style scoped lang="scss">
  
  
  body{
    height: 100%;
    width: 100%;
  }
  .arrount-menu{
    height: 100%;
    border:solid 1px black;
    width:20%;
    background-color: red;
  }
</style>