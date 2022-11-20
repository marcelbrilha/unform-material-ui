import React, { useEffect, useRef } from "react";
import { Grid, Button, Box, Typography } from "@material-ui/core";
import { Form } from "@unform/web";

import { ReactSelect } from "../../components/Form";

export default function InputExample() {
  const formRef = useRef(null);
  const options = [
    { label: "Canadá", value: "canada" },
    { label: "Brazil", value: "brazil" },
  ];

  useEffect(() => {
    formRef.current.setFieldError("error", "Field is required");
    formRef.current.setFieldValue("valueRef", "brazil");
  }, []);

  async function handleSubmit(formData) {
    console.log("formData: ", formData);
  }

  return (
    <Grid item md={6} xs={12}>
      <Box p={2} style={{ background: "#ddd" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>React Select Example</Typography>
          </Grid>

          <Grid item xs={12}>
            <Form
              onSubmit={handleSubmit}
              ref={formRef}
              initialData={{
                initialData: "brazil",
                disabled: "brazil",
              }}
            >
              <Grid item xs={12}>
                <Box paddingBottom={2}>
                  <ReactSelect
                    style={{ width: "150px" }}
                    name="error"
                    label="Error"
                    options={options}
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box paddingBottom={2}>
                  <ReactSelect
                    style={{ width: "150px" }}
                    name="initialData"
                    label="Initial Data"
                    options={options}
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box paddingBottom={2}>
                  <ReactSelect
                    style={{ width: "150px" }}
                    name="valueRef"
                    label="Value ref"
                    options={options}
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <ReactSelect
                  style={{ width: "150px" }}
                  name="disabled"
                  label="Disabled"
                  options={options}
                  isDisabled
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
