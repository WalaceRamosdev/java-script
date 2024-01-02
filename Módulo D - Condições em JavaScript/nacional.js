function nacao() {
    var loc = window.document.getElementById('ct')
    var res = window.document.querySelector('div#res')
    var nac = loc.value

    if (nac != brasil) {

    res.innerHTML = ('<p>Você é <strong>Brasileiro(a)</strong></p>')
    } 
        else {
            res.innerHTML = `Você é <strong>Estrangeiro(a)</strong>`
    }
}
