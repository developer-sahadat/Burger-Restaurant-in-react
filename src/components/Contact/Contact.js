import React from 'react';
import { FloatingLabel, Form, FormCheck } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact p-5 my-3'>
            <div className="container">
                <div className="row row-cols-md-2 align-items-center">
                    <div>
                        <div>
                            <h2>GET CONNECTED</h2>
                            <p>Want to send us suggestions for new recipes? Tell us which of our burger is your favorite? Or just say hi? Get in touch!</p>
                        </div>
                    </div>
                    <div>
                        <div className='contact-from bg-white p-4 rounded-3'>

                              <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                  <Form.Label>Name</Form.Label>
                                  <Form.Control type="text" placeholder="Enter Name" />
                                  <Form.Text className="text-muted">
                                  </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                  <Form.Label>Email</Form.Label>
                                  <Form.Control type="Email" placeholder="Email" />
                                </Form.Group>

                                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                      
                                  as="textarea"
                                  placeholder="Leave a comment here"
                                  style={{ height: '180px' }}
                                />
                              </FloatingLabel>

                                <button variant="primary" type="submit">
                                  Submit
                                </button>
                              </Form>  

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;