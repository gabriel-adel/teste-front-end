<template>
  <HeaderPage/>
  <BannerHome/>
  <ServiceItemHome/>
  <CaseItemHome/>
  <CardNewsItemHome/>
  <FourthItemHome/>
  <CardPeopleItemHome/>
  <FooterPage/>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import BannerHome from '../components/home/BannerHome.vue'
import ServiceItemHome from '../components/home/ServiceItemHome.vue'
import CaseItemHome from '../components/home/CaseItemHome.vue'
import CardNewsItemHome from '../components/home/CardNewsItemHome.vue'
import FourthItemHome from '../components/home/FourthItemHome.vue'
import CardPeopleItemHome from '../components/home/CardPeopleItemHome.vue'
import FooterPage from '../components/FooterPage.vue'
export default{
  name:'home',
  components:{
    HeaderPage,
    BannerHome,
    ServiceItemHome,
    CaseItemHome,
    CardNewsItemHome,
    FourthItemHome,
    CardPeopleItemHome,
    FooterPage
  }
}
</script>
