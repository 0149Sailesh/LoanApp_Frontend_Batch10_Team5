import React from 'react';
import SideMenuAdmin from '../components/SideMenuAdmin';
import LoginNav from '../components/Navbar/LoginNav';
import { Footer } from '../components/Footer';
import { ViewItemsData } from '../components/DashBoard/ViewItemsData';
export function ViewItemsContainer() {
  return (
    <div>
      <LoginNav/>
      <SideMenuAdmin/>
      <ViewItemsData/>
     
      <Footer/>
    </div>
  );
}