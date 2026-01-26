import React from 'react'
import { Link } from 'react-router-dom'

export const AdminSidebar = () => {
  return (
    <div className=''>
   <div className="logo mt-5">
    Logo
    <h4>Hello, sathish</h4>
   </div>
   <div className="admin-links mt-4 p-4">
    <Link className="nav-link" to="/" >AdminDashboardOverview</Link>
    <Link className="nav-link" to="/product" >ProductManagementPage</Link>

    <Link className="nav-link" to="/order" >OrderManagementPage</Link>

    <Link className="nav-link" to="/review" >ReviewManagementPage</Link>
    <Link className="nav-link" to="/category" >CategoryManagementPage</Link>

    <Link className="nav-link" to="/login" >AdminLoginPage</Link>


   </div>
    </div>
  )
}
