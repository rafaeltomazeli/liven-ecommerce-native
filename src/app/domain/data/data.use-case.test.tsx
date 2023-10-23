import React from 'react';
import {useData} from '@app/domain/data/data.use-case.tsx';
import {renderHook} from '@testing-library/react-native';
import axios from 'axios';

jest.mock('axios');

describe('useData  hook', () => {
    test('if data is valid  and an array useData should return it with loading and error null', () => {
        const sucessfullResponse = {
            data: ['a', 'b', 'c'],
            error: null,
        };
        const {data, error, loading, request} = renderHook(() =>
            useData(axios.get.mockResolvedValue(resp)),
        );
        request();
        expect(data).toEqual(sucessfullResponse.data);
        expect(error).toBeNull();
        expect(loading).toEqual(false);
    });
    test('if data is valid  and an object useData should return it with loading and error null', () => {
        const sucessfullResponse = {
            data: {a: 1, b: 2},
            error: null,
        };
        const {data, error, loading, request} = renderHook(() =>
            useData(axios.get.mockResolvedValue(resp)),
        );
        request();
        expect(data).toEqual(sucessfullResponse.data);
        expect(error).toBeNull();
        expect(loading).toEqual(false);
    });
    test('if useData receives error it should return error and empty data', () => {
        const sucessfullResponse = {
            data: [],
            error: {message: 'erro'},
        };
        const {data, error, loading, request} = renderHook(() =>
            useData(axios.get.mockResolvedValue(resp)),
        );
        request();
        expect(data).toHaveLenght(0);
        expect(error).toEqual(sucessfullResponse.error);
        expect(loading).toEqual(false);
    });
});
