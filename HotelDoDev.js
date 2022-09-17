// HOTEL
let idHotel = [1, 2, 3]
let nomesHotel = ["Hotel1", "Hotel2", "Hotel3"]
let categoria = ["A", "B", "C"]
let endereco = ["End1", "End2", "End3"]
let telefone = [222, 555, 333]
// RESERVA
let reservaId = [4, 5, 6]
let reservaIdHotel = [2, 3, 1]
let reservaNomeResponsavel = ["João ", "Fulano", "Marcos"]
let reservaDiaEntrada = [8, 11, 17]
let reservaDiaSaida = [11, 16, 25]

// CadastrarHotel()
// CadastrarReserva()
console.log("Dados Hotel -  " + idHotel + "  -  " + nomesHotel + "  -  " + categoria + "  -  " + endereco + "  -  " + telefone)
console.log("Dados Reserva -  " + reservaId + "  -  " + reservaIdHotel + "  -  " + reservaNomeResponsavel + "  -  " + reservaDiaEntrada + "  -  " + reservaDiaSaida)

ExibirTodasReservas(1)

function CadastrarHotel(){
    id.push(prompt(`Qual o ID do hotel?`))
    nome.push(prompt(`Qual o nome do hotel?`))
    categoria.push(prompt(`Qual a categoria do hotel?`))
    endereco.push(prompt(`Qual o endereço do hotel?`))
    telefone.push(prompt(`Qual o telefone do hotel?`))
}

function CadastrarReserva(){
    reservaId.push(prompt(`Qual o ID da reserva?`))
    reservaIdHotel.push(prompt(`Qual o ID do hotel?`))
    reservaNomeResponsavel.push(prompt(`Qual o nome do responsável?`))
    reservaDiaEntrada.push(prompt(`Qual o dia de entrada?`))
    reservaDiaSaida.push(prompt(`Qual o dia de saída?`))
}

function ExibirTodasReservas(idHotelParametro){
    let posicao = idHotel.indexOf(idHotelParametro)
    console.log(posicao)    
    console.log(`Nome: ${nomesHotel[posicao]}, Nome do responsável: ${reservaNomeResponsavel[posicao]}, Dia de entrada: ${reservaDiaEntrada[posicao]}, Dia de saída: ${reservaDiaSaida[posicao]}`)
}

