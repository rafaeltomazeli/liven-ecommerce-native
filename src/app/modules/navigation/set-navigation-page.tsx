import * as React from 'react';

import {ThemeProvider} from 'styled-components';

import {commonTheme} from '../../../atomic/obj.theme';
import {Options} from 'react-native-navigation';
import {NavigationPage} from '../../model/navigation/navigation.model';

export type NavigationPageType = 'push' | 'modal' | 'overlay';

export interface NavigationPageProps<T = {}> {
    componentId?: string;
    navigation?: T;
    navigationType?: NavigationPageType;
}

export type NavigationPageFC<P = {}> = React.FC<NavigationPageProps<P>> & {
    options: Options & {name: string};
};

interface BuildNavigationPageParams<P> {
    Component: NavigationPage<P>;
}

export const setNavigationPage =
    <P extends {} = any>({Component}: BuildNavigationPageParams<P>) =>
    () => {
        const RootNavigation = (props: P) => {
            return (
                <ThemeProvider theme={commonTheme}>
                    <Component {...props} />
                </ThemeProvider>
            );
        };

        RootNavigation.options = {
            ...Component.options,
        };

        return RootNavigation;
    };
