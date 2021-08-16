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
          <router-link to="/posts/"><div class='button-arround'>
            <p>Blog</p>
          </div></router-link>
          <router-link to="/gallery/"><div class='button-arround'>
            <p>Gallery</p>
          </div></router-link>
          <router-link to="/events/"><div class='button-arround'>
            <p>Events</p>
          </div></router-link>
          <router-link to="/team/"><div class='button-arround'>
            <p>Team</p>
          </div></router-link>
        </div>

        <div class='menuBar' @click="showModal">
            <div class='frist'></div>
            <div class='second'></div>
            <div class='thrid'></div>
        </div>
        <div v-if='showMenu' class="menu">
          <div>
            <router-link to="/"><img :src="require('../assets/footer-logo.webp')"></router-link>
          </div>

          <router-link to="/"><div @click="closeModal()" class='button-arround-mobile'>
            <p>Home</p>
          </div></router-link>
          <router-link to="/posts/"><div @click="closeModal()" class='button-arround-mobile'>
            <p>Blog</p>
          </div></router-link>
          <router-link to="/gallery/"><div @click="closeModal()" class='button-arround-mobile'>
            <p>Gallery</p>
          </div></router-link>
          <router-link to="/events/"><div @click="closeModal()" class='button-arround-mobile'>
            <p>Events</p>
          </div></router-link>
          <router-link to="/team/"><div @click="closeModal()" class='button-arround-mobile'>
            <p>Team</p>
          </div></router-link>
        
        </div>
      </div>
    
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      showMenu:false
    }
  },
  methods:{
    showModal(){
      this.showMenu = !this.showMenu;
    },
    closeModa(){
      this.showMenu = false;
    }
  }
}
</script>

<style scoped lang="scss">
  .menu{
    background-color: rgb(75, 75, 75);
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    z-index: 999;
    div{
      margin-bottom:20px;
    
    }
  }
  .menuBar{
    position: absolute;
    display:none;
    z-index: 1000;
    right: 20px;
    top:45px;
    div{
      width: 30px;
      height: 5px;
      background-color: white;
      margin-bottom: 5px;
      border-radius: 10px;
      
    }
    
    &:hover{
      cursor: pointer;
    }
  }
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
    width: 100%;
    
  }
  .nav-bar{
    display:flex;
  }

  @media only screen and (max-width: 887px) {
    .contentMenu{
      display:flex;
      flex-wrap: wrap;
      width: 100%;
      align-items: center;
      
    }
    .nav-bar{
      display:none;
    }
    .menuBar{
      display: block;
    }
  }
  
  @media only screen and (max-width: 520px) {
    .menuBar{
      top:15px;
    }
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
