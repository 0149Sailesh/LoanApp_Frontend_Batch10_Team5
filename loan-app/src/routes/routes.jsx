import { HomePageContainer } from '../containers/HomePageContainer';
import { DashBoardContainer } from '../containers/DashBoardContainer';
import LoginPageContainer from '../containers/LoginPageContainer';
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
  }
];

export const privateRoutes = [];