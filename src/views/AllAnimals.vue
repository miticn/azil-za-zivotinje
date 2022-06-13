<template>
    <div>
        <h1>{{this.type}}</h1>
        <div class="row row-cols-4 d-flex justify-content-center">

                <div class="col card mr-0" v-for="myAnimal in myAnimals" :key="myAnimal.id">
                    <a :href="'/animals/'+type+'/'+myAnimal.id">
                    <img class="card-img-top" :src="`${publicPath}`+myAnimal.path+myAnimal.gallery[0]" alt="dog.name">
                    <div class="card-body">
                        <h5 class="card-title">{{myAnimal.name}}</h5>
                        <p class="card-text">{{myAnimal.desc.slice(0,100)+'...'}}</p>
                    </div>
                    </a>
                </div>
        </div>
    </div>
</template>
<style scoped>
    .card{
        height: auto;
    }
    .card-img-top{
        width: 100%;
        /*min-height: 40vw;*/
        height: auto;
        position: relative; 
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
          type:'',
          myAnimals:[]
      }
    },
    created(){
        this.type = this.$route.params.type;
        this.allAnimals=animals;
        for(let i=0; i<this.allAnimals.length; i++){
            if(this.allAnimals[i]['group']==this.type){
                this.myAnimals.push(this.allAnimals[i]);
            }
        }
    },
    methods:{
        
    }
}
</script>