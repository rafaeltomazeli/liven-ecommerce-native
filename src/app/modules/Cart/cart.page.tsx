import * as React from 'react';

import {NavigationPageFC} from '../../model/navigation/navigation.model';
import {H2} from '../../../atomic/atm.typography/typography.component.style';
import {
    Root,
    VBox,
    VSeparator,
} from '../../../atomic/obj.grid/grid.component.style';
import {Button} from '../../../atomic/atm.button/button.component';
import {PageName} from '../page-name.constants';

const CartPage: NavigationPageFC = () => {
    return (
        <Root>
            <VBox>
                <VSeparator />
                <H2>{'Cart'}</H2>
                <Button.Primary text={'try me'} />
                <VSeparator />
            </VBox>
        </Root>
    );
};

CartPage.options = {
    name: PageName.CART,
};
export default CartPage;
