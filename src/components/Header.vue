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