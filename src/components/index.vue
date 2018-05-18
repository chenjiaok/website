<template>
	<div class="index">
		<div id="side" class="datetime" v-show="hidden">
			<my-left></my-left>
		</div>
		<div id="content" class="autocenter center">
			<my-right></my-right> 
		</div>  
	</div>
</template>

<script>

import MyLeft from '@/components/left'
import MyRight from '@/components/right'
export default {
	data (){
		return {
		hidden: '',
		screen: document.body.clientWidth
		}
	},
	components: {
		MyLeft,
		MyRight
	},
	mounted: function () {
		const that = this
		window.onresize = function() {
			that.screen = document.body.clientWidth 
			if( that.screen >= 1000){
				that.hidden = true
				$('#side').addClass('datetime') 
				$('#content').removeClass('autocenter') 
				$('#content').addClass('center') 
				
			}else if( that.screen  < 1000){
				that.hidden = false
				$('#side').removeClass('datetime')
				$('#content').removeClass('center') 
				$('#content').addClass('autocenter') 
			} 
		};
	},
	created: function (){
		const that = this
		that.screen = document.body.clientWidth 
		if( that.screen >= 1000){
			that.hidden = true
			$('#side').addClass('datetime')
			$('#content').removeClass('autocenter') 
			$('#content').addClass('center') 
		}else if( that.screen  < 1000){
			that.hidden = false
			$('#side').removeClass('datetime')
			$('#content').removeClass('center') 
			$('#content').addClass('autocenter') 
		}
	},  
}
</script>

<style>

.datetime{ 
	width: 430px;
}

.autocenter{
	width: 90%;
	margin-top: 30px;
	margin-left: auto;
	margin-right: auto;
  
}

@media (min-width: 1000px){
	.center{
		position: absolute;
		top: 30px;
		left: 430px; 
		width: 570px;
		
	}

}

@media (min-width: 1200px){

	.center{
		position: absolute;
		top: 30px;
		left:470px;
		width: 700px;
		
	}
}
@media (min-width: 1500px){

	.center{
		position: absolute;
		top: 30px;
		left:470px;
		width: 1000px;
		
	}
}


</style>