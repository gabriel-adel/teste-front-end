<template>
    <div class="arroundPost">
        
        <router-link :to="'/post/'+id+'/'+changeString(title)">
            <div class="imagePost">
                <img class='image' :src="require('../../assets/'+image)">
            </div>
            <div class="post">
                <p>{{date}}</p>
                <p class='spaceBetweenLineTree'>{{title}}</p>
            </div>
        </router-link>
    </div>
</template>


<script>
    export default{
        props:['title','date','image','id'],
        methods:{
            changeString:(string)=>{
                return string.replace(/ /g,'-');
            }
        }
    }
</script>

<style scoped lang="scss">
    
    .post{
        width: 100%;
        p:first-child{
            color:#15c1c6;
            margin:5px 0;
        }
        p:last-child{
            margin-bottom: 15px;
        }
    }
    .image{
        width: 100%;
        height: 150px;
    }
    
    .title{
        font-size: 25px;
        margin-bottom: 20px;
    }
    .arroundPost{
        margin:20px 0;
    }
</style>
