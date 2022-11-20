import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  container: {
    position: "relative",
  },

  progress: {
    width: "20px !important",
    height: "20px !important",
    position: "absolute",
    right: "30px",
    margin: "-29px 20px 0 0",
  },

  errorIcon: {
    position: "absolute",
    right: "30px",
    margin: "-31px 15px 0 0",
    cursor: "pointer",
  },
});

export const customStyles = {
  container: (provided) => ({
    ...provided,
    fontFamily: ["Roboto"].join(","),
  }),
};
