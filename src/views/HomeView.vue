<template>
  <div class="home">
     <div class="row">
       <div class="col-sm-6">
          <h1 class="align-middle pt-5 pb-5">{{mylangData.title}}</h1>
          <router-link to="/addyourad" class="nav-item nav-link mx-auto">
            <button class="btn btn-lg btn-1 text-wrap">
            Pronađi izgubljenog ljubimca.
            </button>
          </router-link>
          <router-link to="/lostpets" class="nav-item nav-link mx-auto">
            <button class="btn btn-lg btn-2 text-wrap">Pogledaj izgubljene ljubimce.</button>
          </router-link>

       </div>
       <div class="col-sm-6">
        <img src="../assets/lara.jpg" alt="">
       </div>
     </div>
    <img alt="" src="../assets/background.jpg">
  </div>
</template>

<style scoped>
  h1 {
    font-weight: bold;
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
export default {
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
}
</script>