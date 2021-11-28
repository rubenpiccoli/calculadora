<template>
<div>
    <h2> Listado con Devextreme</h2>
<dx-data-grid
 id="iddatagrid"
:data-source="arraydedatos"
:columns="columns"

:showRowLines="true"
:allow-column-reordering="true"
:allow-column-resizing="true"
:showColumnLines="true"
:show-borders="true"
:rowAlternationEnabled="true"
:loadPanel="loadPanel"
:filterRow="filterRow"
:searchPanel="searchPanel"
:noDataText="noDataText"
ref="grillaPaginacionNormal"
:stateStoring="stateStoring"
>

</dx-data-grid >
    


</div>
    
</template>
<script>
import{ DxDataGrid} from 'devextreme-vue/data-grid';

export default {
     components:{
         DxDataGrid
     },

     data(){
         return{
             arraydedatos:[
                 {id:1, nombre:"Juan"},
                 {id:2, nombre:"Nico"},

             ],
         
             columns:[
                 {
                 Caption:"Id",
                 dataField:"id",
                 aligment:"center"
                 },
                 {
                 Caption:"Nombre",
                 dataField:"nombre",
                 aligment:"center"
                 },
                 {
                     caption:"Opciones",
                     type:"buttons",
                     
                     buttons:[
                         {
                             nane:"editar",
                             hint:"Editar Persona",
                             Text:"Editar",
                             icon:"edit",
                             visible:true,
                             onClick:async(e)=>{
                                 console.log(e);
                             }
                         },
                         {
                             nane:"borrar",
                             hint:"Borrar Persona",
                             Text:"Borrar",
                             icon:"trash",
                             visible:true,  
                             onClick:this.metodoclick
                         }
                     ]
                 }

             ],
             headerFilter:{
             visible:"True" 
             },
             noDataText:"No se encontraron Resultado",
             filterRow:{
                 visible:"True",
                 applyFilter:"auto",
                 resetOperationText:"reset"
             },
             loadPanel:{
                 visible:"True",
                 Text:"Cargando.."
             },
             searchPanel:{
                 visible:"True",
                 width:240,
                 placebolder:"Buscar...",
             }
                     
              
         }
         
     },
     methods:{
         metodoclick(e){
             console.log(e)
         }
     },
     stateStoring:{
         enabled:true,
         type:"localStorage",
         storageKey:"grillaPaginacionNormal"
     }
}

</script>
<style lang="scss">

</style>