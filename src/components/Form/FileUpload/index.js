import React, { useEffect } from "react";
import { useField } from "@unform/core";
import { useDropzone } from "react-dropzone";
import { Icon, Grid, FormHelperText } from "@material-ui/core";

import Style from "./style";

export default function UploadFile({
  name,
  allowedExtensions = [
    "image/*",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
  multiple = false,
  ...rest
}) {
  const classes = Style();
  const { fieldName, registerField, error } = useField(name);
  const { getRootProps, getInputProps, inputRef, acceptedFiles } = useDropzone({
    accept: String(allowedExtensions),
    multiple,
    ...rest,
  });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      getValue() {
        return inputRef.current.files;
      },
    });
  }, [fieldName, inputRef, registerField]);

  function Thumbnail({ files }) {
    return files.map((file) => (
      <Grid
        item
        md={2}
        xs={6}
        sm={4}
        key={file.name}
        className={classes.thumbnail}
      >
        <div className={classes.thumbnailContent}>
          <div>
            <Icon className={classes.attachIcon} title={file.name}>
              attach_file
            </Icon>

            <small className={classes.smallContent}>
              {file.name.length > 12
                ? `${file.name.substring(0, 12)}...`
                : file.name}
            </small>
          </div>
        </div>
      </Grid>
    ));
  }

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.fileUploadContainer}
        {...getRootProps()}
      >
        <Grid item xs={12} md={11} lg={9}>
          <input {...getInputProps()} />

          <h3 className={classes.heading}>
            Clique ou arraste os arquivos aqui
          </h3>
        </Grid>

        <Grid item xs={12} md={1} lg={3}>
          <Icon className={classes.icon}>backup</Icon>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="stretch"
        className={classes.preview}
      >
        <Grid item xs={12}>
          <Grid container direction="row" alignItems="flex-start" spacing={1}>
            <Thumbnail files={acceptedFiles} />
          </Grid>
        </Grid>
      </Grid>

      {!!error && <FormHelperText error={!!error}>{error}</FormHelperText>}
    </>
  );
}
