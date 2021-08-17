import React from "react";
import Link from 'next/link'

export default (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div className="row">
      <h3 className="text-center my-4">LOGIN</h3>
      <div className="container">
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            className="text-center"
            type="text"
            id="username"
            value={username}
            autoComplete="off"
            placeholder="Usuario"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            className="text-center"
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center my-3">
          <Link href="/home">
          <button className="btn btn-large btn-d"
          >ENTRAR</button></Link>
        </div>
        <div className="row text-center d-flex justify-content-center my-3 mt-5">
            <div className="col-md-6">
              Ainda não é cadastrado?
            </div>
            <div className="col-md-6 my-3 my-md-0">
              <button className=" mx-3 btn-small btn-d bg-secondary-l"
              onClick={() => props.setFormAtual(1)}
              >CADASTRE-SE</button>
            </div>
        </div>
      </div>
    </div>
  );
};
