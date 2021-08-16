<template>
  <HeaderPage/>
    <GalleryImages />
  <FooterPage/>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue'
import GalleryImages from '../components/Gallery/GalleryImages.vue'
import FooterPage from '../components/FooterPage.vue'
export default{
  name:'home',
  components:{
    HeaderPage,
    GalleryImages,
    FooterPage
  }

}
</script>
