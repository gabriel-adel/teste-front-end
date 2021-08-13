<template>
    <div class="arround-posts">
        <div class='posts'>
            <ContentPost v-for="post in filterBlogs" :key="post.id" :id="post.id"  :title="post.title" :image="post.thumbnail" :date="post.dataUpdate" :who="post.who"/>
        </div>
        <div class="arrount-menu">
            <div class="menu">
                <Title title='Share'/>
                <form class='form'>
                    <input ref="input" v-model="share" class='input' type='text'>
                    <div  class='button'>
                        <img :src='require("../../assets/svg/share.svg")'>
                    </div>
                </form>
                <RecentsPost />
                <categories v-on:selectCategory ='selectCategory'/>
                <Tags v-on:selectTag='selectTag' />
            </div>
        </div>
        
    </div>
</template>

<script>
    import Title from '../menuPost/Title.vue'
    import Categories from '../menuPost/Categories.vue'
    import Tags from '../menuPost/Tags.vue'
    
    import RecentsPost from '../menuPost/RecentsPost.vue'
    import ContentPost from './ContentPost.vue'
    import api from '../../api.js';
    export default{
        data () {
            return {
                posts:[],
                share:''
            }
        },
        components:{
            Title,
            ContentPost,
            Categories,
            Tags,
            // SharePost,
            RecentsPost,
            
        },
        created(){
            api("get-posts","get",'')
            .then((res)=>{
                this.posts = res.data.slice(0,10);
            })
        },
        computed:{
            filterBlogs(){
                return this.posts.filter((post)=>{
                    return post.title.match(this.share);
                })
            }
        },
        methods:{
            selectTag(){
                this.posts=[];
                api(`/get-post-by-tag/${this.$route.params.id}`,"get",'')
                .then((res)=>{
                    this.posts = res.data.slice(0,10);
                })
            },
            selectCategory(){
                this.posts=[];
                api(`/get-post-by-category/${this.$route.params.id}`,"get",'')
                .then((res)=>{
                    this.posts = res.data.slice(0,10);
                })
            }
        },
        
        
    };
</script>

<style scoped lang="scss">

    .form{
        display:flex;
        margin:0 0 20px 0;  
    }
    .input{
        width:80%;
        border-radius: 7px 0 0 7px;
        height: 30px;
        outline: none;
    }
    .button{
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #15c1c6;
        width:60px;
        height: 36px;
        border-radius: 0 7px 7px 0;
    }


    .posts{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
        height: 300px;
        float: left;
        clear: both;
    }
    .menu{
        width: 95%;
        margin:0 auto;
        
    }
    .item-menu{
        border-top: solid 1px black;
        
        padding: 10px 0;
        margin-bottom: 10px;
    }
    .arrount-menu{
        /* width: 30%; */
        width:350px;
    }
    .arround-posts{
        display:flex;
        margin: 50px 0;
    }
    
    
    @media only screen and (max-width: 673px) {
        .posts{
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            width: 100%;
            height: initial;
            float: left;
            clear: both;
        }
    }
    @media only screen and (max-width: 414px) {
        .arrount-menu{
            display:none;
        }
        
    }
    
</style>
