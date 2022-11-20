import React, { useEffect, useRef } from "react";
import { Grid, Button, Box, Typography } from "@material-ui/core";
import { Form } from "@unform/web";

import { TextField } from "../../components/Form";

export default function InputExample() {
  const formRef = useRef(null);

  useEffect(() => {
    formRef.current.setFieldError("error", "Field is required");
    formRef.current.setFieldValue("valueRef", "My name is Marcel");
  }, []);

  async function handleSubmit(formData) {
    console.log("formData: ", formData);
  }

  return (
    <Grid item md={6} xs={12}>
      <Box p={2} style={{ background: "#ddd" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>TextField Example</Typography>
          </Grid>

          <Grid item xs={12}>
            <Form
              onSubmit={handleSubmit}
              ref={formRef}
              initialData={{
                initialData: "Initial Data",
                disabled: "Disabled",
              }}
            >
              <Grid item xs={12}>
                <Box paddingBottom={2}>
                  <TextField name="error" label="Error" fullWidth />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box paddingBottom={2}>
                  <TextField
                    name="initialData"
                    label="Initial Data"
                    fullWidth
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box paddingBottom={2}>
                  <TextField name="valueRef" label="Value ref" fullWidth />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="disabled"
                  label="Disabled"
                  disabled
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ marginTop: "10px" }}
                >
                  Enviar
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  style={{ marginTop: "10px", marginLeft: "10px" }}
                  onClick={() => formRef.current.reset()}
                >
                  Limpar
                </Button>
              </Grid>
            </Form>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
