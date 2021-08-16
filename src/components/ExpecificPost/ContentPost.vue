<template>
    <div class="arrount-content">
        <div class=''>
            <img class='image' :src="require('../../assets/foto4Post.webp')">
        </div>
        <div class='content-info'>
            <div class="title">
                <p>{{title}}</p>
            </div>
            <div class="infos">
                <p>{{date}}</p>
                <p>by {{who}}</p>
            </div>  
            <div class="content">
                {{content}}
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:['image','date','title','content','who'],
        
    }
</script>

<style scoped lang="scss">
    .image{
        width:100%;
    }
    .title{
        font-size: 35px;
        padding: 20px 0;
    }
    .infos{
        display:flex;
        padding: 0 0 20px 0;
        p:first-child{
            color:#15c1c6;
            margin-right: 10px;
        }
    }
    .content{
        p{
            margin:10px 0;
        }
    }
    .arrount-content{
        margin:0 auto 50px auto;
        width: 90%;
    }
</style>