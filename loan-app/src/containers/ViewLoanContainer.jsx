import React from 'react';
import SideMenu from '../components/SideMenuUser';
import LoginNav from '../components/Navbar/LoginNav';
import { ViewLoanTable } from '../components/DashBoard/ViewLoanData';
export function ViewLoanContainer() {
  return (
    <div>
      <LoginNav/>
      <ViewLoanTable/>
      <SideMenu/>
    </div>
  );
}