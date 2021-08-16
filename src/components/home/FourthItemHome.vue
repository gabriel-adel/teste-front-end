<template>
    <div :style="{ backgroundImage: 'url(' + require('../../assets/image44.webp') + ')' }" class='backgroundImage'>
        <p>As we’re managing the aspects of your business,</p>
        <p>Your revenue continues to grow.</p>

    </div>
    
</template>
<script>

export default{
    props:[],

    components:{
        
        }
  
}
</script>
<style scoped lang="scss">
        
    .backgroundImage{
        p{
            color:white;
            margin: 15px 0;
        }
        p:first-child{
            font-size: 35px;
        }
        
        p:last-child{
            font-size: 60px;
            font-weight: bold;
        }
        
        padding: 50px 0;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
</style>