<template>
    <div class="min-h-screen w-full h flex">
      <div class="w-1/2 max-h-screen flex bg-dark-blue">
        <img src="../../assets/logo-bg.svg" class="opacity-85" height="100" alt="Logo">
      </div>
     
      <div class="w-1/2 flex bg-white-color items-center justify-center">
        <div class="w-full max-w-md p-8">
          
          <form class=" space-y-6">
            <div>
              <label for="username" class="block text-[28px] ml-[20px] font-medium text-[#004079]">
                User
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                placeholder="Nom d’utilisateur ou adresse e-mail"
                class="mt-1 block w-[429px] h-[86px] px-3 py-2 border border-[#004079] rounded-[40px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
            </div> 
  
            <div>
              <label for="password" class="block text-[28px] ml-[20px] font-medium text-[#004079]">
               Password
              </label>

                 <img
                class="absolute ml-[380px] mt-[30px] "
                src="../../assets/look.svg" alt="icona1">
              <input
              
                id="password"
                name="password"
                type="password"
                placeholder="xxxxxxxxxxxxxx"
                required
                class="mt-1 block w-[429px] h-[86px] px-3 py-2 border border-[#004079] rounded-[40px]  shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    
                >
             
            </div>
  
            
           
  
            <div>
              <button
                type="submit"
                class=" mt-[40px] w-[429px] h-[86px] flex justify-center py-2 px-4 border border-transparent rounded-[40px] shadow-sm text-[28px] font-medium text-[#ffffff] bg-[#00B8D0] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
              <h1 class="flex items-center justify-center ml-[100px]" >Login</h1> 
              <img 
              class=" ml-[150px]"
              src="../../assets/login.svg" alt="iconalogin">
              
            
              </button>

<a href="/">
<h1 class="flex justify-center mt-[100px] text-[#CCCCCC] ml-[60px] text-[18px]">
    Mot de passe oublier ?
</h1>
</a>
            </div>
               
</form>

        </div>
    </div>
</div>
  </template>
  
  <script setup>
  </script>