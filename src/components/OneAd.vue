<template>
    <div class="oglas">
        <h1>{{title}}</h1>{{user}} 
        <h4> {{phone}} </h4>
        <p>{{description}}</p>
        <button class="btn pdf" @click="savePDF()">PDF</button>
        <br>
        <button v-if="this.del==true" class="btn danger" @click="deletePDF()">DELETE</button>
    </div>
</template>

<style scoped>
    div.oglas{
        border: solid;
    }
    .pdf{
        background-color:#f7bc70;
        margin-bottom: 10px;
        border:solid;
    }
    .danger{
        background-color: red;
        margin-bottom: 10px;
        border:solid;
    }
</style>

<script>
import allAds from "../data/ads.js"
import jsPDF from 'jspdf'
export default {
    name: 'OneAd',
    props: {
        title:{
            default: ''
        },
        phone:{
            default: ''
        },
        description:{
            default: ''
        },
        user:{
            default: ''
        },
        del:{
            default: false
        }
    },
    data(){
        return{
            allads: []
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

            doc.setFont("helvetica");
            //doc.setFontType("bold");
            doc.setFontSize(40);
            doc.text(this.title,105, 110, 'center');
            doc.setFontSize(10);
            doc.text(this.user,105, 120, 'center');
            doc.setFontSize(20);
            doc.text(this.phone, 105, 130, 'center');
            doc.text(doc.splitTextToSize(this.description,150), 105, 140, 'center');
            

            // Save the PDF
            doc.save(this.title+'.pdf');

        },
        deletePDF(){
            this.allads=this.allads.filter(val => val.title != this.title)
            localStorage.setItem('allAds', JSON.stringify(this.allads))
            this.$router.go()
        }
    }
}
</script>