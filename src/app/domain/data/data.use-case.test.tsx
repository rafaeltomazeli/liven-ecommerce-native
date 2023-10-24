import React from 'react';
import axios from 'axios';
import {renderHook, act, waitFor} from '@testing-library/react-native';
import {useData} from './data.use-case';

jest.mock('axios');

describe('useData  hook', () => {
    test('if data is valid  and an array useData should return it with loading and error null', async () => {
        const sucessfullResponse = {
            data: ['a', 'b', 'c'],
            error: null,
        };

        const {result} = renderHook(() =>
            useData(
                (axios.get as jest.Mock).mockResolvedValue(sucessfullResponse),
            ),
        );
        const {data, error, loading, request} = result.current;
        act(() => {
            request();
        });
        expect(data).toEqual(sucessfullResponse.data);
        expect(error).toBeNull();
        expect(loading).toEqual(false);
    });
    test('if data is valid  and an object useData should return it with loading and error null', async () => {
        const sucessfullResponse = {
            data: {a: 1, b: 2},
            error: null,
        };
        const {result} = renderHook(() =>
            useData(
                (axios.get as jest.Mock).mockResolvedValue(sucessfullResponse),
            ),
        );
        const {data, error, loading, request} = result.current;
        await act(() => {
            waitFor(() => request());
        });
        expect(data).toEqual(sucessfullResponse.data);
        expect(error).toBeNull();
        expect(loading).toEqual(false);
    });
    test('if useData receives error it should return error and empty data', () => {
        const sucessfullResponse = {
            data: [],
            error: {message: 'erro'},
        };
        const {result} = renderHook(() =>
            useData(
                (axios.get as jest.Mock).mockResolvedValue(sucessfullResponse),
            ),
        );
        const {data, error, loading, request} = result.current;
        act(() => {
            request();
        });
        expect(data).toHaveLength(0);
        expect(error).toEqual(sucessfullResponse.error);
        expect(loading).toEqual(false);
    });
});
