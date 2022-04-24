<template> 
  <div> 
    <h1 class="information"> Forgotten </h1>
    <ForgotComponent />
  </div>
</template>
<script> 
import ForgotComponent from '@/components/ForgotComponent.vue';

export default
{
  name:'ForgotView',
  components: 
  {
      ForgotComponent
  },
}

</script>