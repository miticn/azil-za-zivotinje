<template>
  <div id="nav">
  <nav class="container navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a href="/"><Header></Header></a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav ms-auto dropdown navbar">
            <router-link to="/" :class="($route.name =='home')?'nav-item nav-link active':'nav-item nav-link'">{{mylangData.home}}</router-link>



            <div class="btn-group">
              <router-link to="/animals" :class="($route.name =='animals')?'nav-item nav-link active':'nav-item nav-link'">{{mylangData.animals}}</router-link>
              <a href="#" class="btn btn-select dropdown-toggle dropdown-toggle-split" role="button" id="dropdownMenuLink" aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="/animals/dog/">Dogs</a></li>
                <li><a class="dropdown-item" href="/animals/cat/">Cats</a></li>
                <li><a class="dropdown-item" href="/animals/bird/">Birds</a></li>
              </ul>
            </div>




            <router-link to="/lostpets" :class="($route.name =='lostpets')?'nav-item nav-link active':'nav-item nav-link'">{{mylangData.lostpets}}</router-link>
            <router-link to="/addyourad" :class="($route.name =='addyourad')?'nav-item nav-link active':'nav-item nav-link'">{{mylangData.add}}</router-link>
            <router-link to="/myaccount" :class="($route.name =='myaccount')?'nav-item nav-link active':'nav-item nav-link'">{{mylangData.myaccount}}</router-link>
            <router-link to="/about" :class="($route.name =='about')?'nav-item nav-link active':'nav-item nav-link'">{{mylangData.about}}</router-link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="btn-group">
              <button type="button" @click="changeLang('en')" :class="(this.currentLang=='en')?'btn btn-sm active':'btn btn-sm '">EN</button>
              <button type="button" @click="changeLang('sr')" :class="(this.currentLang=='sr')?'btn btn-sm active':'btn btn-sm '">SR</button>
            </div>
        </div>
    </div>
    </div>
  </nav>
 </div>
  <BreadCrumbs class="row justify-content-center mt-4" :routes="routes" :crumbs="crumbs" @selected="selected"/>

  <router-view/>
  <div id="banner-div">
      <Banner></Banner>
  </div>
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
  left: 0;
  bottom: 0;
  width: 100%;
  height: 23px;
  text-align: center;
  background-color: #2e2044;
}
#banner-div {
  width: 100%;
  padding-block: 10px;
  background-color: #2e2044;
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
a.dropdown-toggle:link{
  color:#f7bc70;
  border-radius: 0;
  text-decoration: none;
  outline: none !important;
  box-shadow: none;
}
a.dropdown-toggle:visited{
  color:#f7bc70;
  text-decoration: none;
  outline: none
}
a.dropdown-toggle:hover{
  color:#f7bc70;
  text-decoration: none;
  outline: none
}
a.dropdown-toggle:active{
  color:#f7bc70;
  text-decoration: none;
  outline: none 
}
</style>

<script>
  import animals from "./data/animals.js"
  import BreadCrumbs from "./components/BreadCrumbs.vue"
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'
  import Banner from './components/Banners.vue'
  import fullLangData from "./data/nav.js"
  export default {
    name: 'App',
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                document.title = 'Sigurna kućica' + ((to.meta.title != null)?(' | '+to.meta.title):'');
            }
        },
    },
    components: {
      Footer,
      Header,
      BreadCrumbs,
      Banner
    },
    data(){
      return{
        currentLang:'',
        mylangData:'',
        crumbs: [],
        routes: []
      }
    },
    updated(){
      this.crumbs = this.$route['meta']['crumbs'];
      this.routes = this.$route['path']
      if(this.$route['path'].startsWith('/animals') && (this.$route['path']!='/animals'||this.$route['path']!='/animals/')){
          if(this.$route['path'].includes('dog')){
            this.crumbs = ['Animal Groups', 'Dogs'];
            this.routes = [];
          }
          if(this.$route['path'].includes('cat')){
            this.crumbs = ['Animal Groups', 'Cats']
          }
          if(this.$route['path'].includes('bird')){
            this.crumbs = ['Animal Groups', 'Birds']
          }
          if(this.$route['name']=='One Animal'){
            let id = this.$route.params.id;
            let animal = animals.find(animal=>animal.id==id);
            this.crumbs[2] = animal.name;
          }
        
      }else {
        this.crumbs = this.$route['meta']['crumbs'];
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
