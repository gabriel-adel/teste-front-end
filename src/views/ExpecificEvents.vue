<template>
  <HeaderPage/>
    <ExpecificEvents :id='$route.params.id'/>
  <FooterPage/>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import ExpecificEvents from '../components/ExpecificEvents/ExpecificEvents.vue'
import FooterPage from '../components/FooterPage.vue'
export default{
  name:'home',
  components:{
    HeaderPage,
    ExpecificEvents,
    FooterPage
  },
  data () {
    return {
      id:'',
    }
  },
  mounted(){
    this.id = this.$route.params.id
  }
}
</script>

//