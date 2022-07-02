import TabLayout from '../layout/MainLayout';
import Search from '../views/Search';
import Notification from '../views/Notification';
import Test from '../views/Test';

export interface IRouteItem {
  name: string;
  label: string;
  Component: any;
}

export const routes: IRouteItem[] = [
  {
    name: 'TabLayout',
    label: 'Tab bar',
    Component: TabLayout,
  },
  {
    name: 'Search',
    label: '搜索',
    Component: Search,
  },
  {
    name: 'Notification',
    label: '通知',
    Component: Notification,
  },
  {
    name: 'Test',
    label: '测试',
    Component: Test,
  },
];
