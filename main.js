var botao = document.querySelector("#gerar");
var nome = '';
var img = document.querySelector("img");
var block = document.querySelector("#block");

botao.addEventListener("click", function(event){
    numero = parseInt(Math.random()*4);
    nome = document.querySelector('#input').value;

    if (numero==0){
        document.querySelector('#texto').textContent = ' Parabéns '  +  nome  +  '   , você foi selecionado para a Grifinória! '
        img.src = "grifinoria.png";
        block.appendChild(img);
    }
    else if (numero==1){
        document.querySelector('#texto').textContent = ' Parabéns ' + nome + '  , você foi selecionado para a Sonserina! '
        img.src = "sonserina (2).png";
        block.appendChild(img);
    }
    else if (numero==2){
        document.querySelector('#texto').textContent = ' Parabéns ' + nome + '  , você foi selecionado para a Corvinal! '
        img.src = "corvinal.png";
        block.appendChild(img);
    }
    else if (numero==3){
        document.querySelector('#texto').textContent = ' Parabéns ' + nome + '  , você foi selecionado para a Lufa-Lufa! '
        img.src = "lufalufa.png";
        block.appendChild(img);
    }
    
});