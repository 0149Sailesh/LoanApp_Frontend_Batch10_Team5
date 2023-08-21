import React from 'react';
import { ViewAppliedLoans } from '../components/DashBoard/ViewAppliedLoans';
import SideMenuUser from '../components/SideMenuUser';
import { Footer } from '../components/Footer';
import LoginNav from '../components/Navbar/LoginNav';

export function ViewAppliedLoansContainer() {
  return (
    <div>
      <LoginNav/>
      <ViewAppliedLoans/>
      <SideMenuUser/>
      <Footer/>
    </div>
  );
}