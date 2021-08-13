<template>
    <div class='title'>
        <p>{{title}}</p>
    </div>
    
</template>

<script>
    export default{
        props:['title']    
    };
</script>

<style scoped lang="scss">
    .title{
        padding:20px 0;
        font-size: 25px;
        border-top: solid 1px rgb(150, 149, 149);
    }
</style>
