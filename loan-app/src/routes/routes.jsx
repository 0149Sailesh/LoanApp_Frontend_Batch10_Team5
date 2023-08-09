import { HomePageContainer } from '../containers/HomePageContainer';
import { DashBoardContainer } from '../containers/DashBoardContainer';
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
  }
];

export const privateRoutes = [];