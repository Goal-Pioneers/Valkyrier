<template>
  <div class="register">
    <h1>This is an register page</h1>
    <RegisterAccountComponent/>
  </div>
</template>
<script> 
import RegisterAccountComponent from '@/components/RegisterAccountComponent.vue';

export default
{
  name:'RegisterView',
  components: {
    RegisterAccountComponent
  },
}

</script>