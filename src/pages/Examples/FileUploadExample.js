import React, { useRef } from "react";
import { Grid, Button, Box, Typography } from "@material-ui/core";
import { Form } from "@unform/web";

import { FileUpload } from "../../components/Form";

export default function SelectExample() {
  const formRef = useRef(null);

  async function handleSubmit(formData) {
    try {
      formRef.current.setFieldError("anexos", "File is required");

      // Validation passed
      console.log("formData: ", formData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Grid item md={6} xs={12}>
      <Box p={2} style={{ background: "#ddd" }}>
        <Typography>File Upload Example</Typography>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <FileUpload name="anexos" />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            style={{ marginLeft: "10px" }}
          >
            Enviar
          </Button>
        </Form>
      </Box>
    </Grid>
  );
}
