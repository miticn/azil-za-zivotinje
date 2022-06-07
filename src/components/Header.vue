<template>
    <div id="headerbar">
        <img class="logo" src="../assets/logo.jpg">
        <h1>SIGURNA KUCICA</h1>
    </div>
</template>


<style>
    img.logo{
        border: 1px solid #f7bc70;
        width: 100px;
        height: 100px;
    }
    #headerbar{
        color: #f7bc70;
        display: flex;
        background-color: #2e2044 ;
        text-align: center;
    }
    h1{
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

<script>
    export default{
        name: 'HeaderBar'
    }
</script>