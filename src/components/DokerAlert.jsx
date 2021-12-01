const DokerAlert = (props) => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [type, setType] = React.useState('info');

  React.useEffect(() => {
    setType(props.type);
    setMessage(props.msg);
    setShowAlert(props.visible);
  }, [props.visible, props.type, props.msg]);
  return (
    <div className={`alert alert-${type} d-${showAlert ? 'block' : 'none'} role="alert"`}>
      <strong>{message}</strong>
    </div>
  );
};

export default DokerAlert;
