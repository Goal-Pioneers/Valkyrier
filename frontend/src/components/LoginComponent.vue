<template> 
    <div class="login"> 
        <form> 
            <input v-model="text" id="username"/>
            <input v-model="text" type="password" id="password"/>
            
            <SendFormComponent buttonLabel="Login"/>
        </form>
    </div>
</template>
<script> 
import SendFormComponent from '@/components/Buttons/SendFormComponent.vue';

export default
{
  name:'LoginComponent',
  components: {
      SendFormComponent
  }
}
</script>