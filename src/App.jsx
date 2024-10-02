// App.jsx
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AgencyList from './components/AgencyList';
import AgencyPage from './components/AgencyPage';
import { AgencyProvider } from './contexts/AgencyContext';

const App = () => {
    return (
        <AgencyProvider>
            <Router>
                <div className="mx-auto">
                    <Routes>
                        <Route path="/" element={<AgencyList />} />
                        <Route path="/agency/:id" element={<AgencyPage />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </Router>
        </AgencyProvider>
    );
};

export default App;
