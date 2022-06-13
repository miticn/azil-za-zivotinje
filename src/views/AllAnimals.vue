<template>
    <div>
        <h1>{{this.grouptitle}}</h1>
        <div v-if="currentLang=='sr'">
        <label for="sort">Sortiraj:</label>
            <select name="sort" @change="sortAnimals()" v-model="sort" :key=trigger>
                <option>Starost</option>
                <option>Ime</option>
            </select>
        </div>
        <div v-else>
            <label for="sort">Sort:</label>
            <select name="sort" @change="sortAnimals()" v-model="sort" :key=trigger>
                <option>Age</option>
                <option>Name</option>
            </select>
        </div>
        <br>
        <div class="row row-cols-4 d-flex justify-content-center">

                <div class="col card mr-0" v-for="myAnimal in myAnimals" :key="myAnimal.id">
                    <a :href="'/animals/'+type+'/'+myAnimal.id">
                    <img class="card-img-top" :src="`${publicPath}`+myAnimal.path+myAnimal.gallery[0]" alt="dog.name">
                    <div class="card-body">
                        <h5 class="card-title">{{myAnimal.name}}</h5>
                        <p v-if="this.currentLang=='en'" class="card-text">{{myAnimal.desc_en.slice(0,100)+'...'}}</p>
                        <p v-else class="card-text">{{myAnimal.desc_sr.slice(0,100)+'...'}}</p>
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
          sort:'',
          myAnimals:[],
          trigger:'',
          currentLang:'',
          grouptitle:''
      }
    },
    created(){
        this.currentLang = localStorage.getItem("lang");
        this.type = this.$route.params.type;
        this.allAnimals=animals;
        for(let i=0; i<this.allAnimals.length; i++){
            if(this.allAnimals[i]['group']==this.type){
                this.myAnimals.push(this.allAnimals[i]);
                if(this.currentLang == 'sr')this.grouptitle=this.allAnimals[i]['group_sr'];
                else this.grouptitle=this.allAnimals[i]['group'];
            }
        }
        if(this.currentLang != 'sr')
            this.grouptitle = this.grouptitle.charAt(0).toUpperCase() + this.grouptitle.slice(1)+'s';
    },
    methods:{
        sortAnimals(){
            function compareName( a, b ) {
                if ( a.name.toLowerCase() < b.name.toLowerCase() ){
                    return -1;
                }
                if ( a.name.toLowerCase() > b.name.toLowerCase() ){
                    return 1;
                }
                return 0;
            }
            function compareAge( a, b ) {
                if ( parseInt(a.age) < parseInt(b.age) ){
                    return -1;
                }
                if ( parseInt(a.age) > parseInt(b.age) ){
                    return 1;
                }
                return 0;
            }
            
            if(this.sort=="Name")
                this.myAnimals.sort(compareName);
            if(this.sort=="Age")
                this.myAnimals.sort(compareAge);
            if(this.sort=="Ime")
                this.myAnimals.sort(compareName);
            if(this.sort=="Starost")
                this.myAnimals.sort(compareAge);

            this.trigger=1;
        }
    }
}
</script>