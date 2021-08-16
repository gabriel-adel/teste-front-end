<template>
    <div class="container">
        <div class="content">
            <Event v-for="event in events" :key="event.id" :id='event.id' :image="event.thumbnail" :name='event.name' :desc='event.drescri'/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
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
            axios.get(`https://531hg34i78.execute-api.us-east-1.amazonaws.com/dev/events`)
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