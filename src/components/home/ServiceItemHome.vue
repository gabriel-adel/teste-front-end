<template>
  <div class='container'>

    <Title  title='business management' subTitle='Services We Offer'/>
    <div class='contentFristHome'>
      <CardHome image='check.svg' title='business management' subTitle='Any scrutiny like a management issue will succumb to our control if you will choose our interim…'/>
      <CardHome image='eraser.svg' title='business management' subTitle='Any scrutiny like a management issue will succumb to our control if you will choose our interim…'/>
      <CardHome image='sign.svg' title='business management' subTitle='Any scrutiny like a management issue will succumb to our control if you will choose our interim…'/>
      <CardHome image='sync.svg' title='business management' subTitle='Any scrutiny like a management issue will succumb to our control if you will choose our interim…'/>
    </div>
    

  </div>

</template>

<script>
import Title from './Title.vue'
import CardHome from './CardHome.vue'

export default{
  components:{
    Title,
    CardHome,
  },
  
}

</script>
<style scoped lang="scss">
  .contentFristHome{
    display:flex;
    text-align: center;
    flex-wrap: wrap;
  }
  
  .arround-button{
    margin:20px 0;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    
  }
</style>