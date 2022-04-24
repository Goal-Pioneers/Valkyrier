<template>
  <div class="register">
    <h1 class="information">
      Registration
    </h1>
    <RegisterAccountComponent/>
  </div>
</template>
<script> 
import RegisterAccountComponent from '@/components/RegisterAccountComponent.vue';

export default
{
  name:'RegisterView',
  components: 
  {
    RegisterAccountComponent
  },
}

</script>