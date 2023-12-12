import EcommerceRoutes from './routes'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PageSettingsProvider } from './context/PageContext';
import useTheme from './hooks/theme';

function App() {
  useTheme("default");
  return (
    <AuthProvider>
      <BrowserRouter>
       <PageSettingsProvider>
        <EcommerceRoutes />
       </PageSettingsProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;