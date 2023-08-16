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
export const publicRoutes = [


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
    name: 'DashBoardContainer'
  },

  { url: '/view-loan',
  component: ViewLoanContainer,
  name: 'ViewLoanContainer'
},
{ url: '/view-customers',
component: ViewCustomerContainer ,
name: 'ViewCustomerContainer'
},{
url: '/view-items',
component: ViewItemsContainer ,
name: 'ViewCustomerContainer'
},
  {
    url: '/loanApply',
    component:LoanApplyContainer,
    name: 'LoanApplyContainer'
  },
  {
    url: '/admin-AddCustomerData',
    component: AdminAddCustomerDataContainer,
    name : 'AdminCustomerDataContainer'
  },
  {
    url: '/admin-AddLoanCard',
    component: AdminAddLoanCardContainer,
    name: 'AddAdminLoanCardContainer'
  },
  {
    url: '/admin-AddItemDetails',
    component: AdminAddItemDetailsContainer,
    name: 'AddAdminItemDetailsContainer'
  }
];