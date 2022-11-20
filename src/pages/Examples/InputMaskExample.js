import React, { useEffect, useRef } from "react";
import { Grid, Button, Box, Typography } from "@material-ui/core";
import { Form } from "@unform/web";

import { InputMask } from "../../components/Form";

export default function InputExample() {
  const formRef = useRef(null);

  useEffect(() => {
    formRef.current.setFieldError("error", "Field is required");
    formRef.current.setFieldValue("valueRef", "07600000");
  }, []);

  async function handleSubmit(formData) {
    console.log("formData: ", formData);
  }

  return (
    <Grid item md={6} xs={12}>
      <Box p={2} style={{ background: "#ddd" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Input Mask Example</Typography>
          </Grid>

          <Grid item xs={12}>
            <Form
              onSubmit={handleSubmit}
              ref={formRef}
              initialData={{
                initialData: "07600000",
                disabled: "07600000",
              }}
            >
              <Grid item xs={12}>
                <Box paddingBottom={2}>
                  <InputMask
                    name="error"
                    label="Error"
                    mask="99999-999"
                    fullWidth
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box paddingBottom={2}>
                  <InputMask
                    name="initialData"
                    label="Initial Data"
                    mask="99999-999"
                    fullWidth
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box paddingBottom={2}>
                  <InputMask
                    name="valueRef"
                    label="Value ref"
                    mask="99999-999"
                    fullWidth
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <InputMask
                  name="disabled"
                  label="Disabled"
                  mask="99999-999"
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
