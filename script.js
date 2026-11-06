(function(){
var $=function(s){return document.querySelector(s)},NS='http://www.w3.org/2000/svg';
// letters
var big=$('#big');'SHANVI'.split('').forEach(function(c,i){var s=document.createElement('span');s.textContent=c;s.style.animationDelay=(.2+i*.12)+'s';big.appendChild(s)});
// stars
var st=$('#stars'),seed=7;function r(){seed=(seed*9301+49297)%233280;return seed/233280}
for(var i=0;i<110;i++){var c=document.createElementNS(NS,'circle');c.setAttribute('cx',r()*1000);c.setAttribute('cy',r()*380);c.setAttribute('r',.5+r()*1.6);c.setAttribute('fill','#fff');c.setAttribute('opacity',.3+r()*.7);st.appendChild(c)}
// grass
var d='M0 600V540',x=0;while(x<1000){var h=490+r()*45,w=6+r()*9;d+='L'+x+' 545L'+(x+w/2)+' '+h+'L'+(x+w)+' 545';x+=w}d+='L1000 600Z';$('#grass').setAttribute('d',d);
// fireflies
var ff=$('#ff');for(i=0;i<16;i++){var f=document.createElement('div');f.className='fl';f.style.left=(r()*100)+'%';f.style.top=(45+r()*50)+'%';f.style.setProperty('--d',(3+r()*4)+'s');f.style.setProperty('--x',(r()*80-40)+'px');f.style.setProperty('--y',(r()*80-40)+'px');ff.appendChild(f)}
// scroll scene
var L={far:$('#far'),mid:$('#mid'),near:$('#near'),moon:$('#moon'),stars:$('#stars')},cue=$('#cue'),tag=$('#tagline'),dim=$('#dim'),bar=$('#bar'),tick=false;
function upd(){tick=false;var y=scrollY,H=innerHeight,p=Math.min(1,y/(H*2.2));
 big.style.transform='translate(-50%,-50%) scale('+(1+p*p*7)+')';big.style.opacity=Math.max(0,1-p*1.7);
 tag.style.opacity=Math.max(0,1-p*4);$('#sur').style.opacity=Math.max(0,1-p*4);cue.style.opacity=Math.max(0,1-p*8);
 L.far.style.transform='scale('+(1+p*.3)+')';L.mid.style.transform='scale('+(1+p*.8)+')';L.near.style.transform='scale('+(1+p*2.4)+')';
 L.moon.style.transform='translateY('+(-p*16)+'vh) scale('+(1+p*.25)+')';L.stars.style.transform='scale('+(1+p*.2)+')';
 dim.style.opacity=(p*.5+Math.min(1,Math.max(0,(y-H*2.2)/(H*4))) *.15).toFixed(3);
 bar.style.width=(y/Math.max(1,document.documentElement.scrollHeight-H)*100)+'%'}
addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});addEventListener('resize',upd);upd();
// chapter tint
var tint=$('#tint'),io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)tint.style.background=e.target.dataset.c})},{threshold:.5});
document.querySelectorAll('.sec').forEach(function(s){io.observe(s)});
// copy
$('#copy').onclick=function(){var m=$('#cm');try{navigator.clipboard.writeText('shanvihere512@gmail.com');m.textContent='Copied!'}catch(e){m.textContent='shanvihere512@gmail.com'}};
})();
