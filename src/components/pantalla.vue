<template>
    <div>
           <h5>{{this.$store.state.operador1}}{{this.$store.state.operador}}{{this.$store.state.operador2}}</h5>
           <h3>{{this.$store.state.resultado}}</h3>
     </div>    
     
</template>
<script>
export default {
 
/*props:{
    operad1:{
      type:String,
      require:true
    },
    operad:{
      type:String,
      require:true
    },
    operad2:{
      type:String,
      require:true
    },
    resultad:{
      type:Number,
      require:true
    },
}*/

    
}
</script>
<style>
h5{
    padding-top: 3px;
    padding-right: 3px;
    font-size: 8px;
    text-align: right;
    margin: 2px 2px 0px 2px;
   
    background-color: #999999;
    color: #FFFFFF;
    height:24px;
}
h3{
    padding-top: 3px;
    padding-right: 6px;
    font-size:25px;
    text-align: right;
     margin: 0px 2px 2px 2px;
    
    background-color: #999999;
    color: #FFFFFF;
    height: 50px;
}
</style>