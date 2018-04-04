<template>

  <div class="index">
    
    <my-left v-show="local"></my-left>   
    <my-right></my-right>    
  </div>






</template>

<script>

import MyLeft from '@/components/left'
import MyRight from '@/components/right'
export default {
  data (){
    return {
      local: true,
      screen: document.body.clientWidth
    }
  },
  components: {

    MyLeft,
    MyRight
  },
  mounted () {
    const that = this
    window.onresize = function() {
      that.screen = document.body.clientWidth 
   
    };

  },
  watch: {
    screen (val){
      if( val > 970){
        $('.index').addClass('col-xd')
        this.local = true
      }else if( val  < 970){
        $('.index').removeClass('col-xd')
        this.local = false
      }       
    }
  }
}
   
</script>

<style>
.index{
    position: relative;
  /*  width: 1100px;
    height: 830px;*/
    border: 2px solid #f0f;
}

.col-xd{
  position: relative;
}

</style>