
<template>
  <nav>
    <ol class="breadcrumb">
      &emsp;
      <li
        v-for="(crumb, ci) in crumbs" :key="ci" class="breadcrumb-item align-items-center li-type">
        <button class="btn btn-link" :class="{ disabled: isLast(ci) }" @click="selected(crumb)">
           {{ crumb }}
        </button>
      </li>
    </ol>
  </nav>
</template>
<style scoped>
    button.btn-link{
        background-color: transparent;
        border:0;
    }
</style>
<script>
export default {
  props: {
    crumbs: {
      type: Array,
      required: true,
    },
    routes:{
      type: Array,
      required: true,
    }
  },
  methods: {
    isLast(index) {
      return index === this.crumbs.length - 1;
    },
    selected(crumb) {
      let index = this.crumbs.indexOf(crumb);
      //this.$emit('selected', crumb);
      this.$router.push(this.routes[index]);
    },
  },
};
</script>
 
<style scoped>
.breadcrumb {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.37rem;
}
li.li-type:before {
  content: ">";
  float:none;
  padding-right: 2px;
}
</style>