<template>
  <!--div class="container clock">   
    <div class=row-->
      <div class="clock">   	
      	<canvas id="myCanvas" width="300px" height="300px"></canvas>
    	</div>
    <!--/div>
  </div-->
</template>

<script>

export default {
  name: 'clock',
  data () {
    return { }
  },
  created(){
    var now = new Date 
  },
  mounted() {
    new drawClock();
  }
}



function drawClock(){
	var canvas = document.getElementById('myCanvas');
	
	var ctx = canvas.getContext("2d");
	var width = ctx.canvas.width;    
	var height = ctx.canvas.height;    

	var r = width / 2;
	var rem = width / 300;   

	var a = setInterval(draw, 1000);

	draw();

function draw(){

	ctx.clearRect(0, 0, width, height);
	ctx.save();
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	//console.log(hour,':',minute,':',second)
	ctx.translate(r,r);

	drawNums();
	drawM();
	drawBox();
	drawHours(hour, minute);  
	drawMinute(minute);  
	drawSecond(second);
	drawcircle();
	ctx.restore();
}


function drawcircle(){
  ctx.fillStyle = "#eee";
  ctx.beginPath();
  ctx.arc(0, 0, 4, 0, 2 * Math.PI);
  ctx.fill();   
}


function drawSecond(second){
  ctx.save();
  var rots = second * 6 * Math.PI / 180;
  ctx.rotate(rots);
  ctx.beginPath();
  ctx.fillStyle = "#f00";    
  ctx.moveTo(-3, 9);
  ctx.lineTo(0, -0.9 * r);
  ctx.lineTo(3, 9);
  ctx.fill();
  ctx.restore();
}


function drawMinute(minute){
  ctx.save();
  var rotm = minute * 6 * Math.PI / 180;
  
  ctx.rotate(rotm);
  ctx.lineWidth = 6;
  ctx.fillStyle = "#000";
  ctx.lineCap = "round";
  ctx.beginPath(); 
  ctx.moveTo(0, 7);
  ctx.lineTo(0, -r * 0.7);
  ctx.stroke(); 
  ctx.restore();
}


function drawHours(hour,minute){
  ctx.save();
  var rot = hour * 30  *Math.PI / 180;
  var roth = minute / 60 * 30 * Math.PI / 180;
  ctx.rotate(roth + rot);
  ctx.lineWidth = 8;
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.lineCap = "round";
  ctx.moveTo(0, 7);
  ctx.lineTo(0, -r / 2 );
  ctx.stroke(); 
  ctx.restore();
}


function drawM(){/* 小圆点*/
  for(var i=0;i<60;i++){
    var x = Math.cos(Math.PI / 30 * i ) * r *0.9;
    var y = Math.sin(Math.PI / 30 * i ) * r * 0.9;
    ctx.beginPath();
    if( i % 5 == 0){
      ctx.fillStyle = "#000";
      ctx.arc(x, y, 3, 0, 2*Math.PI);
      ctx.fill();  
    }else{
      ctx.fillStyle = "#eee";
      ctx.arc(x, y, 3, 0, 2*Math.PI);
      ctx.fill();         
    }
  }
}

function drawNums(){
  var nums = [3,4,5,6,7,8,9,10,11,12,1,2];

  for(var i in nums){
    var x = Math.cos(Math.PI / 6 * i) * r;
    var y = Math.sin(Math.PI / 6 * i) * r;
    ctx.font = 20 * rem + "px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.strokeText(nums[i],x * 0.8,y * 0.8);
  };
}

function drawBox(){//外形
  ctx.lineWidth = 5 * rem;
  ctx.beginPath();
  ctx.arc(0, 0, r-5, 0, 2 * Math.PI);
  ctx.stroke();  
} 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clock{
  width: 400px;
  height: 300px;
  margin: 40px auto;
  
}
</style>
