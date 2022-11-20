import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  fileUploadContainer: {
    position: "relative",
    marginTop: "10px",
    padding: "10px",
    boxShadow: "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    transition: "500ms",
    cursor: "pointer",
  },

  heading: {
    fontFamily: "roboto",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "200",
  },

  icon: {
    fontSize: "5em",
    margin: "0 auto",
    display: "block",
  },

  preview: {
    marginTop: "10px",
  },

  thumbnail: {
    marginBottom: "10px",
  },

  thumbnailContent: {
    boxShadow: "0 0 3px #333",
    borderRadius: "7px",
    position: "relative",
    cursor: "default",
  },

  smallContent: {
    fontFamily: "roboto",
    display: "block",
    textAlign: "center",
    padding: "3px 0",
  },

  attachIcon: {
    fontSize: "30px",
    display: "block",
    margin: "0 auto",
    padding: "24px 0",
  },
});
