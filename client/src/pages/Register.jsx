import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      {/* Link to only works for page in the project, cannot work on external link*/}
      {/* <a href="https://www.google.com">Google</a> */}
      <Link to="/login">Login</Link>
    </div>
  );
};
export default Register;
