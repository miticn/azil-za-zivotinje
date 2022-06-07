<template>

  <div id="header-div">
    <Header></Header>
  </div>
  <div>
    <nav>
    <router-link to="/">{{mylangData.home}}</router-link> |
    <router-link to="/animals">{{mylangData.animals}}</router-link> |
    <router-link to="/lostpets">{{mylangData.lostpets}}</router-link> |
    <router-link to="/addyourad">{{mylangData.add}}</router-link> |
    <router-link to="/myaccount">{{mylangData.myaccount}}</router-link> |
    <router-link to="/about">{{mylangData.about}}</router-link>
  </nav>
  <button @click="changeLang()">Lang</button>
  <router-view/>
  </div>
  <div id="footer-div">
    <Footer></Footer>
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
nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'
  import fullLangData from "./data/nav.js"
  export default {
    name: 'App',
    components: {
      Footer,
      Header
    },
    data(){
      return{
        currentLang:'',
        mylangData:''
      }
    },
    created(){
      this.currentLang = localStorage.getItem("lang");
      if(this.currentLang==null) {
        localStorage.setItem("lang","sr");
        this.currentLang = "sr";
      }
      this.mylangData = fullLangData[this.currentLang];
    },
    methods:{
      changeLang(){
        this.currentLang = localStorage.getItem("lang");
        if(this.currentLang=="en"){
          this.currentLang="sr";
        }
        else{
          this.currentLang="en"
        }
        localStorage.setItem("lang",this.currentLang);
        this.$router.go();
      }
    }
  }
</script>
