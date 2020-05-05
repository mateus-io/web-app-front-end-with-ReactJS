import React from 'react';
import './css/global.css';
import './css/App.css';
import './css/Sidebar.css';
function App() {
  return (
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
          
          <button>Salvar</button>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
