// HOTEL
let idHotel = [1, 2, 3]
let nomesHotel = ["Hotel 1", "Hotel 2", "Hotel 3"]
let categoria = ["A", "B", "A"]
let endereco = ["End 1", "End 2", "End 3"]
let telefone = [222, 555, 333]
// RESERVA
let reservaId = [4, 5, 6]
let reservaIdHotel = [2, 3, 3]
let reservaNomeResponsavel = ["Fulano", "Marcos", "Marcos"]
let reservaDiaEntrada = [8, 11, 17]
let reservaDiaSaida = [11, 16, 25]

// CadastrarHotel()
// CadastrarReserva()

console.log("Dados Hotel -  " + idHotel + "  -  " + nomesHotel + "  -  " + categoria + "  -  " + endereco + "  -  " + telefone)
console.log("Dados Reserva -  " + reservaId + "  -  " + reservaIdHotel + "  -  " + reservaNomeResponsavel + "  -  " + reservaDiaEntrada + "  -  " + reservaDiaSaida)

// ExibirReservasDoHotel(2)
// ExibirHotelEnderecoDiaDeEntradaEsaida(5)
// ExibirTodasAsReservas("Fulano")
// ExibirHoteisDaCategoria("B")
// AtualizarTelefone(2, 698)


function CadastrarHotel(){
    let validacaoId = parseInt(prompt(`Qual o ID do hotel?`))
    idHotel.includes(validacaoId)

    if(!idHotel.includes(validacaoId)){
        idHotel.push(validacaoId)
        nomesHotel.push(prompt(`Qual o nome do hotel?`))
        categoria.push(prompt(`Qual a categoria do hotel?`))
        endereco.push(prompt(`Qual o endereço do hotel?`))
        telefone.push(prompt(`Qual o telefone do hotel?`))
    }
    else{
        console.log("ID já existe, digite outro!")
    }          
}
function CadastrarReserva(){
    reservaId.push(prompt(`Qual o ID da reserva?`))

    let validacaoIdHotel = parseInt(prompt(`Qual o ID do hotel?`))
    idHotel.includes(validacaoIdHotel)

    if(idHotel.includes(validacaoIdHotel)){
    reservaIdHotel.push(validacaoIdHotel)
    reservaNomeResponsavel.push(prompt(`Qual o nome do responsável?`))
    let verificacaoDiaEntrada =  parseInt(prompt(`Qual o dia de entrada?`))
    let verificacaoDiaSaida = parseInt(prompt(`Qual o dia de saida?`))

    if(verificacaoDiaEntrada > verificacaoDiaSaida){
    console.log(`Dia de saída menor que o dia de entrada, informações excluídas. Cadastre novamente!`)
    reservaId.pop()
    reservaIdHotel.pop()
    reservaNomeResponsavel.pop() 
    }
    else{
    reservaDiaEntrada.push(verificacaoDiaEntrada)
    reservaDiaSaida.push(verificacaoDiaSaida)
    }
    }

    else{
        console.log(`ID do hotel não existe, digite novamente!`)
        reservaId.pop()
    }
}
function ExibirReservasDoHotel(idHotelParametro){
    let posicao = idHotel.indexOf(idHotelParametro)
    console.log(posicao)
    console.log(`Nome: ${nomesHotel[posicao]}, Nome do responsável: ${reservaNomeResponsavel[posicao]}, Dia de entrada: ${reservaDiaEntrada[posicao]}, Dia de saída: ${reservaDiaSaida[posicao]}`)
}
function ExibirHotelEnderecoDiaDeEntradaEsaida(idReservaParametro){
    let posicao = reservaId.indexOf(idReservaParametro)     
    console.log(`Nome: ${nomesHotel[posicao]}, Endereço: ${endereco[posicao]}, Dia de entrada: ${reservaDiaEntrada[posicao]}, Dia de saída: ${reservaDiaSaida[posicao]}`)
}
function ExibirTodasAsReservas(nomeParametro){
    let reservaAux = []
    let reservaIdHotelAux = []
    let nomeAux = []
    let diaEntrada = []
    let diaSaida = []
    reservaNomeResponsavel.filter((element, index) => {
        if(element == nomeParametro){
            reservaAux.push(reservaId[index])
            reservaIdHotelAux.push(reservaIdHotel[index])
            nomeAux.push(reservaNomeResponsavel[index])
            diaEntrada.push(reservaDiaEntrada[index])
            diaSaida.push(reservaDiaSaida[index])
        }          
    })
    console.log(`ID Reserva: ${reservaAux}, ID Hotel: ${reservaIdHotelAux}, Nome: ${nomeAux}, Dia Entrada: ${diaEntrada}, Dia Saída ${diaSaida}`)
    
}
function ExibirHoteisDaCategoria(categoriaParametro){
    let hoteis = []
    categoria.filter((element, index) => {
        if(element == categoriaParametro){
            hoteis.push(nomesHotel[index])
        }
    })
    console.log(`Hotéis com a categoria ${categoriaParametro}: ${hoteis}`)
}
function AtualizarTelefone(idHotelParametro, telefoneParametro){
    console.log(telefone)
    let posicao = idHotel.indexOf(idHotelParametro)
    telefone[posicao] = telefoneParametro
    console.log(telefone)
}

