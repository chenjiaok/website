<template>
  <div class="information">
    <my-info></my-info> 
    <my-kill></my-kill>   
    <my-project></my-project>  
    <my-record></my-record>   
      
  </div>

</template>

<script>

import MyInfo from '@/components/info'
import MyProject from '@/components/project'
import MyRecord from '@/components/record'
import MyKill from '@/components/kill'

export default {
  data (){
    return {
      screen
    }
  },
  components: {

    MyInfo,
    MyKill,
    MyProject,
    MyRecord,
  },
}
</script>

<style>
.information{
  
    border-left: 2px solid #f00;
    background-color: #eee;
}


</style>