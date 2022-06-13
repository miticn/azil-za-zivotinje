<template>
  <div id="ad-added-div">
    <img alt="" src="../assets/background50.jpg">
    <div id="text-center-div">
        <h1>Your Ad is successfuly added!</h1>
        <br>
        <router-link to="/lostpets">Check it out!</router-link>
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
</style>

<script>
    export default{
        name: 'AdAdded'
    }
</script>