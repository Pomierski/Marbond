import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Textarea from "./Textarea";
import sendEmail from "../sendEmail";
import Button from "../Button";

const StyledForm = styled.form`
  margin-top: 1rem;
`;

const FormErrorMessage = styled.p`
  color: ${(props) => (props.accepted ? "#0dad0d" : "#FF0000")};
`;

const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const [formStatus, setFormStatus] = useState({
    accepted: true,
    statusMessage: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    if (
      nameInput.length < 2 ||
      subjectInput.length < 2 ||
      messageInput.length < 2
    ) {
      setFormStatus(() => ({
        accepted: false,
        statusMessage: "Pola nie mogą być puste.",
      }));
      return;
    }
    if (!emailRegex.test(emailInput)) {
      setFormStatus(() => ({
        accepted: false,
        statusMessage: "Podano błędny e-mail.",
      }));
      return;
    }
    setFormStatus(() => ({
      accepted: true,
      statusMessage: "Wiadomość została wysłana",
    }));
    sendEmail(nameInput, emailInput, subjectInput, messageInput);
  };

  const handleTextarea = (e) => {
    setMessageInput(e.target.value);
  };

  const handleNameInput = (e) => {
    setNameInput(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmailInput(e.target.value);
  };

  const handleSubjectInput = (e) => {
    setSubjectInput(e.target.value);
  };

  return (
    <StyledForm>
      <Input
        aria-label="imie"
        type="text"
        value={nameInput}
        onChange={handleNameInput}
        placeholder="Imie"
        maxlength="100"
      />
      <Input
        aria-label="email"
        type="text"
        value={emailInput}
        onChange={handleEmailInput}
        placeholder="Email"
        maxlength="100"
      />
      <Input
        aria-label="temat"
        type="text"
        value={subjectInput}
        onChange={handleSubjectInput}
        placeholder="Temat"
        maxlength="200"
      />
      <Textarea
        aria-label="wiadomość"
        type="text"
        value={messageInput}
        onChange={handleTextarea}
        placeholder="Wiadomość"
        maxlength="10000"
      />
      <Button width="100%" onClick={submitForm}>
        Wyślij
      </Button>
      <FormErrorMessage accepted={formStatus.accepted}>
        {formStatus.statusMessage}
      </FormErrorMessage>
    </StyledForm>
  );
};

export default Form;
