function usaMascara(o,f){
      v_obj=o
      v_fun=f
      setTimeout("executaUsaMascara()",1)
  }

  function executaUsaMascara(){
      v_obj.value=v_fun(v_obj.value)
  }

  function usaMascaraTelefone(telefone){
      telefone=telefone.replace(/\D/g,"");             //Remove tudo o que não é dígito
      telefone=telefone.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
      telefone=telefone.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
      return telefone;
  }

  function usaMascaraRG(rg){
    rg=rg.replace(/\D/g,"");             //Remove tudo o que não é dígito
    rg=rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4");
    return rg;
  }

  function usaMascaraCPF(cpf){
    cpf=cpf.replace(/\D/g,"")
		cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
		cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
		cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
		return cpf;
  }

  function id(el){
    return document.getElementById(el);
  }
  
  window.onload = function(){
    id('telefone').onkeyup = function(){
      usaMascara(this, usaMascaraTelefone);
    }

    id('rg').onkeyup = function(){
      usaMascara(this, usaMascaraRG);
    }

    id('cpf').onkeyup = function(){
      usaMascara(this, usaMascaraCPF);
    }
  }