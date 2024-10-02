/* eslint-disable react/prop-types */
// contexts/AgencyContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const AgencyContext = createContext();

export const AgencyProvider = ({ children }) => {
    const [agencies, setAgencies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAgencies = async () => {
        try {
            setLoading(true);
            const response = await fetch('/agencies.json');
            if (!response.ok) {
                throw new Error('Failed to fetch agency data');
            }
            const data = await response.json();
            setAgencies(data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAgencies();
    }, []);

    return (
        <AgencyContext.Provider value={{ agencies, loading, error, refetch: fetchAgencies }}>
            {children}
        </AgencyContext.Provider>
    );
};

export const useAgencies = () => {
    const context = useContext(AgencyContext);
    if (context === undefined) {
        throw new Error('useAgencies must be used within an AgencyProvider');
    }
    return context;
};