/*
Quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente selecionado na lsitagem

Para isso vamos precisar trabalhar com dois elementos:
1 - Listagem
2 - Cartão do pokémon

Criar duas variaveis JS para trabalhar com os elementos da tela

Onclick 

- Remover a classe aberto
- Ao clicar em um pokemon, pegamos o id do pokemon para saber qual mostrar
- Remover a classe ativa que marca o pokemon selecionado
- Adicionar a classe ativo no item da lista selecionado

*/

// Criar duas variaveis JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll(".pokemon")
const pokemonCard = document.querySelectorAll(".cartao-pokemon")

// Onclick 
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', ()=> {
        //Remover a classe aberto do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-'+ idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // Remover a classe ativa que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // Adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

     
    }) 
})