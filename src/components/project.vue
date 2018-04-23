<template>
  <div class="project">
    <h2>案例展示</h2>
    <div class="row" >
      <div class="col-lg-6" v-for="item in projects">
        <div class="thumbnail" v-for="project in item">
          <h3 class="project-title">{{project.title}}</h3>
          <img v-bind:src=project.src alt="">
          <div class="caption">
            
            <p class="text-left">{{project.content}}</p>
            <p class="text-left">{{project.description}}</p>
            <ul class=""><li class="label label-info kill" v-for="kill in project.kill">{{ kill}}</li></ul>
            <p class="text-center"><a v-bind:href=project.site class="btn btn-lg btn-info" role="button"> 打 开 预 览 </a></p>
          </div>
        </div>
      </div>
    </div>   
  </div>
</template>
<script>
import omma from './../assets/omma.jpg'
import taobao from './../assets/taobao.jpg'
import xiaomi from './../assets/xiaomi.jpg'
import calc from './../assets/calc.jpg'


export default {
  name: 'project',
  data () {
		return {
      imgUrl1: omma,
      imgUrl2: taobao,
      imgUrl3: xiaomi,
      imgUrl4: calc,
      projects:{
          resum:[{
          title:"个人网页",
          content:"简易的个人网页",
          description:"单页面应用：由日历、时间、个人介绍、技能、项目、履历等组件构成",
          kill:['jquery','bootstrap','node','webpack','vue','canvas','vue-router'],
          src:omma,
          site:""
        }],
        materialStocks:[{
          title:"在线物料管理系统",
          content:"方便 可用于替代ERP、SAP系统",
          description:"单页面应用：物料增删改查、库存操作，拟增加BOM、生产、采购组件",
          kill:['jquery','bootstrap','node','webpack','vue','mysql','vue-router'],
          src:omma,
          site:"http://47.100.46.120:8090/var/www/omma"
        }],
        taobaos:[{
          title:"淘宝网",
          content:"",
          description:"模拟淘宝首页部分内容",
          kill:['jquery','bootstrap'],
          src:taobao,
          site:"http://www.chenjiaok.top/taobao/taobao.html"
        }],        
        xiaomis:[{
          title:"小米商城",
          content:"",
          description:"模仿小米商城首页内容",
          kill:['jquery','bootstrap'],
          src:xiaomi,
          site:"http://www.chenjiaok.top/mi/mi.html"
        }],

        calcs:[{
          title:"网页计算器",
          content:"模拟Window自带计算器的标准模式",
          description:"优化JS计算缺陷，增加友情提醒",
          kill:['jquery','原生JS'],
          src:calc,
          site:"http://www.chenjiaok.top/calc/calc.html"
        }],       
      },

		}
	},
  created() {

  },
}
</script>
<style>

.project-title{
  line-height: 40px;
  font-weight: 600;
  color: #fff;
  background-color: #5bc0de;
}
ul{
  padding: 0;
}
.killdiv{
  width: 100%;
  
}

.kill{
  margin-right: 10px;
  margin-bottom: 10px;
}

.caption{
  font-size: 16px;
}
</style>
