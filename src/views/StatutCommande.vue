<template>
    <div class="container mx-auto max-w-7xl text-dark-blue py-6 lg:py-12 sm:px-10 lg:px-24">
        <div class="flex w-full md:w-fit items-center justify-center">
            <h1 class="text-lg md:text-xl font-semibold leading-6">Commande Nº 78GH78LIV</h1>
        </div>
        <div class="flex flex-col md:flex-row w-full items-center md:justify-between md:py-6">
            <div class="flex items-center space-x-1 md:space-x-3 pt-6 md:pt-0">
                <div class="flex items-center justify-center bg-[#E1EEF8] rounded-full w-8 h-8 md:w-10 md:h-10">
                    <div class="flex items-center justify-center bg-[#6192BF] w-5 h-5 md:w-7 md:h-7 rounded-full">
                        <div class="bg-[#004079] w-2 h-2 md:w-3 md:h-3 rounded-full">
                        </div>
                    </div>
                </div>
                <p class="text-base md:text-lg font-semibold text-[#6192BF] leading-6">Statut :  <span class="font-medium">Encore - 2 jours Restant</span></p>
            </div>
            <div class="flex items-center space-x-3 py-6 md:py-0 hover:text-[#004179e4] cursor-pointer transition duration-200 ease-in-out">
                <p class="text-sm md:text-base font-normal">Télécharger le rapport format PDF</p>
                <div class="bg-[#004079] hover:bg-[#004179e4] transition duration-200 ease-in-out rounded-full px-2 md:px-4 py-1" type="button">
                    <img src="../assets/download.svg" class="w-4 md:w-6" alt="download">
                </div>
            </div>
        </div>
        <div class="flex flex-col md:flex-row items-center md:items-end w-full md:justify-between space-y-6 md:space-y-0 pr-24 md:pr-0">
            <div class="flex flex-col items-start space-y-4">
                <div class="flex flex-col space-y-1"> 
                    <h3 class="text-sm md:text-base font-semibold">Date de Commande :</h3>
                    <p class="text-xs md:text-sm font-normal">15/06/2023</p>
                </div>
                <div class="flex flex-col space-y-1"> 
                    <h3 class="text-sm md:text-base font-semibold">Date de Livraison :</h3>
                    <p class="text-xs md:text-sm font-normal">22/06/2023</p>
                </div>
                <div class="flex flex-col space-y-1"> 
                    <h3 class="text-sm md:text-base font-semibold">Modalité de livraison :</h3>
                    <p class="text-xs md:text-sm font-normal">Livraison Express</p>
                </div>
                <div class="flex flex-col space-y-1"> 
                    <h3 class="text-sm md:text-base font-semibold">Commande details :</h3>
                    <p class="text-xs md:text-sm font-normal">Pack Livres + Pack Fournitures</p>
                    <p class="text-xs md:text-sm font-normal">1 900 DHS</p>
                    <p class="text-xs md:text-sm font-normal">Livraison Gratuite</p>
                </div>
            </div>
            <div class="flex">
                <button class="bg-dark-blue rounded-full text-xs md:text-sm font-light hover:bg-[#004179e4] text-white-color transition duration-200 ease-in-out px-4 md:px-8 py-2 md:py-3">Faire une réclamation</button>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>

<style scoped>
.my-text-center{
    text-align: center;
}
</style>