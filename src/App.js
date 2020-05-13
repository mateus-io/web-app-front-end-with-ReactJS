import React from 'react';
import './css/global.css';
import './css/App.css';
import './css/Sidebar.css';
import './css/Main.css';
import './css/footer.css';
import logoTwitter from './assets/images/twitter.png';
import logoFacebook from './assets/images/facebook.png';
import logoYoutube from './assets/images/youtube.png';
import logoInstagram from './assets/images/instagram.png';
import logoBoleto from './assets/images/boleto.png';
import logoMasterCard from './assets/images/mastercard.png';
import logoMercadoPago from './assets/images/mercadopago.png';
import logoVisa from './assets/images/visa.png';

import SlideProductShow from './components/SlideProductShow';

import ScrollChroma from './components/ScrollChroma';

import AnimationButton from './components/AnimationButton';

import MenuInterativo from './components/MenuInterativo';

import SimpleParallax from './components/SimpleParallax';


function App() {
  return (
    <>
      <SimpleParallax/>
      <MenuInterativo/>
      <ScrollChroma/>
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <form>
            <div className="input-block">
              <label htmlFor="github_username">Usuário do GitHub</label><br/>
              <input name="github_username" id="github_username" required/><br/>
            </div>
            
            <div className="input-block">
              <label htmlFor="courses" >Cursos</label><br/>
              <input name="courses" id="courses" required></input>
            </div>
            <div className="inline">
              <div>
                <label htmlFor="latitude">Latitude</label><br/>
                <input name="latitude" id="latitude" required></input><br/>
              </div>
              <div>
                <label htmlFor="longitude" >Longitude</label><br/>
                <input name="longitude" id="longitude" required></input>
              </div>
            </div>
            
            <AnimationButton value="Salvar"/>
          </form>
        </aside>
        <main>
          <section className="blocos">
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
          </section>
          
          <section className="linha">

          </section>
        </main>
      </div>
      
      <SlideProductShow/>

      <footer>
        <section>
          <div className="menores-esq">
            <p>Fique ligado nas novidades</p>
          </div>
          <div className="menores-dir">
          </div>

          <div className="menores-esq">
            
            <form>
                <input placeholder="Endereço de E-mail"></input>
                <button type="submit">Cadastrar</button>
            </form>
          </div>
          <div className="menores-dir">
            <img src={logoTwitter} alt="twitter"/>
            <img src={logoFacebook} alt="facebook"/>
            <img src={logoYoutube} alt="youtube"/>
            <img src={logoInstagram} alt="instagram"/>
          </div>

          <div className="maior-esq">
            <section>
              <div>
                <p>Dentro deste campo estará exposta um pouco da missão do empreendimento como fatores que agregam valor para os clientes e etc</p><br/><br/>
                <p>Mais algumas coisas tentando convencer o cliente da missão da loja do prosósito geral e tentando vender algo</p>
              </div>
              <div>
                <p>Dentro deste campo estará exposta um pouco da missão do empreendimento como fatores que agregam valor para os clientes e etc</p>
              </div>
              <div>
                <p>Dentro deste campo estará exposta um pouco da missão do empreendimento como fatores que agregam valor para os clientes e etc</p>
              </div>
            </section>
          </div>
          <div className="maior-dir">
          </div>

          <div className="menores-esq">
            <p>&copy; Mateus Apolinário</p>
          </div>
          <div className="menores-dir">
            <img src={logoBoleto} alt="boleto"/>
            <img src={logoMasterCard} alt="masterCard" />
            <img src={logoMercadoPago} alt="mercadoPago"/>
            <img src={logoVisa} alt="visa"/>
          </div>
        </section>

      </footer>
    </>
  );
}

export default App;
