import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Button from "./components/Button";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

const element = "Digital Innovation"
const element2 = <h1>Olá turma</h1>

function sum(a, b) {
  alert(a + b);
}

function App () {
  return (
    <div>
      <h1>{element}</h1>
      <h2>{element2}</h2>
      <Button onClick={() => sum(10,20)} name="Bruno DallAgnol"/>
      <ComponentA>
        <ComponentB>
          <Button onClick={() => sum(40,30)} name="Outro Botão"/>
        </ComponentB>
      </ComponentA>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);