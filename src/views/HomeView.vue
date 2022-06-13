<template>
  <div class="home">
     <div class="row">
       <div class="col col-sm-6">
          <h1 class="align-middle pt-5 pb-5">{{mylangData.title}}</h1>
          <router-link to="/addyourad" class="nav-item nav-link mx-auto">
            <button class="btn btn-lg btn-1 text-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
                <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
                <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
              </svg>
              <h5 v-if="currentLang == 'sr'">Izgubio/la si ljubimca?</h5>
              <h5 v-else>You lost a pet?</h5>
            </button>
          </router-link>
          <router-link to="/lostpets" class="nav-item nav-link mx-auto">
            <button class="btn btn-lg btn-2 text-wrap">
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
                <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
              </svg>

              <h5 v-if="currentLang == 'sr'">Izgubljeni ljubimci</h5>
              <h5 v-else>Lost pets</h5>
            </button>
          </router-link>

       </div>
       <div class="col col-sm-6">
        <img src="../assets/lara.jpg" alt="">
       </div>
     </div>
     <div class="row">
      <div class="col col-sm-12">
        <div v-for="ad in allads" :key="ad.user">
          <one-ad :id="ad.id" :title="ad.title" :phone="ad.phone" :description="ad.description" :user="ad.user"></one-ad>
        </div>
      </div>
     </div>
    <img alt="" src="../assets/background.jpg">
  </div>
</template>

<style scoped>
  h1 {
    font-weight: bold;
  }

  svg{
    width: 50%;
  }
  button.btn-1{
    background-color:#f7bc70;
    height: 0;
    display: inline-block;
    padding-bottom: 25%;
    max-width: 25%;
    width: auto;
    font-size:1.1rem;

  }
  button.btn-2{
    background-color: gray;
    height: 0;
    display: inline-block;
    padding-bottom: 25%;
    max-width: 25%;
    width: auto;
    font-size:1.1rem;
    
  }
  a.nav-item{
    display:inline;
  }

</style>

<script>
import fullLangData from "../data/home.js"
import OneAd from "../components/OneAd.vue"
import allAds from "../data/ads.js"
export default {
  components: { OneAd },
  data(){
      return{
        currentLang:'',
        mylangData:'',
        allads:''
      }
    },
    created(){
      this.currentLang = localStorage.getItem("lang");
      if(this.currentLang==null) {
        localStorage.setItem("lang","sr");
        this.currentLang = "sr";
      }
      this.mylangData = fullLangData[this.currentLang];

      if(localStorage.getItem('allAds')==null){
            localStorage.setItem('allAds', JSON.stringify(allAds))
      }
      this.allads=JSON.parse(localStorage.getItem('allAds'))
      this.allads= this.allads.slice(0,3);
    },
}
</script>