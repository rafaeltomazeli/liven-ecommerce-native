import React from 'react';
import {useData} from '@app/domain/data/data.use-case.tsx';
import {renderHook} from '@testing-library/react-native';

describe('useData  hook', () => {
    test('if data is valid useData should return it with loading and error null', () => {});
    test('if useData receives error it should return error and empty data', () => {
        fireEvent.press(screen.getByTestId(cartTestIds.add));
        fireEvent.press(screen.getByTestId(cartTestIds.add));

        expect(screen.getByTestId(cartTestIds.quantity)).toHaveTextContent(
            testProduct.quantity + 1,
        );
    });

    test('if it takes too long should show a loading status', () => {});
});
