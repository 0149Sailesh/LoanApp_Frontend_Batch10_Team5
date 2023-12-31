import React from 'react';
import { ViewCustomerData } from '../components/DashBoard/ViewCustomerData';
import SideMenuAdmin from '../components/SideMenuAdmin';
import { Footer } from '../components/Footer';
import LoginNav from '../components/Navbar/LoginNav';

export function ViewCustomerContainer() {
  return (
    <div>
      <LoginNav/>
      <SideMenuAdmin/>
      <ViewCustomerData/>
      
      <Footer/>
    </div>
  );
}