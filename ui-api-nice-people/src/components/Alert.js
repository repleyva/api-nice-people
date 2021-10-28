const Alert = ({img, msg, optionsList}) => {
	return (
    <div className="alert-container">
      <div className="alert__wrapper">
        <img src={img} alt="img" />
        <p>
          {msg}
          {optionsList}
        </p>
      </div>
    </div>
  );
}

export default Alert
