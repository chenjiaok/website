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
import MyKill from '@/components/killtree'

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
h2{
	margin: 30px auto;
	padding: 5px 0;
	background-color: #99ff99;
}
.information{
    background-color: #fff;
}

</style>