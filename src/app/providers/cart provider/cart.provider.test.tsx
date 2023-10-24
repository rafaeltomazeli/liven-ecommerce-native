import React from 'react';
import {CartProvider} from './cart.provider';
import {
    TestComponent,
    cartTestIds,
    quantities,
    testProduct,
} from './cart.provider.test.component';
import {screen, fireEvent, render} from '@testing-library/react-native';

describe('Cart Provider', () => {
    beforeEach(() => {
        render(
            <CartProvider>
                <TestComponent />
            </CartProvider>,
        );
    });
    test('if given a product when added  cart should update', () => {
        fireEvent.press(screen.getByText(cartTestIds.add));

        expect(screen.getByText(testProduct.name)).toBeDefined();
    });
    test('if given a product is added again  cart should update quantity', () => {
        fireEvent.press(screen.getByTestId(cartTestIds.add));
        fireEvent.press(screen.getByTestId(cartTestIds.add));

        expect(screen.getByText(`${testProduct.quantity + 1}`)).toBeDefined();
    });

    test('if given a cart when a product is removed, cart should update', () => {
        fireEvent.press(screen.getByTestId(cartTestIds.add));
        fireEvent.press(screen.getByTestId(cartTestIds.remove));

        expect(screen.queryByTestId(cartTestIds.name)).toBeNull;
    });

    test('if given a cart when a cart is cleared, cart should clear', () => {
        fireEvent.press(screen.getByTestId(cartTestIds.add));
        fireEvent.press(screen.getByTestId(cartTestIds.addSecond));
        fireEvent.press(screen.getByTestId(cartTestIds.clear));

        expect(screen.queryByTestId(cartTestIds.name)).toBeNull;
    });

    test('if given a cart when quantity altered, cart should update', () => {
        fireEvent.press(screen.getByTestId(cartTestIds.add));
        fireEvent.press(screen.getByTestId(cartTestIds.modify));

        expect(screen.getByText(`${quantities.modify}`)).toBeDefined();
    });

    test('if given a cart when quantity is set to zero, product should be removed', () => {
        fireEvent.press(screen.getByTestId(cartTestIds.add));
        fireEvent.press(screen.getByTestId(cartTestIds.modifyZero));

        expect(screen.queryByTestId(cartTestIds.name)).toBeNull;
    });
});
