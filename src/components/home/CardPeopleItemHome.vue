<template>
    <Title title="read our" subTitle="Client Testimonials"/>
    <div class="content-peoples container">
        <CardPeople image="test1_03.webp" name='Richard Lesberry' desc='The investment company I own once signed up for Globaly consultations. That happened back in 1993. Since then, we’ve been showing a steady year-by-year growth for 23 years long, in big part thanks to timely and spot-on advice by Globaly professionals.'/>
        <CardPeople image="test2_03.png" name='Vanessa Hayes' desc='As an FMCG company, we always faced a tough competition in our field of market. It gotten only worse since the Great Recession hit us in 2008. But with efficient advice by this renown company, we were able to Winter back from the red digits zone to a green one!'/>
    </div>
</template>

<script>

import Title from './Title.vue'
import CardPeople from './CardPeople.vue'
export default{
    props:[],

    components:{
        CardPeople,
        Title
    }
  
}
</script>
<style scoped lang="scss">
    .content-peoples{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>