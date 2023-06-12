import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
     
  },
  container: {
    maxHeight: 1000,
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
    
  },
  table: {
    
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  title: {
    flex: "1 1 100%",
    
  },
  tableHeader: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  
  tableRow: {
    cursor:"pointer",
    height:"30px"
  }
}));
