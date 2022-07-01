import type { ComponentType } from 'react';
import Home from '../views/Home';
import Me from '../views/Me';
import Community from '../views/Community';
import Order from '../views/Order';

export interface ITabItem {
  name: string;
  label: string;
  Component: ComponentType<Function>;
}

export const tabRoutes: ITabItem[] = [
  {
    name: 'Home',
    label: '首页',
    Component: Home,
  },
  {
    name: 'Order',
    label: '订单',
    Component: Order,
  },
  {
    name: 'Community',
    label: '圈子',
    Component: Community,
  },
  {
    name: 'Me',
    label: '我的',
    Component: Me,
  },
];

export const getLabel = (name: string) => {
  return tabRoutes.find((item: ITabItem) => item.name === name)?.label;
};
