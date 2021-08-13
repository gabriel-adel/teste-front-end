<template>
    <div class='card'>
        <div class='arround-image'>
            <img :src="require('../../assets/svg/'+image)">
        </div>
        <div class='content-card'>
            <p>{{title}}</p>
            <p class='spaceBetweenLineTwo'>{{subTitle}}</p>
            
        </div>
    
    </div>
  
</template>

<script>

export default {
  props:['title','subTitle','image']
}
</script>

<style scoped lang="scss">
    .arround-image{
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #15c1c6;
        width: 50px;
        height: 50px;
        padding:20px;
        border-radius: 50%;
    }
    .card{
        margin:0 0 50px 0 ;
        /* padding:40px; */
        display: flex;
        flex-direction: column;
        align-items: center;
        flex:25%;
    }
    .content-card{
        width:85%;
        p:first-child{
            font-size: 25px;
            font-weight: bold;
            border-bottom: solid 1px black;
            padding:20px 0;
            margin-bottom: 20px;
        }
        p:last-child{
            font-size: 18px;
            color:#818383
        
        }
    }
</style>
