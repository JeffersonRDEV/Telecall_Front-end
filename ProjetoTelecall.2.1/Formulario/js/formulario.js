function ajustaCpf(v) {
    v.value = v.value.replace(/\D/g, "");
    //Adiciona ponto após os três primeiros números
    v.value = v.value.replace(/^(\d{3})(\d)/, "$1.$2");
    //Adiciona ponto após os seis primeiros números
    v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");
    //Adiciona o hífen antes dos últimos 2 caracteres
    v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  
  function ajustaNumeros(v) {
    // Remove os caracteres não numéricos
    v.value = v.value.replace(/\D/g, "");
  }
  
  function ajustaTelefone(v) {
    v.value = v.value.replace(/\D/g, "");
    //Adiciona parênteses no DDD
    v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
    //Adiciona hífen no número do telefone
    v.value = v.value.replace(/(\d{4})(\d)/, "$1-$2");
  }
  
  function maiuscula(texto) {
    texto.value = texto.value.toUpperCase();
  }
  
  function ajustaData(v) {
    v.value = v.value.replace(/\D/g, "");
    //Adiciona a barra entre o dia e o mês
    v.value = v.value.replace(/^(\d{2})(\d)/, "$1/$2");
    //Adiciona a barra entre o mês e o ano
    v.value = v.value.replace(/(\d{2})(\d)/, "$1/$2");
  }

 const form   = document.getElementById('form');
 const campos = document.querySelectorAll('required');
 const spans  = document.querySelectorAll('.span-reuired');
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// mudar a cor das letras do formulário
 $("label").css("color","black");

 $("label").css("color","black");
//fim
//colocar pra aceitar só letras alfabeticas
 $('#login').keyup(function () { 
  this.value = this.value.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g,'');
});

$('#senha').keyup(function () { 
  this.value = this.value.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g,'');
});

$('#confirmar').keyup(function () { 
  this.value = this.value.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g,'');
});
//fim

//localstorage e alert de senha 

$("#login").attr("maxlength","6");

$("#login_button").click(function(){
    localStorage.setItem("login",$("#login").val())
    localStorage.setItem("senha",$("#senha").val())
    localStorage.setItem("nome",$("#nome").val())
    if($("#senha").val()!=$("#confirmar").val()){
       confirm("As senhas não coicidem por favor refazer a senha")
       return false;
    } 

   msg="";

  if($("#login").val()==""){
      msg ="Informe um login válido";

   } 
   if($("#senha").val()==""){

    msg +="\n Informe uma senha válida";

   }
   if($("#nome").val()==""){

    msg +="\n Campo Nome Completo vazio";

   }
   if($("#mat").val()==""){

    msg +="\n Campo Nome Materno vazio";

   }
   if($("#data_nascimento").val()==""){

    msg +="\n Por favor informe a Data de Nascimento";

   }

   if($("#email").val()==""){

    msg +="\n Por favor digite seu E-mail ";

   }

   if($("#cel").val()==""){

    msg +="\n Número de celular obrigatório";

   }

   if($("#cep").val()==""){

    msg +="\n Por favor Preencher o CEP";

   }





  if(msg.length >0){

   confirm(msg);
   return false;
  }

});

// validar cpf 
function validarCPF(cpf) {	
	cpf = cpf.value.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
    confirm("CPF inválido")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))	
    confirm("CPF inválido")	
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
  confirm("CPF inválido")
		return false;		
	return true;   
};



// validar cpf

$("#cep").blur(function () {
	cep = $(this).val();
	if (cep) {
		var url = "https://viacep.com.br/ws/" + cep + "/json/";
		$.ajax({
			url: url,
			datatype: "json",
			contentType: "application/json",
			success: function (json) {
				if (json.logradouro) {
					var endereco = json.logradouro + ", " + json.bairro + ", " + json.localidade + " - " + json.uf;
					$("#endereco").val(endereco)
				}
			},
		});
	};
});


$("#endereco").attr("disabled","disable");
