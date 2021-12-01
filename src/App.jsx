import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import { serverAdders } from './util/settings';

import Cadastrarsenha from './pages/CadastrarSenha';
import RecuperarSenha from './pages/RecuperarSenha';

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route path="/cadastrar_senha/:token_senha">
            <Cadastrarsenha />
          </Route>
          <Route path="/recuperar_senha/:token_senha">
            <RecuperarSenha />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
