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
             <router-link to="/login">
            <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#FFFFFF]">Logout</p>
            </router-link>
          </div>
    
          <div class="absolute w-[7px] h-[33px] left-[290px] top-[231px] bg-[#00B8D0]"></div>
        </div>
        </div>

























  <div class="relative min-h-screen bg-white">
    <!-- Add Pack Button -->
    <button @click="showModel = true " class="absolute w-[283px] h-[57px] left-[399px] top-[98px] bg-[#004079] rounded-[100px]">
      test
    </button>


   <div v-if="showModel" class="fixed inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center" >
<div class="w-[794x] h-[342px] bg-[#ffffff]"></div>

     
   </div>














    <!-- School List Title -->
    <h2 class="absolute w-[105px] h-[24px] left-[397.5px] top-[238px] font-poppins font-medium text-[16px] leading-[24px] text-[#004079]">Liste Scolaire</h2>

    <!-- Table Headers -->
    <div class="absolute w-[988px] h-[0px] left-[397px] top-[282px] border border-[#004079]"></div>
    <div class="absolute w-[73px] h-[24px] left-[743px] top-[238px] font-poppins font-medium text-[16px] leading-[24px] text-[#004079]">Prix Total</div>
    <div class="absolute w-[43px] h-[24px] left-[893px] top-[238px] font-poppins font-medium text-[16px] leading-[24px] text-[#004079]">École</div>
    <div class="absolute w-[34px] h-[24px] left-[1024px] top-[238px] font-poppins font-medium text-[16px] leading-[24px] text-[#004079]">Ville</div>
    <div class="absolute w-[99px] h-[24px] left-[594px] top-[238px] font-poppins font-medium text-[16px] leading-[24px] text-[#004079]">Nº des livres</div>
    <div class="absolute w-[52px] h-[24px] left-[1173px] top-[238px] font-poppins font-medium text-[16px] leading-[24px] text-[#004079]">Status</div>

    <!-- Table Rows -->
    <div v-for="(row, index) in rows" :key="index" class="relative">
      <!-- Book Image -->
      <div class="absolute w-[46px] h-[62px] left-[397px]" :class="`top-[${294 + index * 82}px]`" :style="{ backgroundImage: 'url(image)' }"></div>
      
      <!-- School Info -->
      <div class="absolute w-[99px] h-[28px] left-[450px]" :class="`top-[${311 + index * 82}px]`">
        <p class="font-poppins font-medium text-[11.18px] leading-[14px] text-[#004079]">Collège ANATOLE FRANCE / 3ºA</p>
      </div>
      
      <!-- Book Count -->
      <div class="absolute w-[16px] h-[24px] left-[624px]" :class="`top-[${316 + index * 82}px]`">
        <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#004079]">10</p>
      </div>
      
      <!-- Price -->
      <div class="absolute w-[55px] h-[24px] left-[748.5px]" :class="`top-[${316 + index * 82}px]`">
        <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#004079]">900,00</p>
      </div>
      
      <!-- School -->
      <div class="absolute w-[34px] h-[24px] left-[898px]" :class="`top-[${316 + index * 82}px]`">
        <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#004079]">URC</p>
      </div>
      
      <!-- City -->
      <div class="absolute w-[100px] h-[24px] left-[991px]" :class="`top-[${316 + index * 82}px]`">
        <p class="font-poppins font-medium text-[16px] leading-[24px] text-[#004079]">Casablanca</p>
      </div>
      
      <!-- Status -->
      <div class="absolute w-[49px] h-[23px] left-[1176px]" :class="`top-[${317 + index * 82}px]`">
        <div class="w-full h-full bg-[#75E562] rounded-[100px] relative">
          <div class="absolute w-[17px] h-[17px] left-[29px] top-[3px] bg-white rounded-full"></div>
        </div>
      </div>
      
      <!-- Edit Button -->
      <div class="absolute w-[26px] h-[26px] left-[1323.5px]" :class="`top-[${315 + index * 82}px]`">
        <!-- Edit icon SVG would go here -->
      </div>
      
      <!-- Delete Button -->
      <div class="absolute w-[25px] h-[26px] left-[1360.5px]" :class="`top-[${315 + index * 82}px]`">
        <!-- Delete icon SVG would go here -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModel: false
     // rows: Array(6).fill(0) // Creates 6 rows
      
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>












