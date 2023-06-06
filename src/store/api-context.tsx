import { createContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

interface ApiContextType {
    data: ApiData[];
}

export type ApiData = {
    id: string,
    name: string,
    incantation: string,
    effect: string,
    canBeVerbal: boolean,
    type: string,
    light: string,
    creator: string | null
}

type ProviderProps = {
    children: ReactNode;
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

const ApiProvider = (props: ProviderProps) => {
    const [data, setData] = useState<ApiData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://wizard-world-api.herokuapp.com/Spells');
                const firstTenElements = response.data.slice(0, 12);
                setData(firstTenElements);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <ApiContext.Provider value={{ data }}>
            {props.children}
        </ApiContext.Provider>
    );
};

export { ApiContext, ApiProvider };
