import {Asset} from '../atomic/obj.asset/asset.component';
import {commonTheme} from '../atomic/obj.theme';
import {Navigation} from './modules/navigation/navigation';
import HomePage from './modules/home/home.page';
import CartPage from './modules/cart/cart.page';
import ProductDetailsPage from './modules/home/product-details.page';

export const bootstrap = () => {
    Navigation.register({Component: HomePage});
    Navigation.register({Component: CartPage});
    Navigation.register({Component: ProductDetailsPage});

    Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setDefaultOptions({
            layout: {
                orientation: ['portrait'],
            },
            statusBar: {
                style: 'dark',
                backgroundColor: commonTheme.color.white,
            },
            topBar: {
                animate: true,
                visible: true,
                backButton: {
                    showTitle: false,
                    color: commonTheme.color.neutral,
                },
                elevation: 1,
                drawBehind: false,
                background: {
                    color: commonTheme.color.white,
                },
                title: {
                    fontFamily: commonTheme.fontFamily.primary.medium,
                    fontSize: parseInt(commonTheme.fontSize.large),
                    color: commonTheme.color.grayXDark,
                },
            },
            bottomTabs: {
                elevation: 5,
                backgroundColor: commonTheme.color.white,
                titleDisplayMode: 'alwaysShow',
                borderWidth: parseInt(commonTheme.border.width),
                borderColor: commonTheme.color.grayXLight,
            },
            bottomTab: {
                iconColor: commonTheme.color.gray,
                selectedIconColor: commonTheme.color.primary,
                textColor: commonTheme.color.gray,
                selectedTextColor: commonTheme.color.primary,
                fontFamily: commonTheme.fontFamily.primary.medium,
                fontSize: parseInt(commonTheme.fontSize.small),
            },
        });

        const bottomTabs = [
            {
                component: HomePage,
                title: 'Loja',
                icon: Asset.Icon.TabBar.Home,
            },
            {
                component: CartPage,
                title: 'Carrinho',
                icon: Asset.Icon.TabBar.Cart,
            },
        ];

        Navigation.setBottomTabs(bottomTabs, {
            hardwareBackButton: {bottomTabsOnPress: 'first'},
        });
    });
};
