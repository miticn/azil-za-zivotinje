<template>
    <div>
        <h1></h1>
        <div v-for="comment in comments" :key="comment.oglas">
            <h1>{{comment.user}}</h1>
            <p>{{comment.komentar}}</p>
        </div>
        <form>
            <textarea name="commentInput" cols="40" rows="3"></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
    
</template>

<style scoped>

</style>

<script>
import comments from '../data/comments.js';
export default {

    name: 'AllComments',
    data(){
        return{
            comments:''
        }
    },
    created(){
        if(localStorage.getItem('comments')==null){
            localStorage.setItem('comments', JSON.stringify(comments))
        }
        this.comments=JSON.parse(localStorage.getItem('comments'))
    }
}
</script>