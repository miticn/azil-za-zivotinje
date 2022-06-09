<template>
  <div id="nav">
  <nav class="container navbar navbar-expand-lg">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a href="/"><Header></Header></a>
    

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav ms-auto">
            <router-link to="/" :class="($route.name =='home')?'nav-item nav-link active':'nav-item nav-link'">{{mylangData.home}}</router-link>
            <router-link to="/animals" :class="($route.name =='animals')?'nav-item nav-link active':'nav-item nav-link'">{{mylangData.animals}}</router-link>
            <router-link to="/lostpets" :class="($route.name =='lostpets')?'nav-item nav-link active':'nav-item nav-link'">{{mylangData.lostpets}}</router-link>
            <router-link to="/addyourad" :class="($route.name =='addyourad')?'nav-item nav-link active':'nav-item nav-link'">{{mylangData.add}}</router-link>
            <router-link to="/myaccount" :class="($route.name =='myaccount')?'nav-item nav-link active':'nav-item nav-link'">{{mylangData.myaccount}}</router-link>
            <router-link to="/about" :class="($route.name =='about')?'nav-item nav-link active':'nav-item nav-link'">{{mylangData.about}}</router-link>
            <div class="btn-group">
              <button type="button" @click="changeLang('en')" :class="(this.currentLang=='en')?'btn btn-sm active':'btn btn-sm '">EN</button>
              <button type="button" @click="changeLang('sr')" :class="(this.currentLang=='sr')?'btn btn-sm active':'btn btn-sm '">SR</button>
            </div>
        </div>
    </div>
    </div>
  </nav>
 </div>
  <BreadCrumbs class="row justify-content-center mt-4" :crumbs="crumbs" @selected="selected"/>

  <router-view/>

  <div id="footer-div">
    <Footer></Footer>
  </div>
</template>

<style>
body{
  background-color: #f7f7f7;
}
#nav {
  background-color:#2e2044;
  color: #f7bc70;
}
router-link.nav-item{
  color: #f7bc70;
}
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
  color: #2e2044  !important;
  background-color: #f7bc70;
}
nav a.nav-item{
  color: #eccfc9;
}
nav a.nav-item:hover{
  color: #eccfc9;
}
nav button.active{
  background-color:#f7bc70 !important;
}
nav button.btn{
  background-color:gray;
}
a, a:hover{
  color:inherit;
  text-decoration: inherit;
}
</style>

<script>
  import BreadCrumbs from "./components/BreadCrumbs.vue"
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'
  import fullLangData from "./data/nav.js"
  export default {
    name: 'App',
    components: {
      Footer,
      Header,
      BreadCrumbs
    },
    data(){
      return{
        currentLang:'',
        mylangData:'',
        crumbs: ['Home','test'],
      }
    },
    updated(){
      //let routes = this.$route['path'].split('/');
      this.crumbs = [this.$route.name];
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
      changeLang(lan){
        if(lan=="en"){
          this.currentLang="en";
        }
        else if(lan=="sr"){
          this.currentLang="sr"
        }
        localStorage.setItem("lang",this.currentLang);
        this.$router.go();
      }
    }
  }
</script>
