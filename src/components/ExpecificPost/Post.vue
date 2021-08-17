<template>
    <div class="arround-posts">
        <div class="">
            <img @click="$router.go(-1)" class='arrow-back' :src="require('../../assets/svg/arrow.svg')">
        </div>
        <div class='posts'>
            <ContentPost :title="title" :image="image" :date="date" :who="who" :content="content"/>
        </div>
    </div>
</template>

<script>
    
    import api from '../../api.js';
    import ContentPost from './ContentPost.vue'
    export default{
        props:['id'],
        
        components:{
            ContentPost,
            
        },
        data () {
            return {
                title:'',
                image:'',
                date:'',
                who:'',
                content:'',
            }
        },
        mounted(){
            api(`blog/get-one-posts/${this.id}`,"get",'')
            .then((res)=>{
                this.title=res.data[0].title;
                this.image=res.data[0].thumbnail;
                this.date=res.data[0].dataUpdate;
                this.who=res.data[0].who;
                this.content=res.data[0].post;
            })
        
        },
    };
</script>

<style scoped lang="scss">
    .arrow-back{
        transform: rotate(180deg);
        width: 25px;
    }
    .posts{
        width: 100%;
    }
    .item-menu{
        padding: 10px 0;
        margin-bottom: 10px;
    }
    .arrount-menu{
        
        width: 35%;
        
    }
    .arround-posts{
        display:flex;
        margin-top: 50px;
    }
</style>