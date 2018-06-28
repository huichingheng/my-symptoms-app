import React from "react";
import { Form, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const EmailForm = () => (
  <div className="email-form">
    <Form inline>
      <h5>Please send the report to my</h5>
      <FormGroup controlId="formInlineEmail">
        <ControlLabel>Email</ControlLabel>{" "}
        <FormControl type="email" placeholder="someone@example.com" />
      </FormGroup>{" "}
      <button className="button" type="submit">
        Send
      </button>
    </Form>
  </div>
);

export default EmailForm;
