import styled from "styled-components";
import { mobile } from "../responsive";
import { Button, TextField } from "@material-ui/core";
import { useFormik,Formik } from "formik";
import * as Yup from 'yup'
const Container = styled.div`
  width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:10px 0px;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })};
  
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

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 50px;
  text-align:center;
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

const Register = () => {
  const formik=useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      userName:'',
      email:'',
      password:'',
      confirmPassword:''

    },
    validationSchema: Yup.object({
      firstName:Yup.string().required('Name is is Required'),
      lastName:Yup.string().required('Name is required'),
      userName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    password:Yup.string().required('Enter Password'),
    confirm_password: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    email: Yup.string().required().email(),
    
    }),
    onSubmit: values => {
      


    },

  })
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
          name="firtName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ width: 400 }}
            label="First Name"
            variant="outlined"
            required
          />
           {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
          <Input
             name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ width: 400 }}
            label="Last Name"
            variant="outlined"
            required
          />
           {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}
          <Input
             name="userName"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ width: 400 }}
            label="User Name"
            variant="outlined"
            required
          />
           {formik.touched.userName && formik.errors.userName ? (
         <div>{formik.errors.userName}</div>
       ) : null}
          <Input
             name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ width: 400 }}
            label="Email"
            variant="outlined"
            required
          />
           {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
          <Input
             name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ width: 400 }}
            label="Password"
            variant="outlined"
            required
          />
           {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
          <Input
             name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{ width: 400 }}
            label="Confirmed Password"
            variant="outlined"
            required
          />
           {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
         <div>{formik.errors.confirmPassword}</div>
       ) : null}
         
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <SubmitButton type="submit" variant="contained">
        Signup
      </SubmitButton>        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;