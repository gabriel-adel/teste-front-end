<template>
    <Title title='Share'/>
    <form class='form'>
        <input ref="input" v-model="share" class='input' type='text'>
        <div  class='button'>
            <img :src='require("../../assets/svg/share.svg")'>
        </div>
    </form>
</template>
<script>

import Title from './Title.vue'
export default{
    components:{
        Title
    },
    data:()=>{
        return{
            share:''
        }
    },
    
}
</script>
<style scoped lang="scss">
    .form{
        display:flex;
        margin:0 0 20px 0;  
    }
    .input{
        width:80%;
        border-radius: 7px 0 0 7px;
        height: 30px;
        outline: none;
    }
    .button{
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #15c1c6;
        width:60px;
        height: 36px;
        border-radius: 0 7px 7px 0;
    }
</style>