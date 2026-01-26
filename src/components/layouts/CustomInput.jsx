import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
export const CustomInput = ({label, ...rest}) => {
  return (
    <div>
            <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>{label}</Form.Label>
    
        <Form.Control {...rest}  />
      </Form.Group>
    </Form>
    </div>
  )
}
