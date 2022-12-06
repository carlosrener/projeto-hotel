import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Economize tempo, economize dinheiro!</h1>
      <span className="mailDesc">Cadastre-se e enviaremos as melhores ofertas para você</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Cadastrar</button>
      </div>
    </div>
  )
}

export default MailList