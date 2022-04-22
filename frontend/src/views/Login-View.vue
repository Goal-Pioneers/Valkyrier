<template>
  <div class="login">
    <h1>This is an login page</h1>
    <LogoComponent/>
    <LoginComponent/>
    <div> 
      <a href="/register" hreflang="" title="">
        <p>
          Register new account
        </p>
      </a>

      <a href="/forgot" hreflang="" title=""> 
        Forgot my account
      </a>
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