<template>
    
        <div class="content">
            <div class="image">
                <img :src='require("../../assets/"+image)'>
            </div>
            <div class="show-people">
                <div class="name">
                    <p>{{name}}</p>
                </div>
                <div class="desc spaceBetweenLine">
                    <p>{{desc}}</p>
                </div>
            </div>
        </div>
    
</template>

<script>
export default {
    props:["image",'name','desc']
}
</script>

<style scoped lang="scss">
    .content{
        display: flex;
        padding: 10px;
        flex:40%
    }
    .desc{
        p{
            color:#818383
        }
    }
    .image{
        margin: 20px;
    }
    .name{
        p{
            font-size: 20px;
            font-weight: bold;
        }
    }
    .show-people{
        width: 60%;
        margin:0 auto;
        div{
            margin:30px 0;
        }
    }
</style>
