import React from 'react';
import SideMenu from '../components/SideMenuUser';
import LoginNav from '../components/Navbar/LoginNav';
import { Footer } from '../components/Footer';
import { ViewItemsData } from '../components/DashBoard/ViewItemsData';
export function ViewItemsContainer() {
  return (
    <div>
      <LoginNav/>
      <ViewItemsData/>
      <SideMenu/>
      <Footer/>
    </div>
  );
}