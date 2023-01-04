import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductAction } from "../../../actions/productActions";
import axios from "axios";
import GridTable from "@nadavshaar/react-grid-table";
import getColumns from "./getColumns";
// ......................................................
const gridStyle = { minHeight: 400 };
// ............................
const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 160,
    renderCell: () => {
      return (
        <div className="cellAction">
          <div className="viewButton">View</div>
          <div className="deleteButton">Delete</div>
        </div>
      );
    },
  },
];
//.......................................................

const Datatable = () => {
  const columns = [
    {
      id: 0,
      field: "_id",
      label: "ID",
      // cellRenderer: Username,
    },
    {
      id: 1,
      field: "namecar",
      label: "خودرو",
      // cellRenderer: Username,
    },
    {
      id: 2,
      field: "factory",
      label: "کارخانه",
    },
    {
      id: 3,
      field: "distance",
      label: "کارکرد",
    },
    {
      id: 4,
      field: "pic",
      label: "عکس",
    },
    {
      id: 5,
      field: "price",
      label: "قیمت",
    },
    {
      id: 6,
      field: "status",
      label: "وضعیت",
    },
    {
      id: 7,
      field: "skills",
      label: "ویژگی",
    },
  ];
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { product, loading } = productList;
  // const [inner, setInner] = useState("");
  useEffect(() => {
    dispatch(listProductAction());
  }, [dispatch]);
  const theRef = useRef();
  const inner = theRef.current.innerText;
  // ...................

  return (
    <div className="datatable">
      <div style={{ height: "100%", width: "100%" }}>
        <table class="table table-hover table-dark">
          <thead>
            <tr>
              {columns.map((item, index) => (
                <th scope="col">{item.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              {product &&
                product.map((item, index) => {
                  return (
                    <>
                      <th ref={theRef}>1</th>
                      {/* <td>{inner === "1" ? item[1].namecar : null}</td> */}
                    </>
                  );
                })}
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Datatable;
