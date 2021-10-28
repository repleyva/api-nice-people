import Alert from "./Alert";

const NotNews = () => {
	return (
    <Alert
      img={"assets/newspaper.png"}
      msg="At the moment there is no news for the city you have searched for. Please try later."
    />
  );
}

export default NotNews
