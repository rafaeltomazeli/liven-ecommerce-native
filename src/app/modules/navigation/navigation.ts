import {
    Navigation as ReactNativeNavigation,
    LayoutRoot,
    Options,
} from 'react-native-navigation';

import {setNavigationPage} from './set-navigation-page';
import {
    BottomTab,
    NavigationPage,
    NavigationPushParams,
} from '../../model/navigation/navigation.model';

export interface NavigationRegisterParams<P> {
    Component: NavigationPage<P>;
    withGlobalProviders?: boolean;
    withGlobalGuards?: boolean;
}

export class Navigation {
    static mergeOptions(componentId: string, options: Options) {
        ReactNativeNavigation.mergeOptions(componentId, options);
    }

    static events() {
        return ReactNativeNavigation.events();
    }

    static setDefaultOptions(options: Options) {
        ReactNativeNavigation.setDefaultOptions(options);
    }

    static async push<P = {}>({
        fromComponentId,
        component,
        passProps,
        options,
    }: NavigationPushParams<P>) {
        await ReactNativeNavigation.push(fromComponentId, {
            component: {
                name: component.options.name,
                passProps: {
                    navigation: passProps,
                    navigationType: 'push',
                },
                options,
            },
        });
    }

    static async setRoot(layout: LayoutRoot) {
        await ReactNativeNavigation.setRoot(layout);
    }

    static async setBottomTabs(bottomTabs: BottomTab[], options: Options = {}) {
        const children = bottomTabs.map((tab: BottomTab) => {
            return {
                stack: {
                    children: [
                        {
                            component: {
                                name: tab.component.options.name,
                            },
                        },
                    ],
                    options: {
                        bottomTab: {
                            text: tab.title,
                            icon: tab.icon,
                        },
                    },
                },
            };
        });

        await ReactNativeNavigation.setRoot({
            root: {bottomTabs: {children, options}},
        });
    }

    static register<P = any>({Component}: NavigationRegisterParams<P>) {
        console.log(Component);
        if (
            !Component.options ||
            (Component.options && !Component.options.name)
        ) {
            throw Error(
                'Registered navigation pages must have the static options = {name: "PageName"} property',
            );
        }
        ReactNativeNavigation.registerComponent(
            Component.options.name,
            setNavigationPage<any>({Component}),
        );
    }

    static setBadge(componentId: string, text: string) {
        Navigation.mergeOptions(componentId, {
            bottomTab: {
                badge: text ? text : '',
                badgeColor: 'red',
            },
        });
    }
}
