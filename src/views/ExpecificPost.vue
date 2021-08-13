<template>
  <HeaderPage/>
    <div class="container">
      <Post :id="id"/>
    </div>
  <FooterPage/>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import Post from '../components/ExpecificPost/Post.vue'
import FooterPage from '../components/FooterPage.vue'

export default{
  name:'home',
  data () {
      return {
          id:'',
      }
  },
  components:{
    HeaderPage,
    Post,
    
    FooterPage
  },
  mounted(){
    this.id = this.$route.params.id
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