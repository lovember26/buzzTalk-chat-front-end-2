import React from "react";
import AnimatedSelect from "../Select/Select";
import { Form, Input, Button } from "./CreateChatForm.styled";

const CreateChatForm = () => (
  <>
    <Form>
      <AnimatedSelect />
      <Input type="text"></Input>
      <Button>Submit</Button>
    </Form>
  </>
);

export default CreateChatForm;
