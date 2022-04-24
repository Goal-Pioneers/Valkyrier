<template> 
    <header id="header-static"> 
        <div class="header-logo header-logo-container"> 
            <LogoComponent />
        </div>
        <nav class="header-list-static">
            <ul> 
                <li> 
                    <div class="container">
                        <router-link to="/about"> 
                            About us
                        </router-link>
                    </div>
                </li>

                <li> 
                    <div class="container">
                        <router-link to="/contact"> 
                            Contact
                        </router-link>
                    </div>
                </li>


                <li> 
                    <div class="container">
                        <router-link to="/documentation"> 
                            Documentation
                        </router-link>
                    </div>
                </li>

                <li> 
                    <div class="container">
                        <router-link to="/installation"> 
                            Installation
                        </router-link>
                    </div>
                </li>

                <li> 
                    <div class="container">
                        <router-link to="/features"> 
                            Features
                        </router-link>
                    </div>
                </li>

                <li> 
                    <div class="container">
                        <router-link to="/login"> 
                            Login
                        </router-link>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script> 
    import LogoComponent from '@/components/Home/LogoComponent.vue';

    export default 
    {
        name: 'HeaderComponent',
        data() {
            return {}
        },
        methods: {

        },
        mounted() {

        },
        components: {
            LogoComponent
        }
    }
</script>