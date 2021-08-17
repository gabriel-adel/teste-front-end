<template>
    <Title title='Categories'/>
    <div class='content-categories'>
        <p @click="$emit('selectCategory')"  v-for="category in categories" :key="category.id"  ><router-link :to="'/posts/category/'+category.id+'/'+category.categotia">{{category.categotia}}</router-link></p>
    </div>
</template>

<script>
    import api from '../../api.js';
    import Title from './Title.vue'
    export default{
        data(){
            return {
                categories:[],
            }
        },
        components:{
            Title
        },
        created(){
            api("blog/get-category","get",'')
            .then((res)=>{
                
                this.categories = res.data.slice(0,10);
            })
        }
    }
</script>

<style scoped lang="scss">
    
    .content-categories{
        a{
            color:#15c1c6;
        }
        p{
            margin-bottom:10px;
        }
    }
</style>
