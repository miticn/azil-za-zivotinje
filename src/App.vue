<template>
  <div id="navigation">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    
    <div id="footer-div">
      <Footer></Footer>
    </div>
  </div>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#footer-div {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  text-align: center;
}
</style>

<script>
  import Footer from './components/Footer.vue'

  export default{
    name: 'App',
    components: {
      Footer
    }
  }
</script>
