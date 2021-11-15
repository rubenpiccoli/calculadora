<template>
    <div>
           <h5>{{operad1}}{{operad}}{{operad2}}</h5>
           <h3>{{resultad}}</h3>
    </div>      
     
</template>
<script>
export default {

props:{
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
}

    
}
</script>
<style>
h5{
    padding-top: 6px;
    padding-right: 6px;
    font-size: 13px;
    text-align: right;
    margin: 2px 2px 0px 2px;
   
    background-color: #999999;
    color: #FFFFFF;
    height:23px;
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