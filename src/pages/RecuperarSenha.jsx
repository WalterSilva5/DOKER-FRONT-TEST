import React from 'react';

const RecuperarSenha = (props) => {
  const [senha, setSenha] = React.useState('');
  const [confirmarSenha, setConfirmarSenha] = React.useState('');
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card card-body">
            <h3 className="text-center mb-4">Cadastrar Senha</h3>
            <div className="form-group">
              <label>Senha</label>
              <input type="password" className="form-control" placeholder="Senha" />
            </div>
            <div className="form-group">
              <label>Confirmar Senha</label>
              <input type="password" className="form-control" placeholder="Confirmar Senha" />
            </div>
            <button className="btn btn-primary btn-block">Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecuperarSenha;
