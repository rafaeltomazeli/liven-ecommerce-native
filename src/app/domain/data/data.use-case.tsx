import {ApiResponse} from 'app/data/api.requests';
import {getErrorMessage} from 'app/utils/error-message.utils';
import {useState} from 'react';

export const useData = (
    fetchFunction: ({
        key,
    }?: {
        [key: string]: string | number;
    }) => Promise<ApiResponse<any>>,
    additionalParams?: {[key: string]: string | number},
) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState(false);

    const request = async () => {
        setLoading(true);
        try {
            const result = additionalParams
                ? await fetchFunction(additionalParams)
                : await fetchFunction();
            setData(result.data);
        } catch (error: unknown) {
            setError(getErrorMessage(error));
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
