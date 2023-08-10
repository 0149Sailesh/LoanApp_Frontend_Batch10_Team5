import { HomePageContainer } from '../containers/HomePageContainer';
import { DashBoardContainer } from '../containers/DashBoardContainer';
import LoginPageContainer from '../containers/LoginPageContainer';
import { ViewLoanContainer } from '../containers/ViewLoanContainer';
import { ViewItemsContainer } from '../containers/ViewItemsContainer';
import { ViewCustomerContainer } from '../containers/ViewCustomerContainer';
import RegisterPageContainer from '../containers/RegisterPageContainer';
import LoanApplyContainer from '../containers/LoanApplyContainer';
import AdminAddCustomerDataContainer from '../containers/AdminAddCustomerDataContainer';
export const publicRoutes = [

  {
    url: '/dash-board',
    component: DashBoardContainer,
    name: 'DashBoardContainer'
  },
   { url: '/',
    component: LoginPageContainer,
    name: 'LoginPageContainer'
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
}

,
  { url: '/register',
  component: RegisterPageContainer,
  name: 'RegisterPageContainer'
  },
  {
    url: '/loanApply',
    component:LoanApplyContainer,
    name: 'LoanApplyContainer'
  },
  {
    url: '/admin-customerData',
    component: AdminAddCustomerDataContainer,
    name : 'AdminCustomerDataContainer'
  }
];

export const privateRoutes = [];