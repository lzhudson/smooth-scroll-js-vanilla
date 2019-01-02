function scroll_suave(elemento, duracao){
	var elemento = document.querySelector(elemento);
	console.log(elemento);
	var elementoPosicao = elemento.getBoundingClientRect();
	var posicaoInicial = window.pageYOffsset;
	var distance = elementoPosicao - posicaoInicial;
	var tempoInicio = null;
	console.log(elementoPosicao);
}
function animacao_scroll(tempodecorrido){
	if (tempoInicio === null) tempoInicio = tempodecorrido 
    requestAnimationFrame(animacao);
}

scroll_suave('.box-2',1000);