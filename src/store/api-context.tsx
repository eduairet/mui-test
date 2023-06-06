import { createContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

interface ApiContextType {
    data: ApiData[];
    addElements: () => void;
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
    const [elements, setElements] = useState<number>(12)
    const [data, setData] = useState<ApiData[]>([]);
    const addElements = () => {
        setElements(prevEls => prevEls + 12)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://wizard-world-api.herokuapp.com/Spells');
                const firstTenElements = response.data.slice(0, elements);
                setData(firstTenElements);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [elements]);

    return (
        <ApiContext.Provider value={{ data, addElements }}>
            {props.children}
        </ApiContext.Provider>
    );
};

export { ApiContext, ApiProvider };
