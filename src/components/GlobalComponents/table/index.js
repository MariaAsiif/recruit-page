import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Box,
  Grid,
  Checkbox,
  Typography,
} from "@material-ui/core";

import TableHead from "./TableHeader";
import useStyles from '../table';
import SearchBar from "material-ui-search-bar";
import ContentLoader from "react-content-loader";
import Moment from "moment";
import { FiDelete, FiPlus } from "react-icons/fi";

const TableComponent = (props) => {
  var _ = require("lodash");
  const {
    selected,
    sortBy,
    sortDirection,
    onSorting,
    rowsPerPage,
    page,
    rows,
    auto,
    actions,
    actionCondition,
    enableCheckbox,
    onSelectionChange,
    onSelectionChecked,
    onSelectionUnChecked,
    validateRow,
    failedRowColor,
    successRowColor,
    validateColumn,
    failedColumnColor,
    successColumnColor,
  } = props;

  const [order, setOrder] = useState(sortDirection ? sortDirection : "asc");
  const [orderBy, setOrderBy] = useState(sortBy);
  const [searchString, setSearchString] = useState("");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    if (onSorting) onSorting(property, isAsc ? "desc" : "asc");
  };

  const classes = useStyles();

  function filterIt(arr) {
    if (props.viewSearch && props.onSearch) return arr;
    if (arr && Array.isArray(arr)) {
      return arr.filter((object) => {
        return JSON.stringify(object)
          .toString()
          .toLowerCase()
          .includes(searchString);
      });
    }
    return [];
  }

  const emptyRows = props.rowsPerPage - props.rows?.length;

  const handleChangeSelection = (row, checked) => {
    if (checked) {
      onSelectionChecked(row);
      onSelectionChange([...selected, row]);
    } else {
      onSelectionUnChecked(row);
      onSelectionChange(selected.filter((x) => x.id != row.id));
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) onSelectionChange(rows);
    else onSelectionChange([]);
  };

  // useEffect(()=>{
  //   if(onSelectionChange)
  //     onSelectionChange(selected)
  // },[selected])

  const isSelected = (row) => {
    const result = selected?.find((x) => x.id === row.id);
    return result ? true : false;
  };

  const rowsSelected = () => {
    if (selected) return selected.length;
    return 0;
  };

  const _sortBy = (arr) => {
    if (typeof onSorting === "undefined") {
      const result = _.sortBy(arr, [orderBy]);
      if (order === "desc") return result.reverse();
      return result;
    }
    if (arr) return arr;
    return [];
  };

  return (
    <div className={classes.root}>
      <Box py={1} px={2}>
        <Grid container style={{ marginBottom: "30px" }}>
          <Grid item xm={12} md={6} xl={4}>
            {props.viewSearch ? (
              <SearchBar
                onRequestSearch={(searchString) => {
                  setSearchString(searchString);
                  if (props.onSearch) props.onSearch(searchString);
                }}
              />
            ) : (
              ""
            )}
          </Grid>
        </Grid>
        <Box textAlign="right">
          {props.viewCreate ? (
            <FiPlus
              onClick={() => (props.viewCreate ? props.onCreate() : null)}
              align="right"
            ></FiPlus>
          ) : (
            ""
          )}
        </Box>

        {/* <CardHeader title={props.title}  /> */}

        <TableContainer className={classes.container}>
          <Table
            stickyHeader
            className={classes.table}
            aria-labelledby="tableTitle"
            size={props.dense ? "small" : "medium"}
            aria-label="enhanced table"
            padding="default"
          >
            <TableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={props.rows?.length}
              colums={props.colums}
              enableCheckbox={enableCheckbox}
              numSelected={rowsSelected()}
              onSelectAllClick={handleSelectAll}
            />
            <TableBody>
              {props.loading === true ? (
                <TableRow>
                  <TableCell
                    colSpan={props.colums.length}
                    rowSpan={props.colums.length}
                  >
                    <ContentLoader viewBox="0 0 380 70">
                      {/* Only SVG shapes */}
                      <rect x="0" y="0" width="100%" height="10" />
                      <rect x="0" y="12" width="70%" height="10" />
                      <rect x="0" y="24" width="50%" height="10" />
                      <rect x="0" y="36" width="75%" height="10" />
                      <rect x="0" y="48" width="90%" height="10" />
                      <rect x="0" y="60" width="98%" height="10" />
                    </ContentLoader>
                  </TableCell>
                </TableRow>
              ) : props.rows?.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={props.colums.length}
                    rowSpan={props.colums.length}
                  >
                    <div style={{
                      display: "flex",
                      alignItems: "cneter",
                      justifyContent: "center"
                    }}>
                      <h1>
                        No Data Found
                      </h1>
                    </div>
                  </TableCell>
                </TableRow>
              ) : auto === true ? (
                _sortBy(filterIt(rows))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    let rowBackgroundColor = "";
                    let rowFontColor = "#000000";
                    if (validateRow && validateRow(row)) {
                      rowBackgroundColor = successRowColor;
                      rowFontColor = "#000000";
                    } else if (validateRow) {
                      rowFontColor = "#FFFFFF";
                      rowBackgroundColor = failedRowColor;
                    }
                    return (
                      <TableRow
                        hover
                        className={props.viewEdit ? classes.tableRow : null}
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                        style={{
                          height: "50px",
                          backgroundColor: isSelected(row) ? "lightgray" : "",
                        }}
                      >
                        {enableCheckbox ? (
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={isSelected(row)}
                              onChange={(event) => {
                                handleChangeSelection(
                                  row,
                                  event.target.checked
                                );
                              }}
                              inputProps={{
                                "aria-label": "Select a row",
                              }}
                            />
                          </TableCell>
                        ) : null}
                        {props.colums.map((column) => {
                          let value = row[column.id];
                          if (value == null && column.level1 != null) {
                            value = row[column.level1][column.id];
                          }

                          return column.id === "actions" ? (
                            <Actions
                              id={column.id}
                              row={row}
                              align={column.align}
                              actions={actions}
                              viewDelete={props.viewDelete}
                              onDelete={props.onDelete}
                              onConditionCheck={(row) => actionCondition(row)}
                            />
                          ) : (
                            <ColumnValueRender
                              column={column}
                              row={row}
                              props={props}
                              rowFontColor={rowFontColor}
                            />
                          );
                        })}
                      </TableRow>
                    );
                  })
              ) : (
                _sortBy(filterIt(props.rows)).map((row) => {
                  let rowBackgroundColor = "";
                  let rowFontColor = "#000000";
                  if (validateRow && validateRow(row)) {
                    rowBackgroundColor = successRowColor;
                    rowFontColor = "#FFFFFF";
                  } else if (validateRow) {
                    rowFontColor = "#FFFFFF";
                    rowBackgroundColor = failedRowColor;
                  }
                  return (
                    <TableRow
                      hover
                      className={props.viewEdit ? classes.tableRow : null}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      style={{
                        height: "50px",
                        background: rowBackgroundColor,
                      }}
                      selected={isSelected(row)}
                    >
                      {enableCheckbox ? (
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isSelected(row)}
                            onChange={(event) => {
                              handleChangeSelection(
                                row,
                                event.target.checked
                              );
                            }}
                            inputProps={{
                              "aria-label": "Select a row",
                            }}
                          />
                        </TableCell>
                      ) : null}
                      {props.colums.map((column) => {
                        return column.id === "actions" ? (
                          <Actions
                            onConditionCheck={actionCondition}
                            id={column.id}
                            row={row}
                            align={column.align}
                            actions={actions}
                            viewDelete={props.viewDelete}
                            onDelete={props.onDelete}
                          />
                        ) : (
                          <ColumnValueRender
                            column={column}
                            row={row}
                            props={props}
                            rowFontColor={rowFontColor}
                          />
                        );
                      })}
                    </TableRow>
                  );
                })
              )}

              {emptyRows > 0 && (
                <TableRow
                  style={{ height: (props.dense ? 33 : 53) * emptyRows }}
                >
                  <TableCell colSpan={props.colums.length} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {/*  */}
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={props.count}
          rowsPerPage={props.rowsPerPage ? props.rowsPerPage : 10}
          page={props.page ? props.page : 0}
          onChangePage={(event, newPage) => {
            props.handleChangePage(event, newPage);
          }}
          onChangeRowsPerPage={(e) => props.handleChangeRowsPerPage(e)}
        />
      </Box>
    </div>
  );
};

export default TableComponent;

const Actions = ({
  id,
  align,
  row,
  viewDelete,
  onDelete,
  actions,
  onConditionCheck,
}) => {
  const checkCondition = () => {
    if (onConditionCheck) return onConditionCheck(row);
    return true;
  };
  const alignmentForCell = align;
  const alignmentForBox = align === "left" ? "flex-start" : "flex-end";
  return (
    <TableCell width="auto" align={alignmentForCell} key={id}>
      <Box display="flex" justifyContent={alignmentForBox}>
        {actions && checkCondition
          ? actions.map((action) => {
            const Component = action.component;
            return <Box mr={1}>{Component(row)}</Box>;
          })
          : null}
        {viewDelete ? (
          <Box mr={1}>
            <FiDelete onClick={() => onDelete(row)} />
          </Box>
        ) : null}
      </Box>
    </TableCell>
  );
};

function format(formatType, value) {
  if (value) {
    switch (formatType) {
      case "date":
        if (Moment(value).isAfter(Moment("01-01-0001")))
          return Moment(value).format("DD-MM-YYYY");
        return "-";
      case "dateTime":
        if (Moment(value).isAfter(Moment("01-01-0001")))
          return Moment(value).format("DD-MM-YYYY HH:mm");
        return "-";
      case "time":
        if (Moment(value).isAfter(Moment("01-01-0001")))
          return Moment(value).format("LT");
        return "-";
      case "number":
        return typeof value === "number"
          ? value.toFixed(2)
          : typeof value !== "undefined"
            ? value
            : 0.0;
      default:
        return value;
    }
  } else return "-";
}

const ColumnValueRender = ({ column, row, props, rowFontColor }) => {
  var Component = column.component;
  let value = row[column.id];
  if (value == null && column.level1 != null) {
    value = row[column.level1][column.id];
  }

  return (
    <TableCell
      style={{
        color: rowFontColor,
      }}
      onClick={() => (props.viewEdit ? props.onEdit(row) : "null")}
      align={column.format && column.format === "number" ? "right" : "left"}
    >
      {column.component ? (
        <Component row={row} />
      ) : (
        <Typography
          align={column.format && column.format === "number" ? "right" : "left"}
        >
          {column.format && typeof value === "object"
            ? value[column.key]
            : format(column.format, value)}
        </Typography>
      )}
    </TableCell>
  );
};
