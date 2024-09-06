import React from "react";

import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
    baseURL: "https://api.dongbti.com",
    withCredentials: true,
});

export default function useAxios<T>(config: AxiosRequestConfig, dependencies: ReadonlyArray<any> = []) {
    const [data, setData] = React.useState<T | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await instance(config);
                setData(response.data);
                console.log(response.data);
            } catch (err: any) {
                if (axios.isAxiosError(err)) {
                    setError(err.message || "Something went wrong");
                } else {
                    setError("Something went wrong");
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, dependencies);

    return { data, loading, error };
}
