import React from 'react';
import { useParams } from 'react-router-dom';
import { checkSenhaIgual } from '@/util/funcoes';
import DokerAlert from '@/components/DokerAlert';

const CadastrarSenha = (props) => {
  const [senha, setSenha] = React.useState('');
  const [confirmarSenha, setConfirmarSenha] = React.useState('');
  const [alertMsg, setAlertMsg] = React.useState('');
  const [alertType, setAlertType] = React.useState('');
  const [alertVisible, setAlertVisible] = React.useState(false);
  const params = useParams();
  const tokenSenha = params.token_senha;

  const setAlert = (msg, type, exibir) => {
    setAlertMsg(msg);
    setAlertType(type);
    setAlertVisible(exibir);
  };

  React.useEffect(() => {
    if (!checkSenhaIgual(senha, confirmarSenha) && confirmarSenha !== '') {
      setAlert('Senhas não conferem', 'error', true);
    } else {
      setAlert('', '', false);
    }
  }, [senha, confirmarSenha]);

  const gravarSenha = () => {
    if (checkSenhaIgual(senha, confirmarSenha)) {
      axios.put('https://doker-api.herokuapp.com/api-v1/criar_senha/', {
        senha,
        token_senha: tokenSenha,
      })
        .then((response) => {
          if (response.data.status === 'success') {
            setAlert('Senha alterada com sucesso', 'success', true);
          } else {
            setAlert('Erro ao alterar senha', 'error', true);
          }
        })
        .catch((error) => {
          setAlert('Erro ao alterar senha', 'error', true);
        });
    } else {
      setAlert('Senhas não conferem', 'error', true);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Cadastrar senha</div>
            <div className="card-body">
              <form>
                <div className="form-group row">
                  <p htmlFor="senha" className="col-md-4 col-form-p text-md-right">Senha</p>
                  <div className="col-md-6">
                    <input
                      id="senha"
                      type="password"
                      className="form-control"
                      onChange={(e) => setSenha(e.target.value)}
                      required
                      value={senha}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <p htmlFor="confirmarSenha" className="col-md-4 col-form-p text-md-right">Confirmar senha</p>
                  <div className="col-md-6">
                    <input
                      id="confirmarSenha"
                      type="password"
                      className="form-control"
                      onChange={(e) => setConfirmarSenha(e.target.value)}
                      required
                      value={confirmarSenha}
                    />
                  </div>
                </div>
                <div className="form-group row mb-0">
                  <div className="col-md-8 offset-md-4">
                    <button type="submit" className="btn btn-primary">
                      Salvar
                    </button>
                  </div>
                </div>
                <DokerAlert
                  msg={alertMsg}
                  type={alertType}
                  visible={alertVisible}
                  setVisible={setAlertVisible}
                />
              </form>
              <p>
                Token:
                {' '}
                {tokenSenha}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CadastrarSenha;
