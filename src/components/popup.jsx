import { useState } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${(props) => (props.isVisible ? fadeIn : fadeOut)} 0.3s forwards;
`;

const PopupContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 400px;
  text-align: center;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #006769;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  margin-right: ${(props) => (props.cancel ? "1rem" : "0")};

  &:hover {
    background-color: ${(props) => (props.cancel ? "#cc0000" : "#004c4c")};
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Popup = ({ isVisible, onClose, onSave }) => {
  const [milkQuantity, setMilkQuantity] = useState("");

  const handleSave = () => {
    if (milkQuantity) {
      onSave(milkQuantity);
      onClose();
    } else {
      alert("Please enter the milk quantity");
    }
  };

  return (
    <Overlay isVisible={isVisible}>
      <PopupContainer>
        <h2>Enter Milk Quantity</h2>
        <Input
          type="number"
          value={milkQuantity}
          onChange={(e) => setMilkQuantity(e.target.value)}
          placeholder="Liters"
        />
        <div>
          <Button cancel onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </PopupContainer>
    </Overlay>
  );
};

Popup.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Popup;
