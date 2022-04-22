<template> 
    <header> 
        <LogoComponent />
        <nav>
            <ul> 
                <li> 
                    <a href="/" hreflang="en"> 
                        Front 
                    </a> 
                </li>
                <li> 
                    <a href="/about" hreflang="en"> 
                        About 
                    </a> 
                </li>
                <li> 
                    <a href="/contact" hreflang="en"> 
                        Contact 
                    </a> 
                </li>
                <li> 
                    <a href="/documentation" hreflang="en"> 
                        Documentation 
                    </a> 
                </li>
                <li> 
                    <a href="/installation" hreflang="en"> 
                        Installation 
                    </a> 
                </li>
                <li> 
                    <a href="/features" hreflang="en"> 
                        Features
                    </a>
                </li>
                <li> 
                    <a href="/login" hreflang="en"> 
                        Login
                    </a>
                </li>
            </ul>
        </nav>
        <nav> 

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