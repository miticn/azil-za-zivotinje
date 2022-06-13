<template>
    <div>
        <h1>{{this.type}}</h1>
        <select @change="sortAnimals()" v-model="sort" :key=trigger>
            <option>Age</option>
            <option>Name</option>
        </select>
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
          sort:'',
          myAnimals:[],
          trigger:''
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
        sortAnimals(){
            alert(1);
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

            this.trigger=1;
        }
    }
}
</script>