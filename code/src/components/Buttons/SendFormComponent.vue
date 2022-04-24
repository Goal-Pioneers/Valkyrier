<template> 
  <div class="action-area"> 
    <input type="button" v-bind:value="buttonLabel" on-click=""/>
  </div>
</template>
<script> 
export default
{
  name:'SendComponent',
  components: {
      
  },
  props: {
    buttonLabel: String
  }
}
</script>