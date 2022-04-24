<template>
  <div class="login-dashboard">
    <div class="form-container"> 

      <h1>login</h1>
      
      <LogoComponent/>
      <LoginComponent/>
      
      <div> 
        <router-link to="/register"> 
          <p> 
            Register
          </p>
        </router-link>

        <router-link to="Forgot"> 
          <p> 
            Forgot
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script> 
import LoginComponent from '@/components/LoginComponent.vue';
import LogoComponent from '@/components/Home/LogoComponent.vue';

export default
{
  name:'LoginView',
  components: {
    LoginComponent,
    LogoComponent
  },
}
</script>