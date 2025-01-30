import React from "react";
// import styled from "styled-components";

// const StyledButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;