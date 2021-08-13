<template>
  <div class='title-margin'>
    <div class='title'>
        <p>{{title}}</p>
        <p>{{subTitle}}</p>
    </div>
    <div class='line'></div>
  </div>
</template>

<script>
export default {
  props:['title','subTitle']
}
</script>

<style scoped lang="scss">
  .title-margin{
    margin:60px 0;
  }
  .title{
    text-align: center;
    p{
      
      margin:20px 0;
    }
    p:first-child{
      font-size: 30px;

    }
    p:last-child{
      font-size: 35px;

    }
    
  }
  .line{
      width: 50px;
      background-color: green;
      height: 2px;
      margin: 0 auto;
    }
</style>
