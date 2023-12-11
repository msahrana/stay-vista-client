import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './routers/Routers';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './provider/AuthProvider';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  </HelmetProvider>
)