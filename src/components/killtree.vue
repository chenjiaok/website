<template>
  <div class="kill">
    <h3>技能树</h3>    
    <!--div v-show="killtree">      
      <svg width="700px" height="700px" version="1.1" style="background-color:#fff" transform="scale(1)">
        <path d="M126,197 C80,80 230,30 271,74 C300,-15 440,-15 438,74 C480,50 580,50 584,166 C680,180 685,350 617,375 C670,420 620,490 573,477 C600,505 520,595 450,516 C410,470 430,440 462,367  
        C390,400 370,310 356,271 C300,340 290,340 255,321 C260,400 200,405 178,378 C125,480 60,410 60,390 C50,370 60,320 100,316 C55,300 55,200 126,197" fill="springgreen" stroke="red" stroke-width="1" />

        <path d="M172,388 C240,450 270,465 274,555 C270,605 265,620 233,673" fill="none" stroke="blue" stroke-width="1" />
        <path d="M201,392 226,412 217,392" fill="none" stroke="blue" stroke-width="1" />
        <path d="M237,382 Q250,430 287,481 C325,410 320,400 305,324" fill="none" stroke="blue" stroke-width="1" />
        <path d="M315,316 Q343,405 351,406 Q360,400 400,360" fill="none" stroke="blue" stroke-width="1" />
        <path d="M430,374 Q400,400 342,474 Q360,480 386,459 Q398,445 443,409" fill="none" stroke="blue" stroke-width="1" />
        <path d="M434,433 Q410,450 405,466 Q415,466 428,459" fill="none" stroke="blue" stroke-width="1" />
        <path d="M428,470 C360,500 340,500 332,575 C330,600 340,640 352,673" fill="none" stroke="blue" stroke-width="1" />
      </svg>
    </div-->
		<div class="killtree">
      <svg width="90%" height="90%" version="1.1" style="background-color:#fff" viewBox="0 0 350 350" >
        <path d="M64,98.5 C40,40 125,15 135.5,37
        C150,-7.5 220,-7.5 219,37 C240,25 290,25 292,83 
        C340,90 342.5,175 308.5,187.5 C335,210 310,245 286.5,238.5 
        C300,252.5 260,297.5 225,258 C205,235 215,220 231,183.5 
        C195,200 185,155 178,135.5 C150,170 145,170 127.5,160.5 
        C130,200 100,202.5 89,189 C62.5,240 30,205 30,195 
        C25,185 30,160 50,158 C27.5,150 27.5,100 63,98.5"
        fill="none" stroke="#5bc0de" stroke-width="1" z-index="1"/>

        <path d="M86,194 C120,225 130,237.5 137,277.5 C135,302.5 132.5,310 116.5,336.5"      
        fill="none" stroke="#5bc0de" stroke-width="1" z-index="1"/>
        <path d="M100.5,196 113,206 108.5,196"      
        fill="none" stroke="#5bc0de" stroke-width="1" z-index="1" />
        <path d="M118.5,191 Q125,215 143.5,240.5 C162.5,205 160,200 152.5,162"      
        fill="none" stroke="#5bc0de" stroke-width="1" z-index="1"/>
        <path d="M157.5,158 Q171.5,202.5 175.5,203 Q180,200 200,180"      
        fill="none" stroke="#5bc0de" stroke-width="1" z-index="1"/>
        <path d="M215,187 Q200,200 171,237 Q180,240 193,229.5 Q199,222.5 221.5,204.5"
        fill="none" stroke="#5bc0de" stroke-width="1" z-index="1"/>
        <path d="M217,216.5 Q205,225 202.5,233 Q207.5,233 214,229.5"
        fill="none" stroke="#5bc0de" stroke-width="1" z-index="1"/>
        <path d="M214,235 C180,250 170,250 166,287.5 C165,300 170,320 176,336.5"
        <path d="M214,235 C180,250 170,250 166,287.5 C165,300 170,320 176,336.5"
        fill="none" stroke="#5bc0de" stroke-width="1" z-index="1"/>	

        <defs>
          <radialGradient id="yello_red" cx="50%" cy="50%" r="55%" fx="50%" fy="50%">
            <stop offset="20%" style="stop-color:#ffc;stop-opacity:0"/>
            <stop offset="100%" style="stop-color:#5bc0de;stop-opacity:1"/>
          </radialGradient>
        </defs>

        <circle cx="180" cy="30" r="20" style="fill:url(#yello_red)"/>
        <text x="233" y="47" >node</text>                 
        <circle cx="95" cy="68" r="18" style="fill:url(#yello_red)"/>
        <text x="119" y="102">vue</text>
        <circle cx="248" cy="65" r="18" style="fill:url(#yello_red)"/> 
        <text x="340" y="97">git</text>

        <ellipse cx="162" cy="85" rx="36" ry="22"style="fill:url(#yello_red)"/>
        <text x="182" y="127" >BootStrap</text>
        <ellipse cx="250" cy="110" rx="25" ry="18"style="fill:url(#yello_red)"/>
        <text x="328" y="164">mysql</text>

        <ellipse cx="128" cy="130" rx="38" ry="22"style="fill:url(#yello_red)"/>        
        <text x="136" y="192" >JavaScript</text>
        <ellipse cx="220" cy="150" rx="25" ry="18"style="fill:url(#yello_red)"/>
        <text x="285" y="220">jQuery</text>

        <circle cx="60" cy="130" r="18" style="fill:url(#yello_red)"/>
        <text x="66" y="192">CSS</text>
        <circle cx="295" cy="150" r="20" style="fill:url(#yello_red)"/>
        <text x="397" y="221">CSS3</text>

        <circle cx="55" cy="185" r="22" style="fill:url(#yello_red)"/>
        <text x="51" y="270">HTML</text>       
        <ellipse cx="280" cy="200" rx="26" ry="18"style="fill:url(#yello_red)"/>
        <text x="366" y="294">HTML5</text>
        <circle cx="250" cy="245" r="20" style="fill:url(#yello_red)"/>
        <text x="330" y="355" >office</text>

      </svg>
    </div>
  </div>
</template>
<script>
export default {
  data (){
    return {      
    }
  },
}

</script>

<style>
text{
  transform: scale(0.7);
  fill: #f66;  
}
text:hover{
  fill: #5bc0de;
  cursor: pointer;
}

</style>
