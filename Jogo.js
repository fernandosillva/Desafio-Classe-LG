class Heroi {
  
  constructor(nome,idade,tipo){
    this.nome  = nome
    this.idade = idade
    this.tipo = tipo
  }

   atacar() {
    let ataque = ""
    if (this.tipo === "Mago"){
      ataque = "magia"
      return  (`O ${this.tipo} atacou usando ${ataque}`)
    }else if (this.tipo === "Guerreiro") {
      ataque = "espada"
      return  (`O ${this.tipo} atacou usando ${ataque}`)
    }else if (this.tipo === "Monge"){
      ataque = "artes marciais"
      return  (`O ${this.tipo} atacou usando ${ataque}`)
    }else {
      ataque = "shoriuken"
      return  (`O ${this.tipo} atacou usando ${ataque}`)
    }
  }
}


  function main () {
  const personagem1 = new Heroi ("Gandalf",80,"Mago")
  const personagem2 = new Heroi ("Arthur",40,"Guerreiro")
  const personagem3 = new Heroi ("Atros",30,"Monge")
  const personagem4 = new Heroi ("Ryu",35,"Ninja")

  const ataque1 = personagem1.atacar ()
  const ataque2 = personagem2.atacar ()
  const ataque3 = personagem3.atacar ()
  const ataque4 = personagem4.atacar ()
  
  console.log(ataque1)
  console.log(ataque2)
  console.log(ataque3)
  console.log(ataque4)
}

main()