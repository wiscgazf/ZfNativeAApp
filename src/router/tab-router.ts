import type { ComponentType } from 'react';
import Home from '../views/Home';
import Me from '../views/Me';
import Community from '../views/Community';
import Order from '../views/Order';

export interface ITabItem {
  name: string;
  label: string;
  Component: ComponentType<any>;
  icon: any;
  selectIcon: any;
}

export const tabRoutes: ITabItem[] = [
  {
    name: 'Home',
    label: '首页',
    Component: Home,
    icon: require('../assets/images/tabbar/home-icon.png'),
    selectIcon: require('../assets/images/tabbar/home-icon-active.png'),
  },
  {
    name: 'Order',
    label: '订单',
    Component: Order,
    icon: require('../assets/images/tabbar/order-icon.png'),
    selectIcon: require('../assets/images/tabbar/order-icon-active.png'),
  },
  {
    name: 'Community',
    label: '圈子',
    Component: Community,
    icon: require('../assets/images/tabbar/community.png'),
    selectIcon: require('../assets/images/tabbar/community-active.png'),
  },
  {
    name: 'Me',
    label: '我的',
    Component: Me,
    icon: require('../assets/images/tabbar/me.png'),
    selectIcon: require('../assets/images/tabbar/me-active.png'),
  },
];

export const getLabel = (name: string) => {
  return tabRoutes.find((item: ITabItem) => item.name === name);
};
