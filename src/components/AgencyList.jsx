// components/AgencyList.jsx
import { Link } from 'react-router-dom';
import { useAgencies } from '../contexts/AgencyContext';
import Header from './Header';

const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
);

const AgencyList = () => {
    const { agencies, loading, error } = useAgencies();

    if (loading) return <LoadingSpinner />;
    
    if (error) {
        return (
            <div className="p-4 text-red-500">
                Error loading agencies: {error}
            </div>
        );
    }

    if (!agencies.length) {
        return <div className="p-4">No agencies found.</div>;
    }

    return (
        <>
            <Header />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12 text-center">
                {agencies.map((agency, index) => (
                    <Link 
                        key={index} 
                        to={`/agency/${index}`}
                        className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4"
                    >
                        <h3 className="font-semibold text-gray-800">{agency.name}</h3>
                        {/* <p className="text-gray-600 mt-2">
                            {agency.products.length} product{agency.products.length !== 1 ? 's' : ''}
                        </p> */}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default AgencyList;