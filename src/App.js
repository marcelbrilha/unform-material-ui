import React from "react";
import { Grid } from "@material-ui/core";

import TextFieldExample from "./pages/Examples/TextFieldExample";
import InputMaskExample from "./pages/Examples/InputMaskExample";
import InputMoneyExample from "./pages/Examples/InputMoneyExample";
import SelectExample from "./pages/Examples/SelectExample";
import ReactSelectExample from "./pages/Examples/ReactSelectExample";
import SelectRequestExample from "./pages/Examples/SelectRequestExample";
import FileUploadExample from "./pages/Examples/FileUploadExample";

export default function App() {
  return (
    <Grid container spacing={2}>
      <TextFieldExample />
      <InputMaskExample />
      <InputMoneyExample />
      <SelectExample />
      <ReactSelectExample />
      <SelectRequestExample />
      <FileUploadExample />
    </Grid>
  );
}
