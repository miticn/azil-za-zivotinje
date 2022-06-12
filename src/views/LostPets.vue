<template>
    <div class="container">
        <div class="row">
            <div class="col col-sm-8">
                <div v-for="ad in allads" :key="ad.user">
                    <one-ad id="" @click="showComments(id)" :title="ad.title" :phone="ad.phone" :description="ad.description" :user="ad.user"></one-ad>
                </div>
            </div>
            <div class="col col-sm-4">
                <AllComments></AllComments>
            </div>
        </div>
    </div>
</template>


<script>
import allAds from "../data/ads.js"
import OneAd from '../components/OneAd.vue'
import AllComments from "../components/AllComments.vue"
export default {
    components: { OneAd,AllComments },
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
    },
    methods:{
        showComments(id){
            alert(id);
        }
    }
}
</script>