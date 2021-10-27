import "../css/error.css";

const Error = () => {
  return (
    <div className="error-container">
      <div className="error__wrapper">
        <img src="assets/error-404-not-found.jpg" alt="error" />
        <p>
          Oh oh, an error has occurred.
          <ul>
            <li>Check your internet connection</li>
            <li>Write the name of the city correctly</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Error;
