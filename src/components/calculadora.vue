<template>

  <div id="calculadora">
    
    <pantalla></pantalla>
    <teclado></teclado>
    </div>
   
</template>
<script>
import Pantalla from './pantalla.vue'

import teclado from './teclado.vue'
export default {
  components: { teclado, Pantalla, },
}
</script>
<style>
#calculadora{
 
     position: absolute; 
    margin: 70px;  
     background-color: rgb(133, 131, 131);
     padding: 8px;
}

</style>