<template>
    <Title title='Recent Post'/>
    <div>
        <RecentPost  v-for="post in posts" :key="post.id" :id="post.id" :image="post.thumbnail" :title="post.title" :date="post.dataUpdate"/>
    </div>
</template>

<script>
    import api from '../../api.js';
    import RecentPost from './RecentPost.vue'
    import Title from './Title.vue'
    export default{
        components:{
            RecentPost,
            Title
        },
        data () {
            return {
                posts:[],
                x:[]
            }
        },
        created(){
            api("blog/get-posts","get",'')
            .then((res)=>{
                this.posts = res.data.slice(0,2);
                this.x = this.posts[0]
            })
        },
    };
</script>

<style scoped lang="scss">
    
    .title{
        font-size: 25px;
        margin-bottom: 20px;
    }
</style>
