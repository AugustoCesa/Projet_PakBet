console.log('header.js carregado com sucesso!');

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

<header>
    <nav>
      <div  class="logo-header">
      <a href="../index.html"><img src="../images/LOGO.png" alt=""></img></a>
      <h3>Pak Bet</h3>
       </div>
      <div class="mobile-menu">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>

      </div>

      <ul class="nav-list">
        <li><a href="/Projet_PakBet/pages/game.html">Jogos</a></li>
        <li><a href="/Projet_PakBet/pages/ao_vivo.html">Ao-vivo</a></li>
        <li><a href="/Projet_PakBet/pages/user.html">Perfil</a></li>
        <li><a href="/Projet_PakBet/pages/notificacao.html">Notificações</a></li>
      </ul>
    </nav>
  </header>
  
      `;
  }
}


customElements.define('header-component', Header);

