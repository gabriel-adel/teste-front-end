<template>
    <div class="content-event" >
        <router-link :to="'/event/'+id+'/'+changeString(name)" >
        <div  class="background-image" :style="{backgroundImage:'url('+require(`../../assets/events/${image}`)+')' }">
            <div class='name'>
                <p class='name-string'>{{name}}</p>
                <div class='desc'>
                <p class='desc-string'>{{desc.substr(0,100)}}...</p>
                </div>
            </div>
        </div>
        </router-link>
    </div>
</template>

<script>
    
    export default{
        props:['image','name','desc','id'],
        methods:{
            changeString:(string)=>{
                return string.replace(/ /g,'-');
            }
        }
    };
</script>

<style scoped lang="scss">
    .content-event{
        margin: 5px;
    }
    .name-string{
        font-size: 18px;
        margin-bottom: 10px;
    }
    .desc-string{
        font-size: 16px;
    }
    .desc{
        overflow: hidden;
        height: 0;
        transition: height 0.5s;
    }
    .name{
        width: 100%;
        background-color: rgba(17, 17, 17, 0.623);
        height: 30px;
        padding: 15px 0;
        color:white;
        text-align: center;
        transition: height 0.5s;
    }
    .background-image{
        
        display:flex;
        align-items: flex-end;
        width: 250px;
        height: 250px;
        
        &:hover{
            cursor: pointer;
            
        }
        &:hover .name{
            cursor: pointer;
            height: 100px;
            transition: height 0.5s;
        }
        &:hover .desc{
            overflow: hidden;
            height: 100px;
            transition: height 0.5s;

        }
    }
</style>
