import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const FormTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
`;

const InputField = styled(TextField)`
  && {
    margin-bottom: 20px;
  }
`;

const SubmitButton = styled(Button)`
  && {
    margin-top: 30px;
    background-color: #2196f3;
    color: white;

    &:hover {
      background-color: #0d8be0;
    }
  }
`;

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `First Name: ${firstName}, Last Name: ${lastName}, Username: ${username}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`
    );
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Signup Form</FormTitle>
      <InputField
        label="First Name"
        variant="outlined"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <InputField
        label="Last Name"
        variant="outlined"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <InputField
        label="Username"
        variant="outlined"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        label="Email"
        variant="outlined"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Password"
        variant="outlined"
        required
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField
        label="Confirm Password"
        variant="outlined"
        required
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <SubmitButton type="submit" variant="contained" onClick={()=>navigate('/login')}>
        Signup
      </SubmitButton>
    </FormContainer>
  );
};

export default SignupForm;
