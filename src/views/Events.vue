<template>
  <HeaderPage/>
    <Events/>
  <FooterPage/>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import Events from '../components/Events/Events.vue'
import FooterPage from '../components/FooterPage.vue'
export default{
  name:'home',
  components:{
    HeaderPage,
    Events,
    FooterPage
  }
}
</script>

//