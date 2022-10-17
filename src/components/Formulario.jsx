import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

const Formulario = () => {
  const [validated, setValidated] = useState(false);

  const mostrarAlertaE = () => {
    alert("Datos enviados!");
  };

  const mostrarAlertaC = () => {
    alert("Completar todos los campos correctamente!");
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      mostrarAlertaC();
      event.preventDefault();
      event.stopPropagation();
    } else {
      mostrarAlertaE();
      setValidated(true);
    }
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="my-4"
          >
            <Form.Label>Nombre:</Form.Label>
            <Form.Control required type="text" placeholder="Nombre" />
            <Form.Control.Feedback>Bien!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Escriba un nombre valido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="my-4"
          >
            <Form.Label>Apellido:</Form.Label>
            <Form.Control required type="text" placeholder="Aplellido" />
            <Form.Control.Feedback>Bien!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Escriba un apellido valido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="my-4"
          >
            <Form.Label>DNI:</Form.Label>
            <Form.Control required type="number" placeholder="DNI" />
            <Form.Control.Feedback>BIen!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Escriba un DNI valido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="my-4"
          >
            <Form.Label>Email:</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="franco@gmail.com"
            />
            <Form.Control.Feedback>Bien!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Escriba un email valido.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
};

export default Formulario;
