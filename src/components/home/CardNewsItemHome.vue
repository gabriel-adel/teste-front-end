<template>
    <Title  title='Browse our' subTitle='Business Tips'/>

    <div  class='contentNews container'>
        <CardNews v-for="post in posts" :key="post.id" :id="post.id" :date='post.dataUpdate' :who="post.who" :image='post.thumbnail' :title='post.title' :resume='post.resume'/>
        
    </div>
</template>
<script>
import Title from './Title.vue'
import CardNews from './CardNews.vue'
import api from '../../api.js';

export default{
    data () {
        return {
            posts:[],
        }
    },
    components:{
        CardNews,
        Title
    },
    mounted(){
        api("blog/get-posts","get",'')
        .then((res)=>{
            this.posts = res.data.slice(0,3);
        })
    },
    
    
}
</script>
<style scoped lang="scss">
    .contentNews{
        flex-wrap: wrap;
        display:flex;
        justify-content: space-evenly;
        margin:50px auto;
    }
</style>