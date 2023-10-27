import * as React from 'react';

import {NavigationPageFC} from '../../model/navigation/navigation.model';
import {
    Root,
    VBox,
    VSeparator,
} from '../../../atomic/obj.grid/grid.component.style';
import {Navigation} from '../navigation/navigation';
import ProductDetailsPage from './product-details.page';
import {PageName} from '../page-name.constants';
import {ProductList} from './products-list.component';
import {useData} from '../../domain/data/data.use-case';
import {getProducts} from '../../data/api.requests';
import {Product} from '../../model/products/products.model';
import {ProductListItemProps} from './product-list-item.component';
import {formatToBrazilianReal} from '../../utils/string.utils';

const HomePage: NavigationPageFC<{}> = props => {
    const {data, loading, error, request} = useData(getProducts);
    const handleTap = (id: string) => {
        Navigation.push({
            fromComponentId: props?.componentId as string,
            component: ProductDetailsPage,
            passProps: {id},
        });
    };

    if (!data && !loading && !error) {
        request();
    }

    React.useEffect(() => {
        if (!data && !loading && !error) {
            request();
        }
    }, [data, loading, error, request]);

    const mapDataToProductsList = (product: Product): ProductListItemProps => {
        return {
            name: product.name,
            id: product.id,
            price: formatToBrazilianReal.format(product.price),
            image: product.imageUrl,
            onItemTap: handleTap,
        };
    };

    const mappedProducts = data
        ? data.map((item: Product) => mapDataToProductsList(item))
        : [];

    return (
        <Root>
            <VBox>
                <VSeparator />
                <ProductList products={mappedProducts} />
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
