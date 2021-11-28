<template>
<div>
    <pantalla></pantalla>
    <teclado></teclado>
    </div>
</template>
<script>
import Pantalla from './pantalla.vue'
import teclado from './teclado.vue'
export default {
  components: { teclado, Pantalla },
}
</script>
<style>

</style>