<template>
        <div id="ad-table-div">
            <h1><b>{{adpagelang.title}}</b></h1>
            <br>
            <table id="ad-table">
            <tr>
                <td><b>{{adpagelang.name}}</b></td>
                <td> <input type="text" name="title" v-model="title"> </td>
            </tr>
            <tr>
                <td colspan="2"><br></td>
            </tr>
            <tr>
                <td><b>{{adpagelang.desc}}</b></td>
            </tr>
            <tr>
                <td colspan="2"> <textarea name="description" id="" cols="50" rows="10" v-model="description"></textarea> </td>
            </tr>
            <tr>
                <td colspan="2"><br></td>
            </tr>
            <tr>
                <td><b>{{adpagelang.phone}}</b></td>
                <td> <input type="text" name="title" v-model="phone"> </td>
            </tr>
            <tr>
                <td colspan="2"><br></td>
            </tr>
            <tr>
                <td colspan="2"><button class="add" @click="addAds()"><b>{{adpagelang.add}}</b></button></td>
            </tr>
            <tr>
                <td colspan="2">
                    <span class="error">
                        <h3  v-if="currentLang=='sr'">{{this.errormsgsr}}</h3>
                        <h3 v-else>{{this.errormsgen}}</h3>
                        </span>
                    </td>
            </tr>
        </table>
        </div>
</template>

<style>
    #ad-table-div{
    border:solid;
    border-color:#2e2044;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
    margin: 10px;
    }
    #ad-table{
        margin-left: auto;
        margin-right: auto;
    }
    .add{
        background-color:#f7bc70;
        margin-bottom: 10px;
        border:solid;
    }
    .error{
        color: red;
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
            adpagelang: '',
            errormsgsr:'',
            errormsgen:'',
            phone:''
            }
        },
        methods: {
            addAds(){
                if(this.title == '' || this.phone == '' || this.description == ''){
                    this.errormsgsr='Popunite sva polja!';
                    this.errormsgen='Fill in all the fields!';
                }
                else{
                    this.allads.push({'id':this.currId, 'user': 'myUser', 'title': this.title, 'phone': this.phone, 'description': this.description})
                    localStorage.setItem('allAds', JSON.stringify(this.allads))
                    
                    this.currId=parseInt(this.currId)+1;
                    localStorage.setItem('currId', this.currId)

                    this.$router.push('adadded')
                }
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
            
            this.errormsg = '';

            this.currentLang = localStorage.getItem("lang");
            this.adpagelang = AdPageLang[this.currentLang];
        }
    }
</script>