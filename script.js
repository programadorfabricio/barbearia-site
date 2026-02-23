const depoimentos = document.querySelectorAll(".depoimento");

let i = 0;

setInterval(()=>{
  depoimentos[i].classList.remove("ativo");

  i++;
  if(i >= depoimentos.length){
    i = 0;
  }

  depoimentos[i].classList.add("ativo");

}, 3000);