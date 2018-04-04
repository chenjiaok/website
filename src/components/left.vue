<template>
  <div class="time">
    <my-calendar></my-calendar>      
    <my-clock></my-clock>    
  </div>



</template>

<script>

import MyClock from '@/components/clock'
import MyCalendar from '@/components/calendar'
export default {
  data (){
    return {

    }
  },
  components: {

    MyClock,
    MyCalendar
  }
}
</script>

<style>
.time{
    
    width: 430px;
    height: 800px;
    border-right: 2px solid #38f;
}
</style>
