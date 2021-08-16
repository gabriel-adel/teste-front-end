<template>
        <div class="arrount-content">
            <router-link :to="'/post/'+id+'/'+changeString(title)" >
                <div class='www'>
                    <img class='image-here' :src="require('../../assets/'+image)">
                </div>
                <div class='content-info'>
                    <p class='date'>{{date}}</p>
                    <div class="title">
                        <p>{{title}}</p>
                    </div>
                    
                    <div class="button">
                        <p>Read more</p>
                        <img class='image-arrow' :src='require("../../assets/svg/arrow.svg")'>
                    </div>
                </div>
            </router-link>
        </div>
</template>

<script>
    export default{
        props:["title","image","resume","date","who","id"],
        methods:{
            changeString:(string)=>{
                return string.replace(/ /g,'-');
            }
        }
    };

</script>

<style scoped lang="scss">
    .date{
        font-size: 14px;
        color:#15c1c6;
    }
    .content-info{
        width: 90%;
        display: flex;
        flex-direction: column;
        
        margin:0 auto;
        padding:5px;
    }
    .image-here{
        width: 100%;
        border-radius: 10px 10px 0 0;
    }
    .button22{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 50px;
        border-radius: 50px;
        background-color: #15c1c6;
        color:white;
    }
    .button{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        p{
            font-size: 14px;
        }
    }
    .title{
        font-size: 18px;
        height: 90px;
        padding:5px 0 0 0;
    }
    .infos{
        display:flex;
        justify-content: center;
        p:first-child{
            color:#15c1c6;
        }
        p{
            margin:0 15px 0 0;
        }
    }
    .arrount-content{
        border:solid 1px rgb(160, 160, 160);
        border-radius:10px;
        width: 265px;
        margin: 0 0 25px 0;
    }
    .image-arrow{
        margin-left: 10px;
    }
    @media only screen and (max-width: 936px) {
        .arrount-content{
        border:solid 1px rgb(160, 160, 160);
        border-radius:10px;
        width: 190px;
        margin: 0 0 25px 0;
        }
    }
    @media only screen and (max-width: 745px) {
        .title{
            font-size: 18px;
            height:initial;
            padding:5px 0 0 0;
        }
    }
    
    
</style>

