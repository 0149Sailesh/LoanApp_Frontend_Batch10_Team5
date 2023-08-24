import React from 'react';
import { ViewPurchasedItems } from '../components/DashBoard/ViewPurchasedItems';
import SideMenuUser from '../components/SideMenuUser';
import { Footer } from '../components/Footer';
import LoginNav from '../components/Navbar/LoginNav';

export function ViewPurchasedItemsContainer() {
  return (
    <div>
      <LoginNav/>
        <SideMenuUser/>
      <ViewPurchasedItems/>
    
      <Footer/>
    </div>
  );
}