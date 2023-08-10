import React from 'react';
import { ViewCustomerData } from '../components/DashBoard/ViewCustomerData';
import SideMenu from '../components/SideMenu';
import LoginNav from '../components/Navbar/LoginNav';

export function ViewCustomerContainer() {
  return (
    <div>
      <LoginNav/>
      <ViewCustomerData/>
      <SideMenu/>
    </div>
  );
}