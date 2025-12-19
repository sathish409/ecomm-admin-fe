import { Route, Routes } from "react-router-dom";
import "./App.css";

import AdminLoginPage from "./pages/AdminLoginPage.jsx";
import AdminDashboardOverview from "./pages/AdminDashboardOverview.jsx";

function App() {
  return (
    <>
      <div>
        <Routes>
        <Route path="/" element= {<AdminDashboardOverview/>}> </Route>
        <Route path="/login" element= {<AdminLoginPage/>}> </Route>
        
        </Routes>
        
        
      </div>
    </>
  );
}

export default App;
