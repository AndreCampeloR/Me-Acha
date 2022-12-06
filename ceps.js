window.onload = function(){
	
	const btnBuscaCep = document.querySelector("#btnBuscaCep");
	const cxCep = document.querySelector(".cxCep");
	
	const dadosCep = async function(cepUrl){

		try{
			
		var url=`https://viacep.com.br/ws/${cepUrl}/json/`;
		var consultaCep = await fetch(url);
		var dadoCep = await consultaCep.json();

		for(var campos in dadoCep){
			if(document.querySelector("#"+campos)){
					document.querySelector("#"+campos).value = dadoCep[campos];
					
					if((document.querySelector("#logradouro").value)==""){
						document.querySelector("#logradouro").value="Rua não encontrada"
					}
					if((document.querySelector("#bairro").value)==""){
						document.querySelector("#bairro").value="Bairro não encontrado"
					}
					if((document.querySelector("#localidade").value)==""){
						document.querySelector("#localidade").value="Cidade não encontrada"
				    }
				    if((document.querySelector("#uf").value)==""){
						document.querySelector("#uf").value="UF não encontrada"
				    }
					if(dadoCep[campos] === true){
						document.querySelector("#logradouro").value = ""
						document.querySelector("#bairro").value = ""
						document.querySelector("#localidade").value = ""
						document.querySelector("#uf").value = ""
						alert("Esse Cep não existe");
					}
					
			    }
				
		    }
			
		}
		
		catch{
			alert("Esse não é um Cep válido");
			
		}
		
	}
	
	btnBuscaCep.addEventListener("click",()=>{
		
		let cep = cxCep.value;
		dadosCep(cep);
		
	})

	const checkbox = document.querySelector("#checkbox");

	 checkbox.addEventListener('change', ()=>{
	 document.body.classList.toggle('dark');
	});
}



