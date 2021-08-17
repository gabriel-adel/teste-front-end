<template>
    <Title title='Tags'/>
    <div class='tags'>
        <p @click="$emit('selectTag')" v-for="tag in tags" :key="tag.id" ><router-link :to="'/posts/tag/'+tag.id+'/'+tag.tag">{{tag.tag}}</router-link></p>
    </div>
    
    
</template>

<script>
    import api from '../../api.js';
    import Title from './Title.vue'
        export default{
        data () {
            return {
                tags:[],
            }
        },
        components:{
            Title
        },
        created(){
            api("blog/get-tags","get",'')
            .then((res)=>{
                this.tags = res.data.slice(0,10);
            })
        },
    };
</script>

<style scoped lang="scss">

    .tags{
        display: flex;
        flex-wrap: wrap;
        p{
            margin: 0 15px 10px 0;

        }
    }
</style>
