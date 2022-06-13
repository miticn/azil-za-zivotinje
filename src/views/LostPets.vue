<template>
    <br>
    <div id="frame">
        <div class="container">
            <div class="row">
                    <div id="ads" class="col col-sm-8 mr-0 pr-0">
                        <div v-for="ad in allads" :key="ad.user">
                            <one-ad :class="(this.ida==ad.id)?'selected':''" :id="ad.id" @click="showComments(ad.id)" :title="ad.title" :phone="ad.phone" :description="ad.description" :user="ad.user"></one-ad>
                        </div>
                    </div>
                    <div id="comments" class="col col-sm-4 pl-0 comments">
                        <AllComments :key="ida" :ida="ida"></AllComments>
                    </div>
            </div>
        </div>
    </div>
    
    <br><br>
</template>
<style scoped>
    #frame{
        height: 75vh;
    }
    .selected{
        background-color: white;
        border-right: none !important;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    .pr-0{
        padding-right: 0;
    }
    .pl-0{
        padding-left: 0;
    }
    .addAndComm{
        border:solid;
    }
</style>

<script>
import allAds from "../data/ads.js"
import OneAd from '../components/OneAd.vue'
import AllComments from "../components/AllComments.vue"
export default {
    components: { OneAd,AllComments },
    name: 'LostPets',
    data(){
        return{
            allads : '',
            ida:'-1'
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
            var leftHeight = document.getElementById('ads').clientHeight;
            document.getElementById('comments').style.height = leftHeight + 'px';
            this.ida = id;
        }
    }
}
</script>