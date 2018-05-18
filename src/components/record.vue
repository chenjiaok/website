<template>
	<div class="record">  
		<h2>工作经历</h2>
		<div class="row" v-for="item in records">
			<div class="recorddiv" v-for="record in item"> 
				<div class="caption col-xs-7 col-sm-7 col-md-7 col-lg-7">
					<p class="text-left">{{record.duty}}</p>
					<p class="text-left">{{record.result}}</p>          
				</div>

				<div class="col-xs-5">
					<h3 class="text-center">{{record.post}}</h3>
					<h4 class="text-center">{{record.company}}</h4>
					<h5 class="text-center">{{record.period}}</h5>
				</div>
			</div>
		</div>
		<h2>教育经历</h2>
		<table class="table table-striped table-bordered">
			<thead>
				<tr>
					<td>学校</td>
					<td>学历</td>
					<td>专业</td>
					<td>时间</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>嘉兴学院</td>
					<td>本科</td>
					<td>电子信息工程</td>
					<td>2008~2012</td>
				</tr>
			</tbody>
		</table>
		
	</div>	



</template>
<script>
export default {
  	name: 'record',
  	data () {
		return {
			records:{
				projectPurchasing:[{
					post:"项目采购工程师",
					company:"宁波麦博韦尔移动电话有限公司",
					period:"2015/9-2016/12",
					duty:"职责：核算在研和量产项目成本，根据项目进度安排物料到位",
					result:"同时最多跟进3个智能机、4个功能机项目，除设计变更外，保证项目按时完成试产",
				}],
				upperPurchasing:[{
					post:"上游采购工程师",
					company:"宁波麦博韦尔移动电话有限公司",
					period:"2015/9-2016/12",
					duty:"职责：器件选型，确认样品，软件调试，签样，ECN变更，控制成本，优化供应商资源",
					result:"曾负责物料：辅料、螺钉、手板、LCD/CTP",
				}],
				factoryPurchasing:[{
					post:"采购工程师",
					company:"宁波麦博韦尔移动电话有限公司",
					period:"2013/5-2015/8",
					duty:"职责：释放订单，合同归档，物料管理，库存管理，货款控制",
					result:"曾负责物料：MLCC、电池、充电器、数据线、耳机、LCD/CTP、CAM、按键薄膜",
				}],
				electronicEngineer:[{
					post:"电子工程师",
					company:"奉化市金源电子有限公司",
					period:"2012/6-2013/5",
					duty:"职责：LED台灯、日光灯、吸顶灯、路灯电子线路设计，测试，生产检验标准制定",
					result:"样品采购和制作，指导产线生产装配",
				}],
			}
		}
	},
}
</script>
<style scoped>
.row{
	margin: 15px 10px;
	border: 1px solid #ddd;
	border-radius: 4px;
}
.recorddiv{
	padding: 10px 0;

}

</style>
