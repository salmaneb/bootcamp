import { Button, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive";
import {Formik, useFormik} from 'formik';
import * as Yup from 'yup';
const Container = styled.div`
  width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align:center;
`;

const Form = styled.form`  
width:100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Input = styled(TextField)`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  && {
    margin-bottom: 20px;
  }
`;

const SubmitButton = styled(Button)`
  && {
    background-color: #2196f3;
    color: white;

    &:hover {
      background-color: #0d8be0;
    }
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  
  const navigate=useNavigate();
  const formik=useFormik({
    initialValues:{
      userName:'',
      password:''

    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    password:Yup.string().required('Enter Password')
    
    }),
    onSubmit: values => {
      


    },

  })
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
        <Input
          style={{ width: 400 }}
            label="User Name"
            variant="outlined"
            required
            name='userName'
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {formik.touched.userName && formik.errors.userName ? (
         <div>{formik.errors.userName}</div>
       ) : null}
           <Input
          style={{ width: 400 }}
            label="Password"
            variant="outlined"
            required
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
          <SubmitButton type="submit" variant="contained" onClick={()=>navigate('/cart')}>
        Signup
      </SubmitButton> 
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;