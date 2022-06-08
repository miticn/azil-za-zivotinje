<template>
    <div id="headerbar">
        <img class="logo" src="../assets/logo.jpg">
            <h1>AZIL ZA ZIVOTINJE</h1>
    </div>
</template>


<style scoped>
    img.logo{
        width: 7.5rem;
        height: auto;
    }
    #headerbar{
        display: flex;
        align-items: center;
    }
    h1{
        margin-left:0;
        font-size: 2rem;
        margin-bottom: 0;
    }
</style>

<script>
    export default{
        name: 'HeaderBar'
    }
</script>