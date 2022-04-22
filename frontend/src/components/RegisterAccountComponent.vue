<template>
  <div class="registerAccount">
    <form> 
        <LogoComponent />
        <input v-model="text" id="username" placeholder="username"/>
        
        <input v-model="text" type="password" id="password" placeholder="password"/>
        <input v-model="text" type="password" id="confirm_password" placeholder="password"/>

        <RegisterAccountInformationComponent/>
        <SendFormComponent buttonLabel="Register"/>
    </form>
  </div>
</template>
<script> 
import SendFormComponent from '@/components/Buttons/SendFormComponent.vue';
import RegisterAccountInformationComponent from '@/components/RegisterAccountInformationComponent.vue';
import LogoComponent from '@/components/Home/LogoComponent.vue';

export default
{
  name:'RegisterAccountComponent',
  components: {
    SendFormComponent,
    RegisterAccountInformationComponent,
    LogoComponent
  }
}
</script>