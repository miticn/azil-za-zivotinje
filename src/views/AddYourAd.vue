<template>
        <div id="ad-table-div">
            <br>
            <h1>POSTAVI OGLAS</h1>
            <br>
            <table id="ad-table">
            <tr>
                <td>Naziv ljubimca: </td>
                <td> <input type="text" name="title" v-model="title"> </td>
            </tr>
            <tr>
                <td colspan="2"><br></td>
            </tr>
            <tr>
                <td>Opis: </td>
            </tr>
            <tr>
                <td colspan="2"> <textarea name="description" id="" cols="50" rows="10" v-model="description"></textarea> </td>
            </tr>
            <tr>
                <td colspan="2"><br></td>
            </tr>
            <tr>
                <td>Broj telefona: </td>
                <td> <input type="text" name="title" v-model="phone"> </td>
            </tr>
            <tr>
                <td colspan="2"><br></td>
            </tr>
            <tr>
                <td colspan="2"><button @click="addAds()">Postavi oglas!</button></td>
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
    import allAds from '../data/ads.js'
    export default{
        name: 'AddYourAdd',
        data(){
            return{
            currId:0,
            title: '',
            description: '',
            allads: []
            }
        },
        methods: {
            addAds(){
                this.allads.push({'id':this.currId, 'user': 'myUser', 'title': this.title, 'phone': this.phone, 'description': this.description})
                localStorage.setItem('allAds', JSON.stringify(this.allads))
                this.$router.push('adadded')
                this.currId=parseInt(this.currId)+1;
                localStorage.setItem('currId', this.currId)
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
        }
    }
</script>