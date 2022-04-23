<template> 
    <header id="header-static"> 
        <div class="header-logo header-logo-container"> 
            <LogoComponent />
        </div>
        <nav class="header-list-static">
            <ul> 
                <li class="container"> 
                    <a href="/" hreflang="en"> 
                        <p> Front </p> 
                    </a> 
                </li>
                <li class="container"> 
                    <a href="/about" hreflang="en"> 
                        <p> About </p> 
                    </a> 
                </li>
                <li class="container"> 
                    <a href="/contact" hreflang="en"> 
                        <p> Contact </p> 
                    </a> 
                </li>
                <li class="container"> 
                    <a href="/documentation" hreflang="en"> 
                        <p> Documentation </p>
                    </a> 
                </li>
                <li class="container"> 
                    <a href="/installation" hreflang="en"> 
                        <p> Installation </p> 
                    </a> 
                </li>
                <li class="container"> 
                    <a href="/features" hreflang="en"> 
                        <p> Features </p>
                    </a>
                </li>
                <li class="container"> 
                    <a href="/login" hreflang="en"> 
                        <p> Login </p>
                    </a>
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
        components: {
            LogoComponent
        }
    }
</script>