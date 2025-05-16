<template>
    <div class="font-Poppins">
        <div class="bg-[#F1F1F1]">
            <HeroSectionComponent/>
            <HowWorksComponent/>
            <VedioComponent/>
        </div>
        <WhayUsComponent/>
        <FandAComponent/>
     
        <br>
        <br>
        <br>
     
     <SiteMapComponent/> 
    </div>

</template>

<script setup>
import HeroSectionComponent from '../components/home/HeroSectionComponent.vue';
import HowWorksComponent from '../components/home/HowWorksComponent.vue';
import VedioComponent from '../components/home/VedioComponent.vue';
import WhayUsComponent from '../components/home/WhayUsComponent.vue';
import FandAComponent from '../components/home/FandAComponent.vue';
import SiteMapComponent from '../components/SiteMapComponent.vue'

</script>