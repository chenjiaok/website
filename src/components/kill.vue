<template>
  <div class="kill">
    <h3>自我介绍</h3>
    <p>本人热爱电子、互联网行业，善于学习新的知识；通过4个月的自学时间，掌握HTML、CSS、JavaScript基础知识，
      能快速完成DIV+CSS布局；熟练运用Jquery库，完成常用的网页hover/click/banner特效。
      具备严谨的工作作风，追求完美的工作态度。</p>

    <p>4年的采购工作经验使我更注重团队协作、服务意识以及良好的沟通效果，最终给客户一个美好的体验感受。</p>

    <p>本页的项目经历已经添加了链接，请直接点击标题预览。</p>
  </div>
</template>
<script>
export default {
  data (){
    return {
      kills:['HTML','CSS','JavaScript','BootStrap','jQuery','node','vue','git','mysql']
    }
  },
}


function startDrag(ev) {
    ev.dataTransfer.setData("Text"，ev.target.innerText);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function decideDrop(ev) {
    ev.preventDefault();
    var length = $('.main-target').length;
    if(length == 0){
        dropToMain(ev);
    }else {
        dropToRelate(ev);
    }
}

function dropToMain(ev) {
    var data=ev.dataTransfer.getData("Text");
    var _html = '<div class="main-target">' + data + '</div>';
    $('.main-target-wrap').width('auto').append(_html);
}

function dropToRelate(ev) {
    //画关系线
    drawLineOne(document.getElementById('canvasOne')， 'begin');
    drawLineOne(document.getElementById('canvasTwo')， 'end');

    //插入图片 以及图片初始化点击事件
    var _img = $('<img src="inner.png">');
    $('.imgBox').append(_img);
    _img.click(showRelationBox);
    //写入数据
    var data = ev.dataTransfer.getData('Text');
    var _html = '<div class="item-text">' + data + '</div>';
    $('.relation-text-box').append(_html);
}



function drawLineOne(canvas， flag) {
    var context = canvas.getContext('2d');
    var position = {};
    if (flag == "begin"){
        position = getCanvasOnePosition();
    }else {
        position = getCanvasTwoPosition();
    }
    context.beginPath();
    context.moveTo(position.beginX， position.beginY);
    context.lineTo(position.endX， position.endY);
    if(position.endX2 && position.endY2){
        context.lineTo(position.endX2， position.endY2);
    }
    context.strokeStyle = "#333";
    context.stroke();
}

/**
 * 左侧关系线
 * @returns {{beginX: *， beginY: *， endX: *， endY: *}}
 */
function getCanvasOnePosition() {
    var imgLength = $('.imgBox img').length;
    var beginX = (imgLength == 0) ? 0 : 77,
        beginY = (imgLength == 0) ? 15 : (15 + 60 * (imgLength-1)),
        endX = (imgLength == 0) ? 155 : 77,
        endY = 60*imgLength + 15;
    var position = {beginX: beginX, beginY: beginY, endX: endX, endY: endY};
    if(imgLength > 0){
        position.endX2 = 155;
        position.endY2 = endY;
    }
    return position;
}

function getCanvasTwoPosition() {
    var imgLength = $('.imgBox img').length;
    var endY = 15 + 60*imgLength
    return {beginX: 0, beginY: endY, endX: 155, endY: endY}
}


</script>

<style>




</style>
