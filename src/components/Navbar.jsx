import styled from "styled-components";
import cowIcon from "../assets/cow-icon.svg"; // Replace with the actual path to the cow icon
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #006769;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: 1000;
  box-sizing: border-box; /* Ensure padding is included in the element's total width */
`;

const Icon = styled.img`
  height: 40px;
  width: auto; /* Ensure the icon maintains its aspect ratio */
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/">
        <Icon src={cowIcon} alt="Cow Icon" />
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
