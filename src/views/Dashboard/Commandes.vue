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
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#00B8D0]">Statistiques</p>
            </div>
      
            <div class="absolute left-[95px] top-[272px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                src="../../assets/icona/prodact.svg"
                class=" border-white w-full h-full"></img>
              </div>
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Produits</p>
            </div>
      
            <div class="absolute left-[95px] top-[313px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                src="../../assets/icona/cate.svg"
                class=" border-white w-full h-full"></img>
              </div>
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Categories</p>
            </div>
      
            <div class="absolute left-[95px] top-[354px] flex items-center gap-3">
              <div class="w-6 h-6">
                
                <img 
                src="../../assets/icona/list.svg"
                 class=" border-white w-full h-full"></img>
              </div>
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Liste livres</p>
            </div>
      
            <div class="absolute left-[95px] top-[395px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                src="../../assets/icona/comond.svg"
                class=" border-white w-full h-full"></img>
              </div>
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Commandes</p>
            </div>
      
            <div class="absolute left-[95px] top-[436px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                 src="../../assets/icona/city.svg"         
                class=" border-white w-full h-full"></div>
              </img>
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Villes</p>
            </div>
      
            <div class="absolute left-[95px] top-[477px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                 src="../../assets/icona/shoole.svg"
                class=" border-white w-full h-full"></div>
              </img>
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Écoles</p>
            </div>
      
            <div class="absolute left-[95px] top-[514px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
    src="../../assets/icona/class.svg"            
                class=" border-white w-full h-full"></div>
              </img>
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Classes</p>
            </div>
      
            <div class="absolute left-[95px] top-[551px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                src="../../assets/icona/lang.svg"
                class=" border-white w-full h-full"></div>
              </img>
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Langues</p>
            </div>
      
            <div class="absolute left-[95px] top-[591px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                src="../../assets/icona/code.svg"
                class=" border-white w-full h-full"></div>
              </img>
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Coupon Code</p>
            </div>
      
            <div class="absolute left-[95px] top-[628px] flex items-center gap-3">
              <div class="w-6 h-6">
                <img 
                src="../../assets/icona/stuck.svg"
                class=" border-white w-full h-full"></div>
              </img>
              <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Fournitures</p>
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
    
    
    










    <!--page2  -->
    <div v-if="showModal" class="fixed inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center">


    <div class="bg-[#ffffff]  w-[794px] h-[324px] ">
        
        <button @click="showModal = false" class="absolute ml-[730px]">
          <img src="../../assets/exit.svg" alt="">
        </button>
        </div>



</div>











  <div class="relative">
  
    <h1 class="absolute left-[398px] top-[127px] font-poppins font-medium text-[30px] leading-[45px] text-[#00B8D0]">
      Commandes
    </h1>


<button @click="showModal = true" class="bg-[#000000] absolute w-[70px] h-[70px] text-[#FFFFFF] rounded-full  " >test</button>
   

 
    <div class="absolute left-[397px] top-[238px] font-poppins font-bold text-[16px] leading-[24px] text-[#004079]">
      Nº de commande
    </div>
    <div class="absolute left-[608px] top-[238px] font-poppins font-bold text-[16px] leading-[24px] text-[#004079]">
      Date
    </div>
    <div class="absolute left-[786px] top-[238px] font-poppins font-bold text-[16px] leading-[24px] text-[#004079]">
      Type de pack
    </div>
    <div class="absolute left-[1001px] top-[238px] font-poppins font-bold text-[16px] leading-[24px] text-[#004079]">
      Prix
    </div>
    <div class="absolute left-[1150px] top-[238px] font-poppins font-bold text-[16px] leading-[24px] text-[#004079]">
      Status
    </div>
    <div class="absolute left-[1283px] top-[238px] font-poppins font-bold text-[16px] leading-[24px] text-[#004079]">
      Detail
    </div>

    <!-- Divider line -->
    <div class="absolute left-[397px] top-[282px] w-[988px] border-b border-[#004079]"></div>

    <!-- Table Rows - Generated dynamically in a real app -->
    <div v-for="(row, index) in rows" :key="index" class="relative">
      <!-- Order Number -->
      <div class="absolute left-[398px] font-poppins font-medium text-[16px] leading-[24px] text-[#004079]"
           :style="{ top: `${317 + index * 49}px` }">
        LV0001
      </div>
      
      <!-- Date -->
      <div class="absolute left-[580px] font-poppins font-medium text-[16px] leading-[24px] text-[#004079]"
           :style="{ top: `${317 + index * 49}px` }">
        12/02/2023
      </div>
      
      <!-- Pack Type -->
      <div class="absolute left-[796px] font-poppins font-medium text-[16px] leading-[24px] text-[#004079]"
           :style="{ top: `${317 + index * 49}px` }">
        Pack Rentré
      </div>
      
      <!-- Price -->
      <div class="absolute left-[967px] font-poppins font-medium text-[16px] leading-[24px] text-[#004079]"
           :style="{ top: `${317 + index * 49}px` }">
        900,00 DHS
      </div>
      
      <!-- Status -->
      <div class="absolute left-[1113px] top-[312px] w-[126px] h-[34px] border border-[#004079] rounded-full flex items-center justify-center"
           :style="{ top: `${312 + index * 49}px` }">
        <span class="font-poppins text-[15px] leading-[22px] text-[#004079] px-3">En attente</span>
      </div>
      
      <!-- Detail Button -->
      <button class="absolute left-[1283px] font-poppins font-bold text-[16px] leading-[24px] text-[#004079]"
              :style="{ top: `${317 + index * 49}px` }">
        Detail
      </button>
      
      <!-- Delete Button -->
      <button class="absolute left-[1360px] w-[25px] h-[26px] flex items-center justify-center"
              :style="{ top: `${316 + index * 49}px` }">
        <!-- Delete icon - simplified version -->
        <div class="relative w-full h-full">
          <div class="absolute left-[16.66%] right-[16.67%] top-[29.16%] bottom-[70.84%] border-t border-[#00B8D0]"></div>
          <div class="absolute left-[41.66%] right-[58.34%] top-[45.84%] bottom-[29.16%] border-l border-[#00B8D0]"></div>
          <div class="absolute left-[58.34%] right-[41.66%] top-[45.84%] bottom-[29.16%] border-r border-[#00B8D0]"></div>
          <div class="absolute left-[20.84%] right-[20.83%] top-[29.16%] bottom-[12.51%] border-b border-[#00B8D0]"></div>
          <div class="absolute left-[37.5%] right-[37.5%] top-[12.5%] bottom-[70.83%] border-t border-[#00B8D0]"></div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
            showModal: false,

      rows: Array(10).fill({}) 
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>






    
    
 