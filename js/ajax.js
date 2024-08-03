function getPromocao(dia){
    const json = new XMLHttpRequest();

    json.open('GET', './js/promos.json', true)

    json.onreadystatechange = () => {
        if(json.readyState == 4 && json.status == 200){
            let promocoesOBJ = json.responseText

            const DOMPromos = JSON.parse(promocoesOBJ)

            document.getElementById('list').innerHTML = ''

            if (DOMPromos.promocoes.hasOwnProperty(dia)) {
                let item = DOMPromos.promocoes[dia];

                let divRow = document.createElement('div');
                divRow.className = 'row';
                let divCol = document.createElement('div');
                divCol.className = 'col';

                if (typeof item === 'object') {
                    for (let key in item) {
                        let promo = item[key];

                        let titulo = document.createElement('h2');
                        titulo.innerText = promo.titulo;
                        divCol.appendChild(titulo);

                        let imagem = document.createElement('img');
                        imagem.className = 'imagem-produto'
                        imagem.src = promo.imagem;
                        imagem.alt = promo.titulo;
                        divCol.appendChild(imagem);

                        let preco = document.createElement('p')
                        preco.innerText = promo.preco
                        preco.className = 'product-price'
                        divCol.appendChild(preco)

                        let descricao = document.createElement('p');
                        descricao.innerText = promo.descricao;
                        divCol.appendChild(descricao);
                    }
                } else {
                    let titulo = document.createElement('h2');
                    titulo.innerText = item.titulo;
                    divCol.appendChild(titulo);

                    let imagem = document.createElement('img');
                    imagem.className = 'imagem-produto'
                    imagem.src = item.imagem;
                    imagem.alt = item.titulo;
                    divCol.appendChild(imagem);

                    let descricao = document.createElement('p');
                    descricao.innerText = item.descricao;
                    divCol.appendChild(descricao);
                }

                divRow.appendChild(divCol);
                document.getElementById('list').appendChild(divRow);
            } else {
                console.log("Dia não encontrado nas promoções.");
            }
        }
        if(json.readyState == 4 && json.status == 404){
            console.log("Ferrou, chama o Dev!!!")
        }
    }
    json.send()
}