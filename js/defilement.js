var defile;// l'element a deplacer 
var psinit = 580; // position horizontale de depart 
var pscrnt = psinit; 		
function texteDefile() { 
   if (!defile) defile = document.getElementById('defile'); 
   if (defile) { 
      if(pscrnt < ( - defile.offsetWidth) ){ 
         pscrnt = psinit; 
                } else { 
         pscrnt+= -2; // pixel par deplacement 
      } 
      defile.style.left = pscrnt+"px"; 
   } 
} 
setInterval("texteDefile()",30); // delai de deplacement 