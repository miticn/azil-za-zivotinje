<template>
    <div class="allcomments" v-if="this.ida!=-1">
        <div v-for="comment in myComments" :key="comment.oglas">
            <h4>{{comment.user}}</h4>
            <p>{{comment.comment}}</p>
            <hr>
        </div>
        <h1 v-if="this.myComments.length==0">Nema Komentara</h1>
        <form>
            <textarea name="commentInput" cols="40" rows="3" v-model="comment"></textarea>
            <button class="btn send" @click="addComment()">Send</button>
        </form>
    </div>
    
</template>

<style scoped>
.allcomments{
    background-color:white;
    border-right: solid;
    border-top: solid;
    border-bottom: solid;
    border-left: solid;
    border-left-color: lightgray;
    border-left-width: thin;
    height: 100%;
    overflow-y: scroll;
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

    name: 'AllComments',
    props: {
        ida:{
            default: '-1'
        },
    },
    data(){
        return{
            comment:'',
            comments:'',
            myComments: []
        }
    },
    created(){
        if(localStorage.getItem('comments')==null){
            localStorage.setItem('comments', JSON.stringify(comments))
        }
        this.comments=JSON.parse(localStorage.getItem('comments'))


        for(let i = 0; i< this.comments.length; i++)
            if(this.comments[i].id==this.ida){
                this.myComments.push(this.comments[i]);
            }
    },
    methods:{
        addComment(){
            this.comments.push({
                id: this.ida,
                user: 'myUser',
                comment: this.comment
            });
            localStorage.setItem('comments', JSON.stringify(this.comments));
        }
    }
}
</script>