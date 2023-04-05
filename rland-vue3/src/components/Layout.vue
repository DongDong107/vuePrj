<script>
    import Header from './Header.vue';
    import Footer from './Footer.vue';

    export default{
        components:{
            Header,
            Footer
        },  
        data(){
            return{
                x:21,
                y:23,
                test:'hello'
            };
        }
    }
</script>

<template>
    <Header />
    <!-- ---------------------------------------------------------------------- -->   
    <router-view></router-view>
    <!-- ---------------------------------------------------------------------- -->
    <Footer />
</template>        