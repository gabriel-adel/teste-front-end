<template>
  <div class='header'>
    
    <div class='container'>
      
      <div class='contentMenu'>
    
        <div class='logo'>
          <router-link to="/"><img :src="require('../assets/footer-logo.webp')"></router-link>
        </div>
        <div class='nav-bar'>
          <router-link to="/"><div class='button-arround'>
            <p>Home</p>
          </div></router-link>
          <router-link to="/posts"><div class='button-arround'>
            <p>Blog</p>
          </div></router-link>

        </div>
    
      </div>
    
    </div>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  
  .button-options{
    display: none;
    position: absolute;
    bottom: -50px;
    height: 50px;
    width: 100%;
    background-color: blue;
  }
  .button-arround{
    position: relative;
    background-color: #32353d;  
    width: 100px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left:solid 1px #6d6d6d;
    border-right:solid 1px #6d6d6d;
    &:hover{
      background-color:#949494;
    }
    
  }
  .logo{
    margin-right: 100px;
  }
  .header{
    width: 100%;
    height: 80px;
    background-color: #31353d;
    align-items: flex-end;
    display:flex;
    p{
      color:white;
    }
  }
  .contentMenu{
    display:flex;
    flex-wrap: wrap;
  }
  .nav-bar{
    display:flex;
    
  }
  @media only screen and (max-width: 520px) {
    .header{
      height: initial;
    }
    .contentMenu{
      justify-content: center;
      align-items: center;
    }
    .logo{
      margin:0;
    }
  }
  /* 520 */
</style>
