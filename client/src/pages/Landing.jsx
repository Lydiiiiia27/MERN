import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Logo } from "../components";
import { Link } from "react-router-dom";

//use styled-components to style the button
// https://styled-components.com/
// quickly css-in-js
/*
const StyledBtn = styled.button`
  font-size: 1.5rem;
  background-color: #f1356d;
  color: white;
`;
*/
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job <span> tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            laboriosam, doloremque, quod, quas quibusdam quae voluptates
            dignissimos quia nesciunt fugit repellendus.
          </p>

          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn login-link">
            Login/ Demo user
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
      {/*
      <StyledBtn>Click Me</StyledBtn>
      */}
    </Wrapper>
  );
};
export default Landing;

//use wrapper to construct the style
/*
const Wrapper = styled.div`
  background-color: #f1356d;
  h1 {
    color: white;
  }

  .content {
    background-color: pink;
    color: #333;
  }
`;
*/
