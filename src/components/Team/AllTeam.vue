<template>
    <div class='container'>
        <People v-for="people in team" :key="people.id" :image='people.thumbnail' :name="people.name" :career="people.career" :profession="people.profession"/>
    </div>
</template>

<script>
    import People from './People.vue'
    import axios from 'axios';
    export default{
        components:{
            People,
        },
        data:()=>{
            return{
                team:[]
            }
        },
        mounted(){
            axios.get(`https://ejmbd38fk6.execute-api.us-east-1.amazonaws.com/dev/peoples`)
            .then((res)=>{
                console.log(res.data);
                this.team = res.data;
            })
        },
    }

</script>

<style scoped lang="scss">
    
</style>
