import React from "react";
import CreateAddressComponent from "./Address/addAddress";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ViewAddressComponent from "./Address/getAddressbyId";
import AddressComponent from "./Address/getAllAddress";

function App() {
  return (
    <div >
      <Router>
          <Routes>
            <Route path="/view-address/:id" element={<ViewAddressComponent />}/>
            <Route path="/viewAllAddress" element={<AddressComponent/>}/>
            <Route path="/addaddress" element={<CreateAddressComponent/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;