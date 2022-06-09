<template>
    <div>
        
    </div>
</template>

<script>
import allAds from "../data/ads.js"
export default {
    name: 'LostPets',
    created(){
            if(localStorage.getItem('allAds')==null){
                localStorage.setItem('allAds', JSON.stringify(allAds))
            }
            this.allads=JSON.parse(localStorage.getItem('allAds'))
        }
}
</script>