import React from "react";
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  makeStyles,
  Checkbox,
  Typography,
  FormControlLabel
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    backgroundColor: theme.palette.primary.orange,
    color: theme.palette.common.white,



  },
}));

const TableHeader = (props) => {
  const styleClasses = useStyles()
  const { numSelected, rowCount, enableCheckbox, classes, order, orderBy, onRequestSort, onSelectAllClick } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className={classes.tableHeader}>
      <TableRow>
        {enableCheckbox ?
          <TableCell padding="checkbox">
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={rowCount > 0 && numSelected >= rowCount}
                  onChange={(event) => {
                    onSelectAllClick(event.target.checked)
                  }}
                  inputProps={{
                    'aria-label': 'All',
                  }}
                />
              }
              label="All"
            />

          </TableCell>
          : null}
        {props.colums?.map((headCell) => (

          <TableCell
            width={headCell.width}
            key={headCell.id}
            align={headCell.align}
            padding="default"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {/* {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null} */}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
