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






      
  <div class="relative font-poppins text-[#004079]">

      <!-- Add category button -->
      <button @click="showModal = true" class="absolute left-[399px] top-[98px] w-[283px] text-[#FFFFFF] text-[16px]  h-[57px] bg-[#004079] rounded-full">
        + Ajouter une categorie
    </button>






<!--open [page 2]-->
<div v-if="showModal = true" class="fixed inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center">


<div class="absolute bg-[#ffffff] w-[794px] h-[342px]">


        <button @click="showModal = false" class="absolute ml-[730px]">
          <img src="../../assets/exit.svg" alt="">
        </button>

   <div class=" mt-[90px] flex items-center justify-center gap-2">
        <input 
        class=" w-[309px] h-[65px] rounded-full border-2 border-[#004079]"
        type="text" 
        placeholder="UIC Casablanca">

      <input 
        class=" w-[309px] h-[65px] rounded-full border-2 border-[#004079]"
        type="text" 
        placeholder="Collége">
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



    <!-- Header -->
    <div class="absolute left-[397px] top-[238px] w-[56px]">
      <h3 class="font-bold text-base leading-6">Classe</h3>
    </div>
    <div class="absolute left-[677px] top-[238px] w-[59px]">
      <h3 class="font-bold text-base leading-6">Niveau</h3>
    </div>
    <div class="absolute left-[1109px] top-[238px] w-[54px]">
      <h3 class="font-bold text-base leading-6">Status</h3>
    </div>
    
    <!-- Divider line -->
    <div class="absolute left-[397px] top-[282px] w-[988px] border-t border-[#004079]"></div>
    
    <!-- Rows -->
    <div v-for="(row, index) in rows" :key="index" class="absolute" :style="rowStyle(index)">
      <!-- Class -->
      <div class="w-[101px] font-medium text-base leading-6">7éme année</div>
      
      <!-- Level -->
      <div class="left-[278px] absolute w-[62px] font-medium text-base leading-6">Collége</div>
      
      <!-- Status indicator -->
      <div class="left-[717px] absolute w-[49px] h-[23px] bg-[#75E562] rounded-full flex items-center justify-end pr-[6px]">
        <div class="w-[17px] h-[17px] bg-white rounded-full"></div>
      </div>
      
      <!-- Action buttons -->
      <div class="left-[966px] absolute w-[25px] h-[26px]"></div>
      <div class="left-[929px] absolute w-[26px] h-[26px]"></div>
    </div>
  </div>






















































</template>



<script>
export default {
  data() {
    return {
      showModal: false
      //rows: Array(12).fill(0) // 12 rows as in your original CSS
    }
  },
  methods: {
    rowStyle(index) {
      const top = 317 + (index * 46);
      return {
        left: '398px',
        top: `${top}px`,
        width: '101px',
        height: '24px'
      };
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

</style>