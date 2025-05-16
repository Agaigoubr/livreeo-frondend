<template>
    <div class="container mx-auto max-w-7xl">
        <!--First section-->
        <div class="flex flex-col-reverse lg:flex-row items-center gap-12 mt-10 lg:mt-16">
            <div class="flex flex-1 flex-col items-start text-dark-blue px-6">
                <h1 class="text-xl lg:text-3xl font-bold pb-6 lg:pb-10">Suivi Des Commandes</h1>
                <h4 class="text-sm lg:text-base font-bold pb-6">Vous avez passé une commande auprès de Livréeo ? Merci !</h4>
                <p class="text-xs lg:text-sm font-medium">
                    Vous trouverez ici toutes les informations importantes concernant votre commande.
                    Vous pouvez suivre l'état d'avancement de votre commande à tout moment, suivre facilement son statut.
                </p>
                <div class="space-y-4 lg:space-y-6 pt-6 lg:pt-12">
                    <p class="text-base lg:text-xl font-medium">Numéro de commande</p>
                    <input type="text" class="h-8 lg:h-12 ring-[3px] ring-dark-blue focus:ring-4 focus:ring-dark-blue focus:outline-none rounded-full placeholder:text-[#EBEBEB] text-dark-blue pl-4" placeholder="N°">
                    <div type="button" class="flex w-fit pt-2 lg:pt-5">
                        <div class="flex items-center justify-between cursor-pointer bg-dark-blue hover:bg-[#004179e5] transition duration-200 ease-in-out font-light text-base md:text-lg text-white-color px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                            <span>Suivant</span>
                            <img src="../assets/right.svg" class="h-6 md:h-8" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center flex-1">
                <img src="../assets/suivi1.webp" class="h-[300px] lg:h-[400px]" alt="track">
            </div>
        </div>

        <!--Go to the bottom-->
        <div class="w-full flex justify-center items-center">
            <div @click="smoothScroll('#suiv-comm')" class="border-[1px] border-dark-blue rounded-full w-[30px] h-[49px] flex justify-center items-center cursor-pointer">
                <img src="../assets/arraw.svg" class="animate-bounce" alt="" srcset="">
            </div>
        </div>
        
        <!--Last section-->
        <div id="suiv-comm" class="flex flex-col lg:flex-row items-start text-dark-blue xl:gap-16 2xl:gap-32 mt-4 lg:mt-6 mb-28">
            <div class="flex flex-1 flex-col items-center space-y-5">
                <img src="../assets/suivi2.webp" class="h-[300px]" alt="find-order">
                <div class="flex flex-col items-start px-10">
                    <h2 class="text-sm lg:text-lg font-bold pb-12">Fonctionnement de l'outil de suivi de commande</h2>
                    <div>
                        <p class="text-base font-normal">
                        Munissez-vous d'abord de votre numéro de commande.
                        Notre outil de suivi de commande vous permet de :
                        </p>
                        <ul class="list-disc pl-6 py-6 text-base font-normal">
                            <li>Vous renseigner sur le statut de livraison de votre commande, qu'il s'agisse d'une livraison par transporteur ou par envoi postal.</li>
                            <li>Modifier la date de livraison</li>
                            <li>Annuler une commande*</li>
                        </ul>
                        <p class="text-base font-normal">
                            *L'annulation de commande est possible si vous avez commandé en ligne et que l'email de confirmation de commande reçu comporte la mention "Commande Annulable ". <span class="underline cursor-pointer">Cliquez-ici pour annuler votre commande.</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-1 flex-col items-center space-y-5">
                <img src="../assets/suivi3.webp" class="h-[300px]" alt="statut-order">
                <div class="flex flex-col items-start px-10">
                    <h2 class="text-sm lg:text-lg font-bold pb-12">Comprendre le statut de votre commande</h2>
                    <div class="space-y-4">
                        <p class="text-base font-normal">
                            Après avoir commandé, que se passe-t-il ensuite ? Voici un guide des étapes qui attendent votre commande avant que vous la receviez.
                        </p>
                        <p class="text-base font-normal">
                            <span class="font-bold">Commande reçue :</span> Nous avons reçu votre commande, qui sera traitée dès que possible.
                        </p>
                        <p class="text-base font-normal">
                            <span class="font-bold">Traitement en cours :</span>  Votre commande est en cours de traitement et de finalisation.  
                        </p>
                        <p class="text-base font-normal">
                            <span class="font-bold">Prête à être envoyée :</span> Votre commande est prête et sur le point d'être expédiée.
                        </p>
                        <p class="text-base font-normal">
                            <span class="font-bold">En route :</span> Votre commande a quitté les locaux de notre expéditeur et elle est en cours de livraison chez vous.
                        </p>
                        <p class="text-base font-normal">
                            <span class="font-bold">Livrée :</span>  Votre commande a été livrée.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <SiteMapComponent />
</template>
<script setup>
import SiteMapComponent from '../components/SiteMapComponent.vue'
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

</script>