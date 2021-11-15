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
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default{
 
  
    data(){
       
        return{
                 display:"",
                
        }        
    },
    methods:{
value:function(e){
       
     this.display= this.display+(e.target.value) 
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
