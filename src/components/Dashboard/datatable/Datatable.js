import "./datatable.scss";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductAction } from "../../../actions/productActions";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
// ............................
// ................................................

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

  useEffect(() => {
    dispatch(listProductAction());
  }, []);
  console.log("datatable");
  // ...................

  return (
    <div className="datatable">
      <div style={{ height: "100%", width: "100%" }}>
        <div className="row table-my">
          {columns &&
            columns.map((item, index) => {
              return (
                <Col>
                  <Row className="title">{item.label}</Row>
                  <Row className="value">
                    {product &&
                      product.map((item, index) => {
                        <span>{item.namecar}</span>;
                      })}
                  </Row>
                </Col>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Datatable;
