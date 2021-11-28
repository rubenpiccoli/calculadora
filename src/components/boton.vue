<template>
   <div class="container">
           
       {{this.$store.state.nuDisable}}
        
            <div class="row">
                <div class="col">
                    <button  v-bind:style="{width: spanX * 45 + 'px' }"  value="1" :disabled=this.$store.state.nuDisable @click="agregarTexto($event)">1</button>
                    <button  v-bind:style="{width: spanX * 45 + 'px' }"  value="2" :disabled=this.$store.state.nuDisable @click="agregarTexto($event)">2</button>
                    <button  v-bind:style="{width: spanX * 45 + 'px' }"  value="3" :disabled=this.$store.state.nuDisable @click="agregarTexto($event)">3</button>
                    <button  v-bind:style="{width: spanX * 45 + 'px' }"  value="+" :disabled=this.$store.state.opDisable  @click="agregarTexto($event)">+</button>
                </div>
           </div>
            <div class="row">
            <div class="col">
               <button  v-bind:style="{width: spanX * 45 + 'px' }"  value="4" :disabled=this.$store.state.nuDisable @click="agregarTexto($event)">4</button>
               <button  v-bind:style="{width: spanX * 45 + 'px' }"  value="5" :disabled=this.$store.state.nuDisable @click="agregarTexto($event)">5</button>
               <button  v-bind:style="{width: spanX * 45 + 'px' }"  value="6" :disabled=this.$store.state.nuDisable @click="agregarTexto($event)">6</button>
               <button  v-bind:style="{width: spanX * 45 + 'px' }"  value="-" :disabled=this.$store.state.opDisable @click="agregarTexto($event)">-</button>
              </div>
           </div>
           <div class="row">
            <div class="col">
                <button  v-bind:style="{width: spanX * 45 + 'px' }"  value="7" :disabled=this.$store.state.nuDisable @click="agregarTexto($event)">7</button>
                <button  v-bind:style="{width: spanX * 45 + 'px' }"  value="8" :disabled=this.$store.state.nuDisable @click="agregarTexto($event)">8</button>
                <button  v-bind:style="{width: spanX * 45 + 'px' }"  value="9" :disabled=this.$store.state.nuDisable @click="agregarTexto($event)">9</button>
                <button  v-bind:style="{width: spanX * 45 + 'px' }"  value="*" :disabled=this.$store.state.opDisable @click="agregarTexto($event)">*</button>
            </div>
           </div>
           <div class="row">
            <div class="col">
               <button  v-bind:style="{width: spanX * 45 + 'px' }" value="0" :disabled=this.$store.state.nuDisable @click="agregarTexto($event)">0</button>
               <button  v-bind:style="{width: spanX * 92 + 'px' }" value="=" :disabled=this.$store.state.opDisable @click="agregarTexto($event)" id="igual">=</button>
               <button  v-bind:style="{width: spanX * 45 + 'px' }" value="/" :disabled=this.$store.state.opDisable @click="agregarTexto($event)">/</button>
            </div>
           </div>
           
        </div>
</template>

<script>



export default{
 
 props: {
   spanX:String,
  
   spanY:String,
    
   
},
 
  
    data(){
                
                 
          
        return{
                 nuDisable:false,
                 opDisable:true,
                 display:"",
                 
                
                
        }
         
            
    },
       
      
    methods:{
    agregarTexto:function(e){
       
     this.display= (e.target.value) 
     
      if(this.display=="="){
          this.$store.commit('disableBotones', true);
      }
    this.$emit('value', this.display);
    
 }
}
}
</script>

<style >

button {    
    font: 18px;
   /* height: 45px;
    width: 45px;*/
    margin: 2px;
    font-weight: bold;

}

</style>
