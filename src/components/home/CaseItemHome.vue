<template>
    <div class='side-side'>
        <img class='image' :src="require('../../assets/image39.webp')">
        <div class='container'>
            <div class="backgroundImage" :style="{ backgroundImage: 'url(' + require('../../assets/image40.webp') + ')' }">
                <div class='content' >
                    <div class='title'>
                        <p>Case Studies & Success</p>
                    </div>
                    <div class='subTitle spaceBetweenLineTwo'>
                        <p>Any company level of expertise, trustworthiness or popularity can be easily checked when it comes to proven cases…</p>
                    </div>
                    <div class='AnotherSubTitle spaceBetweenLine'>
                        <p>We stockpiled hundreds of successful business consulting operations throughout the 25 years long history we’re in this business. Here are the best examples of our diligent and efficient advice for small and big companies.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>
<script>
    
export default{
    props:['image'],

    components:{
    }
  
}
</script>
<style scoped lang="scss">
    .container{
        flex:50%;
    }
    .backgroundImage{
        height: 100%;
        
    }
    .side-side{
        display:flex;
        flex-wrap: wrap;
    }
    
    .image{
        flex:50%;
        width: 50%;
    }
    .title{
        font-size: 45px;
    }
    .subTitle{
        font-size: 30px;
    }
    
    .content{
        
        div{
            margin:20px 0;
            p{
                color:white;
            }
        }
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;
        margin: 0 auto;
    }
    @media only screen and (max-width: 676px) {
        .image{
            display:none;
        }
    }
</style>