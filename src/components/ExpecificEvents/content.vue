<template>
    <div class="contente">
        <div class='bg'></div>
        <div class='container'>
            <div class='item'>
                <img :src="require('../../assets/events/fotoEvento1.webp')">
                <div class="infos">
                    <div class="name">
                        <p>{{name}}</p>
                    </div>
                    <div class='timeAndDate'>
                        <p><span class='blackbold'>Data:</span> {{dateEvent}}</p>
                        <p><span class='blackbold'>Hora:</span>  {{hora}}</p>
                    </div>
                </div>    
            </div>
            <div class="desc">
                <p class='title'>Descrição:</p>
                <p class='desc-string'>{{desc}}</p> 

                <p class='title'>Local:</p>
                <p class='desc-string'>{{locals}}</p> 
            </div>

            
        </div>
    </div>
</template>

<script>
    export default{
        props:['image','name','desc','dateEvent','hora','locals']
    }
    
</script>

<style scoped lang="scss">
    /* 645 */
    
    .desc-string{
        color: #565656;
    }
    
    .title{
        font-size: 18px;
        margin-top: 20px;
    }
    .desc{
        margin-top:20px;
        p{
            margin-bottom: 10px;
        }
    }
    .infos{
        margin-left: 20px;
    }
    .timeAndDate{
        
        display:flex;
        margin-top:50px;
        color:white;
        p{
            margin-right: 30px;
        }
    }
    .item{
        display: flex;
        flex-wrap: wrap;
    }
    .name{
        p{
            font-size: 30px;
            color:white;
        }
    }
    .bg{
        background-color: #828282;
        width: 100%;
        height: 300px;
        position: absolute;
        top:0;
        z-index: -10;
    }
    
    @media only screen and (max-width: 634px) {
        
        .name, .timeAndDate{
            p{
                color: #565656;
            }
        }
        .timeAndDate{
            margin-top:10px;
        }
        .infos{
            margin: 10px 0;
        }
        
    }
    
</style>
