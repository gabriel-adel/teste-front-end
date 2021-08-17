<template>
    <div class="arround">
        <Content :contato='contato' :dateEvent='dateEvent' :desc='drescri' :hora='hora' :locals='locals' :name='name' :image='thumbnail'/>
    </div>
    

</template>

<script>
    import Content from './content.vue'
    import api from '../../api.js';
    export default{
        props:['id'],
        components:{
            Content
        },
        data:()=>{
            return {
                contato: "",
                dateEvent: "",
                drescri: "",
                hora: "",
                locals: "",
                name: "",
                thumbnail: "",
                events:[]
            }
        },
        mounted(){
            api(`/event/events/${this.id}`,"get",'')
            .then((res)=>{
                this.contato= res.data[0].contato;
                this.dateEvent= res.data[0].dateEvent;
                this.drescri= res.data[0].drescri;
                this.hora= res.data[0].hora;
                this.locals= res.data[0].locals;
                this.name= res.data[0].name;
                this.thumbnail= res.data[0].thumbnail;
            })
        },
        
    }
</script>

<style scoped lang="scss">
    .moreEvents{
        display:flex;
        margin:20px 0;
    }
    .arround{
        margin:50px auto;
    }
    

</style>
