<template>
  <div class="project">
    <div class="jumbotron">
      <h1>项目展示</h1>
    </div>
    <div class="row">
      <div class="col-sm-7 col-md-7">
        <div class="thumbnail">
          <div class="caption">
            <h3>简易在线物料管理系统</h3>
            <p>一个简易的物料管理系统，添加物料，供应商信息，对物料进行出入库操作，显示当前库存、出入库信息、物料信息</p>
            <p>页面：所有物料、新增物料、查询物料、更改物料、物料库存、入库、出库、入库记录、出库记录</p>
            <p>使用技能：bootstrap、 vue、jquery、 mysql、node、express、vue-router </p>
            <p>后续可增加文件上传物料信息、出入库信息以及产品BOM，以及根据生产计划安排</p>
            <p><a href="http://47.100.46.120:8090/var/www/omma" class="btn btn-primary" role="button">打开\测试</a> </p>
          </div>
        </div>
      </div>
      <div class="col-sm-5 col-md-5">
        <div class="thumbnail">
          <img v-bind:src="imgUrl1">
        </div>
      </div> 
    </div>    
    <div class="row">
      <div class="col-sm-7 col-md-7">
        <div class="thumbnail">
          <div class="caption">
            <h3>淘宝</h3>
            <p>模拟淘宝网首页</p>
            <p>1:1 按照淘宝网</p>
            <p>使用技能：bootstrap、jquery、 hover </p>
            <p></p>
            <p><a href="http://47.100.46.120:8090/var/www/omma" class="btn btn-primary" role="button">打开\测试</a> </p>
          </div>
        </div>
      </div>
      <div class="col-sm-5 col-md-5">
        <div class="thumbnail">
          <img v-bind:src="imgUrl2">
        </div>
      </div> 
    </div>
    <div class="row">
      <div class="col-sm-7 col-md-7">
        <div class="thumbnail">
          <div class="caption">
            <h3>小米</h3>
            <p>模拟小米</p>
            <p>1:1 按照小米</p>
            <p>使用技能：bootstrap、jquery、 hover </p>
            <p><a href="http://47.100.46.120:8090/var/www/omma" class="btn btn-primary" role="button">打开\测试</a> </p>
          </div>
        </div>
      </div>
      <div class="col-sm-5 col-md-5">
        <div class="thumbnail">
          <img v-bind:src="imgUrl3">
        </div>
      </div> 
    </div>  
        

  </div>
</template>
<script>
import omma from './../assets/omma.jpg'
import taobao from './../assets/taobao.jpg'
import xiaomi from './../assets/xiaomi.jpg'




export default {
  name: 'project',
  data () {
		return {
      imgUrl1: omma,
      imgUrl2: taobao,
      imgUrl3: xiaomi,
		}
	},
  created() {

  },
}
</script>
<style>
img{
  height: 250px; 
  width: 100%; 
  display: block;
  margin: 5px auto;
}
.thumbnail{
  height: 400px;
}
</style>
