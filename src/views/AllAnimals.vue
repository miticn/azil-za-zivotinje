<template>
    <div>
        <h1>Psi</h1>
        <div class="row row-cols-4">
            
                <div class="col card mr-0" v-for="dog in dogs" :key="dog.id">
                    <a :href="'/animals/'+dog.id">
                    <img class="card-img-top" :src="`${publicPath}`+dog.path+dog.gallery[0]" alt="dog.name">
                    <div class="card-body">
                        <h5 class="card-title">{{dog.name}}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </a>
                </div>
        </div>
        <div class="row">
            <div class="col col-sm-12">
                <h1>Mačke</h1>
            </div>
        </div>
        <h1>Ptice</h1>
    </div>
</template>
<style scoped>
    .card{
        height: auto;
    }
    .card-img-top{
        width:100%;
        height: auto;
    }
</style>

<script>
import animals from "../data/animals.js"
    export default{
        name: 'AllAnimals',
    data(){
      return{
          publicPath: process.env.BASE_URL,
          allAnimals:'',
          dogs:[],
          cats:[],
          birds:[]
      }
    },
    created(){
        this.allAnimals=animals;
        for(let i=0; i<this.allAnimals.length; i++){
            if(this.allAnimals[i]['group']=="dog"){
                this.dogs.push(this.allAnimals[i]);
            } else if (this.allAnimals[i]['group']=="cat"){
                this.cats.push(this.allAnimals[i]);
            }else if (this.allAnimals[i]['group']=="bird"){
                this.birds.push(this.allAnimals[i]);
            }
        }
    },
}
</script>