<template>

<div id="calculadora">
         
             
         
          <div>
              <pantalla :operad1="operador1" :operad="operador" :operad2="operador2" :resultad="resultado"></pantalla>
          
          </div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <button  type="button" id="1" value="1" @click="agregarTexto($event)">1</button>
                    <button  type="button" id="2" value="2" @click="agregarTexto($event)">2</button>
                    <button  type="button" id="3" value="3" @click="agregarTexto($event)">3</button>
                    <button  type="button" id="operadormas" disabled value="+" @click="agregarTexto($event)">+</button>
                </div>
           </div>
           <div class="row">
            <div class="col">
               <button  type="button" id="4" value="4" @click="agregarTexto($event)">4</button>
               <button  type="button" id="5" value="5" @click="agregarTexto($event)">5</button>
               <button  type="button" id="6" value="6" @click="agregarTexto($event)">6</button>
               <button  type="button" id="operadormenos" disabled value="-" @click="agregarTexto($event)">-</button>
              </div>
           </div>
           <div class="row">
            <div class="col">
                <button  type="button" id="7" value="7" @click="agregarTexto($event)">7</button>
                <button  type="button" id="8" value="8" @click="agregarTexto($event)">8</button>
                <button  type="button" id="9" value="9" @click="agregarTexto($event)">9</button>
                <button  type="button" id="operadorpor" disabled value="*" @click="agregarTexto($event)">*</button>
            </div>
           </div>
           <div class="row">
            <div class="col">
               <button  type="button" id="0" value="0" @click="agregarTexto($event)">0</button>
               <button id="igual" type="button" value="=" @click="calcular()" disabled>=</button>
               <button  type="button" id="operadordivide" disabled value="/" @click="agregarTexto($event)">/</button>
            </div>
           </div>
             </div>

   <div>
   <button type="button" id="nuevocalculo"  style="display:none" @click="nuevocalculo()">borrar</button>
   </div>
    </div>
   
</template>
<script>
import pantalla from './pantalla.vue';
//import{ref} from 'vue'

export default{
  components: { pantalla },
    

    data(){
        return{
            
            operador1:"",
            
            operador2:"",
            resultado:0,
           
            //////
           
            display:"",
            operador:"",
           
           
        }
        
    },
   methods:{

agregarTexto: function(e){
              
               document.getElementById('operadormas').disabled=false;
               document.getElementById('operadormenos').disabled=false;
                document.getElementById('operadorpor').disabled=false;
                document.getElementById('operadordivide').disabled=false;

               this.display=this.display+e.target.value;                          
             const noesnumero = isNaN(this.display)

             /// si el operador (+-*/ no esta vacio)
             if(this.operador!==""){
                
                   if(this.operador2!=="" && noesnumero) {
                     
                      
                       this.operador=e.target.value
                       document.getElementById('1').disabled=true;
                        document.getElementById('2').disabled=true;
                         document.getElementById('3').disabled=true;
                          document.getElementById('4').disabled=true;
                           document.getElementById('5').disabled=true;
                            document.getElementById('6').disabled=true;
                             document.getElementById('7').disabled=true;
                              document.getElementById('8').disabled=true;
                               document.getElementById('9').disabled=true;
                                document.getElementById('0').disabled=true;
                                 document.getElementById('nuevocalculo').style.display="block"
                                 this.calcular()

                       return

                    }
              document.getElementById('igual').disabled=false;
               this.operador2=this.display
               console.log('operador2',this.operador2)
              
             }else if(noesnumero){
                   
                   this.display=""
                   this.operador=e.target.value
                  console.log('noesnumero',this.noesnumero)
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
                       document.getElementById('1').disabled=false;
                        document.getElementById('2').disabled=false;
                         document.getElementById('3').disabled=false;
                          document.getElementById('4').disabled=false;
                           document.getElementById('5').disabled=false;
                            document.getElementById('6').disabled=false;
                             document.getElementById('7').disabled=false;
                              document.getElementById('8').disabled=false;
                               document.getElementById('9').disabled=false;
                                document.getElementById('0').disabled=false;
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
            alert(" sin evaluar ");
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