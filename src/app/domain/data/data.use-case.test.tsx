import React from 'react';
import axios from 'axios';
import {renderHook, act, waitFor} from '@testing-library/react-native';
import {useData} from './data.use-case';

jest.mock('axios');

describe('useData  hook', () => {
    test('if data is valid and an array useData should return it with loading and error null', async () => {
        const successfullResponse = {
            data: ['a', 'b', 'c'],
            error: null,
        };

        const {result} = renderHook(() =>
            useData(
                (axios.get as jest.Mock).mockResolvedValue(successfullResponse),
            ),
        );

        await act(async () => {
            await result.current.request();
        });

        expect(result.current.data).toEqual(successfullResponse.data);
        expect(result.current.error).toBeUndefined();
        expect(result.current.loading).toEqual(false);
    });
    test('if data is valid  and an object useData should return it with loading and error null', async () => {
        const successfullResponse = {
            data: {a: 1, b: 2},
            error: null,
        };

        const {result} = renderHook(() =>
            useData(
                (axios.get as jest.Mock).mockResolvedValue(successfullResponse),
            ),
        );

        await act(async () => {
            await result.current.request();
        });

        expect(result.current.data).toEqual(successfullResponse.data);
        expect(result.current.error).toBeUndefined();
        expect(result.current.loading).toEqual(false);
    });
    test('if useData receives error it should return error and empty data', async () => {
        const errorMessage = 'error';
        const error = new Error(errorMessage);

        const {result} = renderHook(() =>
            useData((axios.get as jest.Mock).mockRejectedValue(error)),
        );

        await act(async () => {
            await result.current.request();
        });

        expect(result.current.data).toBeNull();
        expect(result.current.error).toEqual(errorMessage);
        expect(result.current.loading).toEqual(false);
    });
});
