<template>
    <div id="main-div">
        <div class="row row-cols-4">
            <div class="col card mr-0 ">
                <a href="/animals/dog/">
                <img class="card-img-top" :src="`${publicPath}`+'pets/dogs/1/1.jfif'" alt="Dogs">
                <div class="card-body">
                    <h5 class="card-title">Dogs</h5>
                    </div>
                </a>
            </div>
            <div class="col card mr-0">
                <a href="/animals/cat/">
                <img class="card-img-top" :src="`${publicPath}`+'pets/cats/5/3.jfif'" alt="Cats">
                <div class="card-body">
                    <h5 class="card-title">Cats</h5>
                   </div>
                </a>
            </div>
            <div class="col card mr-0">
                <a href="/animals/bird/">
                <img class="card-img-top" :src="`${publicPath}`+'pets/birds/8/3.jfif'" alt="Birds">
                <div class="card-body">
                    <h5 class="card-title">Birds</h5>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .card{
        height: auto;
    }
    .card-img-top{
        width:100%;
        height: auto;
    }
    #main-div{
        height: 100vh;
    }
</style>
<script>
export default {
    name:'AnimalGroups',
    data(){
        return{
            publicPath: process.env.BASE_URL,
        }
    }
}
</script>