<template>
  <div class='footer'>
      <div class="img">
        <img :src='require("../assets/footer-logo.webp")'/>
      </div>
      <p class='copy'>(c)2021 Globaly. All rights reserved. | Privacy Policy</p>

  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  .footer{
    clear:both;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    background-color: #31353d;
    color:white
  }
  .copy{
    padding:0 10px;
    text-align: center;
    margin-top:10px;
  }
</style>
