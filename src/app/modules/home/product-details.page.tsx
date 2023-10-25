import * as React from 'react';

import {NavigationPageFC} from '../../model/navigation/navigation.model';
import {
    Body,
    BodySecondary,
    H1,
} from '../../../atomic/atm.typography/typography.component.style';
import {
    Root,
    VBox,
    VSeparator,
} from '../../../atomic/obj.grid/grid.component.style';
import {PageName} from '../page-name.constants';
import {useData} from '../../domain/data/data.use-case';
import {getProductsDetail} from '../../data/api.requests';
import {Thumbnail} from '../../../atomic/atm.thumbnail/thumbnail.component';
import {ThumbnailSizes} from '../../../atomic/atm.thumbnail/thumbnail.component.style';
import {Button} from '../../../atomic/atm.button/button.component';

export interface ProductDetailsPageProps {
    id: string;
}

const ProductDetailsPage: NavigationPageFC<ProductDetailsPageProps> = props => {
    console.log(props);
    const {data, loading, error, request} = useData(getProductsDetail, {
        id: props.navigation?.id as string,
    });

    React.useEffect(() => {
        if (!data && !loading && !error) {
            request();
        }
    }, [data, loading, error, request]);

    const handleAddToCart = () => {};

    return (
        <Root>
            <VSeparator />
            <VBox hAlign="center">
                <VSeparator />
                <Thumbnail
                    size={ThumbnailSizes.large}
                    source={data?.imageUrl}
                />

                <VSeparator />
                <H1>{data?.name}</H1>
                <VSeparator />
            </VBox>
            <VBox>
                <Body>{data?.description}</Body>
                <VSeparator />
                <BodySecondary>{data?.price}</BodySecondary>
                <VSeparator />
                <Button.Primary text={'adicionar'} onTap={handleAddToCart} />
            </VBox>
        </Root>
    );
};

ProductDetailsPage.options = {
    name: PageName.PRODUCT_DETAILS,
    topBar: {drawBehind: true},
};
export default ProductDetailsPage;
