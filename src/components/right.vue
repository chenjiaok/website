<template>
  <div class="information">
    <my-info></my-info>   
    <my-project></my-project>  
       
      
  </div>



</template>

<script>

import MyInfo from '@/components/info'
import MyProject from '@/components/project'
export default {
  data (){
    return {
      screen
    }
  },
  components: {

    MyInfo,
    MyProject
  },
 /* mounted () {
    const that = this
    window.onresize = function() {
      that.screen = document.body.clientWidth 
   
    };

  },
  watch: {
    screen (val){
      if( val > 970){
        $(".information").removeClass('autocenter')
        $(".information").addClass('floatleft')
     
      }else if( val  < 970){
        $(".information").removeClass('floatleft')
        $(".information").addClass('autocenter')
         
      }       
    }
  }*/
}
</script>

<style>
.information{
    position: absolute;
    top: 0;
    left: 450px;
  /*  border: 3px solid #f00; */
    background-color: #eee;
}

.autocenter{
  position: relative;
  margin: 0 auto;
}
.floatleft{
    position: absolute;
    top: 0;
    left: 450px;
}
</style>