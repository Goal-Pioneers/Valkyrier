<template> 
  <div> 
      <a v-bind:href="UrlDestination"> 
      </a>
  </div>
</template>
<script> 
export default
{
  name:'SendComponent',
  components: {
      
  },
  props: {
    UrlDestination: String
  }
}
</script>