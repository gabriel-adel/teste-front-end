<template>
    <div class='bc'>
        <div class="container">
            <div class="image" @click="showImage(image.name)" >
                <img v-for="image in images" :key="image.id"  :src="require('../../assets/gallery/'+image.name)">
            </div>
        </div>
        
    </div>
    <!-- <div v-if='showModal' class='modal'>
        <div class="content-modal">
            <div @click='closeImage()' class="close">
                <p>X</p>
            </div>
            <div class="image">
                <img />
            </div>
        </div>
    </div> -->
</template>

<script>
    import axios from 'axios'
    export default{
        data:()=>{
            return{
                images:[],
                showModal:false,
                imageHere:''
            }
        },
        mounted(){
            axios.get(`https://lxe83jprhe.execute-api.us-east-1.amazonaws.com/dev/gellery`)
            .then((res)=>{
                this.images = res.data;
            })
        },
        methods: {
            showImage(name) {
                
                this.imageHere = name;
                this.showModal=true;
            },
            closeImage() {
                this.showModal=false;
                this.imageHere = '';
            }
        }
    };
</script>

<style scoped lang="scss">
    
    .bc{
        background-color: black;
    }
    .modal{
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(129, 129, 129, 0.466);
        top:0;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .close{
        margin:20px 0 0 20px;
        font-size: 20px;
        font-weight: bold;
        &:hover{
            cursor: pointer;
        }
    }
    .content-modal{
        width: 60%;
        margin:0 auto;
        background-color: #fafafa;
        height: 600px;
        
    }
    
    

    .image{
        display:flex;
        flex-wrap: wrap;
    }
    img{
        height: 200px;
        margin:10px;
        flex-grow: 1;
    }
</style>