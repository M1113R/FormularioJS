let cadastrados = [];

function cadastrar() {

    event.preventDefault();

    let cadastros = {
        nome: nome.value,
        ra: ra.value,
        sexo: sexo.value,
        idade: idade.value,
        endereco: endereco.value,
        telefone: telefone.value,
        email: email.value
    }

    cadastrados.push(cadastros);

    document.getElementById('nome').value = "";
    document.getElementById('ra').value = "";
    document.getElementById('idade').value = "";
    document.getElementById('endereco').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('email').value = "";
}

function listarCadastrados() {
    
    var tabela = document.getElementById('tabela').style.color = "white";
    var conteudo;

    cadastrados.forEach(element => {
    
        var linha = document.createElement('tr');
        
        conteudo = `<td>${element.nome}</td>
        <td>${element.ra}</td>
        <td>${element.sexo}</td>
        <td>${element.idade}</td>
        <td>${element.endereco}</td>
        <td>${element.telefone}</td>
        <td>${element.email}</td>` 
        
        linha.innerHTML = conteudo;
        corpo.appendChild(linha);
    });
}