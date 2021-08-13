<template>
  <div class="content">
    <router-link :to="'/post/'+id+'/'+changeString(title)" >
    <div class="image">
      <img :src="require('../../assets/' + image)" />
    </div>
    <div class="content-chars">
      <div class="infos">
        <p>{{ date }}</p>
        <p>by {{ who }}</p>
      </div>
      <div class="title">
        <p>{{ title }}</p>
      </div>
      <div class="resume spaceBetweenLine">
        <p>{{ resume }}</p>
      </div>
    </div>
    </router-link>
  </div>
  
</template>

<script>
export default {
  props: ["image", "title", "resume", "who", "date",'id'],
  methods:{
    changeString:(string)=>{
        return string.replace(/ /g,'-');
    }
  }
};
</script>

<style scoped lang="scss">
    .content-chars{
        div{
            margin:20px 0;
        }
    }
    .content {
        /* width: 300px; */
        padding: 0 10px;
        flex:30%;
    }
    .image {
        margin:30px 0;
    }
    img{
        width: 100%;
    }
    .title{
        margin:10px 0;
        font-size: 26px;
    }
    
    .infos{
        display:flex;
        p{
            margin-right: 15px ;
        }
        p:first-child{
            color:#15c1c6;
        }
    }
</style>
