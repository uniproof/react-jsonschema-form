import React from "react";

import { AddButtonProps } from "@rjsf/core";

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const AddButton: React.FC<AddButtonProps> = props => (
  <Button {...props} color="secondary">
    <AddIcon /> Adicionar
  </Button>
);

export default AddButton;
