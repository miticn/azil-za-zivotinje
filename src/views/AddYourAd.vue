<template>
    <div id="ad-div">
        <img alt="" src="../assets/background50.jpg">
        <div id="ad-table-div">
            <h1>POSTAVI OGLAS</h1>
            <br>
            <table id="ad-table">
            <tr>
                <td>Naslov oglasa: </td>
                <td> <input type="text" name="title" v-model="title"> </td>
            </tr>
            <tr>
                <td>Opis: </td>
            </tr>
            <tr>
                <td colspan="2"> <textarea name="description" id="" cols="50" rows="10" v-model="description"></textarea> </td>
            </tr>
            <tr>
                <td colspan="2"><button @click="addAds()">Postavi oglas!</button></td>
            </tr>
        </table>
        </div>
    </div>
</template>

<style>
    #ad-div{
        position: relative;
    }
    img{
        width: 100%;
        height: 100%;
    }
    #ad-table-div{
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
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
                this.allads.push({'id':this.currId, 'user': 'myUser', 'title': this.title, 'description': this.description})
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