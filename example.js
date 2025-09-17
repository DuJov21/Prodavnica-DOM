"use strict"

class Artikal {
  constructor(id, naziv, cena, dostupan) {
    this.id = id
    this.naziv = naziv
    this.cena = cena
    this.dostupan = dostupan
  }
}

const artikli = [
  new Artikal(1, "Monitor", 165, true),
  new Artikal(2, "TV", 650, false),
  new Artikal(3, "Miš", 20, true),
  new Artikal(4, "Tastatura", 45, false)
]

const tabela = document.getElementById("artikli")

tabela.rows[0].cells[0].innerText = "Br"
tabela.rows[0].cells[2].innerText = "Cena($)"

for (let artikal of artikli) {
  let red = tabela.insertRow()

  let celijaId = red.insertCell()
  let celijaNaziv = red.insertCell()
  let celijaCena = red.insertCell()
  let celijaDostupan = red.insertCell()

  celijaId.innerText = artikal.id
  celijaNaziv.innerText = artikal.naziv
  celijaCena.innerText = artikal.cena
  celijaDostupan.innerText = artikal.dostupan ? "DA" : "NE"

  if (!artikal.dostupan) {
    red.style.backgroundColor = "#f8d7da"
  }
}

tabela.style.borderCollapse = "collapse"
for (let row of tabela.rows) {
  for (let cell of row.cells) {
    cell.style.border = "1px solid black"
    cell.style.padding = "5px"
    cell.style.textAlign = "center"
  }
}