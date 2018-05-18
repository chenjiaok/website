<template>
	<div class="clock">
		<canvas id="myCanvas" width="300px" height="300px"></canvas>
	</div>
</template>

<script>

export default {
	name: 'clock',
	data () {
		return { 
			canvas: '',
			ctx: '',
			width: '',
			height: '',
			r: '',
			rem: '',
			hour: '',
			minute: '',
			second: ''
		}
	},
	created: function(){
		var now = new Date
	},
	mounted: function() {
		this.$nextTick(function () {
			this.canvas = document.getElementById('myCanvas')
			if( this.canvas.getContext){
				this.ctx = this.canvas.getContext("2d");
				this.width = this.ctx.canvas.width;    
				this.height = this.ctx.canvas.height; 
				this.r = this.width / 2;
				this.rem = this.width / 300;  
				var a = setInterval(this.draw, 1000);
				this.draw()
			}	
		})
	},
	methods: {
		
		draw: function (){
			this.ctx.clearRect(0, 0, this.width, this.height);
			this.ctx.save();
			var date = new Date();
			this.hour = date.getHours();
			this.minute = date.getMinutes();
			this.second = date.getSeconds();

			//console.log(hour,':',minute,':',second)
			this.ctx.translate(this.r,this.r);
			this.drawNums();
			this.drawM();
			this.drawBox();
			this.drawHours(this.hour, this.minute);  
			this.drawMinute(this.minute);  
			this.drawSecond(this.second);
			this.drawcircle();
			this.ctx.restore();
		},
		drawcircle: function (){
			this.ctx.fillStyle = "#eee";
			this.ctx.beginPath();
			this.ctx.arc(0, 0, 4, 0, 2 * Math.PI);
			this.ctx.fill();   
		},


		drawSecond: function (second){
			this.ctx.save();
			var rots = second * 6 * Math.PI / 180;
			this.ctx.rotate(rots);
			this.ctx.beginPath();
			this.ctx.fillStyle = "#f00";    
			this.ctx.moveTo(-3, 9);
			this.ctx.lineTo(0, -0.9 * this.r);
			this.ctx.lineTo(3, 9);
			this.ctx.fill();
			this.ctx.restore();
		},


		drawMinute: function (minute){
			this.ctx.save();
			var rotm = minute * 6 * Math.PI / 180;
			
			this.ctx.rotate(rotm);
			this.ctx.lineWidth = 6;
			this.ctx.fillStyle = "#000";
			this.ctx.lineCap = "round";
			this.ctx.beginPath(); 
			this.ctx.moveTo(0, 7);
			this.ctx.lineTo(0, - 0.7 * this.r );
			this.ctx.stroke(); 
			this.ctx.restore();
		},


		drawHours: function (hour,minute){
			this.ctx.save();
			var rot = hour * 30  *Math.PI / 180;
			var roth = minute / 60 * 30 * Math.PI / 180;
			this.ctx.rotate(roth + rot);
			this.ctx.lineWidth = 8;
			this.ctx.fillStyle = "#000";
			this.ctx.beginPath();
			this.ctx.lineCap = "round";
			this.ctx.moveTo(0, 7);
			this.ctx.lineTo(0, - this.r / 2 );
			this.ctx.stroke(); 
			this.ctx.restore();
		},


		drawM: function (){/* 小圆点*/
			for(var i=0; i<60; i++){
				var x = Math.cos(Math.PI / 30 * i ) * this.r *0.9;
				var y = Math.sin(Math.PI / 30 * i ) * this.r * 0.9;
				this.ctx.beginPath();
				if( i % 5 == 0){
					this.ctx.fillStyle = "#000";
					this.ctx.arc(x, y, 3, 0, 2*Math.PI);
					this.ctx.fill();  
				}
				else{
					this.ctx.fillStyle = "#eee";
					this.ctx.arc(x, y, 3, 0, 2*Math.PI);
					this.ctx.fill();         
				}
			}
		},

		drawNums: function (){
			var nums = [3,4,5,6,7,8,9,10,11,12,1,2];

			for(var i in nums){
				var x = Math.cos(Math.PI / 6 * i) * this.r;
				var y = Math.sin(Math.PI / 6 * i) * this.r;
				this.ctx.font = 20 * this.rem + "px Arial";
				this.ctx.textBaseline = "middle";
				this.ctx.textAlign = "center";
				this.ctx.strokeText(nums[i], x * 0.8, y * 0.8);
			};
		},

		drawBox: function (){//外形
			this.ctx.lineWidth = 5 * this.rem;
			this.ctx.beginPath();
			this.ctx.arc(0, 0, this.r - 5, 0, 2 * Math.PI);
			this.ctx.stroke();  
		} 

	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clock{
	width: 400px;
	height: 300px;
	margin: 20px auto;
	
}
</style>
