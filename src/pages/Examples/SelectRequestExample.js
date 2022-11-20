import React, { useEffect, useRef } from "react";
import { Grid, Button, Box, Typography } from "@material-ui/core";
import { Form } from "@unform/web";

import { SelectRequest } from "../../components/Form";

export default function InputExample() {
  const formRef = useRef(null);
  const configOptions = { label: "sigla", value: "id" };

  useEffect(() => {
    formRef.current.setFieldError("error", "Field is required");

    setTimeout(() => {
      formRef.current.setFieldValue("valueRef", 12);
    }, 3000);
  }, []);

  async function handleSubmit(formData) {
    console.log("formData: ", formData);
  }

  return (
    <Grid item md={6} xs={12}>
      <Box p={2} style={{ background: "#ddd" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Select Request Example</Typography>
          </Grid>

          <Grid item xs={12}>
            <Form onSubmit={handleSubmit} ref={formRef}>
              <Grid item xs={12}>
                <Box paddingBottom={2}>
                  <SelectRequest
                    name="error"
                    placeholder="Error"
                    url="https://servicodados.ibge.gov.br/api/v1/localidades/estados"
                    configOptions={configOptions}
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box paddingBottom={2}>
                  <SelectRequest
                    name="valueRef"
                    placeholder="Value ref"
                    url="https://servicodados.ibge.gov.br/api/v1/localidades/estados"
                    configOptions={configOptions}
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box paddingBottom={2}>
                  <SelectRequest
                    name="disabled"
                    placeholder="Disabled"
                    url="https://servicodados.ibge.gov.br/api/v1/localidades/estados"
                    configOptions={configOptions}
                    isDisabled
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <SelectRequest
                  name="multi"
                  placeholder="Multi"
                  url="https://servicodados.ibge.gov.br/api/v1/localidades/estados"
                  configOptions={configOptions}
                  isMulti
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
