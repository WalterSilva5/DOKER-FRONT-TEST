const checkSenhaIgual = (senha, confirmSenha) => {
  if (senha !== confirmSenha) {
    return false;
  }
  return true;
};

export {
  checkSenhaIgual,
};
