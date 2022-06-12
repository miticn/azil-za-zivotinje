<template>
    <div id="headerbar">
        <img class="logo" src="../assets/logo.jpg">
            <h1>Sigurna kućica</h1>
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
        font-family: "Comic Sans MS", "Comic Sans", cursive	;
    }
</style>

<script>
    export default{
        name: 'HeaderBar'
    }
</script>