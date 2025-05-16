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



  <!-- Main container -->
  <div class="relative w-full">
    <!-- Header section -->
    <div class="relative">
      <!-- "Ajouter ville" button -->
      <button @click="showModal = true" class="absolute left-[399px] top-[98px] w-[283px] h-[57px] bg-[#004079] rounded-full text-[#ffffff]">+ Ajouter ville
      </button>
    </div>

<div v-if="showModal" class="fixed inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center">

  <div class="bg-[#FFFFFF]  w-[794px] h-[324px] ">

     <button @click="showModal = false" class="absolute ml-[730px]">
          <img src="../../assets/exit.svg" alt="">
        </button>
        

<h1 class="absolute text-[16px] text-[#004079] ml-[70px] mt-[90px]">Nom de Classe</h1>
<h1 class="absolute text-[16px] text-[#004079] ml-[430px] mt-[90px]">Niveau</h1>
 
    <div class="mt-[120px] flex items-center justify-center gap-4">
  <input 
    class="w-[336px] h-[65px] border-2 border-[#004079] rounded-[100px] px-4"
    type="text"
    placeholder="UIC Casablanca">
  
  <input 
    class="w-[336px] h-[65px] border-2 border-[#004079] rounded-[100px] px-4"
    type="text"
    placeholder="Collége">
</div>

  </div>
</div>

      





















    <!-- Table headers -->
    <div class="relative">
      <!-- Ville header -->
      <div class="absolute left-[397.5px] top-[238px] w-[36px] h-[24px]">
        <span class="font-poppins font-bold text-base text-[#004079]">Ville</span>
      </div>
      
      <!-- Code postal header -->
      <div class="absolute left-[786px] top-[238px] w-[99px] h-[24px]">
        <span class="font-poppins font-bold text-base text-[#004079]">Code postal</span>
      </div>
      
      <!-- Status header -->
      <div class="absolute left-[1109px] top-[238px] w-[54px] h-[24px]">
        <span class="font-poppins font-bold text-base text-[#004079]">Status</span>
      </div>
    </div>

    <!-- Divider line -->
    <div class="absolute left-[397px] top-[282px] w-[988px] border-t border-[#004079]"></div>

    <!-- Table row -->
    <div class="relative">
      <!-- Ville value -->
      <div class="absolute left-[398px] top-[317px] w-[100px] h-[24px]">
        <span class="font-poppins font-medium text-base text-[#004079]">Casablanca</span>
      </div>
      
      <!-- Code postal value -->
      <div class="absolute left-[796px] top-[317px] w-[52px] h-[24px]">
        <span class="font-poppins font-medium text-base text-[#004079]">80000</span>
      </div>
      
      <!-- Status indicator -->
      <div class="absolute left-[1114px] top-[317px] w-[49px] h-[23px] bg-[#75E562] rounded-full">
        <div class="absolute left-[26px] top-[3px] w-[17px] h-[17px] bg-white rounded-full"></div>
      </div>
      
      <!-- Edit icon -->
      <div class="absolute left-[1323.5px] top-[317px] w-[26px] h-[26px]">
        <!-- This would be replaced with an actual SVG icon -->
        <div class="relative w-full h-full">
          <div class="absolute left-[16.67%] right-[29.16%] top-[29.16%] bottom-[16.67%] border border-[#00B8D0]"></div>
          <div class="absolute left-[37.5%] right-[12.5%] top-[12.5%] bottom-[37.5%] border border-[#00B8D0]"></div>
          <div class="absolute left-[66.67%] right-[20.83%] top-[20.84%] bottom-[66.66%] border border-[#00B8D0]"></div>
        </div>
      </div>
      
      <!-- Other icon -->
      <div class="absolute left-[1360.5px] top-[316px] w-[25px] h-[26px]">
        <!-- This would be replaced with an actual SVG icon -->
        <div class="relative w-full h-full">
          <div class="absolute left-[16.66%] right-[16.67%] top-[29.16%] bottom-[70.84%] border border-[#00B8D0]"></div>
          <div class="absolute left-[41.66%] right-[58.34%] top-[45.84%] bottom-[29.16%] border border-[#00B8D0]"></div>
          <div class="absolute left-[58.34%] right-[41.66%] top-[45.84%] bottom-[29.16%] border border-[#00B8D0]"></div>
          <div class="absolute left-[20.84%] right-[20.83%] top-[29.16%] bottom-[12.51%] border border-[#00B8D0]"></div>
          <div class="absolute left-[37.5%] right-[37.5%] top-[12.5%] bottom-[70.83%] border border-[#00B8D0]"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityTableRow',
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