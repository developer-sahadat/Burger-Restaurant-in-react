import React from "react";
import { Button, Form } from "react-bootstrap";
import googleIcon from "../../Assets/Image/icons8-google.svg";
import facebookIcon from "../../Assets/Image/icons8-facebook-48.png";
import twitter from "../../Assets/Image/icons8-twitter-48.png";
import "./login.css";
const Login = () => {
  return (
    <div className="m-5">
      <div className="w-50 md-w-100 mx-auto pt-5 ">
        <div className="shadow p-5 rounded">
          <h6 className="py-2 text-danger text-center"></h6>

          <h2 className="m-0 text-primary">Sign in Now</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Already have an account?" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <div>
            <div className="orLoginOption">
              <div></div>
              <h4 className="pt-5">Or</h4>
              <div></div>
            </div>
            <div className="text-center">
              <button className="googleLoginBtn">
                <img src={googleIcon} alt="" />
                <span className="ps-3">Sign in</span>
              </button>
              <br></br>
              <button className="googleLoginBtn">
                <img src={facebookIcon} alt="" />
                <span className="ps-3">Sign in with Facebook</span>
              </button>
              <br></br>
              <button className="googleLoginBtn">
                <img src={twitter} alt="" />
                <span className="ps-3">Sign in with Twitter</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
