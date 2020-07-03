import * as React from 'react';
import AnimatedTabBar, {
  TabsConfig,
  BubbleTabConfig,
} from '@gorhom/animated-tabbar';
import HomeSVG from './icons/HomeSVG';
import LikeSVG from './icons/LikeSVG';
import SearchSVG from './icons/SearchSVG';
import ProfileSVG from './icons/ProfileSVG';

import {MainTabsParams} from './types';

const tabs: TabsConfig<BubbleTabConfig, MainTabsParams> = {
  Home: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: HomeSVG,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Likes: {
    labelStyle: {
      color: '#C9379D',
    },
    icon: {
      component: LikeSVG,
      activeColor: 'rgba(201,55,157,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(247,215,243,1)',
      inactiveColor: 'rgba(247,215,243,0)',
    },
  },
  Search: {
    labelStyle: {
      color: '#E6A919',
    },
    icon: {
      component: SearchSVG,
      activeColor: 'rgba(230,169,25,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(251,239,211,1)',
      inactiveColor: 'rgba(251,239,211,0)',
    },
  },
  Profile: {
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: ProfileSVG,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};

const TabBar = ({props}: any) => (
  <AnimatedTabBar iconSize={20} duration={750} tabs={tabs} {...props} />
);

export default TabBar;
