<script> 
  import HeaderComponent from '@/components/Areas/HeaderComponent.vue';
  import FooterComponent from '@/components/Areas/FooterComponent.vue';

  import HeadComponent from '@/components/Areas/HeadComponent.vue';

  export default {
    components: {
        HeaderComponent, 
        FooterComponent,
        HeadComponent
    },
  }
</script>
<template>
  <HeadComponent/>
  <HeaderComponent/>
  <router-view/>
  <FooterComponent/>
</template>