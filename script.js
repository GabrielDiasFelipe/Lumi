function Abrir0(){
    if(document.getElementById('res0').style.display != 'block'){
    document.getElementById('res0').style.display = 'Block'
    document.getElementById('res1').style.display = 'None'
    document.getElementById('res2').style.display = 'None'
    document.getElementById('res3').style.display = 'None'
    document.getElementById('res4').style.display = 'None'
    document.getElementById('res5').style.display = 'None'
    }else{
    document.getElementById('res0').style.display = 'none'
    }
}
function Abrir1(){
    if(document.getElementById('res1').style.display != 'block'){
        document.getElementById('res0').style.display = 'none'
        document.getElementById('res1').style.display = 'block'
        document.getElementById('res2').style.display = 'None'
        document.getElementById('res3').style.display = 'None'
        document.getElementById('res4').style.display = 'None'
        document.getElementById('res5').style.display = 'None'
    }else{
    document.getElementById('res1').style.display = 'none'
    }
}
function Abrir2(){
    if(document.getElementById('res2').style.display != 'block'){
        document.getElementById('res0').style.display = 'none'
        document.getElementById('res1').style.display = 'None'
        document.getElementById('res2').style.display = 'block'
        document.getElementById('res3').style.display = 'None'
        document.getElementById('res4').style.display = 'None'
        document.getElementById('res5').style.display = 'None'
    }else{
    document.getElementById('res2').style.display = 'none'
    }
}
function Abrir3(){
     
    if(document.getElementById('res3').style.display != 'block'){
        document.getElementById('res0').style.display = 'none'
        document.getElementById('res1').style.display = 'None'
        document.getElementById('res2').style.display = 'None'
        document.getElementById('res3').style.display = 'block'
        document.getElementById('res4').style.display = 'None'
        document.getElementById('res5').style.display = 'None'
    }else{
    document.getElementById('res3').style.display = 'none'
    }
}
function Abrir4(){
    if(document.getElementById('res4').style.display != 'block'){
        document.getElementById('res0').style.display = 'none'
        document.getElementById('res1').style.display = 'None'
        document.getElementById('res2').style.display = 'None'
        document.getElementById('res3').style.display = 'None'
        document.getElementById('res4').style.display = 'block'
        document.getElementById('res5').style.display = 'None'
    }else{
    document.getElementById('res4').style.display = 'none'
    }
}
function Abrir5(){
    if(document.getElementById('res5').style.display != 'block'){
        document.getElementById('res0').style.display = 'none'
        document.getElementById('res1').style.display = 'None'
        document.getElementById('res2').style.display = 'None'
        document.getElementById('res3').style.display = 'None'
        document.getElementById('res4').style.display = 'None'
        document.getElementById('res5').style.display = 'block'
    }else{
    document.getElementById('res5').style.display = 'none'
    }
}
function play(){
    var video = document.getElementById('mp4')
    if(document.getElementById('res3').style.display != 'block'){
        video.pause()
    }else{
        video.play()
    }
}
var segredos = document.getElementById('res0');
var sg = [0,0,0,0,0,0,0,0] 
function descobrir(s){
    if(s == 'logo'){
        sg[0]++
    if(sg[0] == 1){ 
        var item = document.createElement('p')
        item.innerHTML= "Primeiro Segredo(Logo): <br> Esta Logo Que você mesma Escolheu hihi.. A Letra Associada a este Segredo e : G "
        segredos.appendChild(item)
    }
        else{alert("Segredo ja Achado")
    }
    }
    if(s == 'idi'){
        sg[1]++
    if(sg[1] == 1){ 
        var item = document.createElement('p')
        item.innerHTML = "Segundo Segredo(Idioma): <br>  No idioma da pagina esta escrita que você e linda e isso e tudo oque eu entendo e consigo falar quando vejo você. <br> Letra: I"
        segredos.appendChild(item)
    }
        else{alert("Segredo ja Achado")
    }
    }
    if(s == 'pipo'){
        sg[2]++
    if(sg[2] == 1){ 
        var item = document.createElement('p')
        item.innerHTML = "Terceiro Segredo(Pipoca): <br>  Pipoca doce ou Salgada nada importa se tenho você como minha namorada <br> Letra: L"
        segredos.appendChild(item)
    }
        else{alert("Segredo ja Achado")
    }
    }
    if(s == 'vamos'){
        sg[3]++
    if(sg[3] == 1){ 
        var item = document.createElement('p')
        item.innerHTML = "Quarto Segredo(Vamos La?): <br>  Ja estou Ficando Sem Ideia nem Tempo , mas você Merece <br> Letra: A"
        segredos.appendChild(item)
    }
        else{alert("Segredo ja Achado")
    }
    }
    if(s == 'saiba'){
       sg[4]++ 
    if(sg[4] == 1){
        var item = document.createElement('p')
        item.innerHTML = " Quinto Segredo(Saiba): <br> as vezes saber e uma benção as vezes uma maldição mas espero que saiba que eu te amo <br> Letra: S "
        segredos.appendChild(item)
    }else{
        alert("Segredo ja Achado")
    }
    }
    if(s == 'nos'){
        sg[5]++ 
     if(sg[5] == 1){
         var item = document.createElement('p')
         item.innerHTML = "Sexto Segredo(Nos):<br>Eu e você por mais que eu ache que você se acha meio estrainha nesse video ele mostra como somos melhores e mais felizes juntos<br> Letra: O "
         segredos.appendChild(item)
     }else{
         alert("Segredo ja Achado")
     }
     }
     if(s == 'familia'){
        sg[6]++ 
     if(sg[6] == 1){
         var item = document.createElement('p')
         item.innerHTML = "Setimo Segredo(Familia): <br> Essa e sua familia ela não e perfeita e tudo bem a minha tambem ta longe de ser, mas talvez a gente consiga construir a nossa 'Familia Perfeita'<br> Letra: L (FAZ O L PETISTA) "
         segredos.appendChild(item)
     }else{
         alert("Segredo ja Achado")
     }
     }
     if(s == 'perguntas'){
        sg[7]++ 
     if(sg[7] == 1){
         var item = document.createElement('p')
         item.innerHTML = "Oitavo Segredo(Perguntas): <br>Talvez você ainda se pergunte por quanto tempo a gente vai continuar juntos e embora essa pergunta não tenha uma resposta claro eu apenas me pergunto se você achou todos os segredos e acho que talvez você esteja se perguntando por que tantas 'palavras' perguntas, na verdade, esse pergunta tem uma resposta, talvez seja porque você fosse a resposta das minhas perguntas <br> Letra: E"
         segredos.appendChild(item)
     }else{
         alert("Segredo ja Achado")
     }
     }
     if(sg[0] >=2 & sg[1] >=2 & sg[2] >=2 & sg[3] >=2  & sg[4] >=2 & sg[5] >=2  & sg[6] >=2 & sg[7] >=2) {
        var item = document.createElement('p')
         item.innerHTML = `Parabens Lu, você achou todos segredos que significa girasole em italiano vou deixar que eles te explique <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiq7_bcob7_AhUiBLkGHcvEA7QQFnoECBQQAw&url=https%3A%2F%2Fwww.interflora.it%2Flinguaggiodelgirasole%23%3A~%3Atext%3DI%2520girasoli%2520fiori%2520della%2520luce%2Cpositiva%2520e%2520piena%2520di%2520allegria.&usg=AOvVaw2GZZti0-At7GJttCP41BR8"  target="_blank">Girasole</a>`
         segredos.appendChild(item)
     }
}