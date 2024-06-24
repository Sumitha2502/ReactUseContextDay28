import React from "react";
import "./App.css";
import DataContext from "./DataContext";
import Card from "./Card";
import "/node_modules/bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="container">
      <div className="row">
        <DataContext>
          <Card />
        </DataContext>
      </div>
    </div>
  );
}

export default App;
