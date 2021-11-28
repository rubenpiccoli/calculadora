<template>

<div id="calculadora">
         
            
         
         <div> 
             
              <pantalla :operad1="operador1" :operad="operador" :operad2="operador2" :resultad="resultado"></pantalla>
          
          </div>
       
 <boton spanX=1 spanY=1 @value="valor"></boton>
   <div>
   <button type="button" id="nuevocalculo"  style="display:none" @click="nuevocalculo()">borrar</button>
   </div>
    </div>
    
   
</template>
<script>
import Boton from './boton.vue';
import pantalla from './pantalla.vue';
//import{ref} from 'vue'

export default{
  components: { pantalla, Boton },
    

    data(){
        return{
            mensaje:"hola soy ruben",
           
            operador1:"",
            
            operador2:"",
            resultado:0,
           
            //////
           
            display:"",
            operador:"",
            
           
        }
        
    },
     computed:{
              invertido(){
                return  this.mensaje.split('').reverse().join('')

              },
                       
     },
   methods:{
valor(value){this.val=value

              this.$store.commit('disableOperador', false);
             
               this.display= this.display+this.val;                          
             const noesnumero = isNaN(this.val)
              console.log(noesnumero)

              if(this.val=="=") {
                       this.calcular()
                       return
                   }
             /// si el operador (+-*/ no esta vacio)
             if(this.operador!=="" && !noesnumero){
                  
                    
                  /* if(this.operador2!=="" && noesnumero ) {
                     
                      
                       this.operador=this.val
                      /////// variable store para disable botones numerico ////
                       this.$store.commit('disableBotones', true);
                      
                                 document.getElementById('nuevocalculo').style.display="block"
                                 this.calcular()

                       return

                    }*/
                    
              document.getElementById('igual').disabled=false;
               
               this.operador2=this.display
               console.log('operador2',this.operador2)
              
             }else if(noesnumero){
                   
                   this.operad=""
                  this.operador=""
                   this.display=""
                   this.operador=this.val
                  console.log('operador', this.operador)
              }else{
                 
             
               this.operador1=this.display 
               console.log('operador1', this.operador1)
              }
              
              
},
nuevocalculo:function(){
               this.operador1=""
               this.operador2=""
                this.operador=""
                this.resultado=0
                this.noesnumero=null
                this.display=""
                ////varible de store para cambiarla de cualquier componente /////
                this.$store.commit('disableBotones', false);
                this.$store.commit('disableOperador', true);
                                 document.getElementById('nuevocalculo').style.display="none"
},

calcular:function(){
     document.getElementById('nuevocalculo').style.display="block"
   switch (this.operador) {
       case "+":
             this.resultado=Number(this.operador1)+Number(this.operador2);
                break ;
        case "-":
             this.resultado=Number(this.operador1)-Number(this.operador2);

                break ;
         case "*":
             this.resultado=Number(this.operador1)*Number(this.operador2);

                break ;
         case "/":
             this.resultado=Number(this.operador1)/Number(this.operador2);

                break ;
        default:
            
            break;
    }
   
} 
},

     
 }



 


</script>
<style >
#calculadora{
     position: absolute; 
     margin: 100px;  
     background-color: rgb(133, 131, 131);
     padding: 8px;
}

#nuevocalculo{
    background-color: forestgreen;
    width: 100px;
    align-content: center;
}
</style>