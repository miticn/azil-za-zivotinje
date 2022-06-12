<template>
    <div class="container">
        
        <div v-for="ad in allads" :key="ad.user">
            <h1>{{ad.title}}</h1>{{ad.user}} 
            <h4>- {{ad.phone}} - </h4>
            <p>{{ad.description}}</p>
        </div>
    </div>
</template>

<script>
import allAds from "../data/ads.js"
export default {
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