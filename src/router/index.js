import Vue from 'vue'
import Router from 'vue-router'
import left from '@/components/left'
import right from '@/components/right'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: index,
			children: [
				{
					path: 'right',
					component: right
				},
				{
					path: 'left',
					component: left
				}

			]  
		
		},

	]
})
