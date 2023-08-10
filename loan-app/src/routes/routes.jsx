import { HomePageContainer } from '../containers/HomePageContainer';
import { DashBoardContainer } from '../containers/DashBoardContainer';
import LoginPageContainer from '../containers/LoginPageContainer';
import { ViewLoanContainer } from '../containers/ViewLoanContainer';
import { ViewItemsContainer } from '../containers/ViewItemsContainer';
import { ViewCustomerContainer } from '../containers/ViewCustomerContainer';
export const publicRoutes = [
  {
    url: '/',
    component: HomePageContainer,
    name: 'HomePageContainer'
  },
  {
    url: '/dash-board',
    component: DashBoardContainer,
    name: 'DashBoardContainer'
  },
   { url: '/login',
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

];

export const privateRoutes = [];