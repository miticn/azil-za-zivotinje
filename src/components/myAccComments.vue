<template>
    <div class="allcomments">
        <div v-for="comment in myComments" :key="comment.oglas">
            <h4>{{comment.user}}</h4>
            <p>{{comment.comment}}</p>
            <hr>
        </div>
        <h1 v-if="this.myComments.length==0">Nema Komentara</h1>
    </div>
    
</template>

<style scoped>
.allcomments{
    
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

    },
    data(){
        return{
            comment:'',
            comments:'',
            myComments: [],
            user:'myUser'
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
            }
    },
    methods:{
    }
}
</script>