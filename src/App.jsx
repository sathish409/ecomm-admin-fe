import { Route, Routes } from "react-router-dom";
import "./App.css";

import AdminLoginPage from "./pages/AdminLoginPage.jsx";
import AdminDashboardOverview from "./pages/AdminDashboardOverview.jsx";
import ProductManagementPage from "./pages/ProductManagementPage.jsx";
import OrderManagementPage from "./pages/OrderManagementPage.jsx";
import CategoryManagementPage from "./pages/CategoryManagementPage.jsx";
import ReviewManagementPage from "./pages/ReviewManagementPage.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
  return (
    <>
      <div>
        <Routes>
        <Route path="/" element= {<AdminDashboardOverview/>}> </Route>
        <Route path="/login" element= {<AdminLoginPage/>}> </Route>
         <Route path="/category" element= {<CategoryManagementPage/>}> </Route>
        <Route path="/order" element= {<OrderManagementPage/>}>
           </Route>
         <Route path="/product" element= {<ProductManagementPage/>}> </Route>
        <Route path="/review" element= {<ReviewManagementPage/>}> </Route> 
        <Route path="/signup" element= {<SignUp/>}> </Route> 

         
     
        
        </Routes>
        
        
      </div>
    </>
  );
}

export default App;
