<template> 
    <div id="Forgot"> 
        <form>
            <label> </label> 
            <input placeholder="email" type="text" />
            
            <label> </label>
            <input placeholder="username" type="text" />

            <SendFormComponent buttonLabel="Send"/>
        </form>
    </div>
</template>
<script> 

import SendFormComponent from '@/components/Buttons/SendFormComponent.vue';

    export default 
    {
        name: 'ForgotComponent',
        components: {
            SendFormComponent
        }
    }
</script>