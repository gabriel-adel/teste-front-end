<template>
  <HeaderPage/>
    <Team/>
  <FooterPage/>
</template>

<script>
  import HeaderPage from '../components/HeaderPage.vue'
  import Team from '../components/Team/AllTeam.vue'
  import FooterPage from '../components/FooterPage.vue'
  export default{
    name:'home',
    components:{
      HeaderPage,
      Team,
      FooterPage
    }
  }
</script>
//
