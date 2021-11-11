<template>
    <div>
        <div>
            <p>
                {{display}}
            </p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <button  type="button" value="1" @click="value($event)">1</button>
                    <button  type="button" value="2" @click="value($event)">2</button>
                    <button  type="button" value="3" @click="value($event)">3</button>
                    <button  type="button" value="+" @click="value($event)">+</button>
                </div>
           </div>
           <div class="row">
                <div class="col-sm">
           <button  type="button" value="4" @click="value($event)">4</button>
            <button  type="button" value="5" @click="value($event)">5</button>
             <button  type="button" value="6" @click="value($event)">6</button>
             <button  type="button" value="-" @click="value($event)">-</button>
              </div>
           </div>
           <div class="row">
                <div class="col-sm">
           <button  type="button" value="7" @click="value($event)">7</button>
            <button  type="button" value="8" @click="value($event)">8</button>
             <button  type="button" value="9" @click="value($event)">9</button>
             <button  type="button" value="*" @click="value($event)">*</button>
              </div>
           </div>
           <div class="row">
                <div class="col-sm">
           <button  type="button" value="0" @click="value($event)">0</button>
            <button id="igual" type="button" value="=" @click="value($event)">=</button>
             <button  type="button" value="/" @click="value($event)">/</button>
              </div>
           </div>
             </div>

    </div>
</template>

<script>
export default{
    data(){
        return{
                 display:""
        }        
    },
    methods:{
value:function(e){
     this.display= e.target.value 
    console.log('display', this.display )   
}
    }
}
</script>

<style >
button {    
    font: 18px;
    height: 45px;
    width: 45px;
    margin: 2px;
    font-weight: bold;
}
#igual{
    width: 92px
}
</style>
