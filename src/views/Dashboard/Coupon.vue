<template>


    <div class="relative w-full  h-full bg-[#FFFFFF]">
          <div class="absolute w-[297px] h-[982px] left-0 top-0 bg-[#004079]">
            <div class="absolute left-[54px] top-[93px]">
              <img 
              alt="Dashboard"
              src="../../assets/profil.svg"
              class="w-[41px] h-[40.64px]  rounded-[30px]"></img>
            </div>
            <div class="absolute left-[109px] top-[92px]">
              <p class="font-poppins font-semibold text-[18px] leading-[27px] text-[#FFFFFF]">Karim Chami</p>
              <p class="font-poppins font-normal text-[13px] leading-[20px] text-[#B7B7B7]">Administration</p>
            </div>
      
            <div class="absolute left-[95px] top-[231px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                src="../../assets/icona/static.svg"
                class=" border-[#00B8D0] w-full h-full"></img>
              </div>
              <router-link  to="/Statistiques"> 
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#00B8D0]">Statistiques</p>
            </router-link>>
            </div>
      
            <div class="absolute left-[95px] top-[272px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                src="../../assets/icona/prodact.svg"
                class=" border-white w-full h-full"></img>
              </div>
              <router-link  to="/produits">
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Produits</p>
              </router-link>
            </div>
      
            <div class="absolute left-[95px] top-[313px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                src="../../assets/icona/cate.svg"
                class=" border-white w-full h-full"></img>
              </div>
              <router-link to="categories">
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Categories</p>
            </router-link>
            </div>
      
            <div class="absolute left-[95px] top-[354px] flex items-center gap-3">
              <div class="w-6 h-6">
                
                <img 
                src="../../assets/icona/list.svg"
                 class=" border-white w-full h-full"></img>
              </div>
              <router-link to="/liste">
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Liste livres</p>
            </router-link>
            </div>
      
            <div class="absolute left-[95px] top-[395px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                src="../../assets/icona/comond.svg"
                class=" border-white w-full h-full"></img>
              </div>
            <router-link to="/commandes">
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Commandes</p>
            </router-link>
            </div>
      
            <div class="absolute left-[95px] top-[436px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                 src="../../assets/icona/city.svg"         
                class=" border-white w-full h-full"></div>
              </img>
            <router-link to="/villes">
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Villes</p>
            </router-link>
            </div>
      
            <div class="absolute left-[95px] top-[477px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                 src="../../assets/icona/shoole.svg"
                class=" border-white w-full h-full"></div>
              </img>
            <router-link to="/ecoles">
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Écoles</p>
            </router-link>
            </div>
      
            <div class="absolute left-[95px] top-[514px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
    src="../../assets/icona/class.svg"            
                class=" border-white w-full h-full"></div>
              </img>
            <router-link to="/classes">
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Classes</p>
            </router-link>
            </div>
      
            <div class="absolute left-[95px] top-[551px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                src="../../assets/icona/lang.svg"
                class=" border-white w-full h-full"></div>
              </img>
            <router-link to="/langues">
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Langues</p>
            </router-link>
            </div>
      
            <div class="absolute left-[95px] top-[591px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                src="../../assets/icona/code.svg"
                class=" border-white w-full h-full"></div>
              </img>
            <router-link to="/coupon">
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Coupon Code</p>
            </router-link>
            </div>
      
            <div class="absolute left-[95px] top-[628px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                src="../../assets/icona/stuck.svg"
                class=" border-white w-full h-full"></div>
              </img>
            <router-link to="/fournitures">
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Fournitures</p>
            </router-link>
            </div>
      
            <div class="absolute left-[86px] top-[852px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                src="../../assets/icona/seting.svg"
                class=" border-white w-full h-full"></div>
              </img>
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Parametres</p>
            </div>
      
            <div class="absolute left-[86px] top-[896px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                src="../../assets/icona/logout.svg"
                class=" border-white w-full h-full"></img>
              </div>
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Logout</p>
            </div>
      
            <div class="absolute w-[7px] h-[33px] left-[290px] top-[231px] bg-[#00B8D0]"></div>
          </div>
          </div>








































    <!-- Main container -->
    <div class="relative w-full">
      <!-- Header line -->
      <div class="absolute w-[988px] h-[0px] left-[397px] top-[282px] border border-[#004079]"></div>
  
      <!-- Column headers -->
      <div class="absolute left-[397.5px] top-[238px] w-[44px] h-[24px] font-poppins font-bold text-base leading-[24px] text-[#004079]">Code</div>
      <div class="absolute left-[634px] top-[238px] w-[61px] h-[24px] font-poppins font-bold text-base leading-[24px] text-[#004079]">Remise</div>
      <div class="absolute left-[857px] top-[238px] w-[151px] h-[24px] font-poppins font-bold text-base leading-[24px] text-[#004079]">Date de validation</div>
      <div class="absolute left-[1159px] top-[238px] w-[54px] h-[24px] font-poppins font-bold text-base leading-[24px] text-[#004079]">Status</div>
  
      <!-- Data row -->
      <div class="absolute left-[398px] top-[317px] w-[105px] h-[24px] font-poppins font-medium text-base leading-[24px] text-[#004079]">LIVREEOGA02</div>
      <div class="absolute left-[625px] top-[317px] w-[91px] h-[24px] font-poppins font-medium text-base leading-[24px] text-[#004079]">200,00 DHS</div>
      <div class="absolute left-[837px] top-[317px] w-[190px] h-[24px] font-poppins font-medium text-base leading-[24px] text-[#004079]">de 02/06/23 - 15/06/23</div>
  
      <!-- Status indicator -->
      <div class="absolute left-[1164px] top-[318px] w-[49px] h-[23px] bg-[#75E562] rounded-full">
        <div class="absolute left-[1193px] top-[321px] w-[17px] h-[17px] bg-white rounded-full"></div>
      </div>
  
      <!-- Action buttons -->
      <div class="absolute w-[26px] h-[26px] left-[1323.5px] top-[316px]">
        <!-- Edit button icon (simplified) -->
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 26 26" fill="none">
          <path d="M16.67% 29.16% L29.16% 16.67%" stroke="#00B8D0" stroke-width="1"/>
          <path d="M37.5% 12.5% L12.5% 37.5%" stroke="#00B8D0" stroke-width="1"/>
          <path d="M66.67% 20.84% L20.83% 66.66%" stroke="#00B8D0" stroke-width="1"/>
        </svg>
      </div>
  
      <div class="absolute w-[25px] h-[26px] left-[1360.5px] top-[316px]">
        <!-- Delete button icon (simplified) -->
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 25 26" fill="none">
          <path d="M16.66% 29.16% L16.67% 70.84%" stroke="#00B8D0" stroke-width="1"/>
          <path d="M41.66% 45.84% L58.34% 29.16%" stroke="#00B8D0" stroke-width="1"/>
          <path d="M58.34% 45.84% L41.66% 29.16%" stroke="#00B8D0" stroke-width="1"/>
          <path d="M20.84% 29.16% L20.83% 12.51%" stroke="#00B8D0" stroke-width="1"/>
          <path d="M37.5% 12.5% L37.5% 70.83%" stroke="#00B8D0" stroke-width="1"/>
        </svg>
      </div>
  
      <!-- Add coupon button -->
      <div class="absolute w-[283px] h-[57px] left-[399px] top-[98px]">
        <button @click="showModal = true"  class="absolute inset-0 bg-[#004079] rounded-full text-[#FFFFFF]">+ Ajouter une categorie</button>
      </div>
    </div>

    <!--page2  -->

    <div v-if="showModal" class="fixed inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center">

            <div class="bg-[#FFFFFF]  w-[794px] h-[429px] ">
               <button @click="showModal = false" class="absolute ml-[730px]">
          <img src="../../assets/exit.svg" alt="">
        </button>

        <h1 class="text-[16px] text-[#004079] absolute mt-[60px] ml-[100px] ">Nom de code</h1>
        <h1 class="text-[16px] text-[#004079] absolute mt-[60px] ml-[420px] ">Date de début</h1>
        <h1 class="text-[16px] text-[#004079] absolute mt-[170px] ml-[100px] ">Date d’expédition </h1>
        <h1 class="text-[16px] text-[#004079] absolute mt-[170px] ml-[420px] ">Pourcentage de remise</h1>
        
        <div class=" mt-[90px] flex items-center justify-center gap-2">
        <input 
        class=" w-[309px] h-[65px] rounded-full border-2 border-[#004079]"
        type="text" 
        placeholder="LIVREEO01wd">

      <input 
        class=" w-[309px] h-[65px] rounded-full border-2 border-[#004079]"
        type="text" 
        placeholder="12/06/2025">
</div>



       <div class=" mt-[50px] flex items-center justify-center gap-2">
        <input 
        class=" w-[309px] h-[65px] rounded-full border-2 border-[#004079]"
        type="text" 
        placeholder="12/06/2023">

      <input 
        class=" w-[309px] h-[65px] rounded-full border-2 border-[#004079]"
        type="text" 
        placeholder="10%">
</div>


<div class="flex justify-center gap-20 mt-[30px] mr-[70px]">
  <button class="bg-[#75E562] rounded-full w-[227px] h-[55px] text-[#FFFFFF] text-[19px]">Confirmer
    <img 
          class="inline-flex items-center justify-center "

    src="../../assets/o.svg" alt="o">
  </button>
  <button @click="showModal = false "  class="bg-[#EF4747] rounded-full w-[227px] h-[55px] text-[#FFFFFF] text-[19px]">Annuler
        <img 
        class="inline-flex items-center justify-center "
        src="../../assets/e.svg" 
        alt="e">

  </button>
</div>




</div>
      </div>
  </template>
  
<script>
export default {
  name: 'CouponTable',
  data() {
    return {
      showModal: false
      
    }
  }
}
</script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
  </style>