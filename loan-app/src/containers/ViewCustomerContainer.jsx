import React from 'react';
import { ViewCustomerData } from '../components/DashBoard/ViewCustomerData';
import SideMenu from '../components/SideMenuUser';
import { Footer } from '../components/Footer';
import LoginNav from '../components/Navbar/LoginNav';

export function ViewCustomerContainer() {
  return (
    <div>
      <LoginNav/>
      <ViewCustomerData/>
      <SideMenu/>
      <Footer/>
    </div>
  );
}