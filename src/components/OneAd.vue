<template>
    <div class="oglas">
        <h1>{{title}}</h1>{{user}} 
        <h4>- {{phone}} - </h4>
        <p>{{description}}</p>
        <button @click="savePDF()">PDF</button>
    </div>
</template>

<style scoped>
    div.oglas{
        border: solid;
        background-color:white;
    }
</style>

<script>
import allAds from "../data/ads.js"
import jsPDF from 'jspdf'
export default {
    name: 'OneAd',
    props: ['title','phone','description','user'],
    data(){
        return{
            allads : ''
        }
    },
    created(){
        if(localStorage.getItem('allAds')==null){
            localStorage.setItem('allAds', JSON.stringify(allAds))
        }
        this.allads=JSON.parse(localStorage.getItem('allAds'))
    },
    methods:{
        savePDF(){
            var doc = new jsPDF();

            doc.text(20, 20, 'Hello world!');
            doc.text(20, 30, 'This is client-side Javascript to generate a PDF.');

            // Add new page
            doc.addPage();
            doc.text(20, 20, 'Visit CodexWorld.com');

            // Save the PDF
            doc.save('document.pdf');

        }
    }
}
</script>