<template>
    <div class="container">
        <div v-for="ad in allads" :key="ad.user">
            <one-ad :title="ad.title" :phone="ad.phone" :description="ad.description" :user="ad.user"></one-ad>
        </div>
    </div>
</template>


<script>
import allAds from "../data/ads.js"
import OneAd from '../components/OneAd.vue'
export default {
  components: { OneAd },
    name: 'LostPets',
    data(){
        return{
            allads : ''
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