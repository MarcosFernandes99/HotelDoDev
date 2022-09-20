// HOTEL
let idHotel = []
let nomesHotel = []
let categoria = []
let endereco = []
let telefone = []
// RESERVA
let reservaId = []
let reservaIdHotel = []
let reservaNomeResponsavel = []
let reservaDiaEntrada = []
let reservaDiaSaida = []

let continuar = true
do{
let opcao = prompt(`1-Cadastrar Hotel/2-Cadastrar Reserva/3-Exibir todas reservas do Hotel/4-Exibir informações da reserva/5-Exibir reservas da pessoa/6-Exibir hotéis por categoria/7-Atualizar telefone de cadastro/8-Encerrar`)

switch (opcao){
    case "1": 
    CadastrarHotel()
    console.log("Dados Hotel -  " + idHotel + "  -  " + nomesHotel + "  -  " + categoria + "  -  " + endereco + "  -  " + telefone)
    break;
    case "2":
    CadastrarReserva()
    console.log("Dados Reserva -  " + reservaId + "  -  " + reservaIdHotel + "  -  " + reservaNomeResponsavel + "  -  " + reservaDiaEntrada + "  -  " + reservaDiaSaida)
    break;
    case "3":
    let idHotelBuscar = prompt(`Digite o ID do hotel para aparecer todas as reservas!`)
    ExibirReservasDoHotel(idHotelBuscar)
    break;
    case "4":
    let idReservaBuscar = prompt(`Digite o ID da reserva para aparecer todas informações!`)
    ExibirHotelEnderecoDiaDeEntradaEsaida(idReservaBuscar)
    break;
    case "5":
    let nomeBuscar = prompt(`Digite o nome da pessoa para aparecer todas suas reservas!`)
    ExibirTodasAsReservas(nomeBuscar)
    break;
    case "6":
    let categoriaBuscar = prompt(`Digite a categoria que deseja e aparecerá todos os hotéis correspondentes!`)
    ExibirHoteisDaCategoria(categoriaBuscar)
    break;
    case "7":
    let idBuscar = prompt(`Digite o ID do hotel!`)
    let telefoneBuscar = prompt(`Digite o telefone atualizado!`)
    AtualizarTelefone(idBuscar, telefoneBuscar)
    break;
    default:
    console.log(`Programa encerrado!`)
    continuar = false
    break;
}

} while(continuar)


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
    let reservas = []
    reservaIdHotel.filter((element, index) => {
        if(element == idHotelParametro){
        reservas.push("Nome responsável - ", reservaNomeResponsavel[index], "Dia entrada - ", reservaDiaEntrada[index], "Dia saída - ", reservaDiaSaida[index] )
        }        
    })
    console.log(reservas)
    
    
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

