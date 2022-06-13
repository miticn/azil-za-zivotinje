<template>
        <div id="ad-table-div">
            <br>
            <h1>{{adpagelang.title}}</h1>
            <br>
            <table id="ad-table">
            <tr>
                <td>{{adpagelang.name}}</td>
                <td> <input type="text" name="title" v-model="title"> </td>
            </tr>
            <tr>
                <td colspan="2"><br></td>
            </tr>
            <tr>
                <td>{{adpagelang.desc}}</td>
            </tr>
            <tr>
                <td colspan="2"> <textarea name="description" id="" cols="50" rows="10" v-model="description"></textarea> </td>
            </tr>
            <tr>
                <td colspan="2"><br></td>
            </tr>
            <tr>
                <td>{{adpagelang.desc}}</td>
                <td> <input type="text" name="title" v-model="phone"> </td>
            </tr>
            <tr>
                <td colspan="2"><br></td>
            </tr>
            <tr>
                <td colspan="2"><button @click="addAds()">{{adpagelang.add}}</button></td>
            </tr>
            <tr>
                <td colspan="2"><br></td>
            </tr>
        </table>
        </div>
</template>

<style>
    #ad-table-div{
        background-color: #ebeff2 ;
        height: 100vh;
    }
    #ad-table{
        margin-left: auto;
        margin-right: auto;
    }
</style>

<script>
    import AdPageLang from '../data/adPageLang.js'
    import allAds from '../data/ads.js'
    export default{
        name: 'AddYourAdd',
        data(){
            return{
            currId:0,
            title: '',
            description: '',
            allads: [],
            currentLang: '',
            adpagelang: ''
            }
        },
        methods: {
            addAds(){
                this.allads.push({'id':this.currId, 'user': 'myUser', 'title': this.title, 'phone': this.phone, 'description': this.description})
                localStorage.setItem('allAds', JSON.stringify(this.allads))
                
                this.currId=parseInt(this.currId)+1;
                localStorage.setItem('currId', this.currId)

                this.$router.push('adadded')
            }
        },
        created(){
            if(localStorage.getItem('allAds')==null){
                localStorage.setItem('allAds', JSON.stringify(allAds))
            }
            this.allads=JSON.parse(localStorage.getItem('allAds'))

            if(localStorage.getItem('currId')==null){
                localStorage.setItem('currId', allAds.length)
            }
            this.currId=localStorage.getItem('currId')
            
            this.currentLang = localStorage.getItem("lang");
            this.adpagelang = AdPageLang[this.currentLang];
        }
    }
</script>