<template>
<!--<div>{{ $route.params.id }}</div>-->
<div class="row carousel-row">
    <button id="cb" class="carousel-control-prev carousel-dark col col-sm-1 col-1" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <div id="carouselExampleIndicators" class="carousel mx-auto col col-sm-10" data-bs-ride="true">
        <div class="carousel-inner">
            <div v-for="(asset, index) in myAnimal.gallery" :key="asset" :class="(index==0)?'carousel-item active':'carousel-item'">
                <img :src="`${publicPath}`+myAnimal.path+asset" class="d-block w-100" :alt="index">
            </div>
            <div class='carousel-item ratio ratio-16x9' id="carousel-video">
               <iframe id="video" :src="myAnimal.yt"></iframe>
            </div>
        </div>
        
    </div>
    <button id="cb" class="carousel-control-next align-middle carousel-dark col col-sm-1 col-1" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>

</div>
<div class="row">
    <div class="col col-sm-8 offset-2">
        <div class="details">
        <h5 v-if="this.currentLang=='en'">Name: </h5>
        <h5 v-else>Ime: </h5>
        <p>{{this.myAnimal.name}}</p>
        <h5 v-if="this.currentLang=='en'">Description: </h5>
        <h5 v-else>Opis: </h5>
        <p v-if="this.currentLang=='en'">{{this.myAnimal.desc_en}}</p>
        <p v-else>{{this.myAnimal.desc_sr}}</p>
        <h5 v-if="this.currentLang=='en'">Weight: </h5>
        <h5 v-else>Težina: </h5>
        <p>{{this.myAnimal.weight}}</p>
        <h5 v-if="this.currentLang=='en'">Age: </h5>
        <h5 v-else>Starost: </h5>
        <p v-if="this.currentLang=='en'">{{this.myAnimal.age}} years old</p>
        <p v-else>{{this.myAnimal.age}} godina</p>
        </div>
    </div>
    
</div>
</template>

<style scoped>
.carousel-row{
    max-height: 80vh;
    width: auto;
    background-color: white;

}
.carousel,.item,.active {
   height:80vh;
   width: auto;
 }
.carousel-inner .carousel-indicators{
    height:80vh;
    width: auto;
}
#cb{
    position: absolute;
    background-color :transparent;
    position: relative !important;
}
.details{
    border:solid;
    border-color:#2e2044;
    border-radius: 10px;
    text-align: left;
    padding: 10px;
}
h5{
    font-weight: bold;
}
iframe, #video, #carousel-video{
    min-height: 33vh;
    min-width: 50rem;
}

</style>


<script>
import animals from "../data/animals.js"
    export default{
        name: 'oneAnimal',
        data(){
        return{
            publicPath: process.env.BASE_URL,
            myAnimal:'',
            currentLang:''
        }
        },created(){
            this.currentLang = localStorage.getItem("lang");
            let allAnimals=animals;
            this.myAnimal= allAnimals.find(animal=>animal.id==this.$route.params.id);
        }
    }
</script>