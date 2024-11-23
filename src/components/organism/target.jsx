import styled from "styled-components";
//Components
import Form from "../molecules/form";

const Container = styled.div`
  width: 35%;
  height: 80%;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0px 10px 30px 10px rgba(0,0,0,0.1);
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);`;

function Target() {
  return (
    <>
      <Container>
        <h2>Welcome Back</h2>
        <p>Enter your email and your password to acces your finances</p>
        <Form/>
      </Container>
    </>
  )
}

export default Target;