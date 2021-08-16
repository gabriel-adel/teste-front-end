<template>
    <div class="content">
        <img :src="require('../../assets/peoples/'+image)">
        <div class='infos'>
            <div class="name">
                <p>{{name}}</p>
            </div>
            <div class="career">
                {{career}}
            </div>
            <div class="profission">
                {{profession}}
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:['image','name','career','profession']
    }
</script>

<style scoped lang="scss">
    .content{
        display:flex;    
        flex-wrap: wrap;
        padding:20px 0;
        &:nth-child(2n){
            flex-direction: row-reverse;
            
        }
    }
    img{
        width:40%;
        border-radius: 10px;
    }
    .name{
        font-size: 30px;
        font-weight: bold;
        color: #292929;
    }
    .career{
        font-size: 22px;
        font-weight: 500;
        color: #4f5050;
    }
    .profission{
        color: #818383;
        padding-right: 20px;
    }
    .infos{
        flex:50%;
        padding:0 30px;
        div{
            margin-bottom:25px;
        }
    }
    @media only screen and (max-width: 666px) {
        img{
            width:100%;
            margin-bottom:15px;
        }
    }
    
</style>
