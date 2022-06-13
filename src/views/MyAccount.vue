<template>
<div class="container">
    <div class="row">
        <div class="col col-sm-2">
      </div>
        <div class="col col-sm-8">
            <h1 v-if="currentLang=='sr'">Oglasi: </h1>
            <h1 v-else>Ads: </h1>
            <div v-for="ad in allads" :key="ad.user">
                <div v-if="ad.user == 'myUser'">
                    <one-ad :id="ad.id" :title="ad.title" :phone="ad.phone" :description="ad.description" :user="ad.user" :del=true></one-ad>
                </div>
            </div>
            <h1 v-if="currentLang=='sr'">Komentari: </h1>
            <h1 v-else>Comments: </h1>
            <myAccComments :allAds="this.allads" ></myAccComments>
        </div>
        <div class="col col-sm-2">
      </div>
    </div>
</div>
</template>

<script>
    import OneAd from "../components/OneAd.vue"
    import allAds from "../data/ads.js"
    import myAccComments from '../components/myAccComments.vue'
    export default {
        components: { OneAd,myAccComments },
        data(){
            return{
                allAds:'',
                currentLang:''
            }
        },
        created(){
            if(localStorage.getItem('allAds')==null){
                localStorage.setItem('allAds', JSON.stringify(allAds))
            }
            this.allads=JSON.parse(localStorage.getItem('allAds'))
            
            this.currentLang = localStorage.getItem("lang");
        }
    }
</script>