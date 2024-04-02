import { ProgressBar } from "react-loader-spinner";

const LoggedUser = () => {
  return (
    <ProgressBar
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default LoggedUser;
