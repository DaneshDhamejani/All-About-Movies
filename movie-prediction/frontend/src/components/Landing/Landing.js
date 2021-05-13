import React, { Component } from "react";
// import "../Predictions/predictions.css";
import axios from "axios";
import backendServer from "../../webConfig";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Cards from "../Cards/Cards";
import Cards2 from "../Cards/Cards2";
import Cards3 from "../Cards/Cards3";
import { Row, Col, Alert, Container } from "react-bootstrap";
import "../Landing/landing.css"

export default function App() {
  const [model, setModel] = React.useState("");

  useEffect(() => {
    loadModel();
  });

  const loadModel = () => {
    axios.get(`${backendServer}/loadmodel`).then((response) => {});
  };

  return (
    <div>
      <Navbar></Navbar>


<div class="Row">
    <div class="Column"><Cards/></div>
    <div class="Column"><Cards2/></div>
    <div class="Column"><Cards3/></div>
</div>

      
 

    </div>
  );
}
