var tableBody = document.querySelector('#data tbody')
var tr = document.createElement('tr')
var td = document.createelement('td')
var text = document.creatTextNode('Some Value')
//var text = document.createTextNode('Some Value')
//td.appendChild(text)

td.innerHTML = 'Some Value'

tr.appendChild(td)
tableBody.appendChild(tr)
