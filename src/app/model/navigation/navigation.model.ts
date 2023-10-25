import React from 'react';

import {Options} from 'react-native-navigation';

export interface BottomTab {
    component: NavigationPage;
    title: string;
    icon?: any;
}

export type NavigationPageType = 'push' | 'modal' | 'overlay';

export interface NavigationPageProps<T = {}> {
    componentId?: string;
    navigation?: T;
    navigationType?: NavigationPageType;
}

export type NavigationPage<P = {}> = React.ComponentType<P> & {
    options: {name: string};
};
export type NavigationPageFC<P = {}> = React.FC<NavigationPageProps<P>> & {
    options: Options & {name: string};
};

export type NavigationPushParams<P> = keyof P extends never
    ? {
          fromComponentId: string;
          component: NavigationPage<P> | NavigationPageFC<P>;
          passProps?: never;
          options?: Options;
      }
    : {
          fromComponentId: string;
          component: NavigationPage<P> | NavigationPageFC<P>;
          passProps: P;
          options?: Options;
      };
