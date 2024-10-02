// components/AgencyPage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useAgencies } from '../contexts/AgencyContext';

const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
);

const AgencyPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { agencies, loading, error } = useAgencies();
    
    if (loading) return <LoadingSpinner />;
    
    if (error) {
        return (
            <div className="p-4 text-red-500">
                Error loading agency: {error}
                <button 
                    onClick={() => navigate('/')}
                    className="block mt-4 text-blue-500 hover:underline"
                >
                    Return to Home
                </button>
            </div>
        );
    }

    const agency = agencies[id];

    if (!agency) {
        return (
            <div className="p-6">
                <div className="text-red-500">Agency not found</div>
                <button 
                    onClick={() => navigate('/')}
                    className="mt-4 text-blue-500 hover:underline"
                >
                    Return to Home
                </button>
            </div>
        );
    }

    return (
        <div className="mt-12 mb-12">
            <nav className="flex items-center space-x-2 mb-6">
                <button 
                    onClick={() => navigate('/')} 
                    className="text-blue-500 hover:underline"
                >
                    Home
                </button>
                <span className="text-gray-500">/</span>
                <span className="font-semibold text-gray-800">{agency.name}</span>
            </nav>

            <h2 className="text-3xl font-bold mb-6">{agency.name}</h2>
            
            <a 
                href={agency.catalogue} 
                className="inline-block mb-8 bg-green-500 hover:bg-green-600 transition-colors duration-200 text-white py-2 px-6 rounded-lg shadow-md"
            >
                View Full Catalogue
            </a>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {agency.products.map((product, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md">
                        <img 
                            src={product.image}
                            alt={product.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AgencyPage;