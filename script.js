/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

var sel= new Array();
function assignSpace()
{
  if(event.currentTarget.attributes[2].nodeValue=="one")
  {
    pulisci("one");
    sel[0]=event.currentTarget.attributes[1].nodeValue;
  }else if(event.currentTarget.attributes[2].nodeValue=="two")
  {
   pulisci("two");
   sel[1]=event.currentTarget.attributes[1].nodeValue;
  }else{
    pulisci("three");
    sel[2]=event.currentTarget.attributes[1].nodeValue;
  }
  const new_img = document.createElement('img');
  new_img.className = "checkbox";
  new_img.src = 'http://nicolaaliuni.altervista.org/nceck.png';
  event.currentTarget.classList.remove('sel');
  event.currentTarget.classList.add('selcol');
  event.currentTarget.children[1].remove();
  event.currentTarget.appendChild(new_img);
  event.currentTarget.removeEventListener('click', assignSpace);
  selezionato();
}


function attivoev(){
  var boxes = document.querySelectorAll('.choice-grid .cont');
  for (const box of boxes)
  {
    box.addEventListener('click', assignSpace);
    freeBoxes.push(box);
  }

  var boxes = document.querySelectorAll('.sel');
  for (const box of boxes)
  {
    box.addEventListener('click', assignSpace);
    freeBoxes.push(box);
  }

}


function pulisci(i){
  var colo = document.querySelectorAll('.selcol');
  for (const b of colo)
  {
    if(b.attributes[2].nodeValue==i)
    {

      b.classList.remove('selcol');
      b.classList.add('cont');

    }

  }



  var boxes = document.querySelectorAll('.choice-grid .cont');
  for (const box of boxes)
  {
    const new_img = document.createElement('img');
     new_img.src = 'http://nicolaaliuni.altervista.org/cech.png';
      new_img.className = "checkbox";
    if(box.attributes[2].nodeValue==i)
    {
      box.classList.remove('cont');
      box.classList.add('sel');
      box.children[1].remove();
      box.appendChild(new_img);
      box.addEventListener('click', assignSpace);
      freeBoxes.push(box);
    }

  }

}


var sem;
 function selezionato()
 {

   if(sel[1]!=null && sel[0]!=null && sel[2]!=null )
   {
     if( sel[0]===sel[1]){
       sem=0;
     }else if (sel[0]===sel[2]) {
       sem=0;
     }else if (sel[1]===sel[2]) {
       sem=1;
     }else{
       sem=0;
     }
    document.getElementById("bt").disabled = false;
   }




 }


 function risultato()
 {
   document.getElementById("reset").disabled = false;

     const resultContainer = document.querySelector('.conten');
     const header = document.createElement('h1');
     header.textContent="titolo: "+RESULTS_MAP[sel[sem]].title;
     resultContainer.appendChild(header);
     const header2 = document.createElement('p');
     header2.textContent=" descrizione: "+RESULTS_MAP[sel[sem]].contents;
     resultContainer.appendChild(header2);

   // Rimuovi gli event listener restanti
   for (const box of freeBoxes)
   {
     box.removeEventListener('click', assignSpace);
   }
   document.getElementById("bt").disabled = true;
 }

 function puliscisel()
{
  var boxes = document.querySelectorAll('.choice-grid .sel');
  for (const box of boxes)
  {
    box.classList.remove('sel');
    box.classList.add('cont');
  }
}
 function reset()
 {

  document.getElementById("reset").disabled = true;

  pulisci("one");
  pulisci("two");
  pulisci("three");
  puliscisel();
  attivoev();
  const resultContainer = document.querySelector('.conten');
  resultContainer.innerHTML = '';
  sel[0]=null;
  sel[1]=null;
  sel[2]=null;

   window.scrollTo(0, 0);
 }

const freeBoxes = [];
attivoev();
document.getElementById("bt").disabled = true;
document.getElementById("reset").disabled = true;
var button = document.querySelector("button")
button.addEventListener("click", risultato);
var button = document.querySelector("#reset")
button.addEventListener("click", reset);
