import * as React from 'react';

import {NavigationPageFC} from '../../model/navigation/navigation.model';
import {H2} from '../../../atomic/atm.typography/typography.component.style';
import {
    Root,
    VBox,
    VSeparator,
} from '../../../atomic/obj.grid/grid.component.style';
import {PageName} from '../page-name.constants';

const ProductDetailsPage: NavigationPageFC<{}> = props => {
    return (
        <Root>
            <VBox>
                <VSeparator />
                <H2>{'Product Details'}</H2>
                <VSeparator />
            </VBox>
        </Root>
    );
};

ProductDetailsPage.options = {
    name: PageName.PRODUCT_DETAILS,
};
export default ProductDetailsPage;
