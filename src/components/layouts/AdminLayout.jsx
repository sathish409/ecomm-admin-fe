import React from 'react'
import { AdminHeader } from '../AdminHeader'
import { AdminSidebar } from '../AdminSidebar'
import bgImage from "../../assets/bg.jpg";
export const AdminLayout = ({children, title}) => {
  return (
    <div className='admin-layout'
    style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "100%",
            }}>
   <div className="sidebar">
      <AdminSidebar/>
   </div>
      
     
        {/* admin header */}
        <div className="rightbar">
<AdminHeader/>
<div className="p-3">
    <h4>{title}</h4>
</div>
    
        {/* main dynamic */}
        <main className="main">{children}</main>
        </div>
    
     
    </div>
  )
}
