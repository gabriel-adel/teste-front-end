<template>
    <div class="container">
        <div class="content">
            <Event v-for="event in events" :key="event.id" :id='event.id' :image="event.thumbnail" :name='event.name' :desc='event.drescri'/>
        </div>
    </div>
</template>

<script>
    import api from '../../api.js'
    import Event from './event.vue'
    export default{
        components:{
            Event,
            
        },
        data:()=>{
            return{
                events:[]
            }
        },
        mounted(){
            api("event/events","get",'')
            .then((res)=>{
                this.events = res.data;
                
            })
            
        },
    };
</script>

<style scoped lang="scss">
    .content{
        margin:30px auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>