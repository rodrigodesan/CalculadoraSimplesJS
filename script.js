let visor = document.querySelector("input#visor")
let valores = ""

/*function parEsq(){
    valores.push("(")
    visor.value += "( " 
}
function parDir(){
    valores.push(")")
    visor.textContent += ") "
}*/ 
function apagar(){
    teste = valores
    valores = ""
    if (teste[teste.length-1]=="+" || teste[teste.length-1]=="-" || teste[teste.length-1]=="x" || teste[teste.length-1]=="/" || teste[teste.length-2]=="+" || teste[teste.length-2]=="-" || teste[teste.length-2]=="x" || teste[teste.length-2]=="/"){
        for(let pos = 0; pos<=teste.length-3;pos++){
            valores += teste[pos]    
        }
    }else{
        for(let pos = 0; pos<=teste.length-2;pos++){
            valores += teste[pos]    
        }
    }  
    visor.value = valores
}
function mais(){
    valores+= ' +'
    visor.value = valores
}
function um(){
    if (valores[valores.length-1] == "+" || valores[valores.length-1] == "-"|| valores[valores.length-1] == "x"|| valores[valores.length-1] == "/"){
        valores += " 1"
    } else{
        valores+= "1"
    }
    visor.value = valores
}
function dois(){
    if (valores[valores.length-1] == "+" || valores[valores.length-1] == "-"|| valores[valores.length-1] == "x"|| valores[valores.length-1] == "/"){
        valores += " 2"
    } else{
        valores+= "2"
    }
    visor.value = valores
}
function tres(){
    if (valores[valores.length-1] == "+" || valores[valores.length-1] == "-"|| valores[valores.length-1] == "x"|| valores[valores.length-1] == "/"){
        valores += " 3"
    } else{
        valores+= "3"
    }
    visor.value = valores
}
function menos(){
    valores += " -"
    visor.value = valores
}
function quatro(){
    if (valores[valores.length-1] == "+" || valores[valores.length-1] == "-"|| valores[valores.length-1] == "x"|| valores[valores.length-1] == "/"){
        valores += " 4"
    } else{
        valores+= "4"
    }
    visor.value = valores
}
function cinco(){
    if (valores[valores.length-1] == "+" || valores[valores.length-1] == "-"|| valores[valores.length-1] == "x"|| valores[valores.length-1] == "/"){
        valores += " 5"
    } else{
        valores+= "5"
    }
    visor.value = valores
}
function seis(){
    if (valores[valores.length-1] == "+" || valores[valores.length-1] == "-"|| valores[valores.length-1] == "x"|| valores[valores.length-1] == "/"){
        valores += " 6"
    } else{
        valores+= "6"
    }
    visor.value = valores
}
function mult(){
    valores += " x"
    visor.value = valores
}
function sete(){
    if (valores[valores.length-1] == "+" || valores[valores.length-1] == "-"|| valores[valores.length-1] == "x"|| valores[valores.length-1] == "/"){
        valores += " 7"
    } else{
        valores+= "7"
    }
    visor.value = valores
}
function oito(){
    if (valores[valores.length-1] == "+" || valores[valores.length-1] == "-"|| valores[valores.length-1] == "x"|| valores[valores.length-1] == "/"){
        valores += " 8"
    } else{
        valores+= "8"
    }
    visor.value = valores
}
function nove(){
    if (valores[valores.length-1] == "+" || valores[valores.length-1] == "-"|| valores[valores.length-1] == "x"|| valores[valores.length-1] == "/"){
        valores += " 9"
    } else{
        valores+= "9"
    }
    visor.value = valores
}
function dividir(){
    valores+= " /"
    visor.value = valores
}

function zero(){
    if (valores[valores.length-1] == "+" || valores[valores.length-1] == "-"|| valores[valores.length-1] == "x"|| valores[valores.length-1] == "/"){
        valores += " 0"
    } else{
        valores+= "0"
    }
    visor.value = valores
}
function limpar(){
    visor.value = ""
    valores = ""
}
function resultado(){
    if (sep.length>=3){
        if (sep[1]=="+"){
            let res = Number(sep[0]) + Number(sep[2])
            visor.value = res
            valores = String(res)
        }else if (sep[1]=="-"){
            let res = Number(sep[0]) - Number(sep[2])
            visor.value = res 
            valores = String(res)
        }else if (sep[1]=="x"){
            let res = Number(sep[0]) * Number(sep[2])
            visor.value = res 
            valores = String(res)
        }else if (sep[1]=="/"){
            let res = Number(sep[0]) / Number(sep[2])
            visor.value = res 
            valores = String(res)
        }
    }
}

function main(valor){
    sep = valores.split(' ')
    if (sep.length>3){
        if (sep[1]=="+"){
            let res = Number(sep[0]) + Number(sep[2])
            visor.value = res
            valores = String(res)
        }else if (sep[1]=="-"){
            let res = Number(sep[0]) - Number(sep[2])
            visor.value = res 
            valores = String(res)
        }else if (sep[1]=="x"){
            let res = Number(sep[0]) * Number(sep[2])
            visor.value = res 
            valores = String(res)
        }else if (sep[1]=="/"){
            let res = Number(sep[0]) / Number(sep[2])
            visor.value = res 
            valores = String(res)
        }
    }
    /*if (valor == "(" && (sep.length==0 || (sep[sep.length-1]=="+"  || sep[sep.length-1]=="-" || sep[sep.length-1]=="x" || sep[sep.length-1]=="/"))) {
        parEsq()
    }else if (valor == ")" && (valores.length>0 && valores[valores.length-1]!="(" && valores[valores.length-1]!=")" && valores[valores.length-1]!="+" && valores[valores.length-1]!="-" && valores[valores.length-1]!="x" && valores[valores.length-1]!="/")){
        parDir()
    }else*/else if (valor == "c"){
        apagar()
    }else if (valor == "+" && (sep[sep.length-1]!="" && sep[sep.length-1]!="+" && sep[sep.length-1]!="-" && sep[sep.length-1]!="x" && sep[sep.length-1]!="/")){
        mais()
    }else if (valor == "1"){
        um()
    }else if (valor == "2"){
        dois()
    }else if (valor == "3"){
        tres()
    }else if (valor == "-" && (sep[sep.length-1]!="" && sep[sep.length-1]!="+" && sep[sep.length-1]!="-" && sep[sep.length-1]!="x" && sep[sep.length-1]!="/")){
        menos()
    }else if (valor == "4"){
        quatro()
    }else if (valor == "5"){
        cinco()
    }else if (valor == "6"){
        seis()
    }else if (valor == "x" && (sep[sep.length-1]!="" && sep[sep.length-1]!="+" && sep[sep.length-1]!="-" && sep[sep.length-1]!="x" && sep[sep.length-1]!="/")){
        mult()
    } else if (valor == "7"){
        sete()
    }else if (valor == "8"){
        oito()
    }else if (valor == "9"){
        nove()
    }else if (valor == "/" && (sep[sep.length-1]!="" && sep[sep.length-1]!="+" && sep[sep.length-1]!="-" && sep[sep.length-1]!="x" && sep[sep.length-1]!="/")){
        dividir()
    }else if (valor == "0"){
        zero()
    }else if (valor == "res"){
        resultado()
    }
}    
    
