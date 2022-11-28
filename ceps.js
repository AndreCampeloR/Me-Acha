window.onload = function(){

	const btnBuscaCep = document.querySelector("#btnBuscaCep");
	const cxCep = document.querySelector(".cxCep");

	const dadosCep = async function(cepUrl){

	try{
		var url=`https://viacep.com.br/ws/${cepUrl}/json/`;
		var consultaCep = await fetch(url);
		var dadoCep = await consultaCep.json();

			for(var campelo in dadoCep){
				if(document.querySelector("#"+campelo)){
					document.querySelector("#"+campelo).value = dadoCep[campelo];
					
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
			}
		}
	}
					
	 catch{
		alert("Esse Cep não existe");
		
	}
}

	btnBuscaCep.addEventListener("click",()=>{
		
		let cep = cxCep.value;
		dadosCep(cep);
	})
}