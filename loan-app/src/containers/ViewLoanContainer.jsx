import React from 'react';
import SideMenuAdmin from '../components/SideMenuAdmin';
import LoginNav from '../components/Navbar/LoginNav';
import { Footer } from '../components/Footer';
import { ViewLoanTable } from '../components/DashBoard/ViewLoanData';
export function ViewLoanContainer() {
  return (
    <div>
      <LoginNav/>
      <ViewLoanTable/>
      <SideMenuAdmin/>
      <Footer/>
    </div>
  );
}