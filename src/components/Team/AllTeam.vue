<template>
    <div class='container'>
        <People v-for="people in team" :key="people.id" :image='people.thumbnail' :name="people.name" :career="people.career" :profession="people.profession"/>
    </div>
</template>

<script>
    import People from './People.vue'
    import api from '../../api.js'
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
            api("team/peoples","get",'')
            .then((res)=>{
                this.team = res.data;
                
            })
        },
    }

</script>

<style scoped lang="scss">
    
</style>
