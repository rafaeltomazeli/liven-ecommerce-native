import {useState} from 'react';
import {getErrorMessage} from '../../utils/error-message.utils';
import {ApiResponse} from '../../data/api.requests';

interface FetchHook<T> {
    data: T;
    error: string | undefined;
    loading: boolean;
    request: ({key}?: {[key: string]: string | number}) => Promise<void>;
}

export const useData: <T>(
    fetchFunction: (
        params?: Record<string, string | number>,
    ) => Promise<ApiResponse<T>>,
    additionalParams?: {[key: string]: string | number},
) => FetchHook<T> = (fetchFunction, additionalParams) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState(false);

    const request = async () => {
        setLoading(true);
        try {
            const result = additionalParams
                ? await fetchFunction(additionalParams)
                : await fetchFunction();
            console.log(result);
            setData(result.data);
        } catch (error: unknown) {
            setError(getErrorMessage(error));
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return {
        data,
        error,
        loading,
        request,
    };
};
