<template>
  <div id="ad-added-div">
    <img alt="" src="../assets/background50.jpg">
    <div id="text-center-div">
        <h1>{{adpagelang.added}}</h1>
        <br>
        <button class="check" @click="check()">{{adpagelang.check}}</button>
    </div>
  </div>
</template>
<style>
    img{
        width: 100%;
        height: 100%;
    }
    #ad-added-div{
        position: relative;
        text-align: center;
    }
    #text-center-div{
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .check{
        background-color:#f7bc70;
        margin-bottom: 10px;
        border:solid;
    }
</style>

<script>
    import AdPageLang from '../data/adPageLang.js'
    export default{
        name: 'AdAdded',
        data(){
            return{
                currentLang: '',
                adpagelang: ''
            }
        },
        created(){
            this.currentLang = localStorage.getItem("lang");
            this.adpagelang = AdPageLang[this.currentLang];
        },
        methods:{
            check(){
                this.$router.push('/lostpets')
            }
        }
    }
</script>