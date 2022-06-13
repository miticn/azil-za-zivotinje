<template>
    <a href="/lostpets">
    <div class="allcomments">
        <div v-for="comment in myComments" :key="comment.id">
            <h4>{{comment.user}}</h4>
            <p>{{comment.comment}}</p>
            <p>Naslov teme: {{this.idOglas2title[comment.id]}}</p>
            <hr>
        </div>
    </div>
        <div v-if="this.myComments.length==0">
            <h1 v-if="currentLang=='sr'">Nema komentara od ovog korisnika</h1>
            <h1 v-else>There are no comments from this user.</h1>
        </div>
    </a>
    
</template>

<style scoped>
.allcomments{
    border-left:solid;
    border-right:solid;
    border-top:solid;
    border-width: thin;
}
p{
    text-align: left;
    margin-left: 10px;
}
h4{
    text-align: left;
    margin-left: 10px;
}
.send{
    background-color:#f7bc70;
    border:solid;
}
</style>

<script>
import comments from '../data/comments.js';
export default {

    name: 'myAccComments',
    props: {
        allAds:{
            default:[]
        }
    },
    data(){
        return{
            comments:'',
            myComments: [],
            user:'myUser',
            idOglas2title:[]
        }
    },
    created(){
        if(localStorage.getItem('comments')==null){
            localStorage.setItem('comments', JSON.stringify(comments))
        }
        this.comments=JSON.parse(localStorage.getItem('comments'))
    

        for(let i = 0; i< this.comments.length; i++)
            if(this.comments[i].user==this.user){
                this.myComments.push(this.comments[i]);
                let ind = this.allAds.findIndex(ad=>this.comments[i].id==ad.id)
                this.idOglas2title[parseInt(this.comments[i].id)]=this.allAds[ind].title;
            }
    },
    methods:{
    }
}
</script>