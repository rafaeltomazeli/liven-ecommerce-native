import * as React from 'react';

import {NavigationPageFC} from '../../model/navigation/navigation.model';
import {H2} from '../../../atomic/atm.typography/typography.component.style';
import {
    Root,
    VBox,
    VSeparator,
} from '../../../atomic/obj.grid/grid.component.style';
import {Button} from '../../../atomic/atm.button/button.component';
import {Navigation} from '../navigation/navigation';
import ProductDetailsPage from './product-details.page';
import {PageName} from '../page-name.constants';

const HomePage: NavigationPageFC<{}> = props => {
    const handleTap = () => {
        Navigation.push({
            fromComponentId: props?.componentId as string,
            component: ProductDetailsPage,
        });
    };
    return (
        <Root>
            <VBox>
                <VSeparator />
                <H2>{'Home'}</H2>
                <Button.Primary text={'try me'} onTap={handleTap} />
                <VSeparator />
            </VBox>
        </Root>
    );
};

HomePage.options = {
    name: PageName.HOME,
    topBar: {visible: false, drawBehind: true, leftButtons: []},
};
export default HomePage;
