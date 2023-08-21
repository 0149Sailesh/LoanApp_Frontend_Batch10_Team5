import { HomePageContainer } from '../containers/HomePageContainer';
import { DashBoardContainer } from '../containers/DashBoardContainer';
import LoginPageContainer from '../containers/LoginPageContainer';
import { ViewLoanContainer } from '../containers/ViewLoanContainer';
import { ViewItemsContainer } from '../containers/ViewItemsContainer';
import { ViewCustomerContainer } from '../containers/ViewCustomerContainer';
import RegisterPageContainer from '../containers/RegisterPageContainer';
import LoanApplyContainer from '../containers/LoanApplyContainer';
import AdminAddCustomerDataContainer from '../containers/AdminAddCustomerDataContainer';
import AdminAddLoanCardContainer from '../containers/AdminAddLoanCardContainer';
import AdminAddItemDetailsContainer from '../containers/AdminAddItemDetailsContainer';
import { DashBoardUserContainer } from '../containers/DashBoardUserContainer';
import ApplyLoanUserContainer from '../containers/ApplyLoanUserContainer';
import { ViewAppliedLoansContainer } from '../containers/ViewAppliedLoans';
import { ViewPurchasedItemsContainer } from '../containers/ViewPurchasedItems';
export const publicRoutes = [
  {
    url: '/user/view-items',
    component: ViewPurchasedItemsContainer, 
    name: 'ViewPurchasedItems'
  },
  {
    url: '/user/view-loan',
    component: ViewAppliedLoansContainer,
    name: 'ViewAppliedLoansContainer'
  },
  { url: '/user/apply-loan',
  component: ApplyLoanUserContainer,
  name: 'ApplyLoanUserContainer'
},

  { url: '/user/dash-board',
  component: DashBoardUserContainer,
  name: 'DashBoardUserContainer'
},
   { url: '/',
    component: LoginPageContainer,
    name: 'LoginPageContainer'
  },


  { url: '/register',
  component: RegisterPageContainer,
  name: 'RegisterPageContainer'
  },
];

export const privateRoutes = [
  {
    url: '/dash-board',
    component: DashBoardContainer,
    name: 'DashBoardContainer',
    role: 'admin'
  },

  { url: '/view-loan',
  component: ViewLoanContainer,
  name: 'ViewLoanContainer',
  role: 'admin'
},
{ url: '/view-customers',
component: ViewCustomerContainer ,
name: 'ViewCustomerContainer',
role: 'admin'
},{
url: '/view-items',
component: ViewItemsContainer ,
name: 'ViewCustomerContainer',
role: 'admin'
},
  {
    url: '/loanApply',
    component:LoanApplyContainer,
    name: 'LoanApplyContainer',
    role: 'admin'
  },
  {
    url: '/admin-AddCustomerData',
    component: AdminAddCustomerDataContainer,
    name : 'AdminCustomerDataContainer',
    role: 'admin'
  },
  {
    url: '/admin-AddLoanCard',
    component: AdminAddLoanCardContainer,
    name: 'AddAdminLoanCardContainer',
    role: 'admin'
  },
  {
    url: '/admin-AddItemDetails',
    component: AdminAddItemDetailsContainer,
    name: 'AddAdminItemDetailsContainer',
    role: 'admin'
  }
];