<template>
    <div class="allcomments" v-if="this.ida!=-1">
        <div v-for="comment in myComments" :key="comment.oglas">
            <h1>{{comment.user}}</h1>
            <p>{{comment.comment}}</p>
        </div>
        <h1 v-if="this.myComments.length==0">Nema Komentara</h1>
        <form>
            <textarea name="commentInput" cols="40" rows="3" v-model="comment"></textarea>
            <button @click="addComment()">Send</button>
        </form>
    </div>
    
</template>

<style scoped>
.allcomments{
    background-color:white;
    border-right: solid;
    border-top: solid;
    border-bottom: solid;
    height: 100%;
    overflow-y: scroll;
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