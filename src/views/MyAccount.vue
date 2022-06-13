<template>
    <div class="row">
      <div class="col col-sm-12">
        <h3>Oglasi: </h3>
        <div v-for="ad in allads" :key="ad.user">
        <div v-if="ad.user == 'myUser'">
          <one-ad :id="ad.id" :title="ad.title" :phone="ad.phone" :description="ad.description" :user="ad.user"></one-ad></div>
        </div>
      </div>
     </div>
</template>

<script>
    import OneAd from "../components/OneAd.vue"
    import allAds from "../data/ads.js"
    export default {
        components: { OneAd },
        data(){
            return{
                allAds:''
            }
        },
        created(){
            if(localStorage.getItem('allAds')==null){
                localStorage.setItem('allAds', JSON.stringify(allAds))
            }
            this.allads=JSON.parse(localStorage.getItem('allAds'))
        }
    }
</script>