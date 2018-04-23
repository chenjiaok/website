<template>
  <div class="calendar">    
    <div class="datatime">
      <h2>今天是{{ initYear }}年 {{ initMonth }}月{{ today }}日</h2>
    </div>
		<div class="header">
			<div class="btn-group year">
				<button type="button" class="btn btn-default" id="year">{{ year }}年</button>
				<button type="button" class="btn btn-default dropdown-toggle"
				data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span class="caret"></span>
					<span class="sr-only"></span>
				</button>
				<ul class="dropdown-menu">
					<li class="text-center" v-for="item in years" v-bind:value="year.value" v-on:click="setYear(item)">{{ item }}年</li>
				</ul>
			</div>
			<div class="btn-group month text-center">
				<button type="button" class="btn btn-default left" v-on:click="offsetMonth(-1)"><span class="glyphicon glyphicon-menu-left"></span></button>
				<button type="button" class="btn btn-default" id="month">{{ month }}月</button>
				<button type="button" class="btn btn-default dropdown-toggle" 
				data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span class="caret"></span>
					<span class="sr-only"></span>
				</button>
				
				<button type="button" class="btn btn-default right" v-on:click="offsetMonth(1)"><span class="glyphicon glyphicon-menu-right"></span></button>	
				<ul class="dropdown-menu">
					<li class="text-center" v-for="item in months" v-bind:value="month.value" v-on:click="setMonth(item)">{{ item }}月</li>
				</ul>				
			</div>

			<button class="btn btn-default" v-on:click="initNow()">返回今天</button>	
		</div>
		<div class="content">
			<table class="table text-center">
				<thead>
					<tr>
						<th v-for="item in weekend">{{ item }}</th>
					</tr>					
				</thead>
				<tbody>
					<tr v-for="(item, index) in showT">
						<td v-for="(items, indexs) in item" v-on:mouseover="mouseover()">
							<b>{{ items }}</b>
						</td>				
					</tr>						
				</tbody>
			</table>	
		</div>

  </div>
</template>

<script>


export default {
  name: 'calendar',
  data () {
		return {
			firstDay: '',//这个月第一天周几
			year: '',		//当前年
			month: '',	//当前月
			initYear: '', 
			initMonth: '', 
			years: [
				'1996','1997','1998','1999','2000','2001','2002','2003','2004','2005',
				'2006','2007','2008','2009','2010','2011','2012','2013','2014','2015',
				'2016','2017','2018','2019','2020','2021','2022','2023','2024','2025',
				'2026','2027','2028','2029','2030','2031','2032','2033','2034','2035',],
			months: ['1','2','3','4','5','6','7','8','9','10','11','12'],
			weekend: ['日','一','二','三','四','五','六'],
			showT: [],	//这个月显示的数据			
		}
	},
  created() {
    var now = new Date    //新建对象		
    this.year = now.getFullYear()		//当前年份
    this.month = now.getMonth() + 1	//当前月份
    this.initYear = now.getFullYear() 
    this.initMonth = now.getMonth() + 1 
    this.today = now.getDate()	//1-31  当前天数
    this.week = now.getDay()	//1-7	今天周几
    this.showMonthTbale(this.year,this.month-1)//当前月的天数
    now.setDate(1)		//设置为当月第一天
    this.firstDay = now.getDay()	//获取当月第一天周几			


  },
  methods:{
    showMonthTbale(year,month){
      var now = new Date 
      var next = new Date
      now.setFullYear(year)
      now.setMonth(month)
      now.setDate(1)
      next.setFullYear(year)
      next.setMonth(month + 1)
      next.setDate(1)
      var arr = []
      while(now < next){
        arr.push(now.getDate(1))
        now.setDate(now.getDate() + 1)
      }

      var now = new Date
      now.setFullYear(year)
      now.setMonth(month)
      now.setDate(1)
      var ref = now.getDay()	

      for(var i = 0; i < ref; i++){
        arr.unshift('');
      }
      var brr = new Array()
      
      for(var i = 0; i < (arr.length) / 7; i++){
        brr[i] = new Array();
        for(var j = 0; j < 7; j++){
          brr[i][j] = arr[ i * 7 + j ]
        }
      }		
      this.showT = brr
      $('td').css('background-color','#fff')
    },
    setYear (year){
      this.year = year
      $('#year').text(year + '年')
      this.showMonthTbale(this.year,this.month - 1)
    },			
    setMonth (month){
      this.month = month
      $('#month').text(month + '月')
      this.showMonthTbale(this.year,this.month - 1);
    },
    offsetMonth(direction){
      var nowMonth = $('#month').text()				
      var nowMonthN = nowMonth.substring(0, nowMonth.length - 1)
      if(direction > 0){
        nowMonthN = Number(nowMonthN) + 1
        if(nowMonthN > 12){
          this.year = this.year + 1 
          this.year = this.year
          nowMonthN = 1
        }					
      }else if(direction < 0){
        nowMonthN = Number(nowMonthN) - 1
        if(nowMonthN < 1){
          this.year = this.year -1 
          this.year = this.year
          nowMonthN = 12
        }
      }
      $('#month').text(nowMonthN + '月')
      this.month = nowMonthN
      this.showMonthTbale(this.year, this.month - 1);
    },
    renderTbale(){
      
      var nowDate = this.firstDay + this.today - 1
      var r = parseInt(nowDate / 7 ) + 1
      var d = parseInt(nowDate % 7 )	
      var aaa = 'table tr:eq(' + r + ') td:eq(' + d + ')'	
  
      var nowMonth = $('#month').text()
      var nowYear = $('#year').text()
      if(nowYear == this.initYear + '年'){
        if(nowMonth === this.initMonth + '月'){
            if(	$(aaa).text() == this.today ){
              $(aaa).find('b').addClass('todaycolor')
            }else{
              $('td').find('b').removeClass('todaycolor')
            }	
        }else{
          $('td').find('b').removeClass('todaycolor')
        }
      }else{
        $('td').find('b').removeClass('todaycolor')
      }								
    },
    initNow(){
      var now = new Date	
      this.year = now.getFullYear()
      this.month = now.getMonth() + 1
      this.initYear = now.getFullYear() 
      this.initMonth = now.getMonth() + 1
      this.today = now.getDate()
      this.week = now.getDay()
      $('#year').text(this.year + '年')	
      $('#month').text(this.month + '月')					
      this.showMonthTbale(this.year,this.month-1)
      now.setDate(1)		
      this.firstDay = now.getDay()
      
    },
    mouseover(){
      $('b').hover(function(){
        if(Number( $(this).text() ) > 0){
          $(this).css({
            'border':'3px solid green',	
          })	
        }
      },function(){
        $(this).css({
          'border':'3px solid #fff',							
        })
      })
    }
  },
  watch:{
    showT:function() {
      this.renderTbale()	
    },
  },
}
/*
  
*/

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .calendar{
			width: 400px;
			height: 430px;
			margin: 0 auto;
      font-family: '微软雅黑';
			font-size: 18px;
		}
		.header{
			width: 360px;
			height: 40px;
			margin: 10px auto;				
		}
		.header .dropdown-menu{
			width: 72px;
			min-width: 72px;
		}
		.header ul li{
			width: 71px;
			line-height: 25px;
			
		}
		.header ul li:hover{
			cursor: pointer;
			background-color: #fff;
		}
		.content{
			width: 380px;
			height: 310px;
			margin: 0 auto;
			border-top: 2px solid #2c7;
		}
		tbody tr{
			border-bottom: 1px solid #ddd;
		}
		td{
			cursor: pointer;
		}
		td>b{
			padding: 5px;
			font-weight: normal;
			border: 3px solid #fff;
		}
		.todaycolor{
			background-color: #f0f !important;
		}
    .datatime{
      height:40px;
    }
</style>
