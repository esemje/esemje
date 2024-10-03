import { useNavigate } from 'react-router-dom';
import { useAgencies } from '../contexts/AgencyContext';
import Header from './Header';

const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
);

const AgencyList = () => {
    const { agencies, loading, error } = useAgencies();
    const navigate = useNavigate(); // useNavigate for programmatic navigation

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

    const handleAgencyClick = (agency, index) => {
        if (agency.products.length === 0) {
            // Open catalogue link if products array is empty
            window.open(agency.catalogue, '_blank');
        } else {
            // Navigate to the agency detail page if products exist
            navigate(`/agency/${index}`);
        }
    };

    return (
        <>
            <Header />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12 text-center">
                {agencies.map((agency, index) => (
                    <div 
                        key={index}
                        onClick={() => handleAgencyClick(agency, index)} // Click handler to check products array
                        className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4 cursor-pointer"
                    >
                        <h3 className="font-semibold text-gray-800">{agency.name}</h3>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AgencyList;
