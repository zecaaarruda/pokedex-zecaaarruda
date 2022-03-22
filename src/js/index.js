/*
quando clicar pokemon listagem temos que esconder o cartao do pokemon aberto e mostrar o cartao correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com 2 elementos:
1 - listagem
2 - cartao

precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

vamos precisar trabalhar com evento de clique feito pelo usuário na listagem de pokemons

- remover a classe aberto só do cartao que esta aberto (display block)
- ao clicar em um pokemon da listagem, pegamos o id desse pokemon pra saber qual cartao mostrar
- remover a classe ativo que marca o pokemon selecionado
- adicionar a classe ativo no pokemon selecionado na listagem 
*/

// precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll(".pokemon")
const pokemonsCard = document.querySelectorAll (".cartao")


listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trabalhar com evento de clique feito pelo usuário na listagem de pokemons
    pokemon.addEventListener('click', () => {
        //- remover a classe aberto só do cartao que esta aberto (display block)

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove("aberto")

        //- ao clicar em um pokemon da listagem, pegamos o id desse pokemon pra saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir) 

        cartaoPokemonParaAbrir.classList.add("aberto")

        //- remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //- adicionar a classe ativo no pokemon selecionado na listagem
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
        

        

    })  
})



