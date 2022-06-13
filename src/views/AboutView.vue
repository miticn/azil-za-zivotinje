<template>
  <div class="about">
    <h3 v-if="currentLang == 'sr'">Sigurna kućica je do sada pomogla u pronalaženju preko 5000 ljubimaca širom sveta.</h3>
    <h3 v-else>Sigurna kućica has so far helped find over 5,000 pets around the world.</h3>
    <h4 v-if="currentLang == 'sr'">Kontakt telefon: 061/2345-67-89</h4>
    <h4 v-else>Phone contact: 061/2345-67-89</h4>


    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.787979193112!2d20.47394721485775!3d44.80550938517371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a9f5ee145d3%3A0x3ed89b5bb505d83!2sUniversity%20of%20Belgrade%20School%20of%20Electrical%20Engineering!5e0!3m2!1sen!2srs!4v1654740136247!5m2!1sen!2srs" width="600" height="450" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>
<style>
  .about{
    height: 100vh;
  }
</style>

<script>
export default{
  data(){
    return{
      currentLang:''
    }
  },
  created(){
    this.currentLang = localStorage.getItem("lang");
  }
}
</script>