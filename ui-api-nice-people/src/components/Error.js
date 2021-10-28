import "../css/alert.css";
import Alert from "./Alert";

const Error = () => {

  return (
    <Alert
      img={"assets/error-404-not-found.jpg"}
      msg="Oh oh, an error has occurred."
      optionsList={
        <ul>
          <li>Check your internet connection</li>
          <li>Write the name of the city correctly</li>
        </ul>
      }
    />
  );
};

export default Error;
