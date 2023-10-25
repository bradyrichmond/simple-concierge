import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EmployeeDisplay from './features/Concierge/Employee';
import ConciergeHistory from './features/Concierge/History';
import Concierge from './features/Concierge';
import Checkin from './features/Concierge/CheckIn';
import DropOffComplete from './features/Concierge/CheckInComplete';
import CreateCheckIn from './features/Concierge/CreateCheckIn';
import Settings from './features/Settings';
import OrganizationSetup from './features/OrganizationSetup';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import Home from './features/Home';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from './aws-exports';
import { Amplify } from 'aws-amplify';
Amplify.configure(awsconfig);

const buildRoutes = () => createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'concierge/employee',
        element: <EmployeeDisplay />
      },
      {
        path: 'concierge/history',
        element: <ConciergeHistory />
      },
      {
        path: 'settings',
        element: <Settings />
      }
    ]
  },
  {
    path: 'concierge',
    element: <Concierge />,
    children: [
      {
        path: '/concierge',
        element: <Checkin />
      },
      {
        path: 'complete',
        element: <DropOffComplete />
      },
      {
        path: 'create-checkin',
        element: <CreateCheckIn />
      }
    ]
  },
  {
    path: 'organization-setup',
    element: <OrganizationSetup />
  }
]);

const light = () => {
  return createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#434ce6',
      },
      secondary: {
        main: '#f6ebf4',
      },
      error: {
        main: '#ed0b70',
      },
      info: {
        main: '#023b59',
      },
      background: {
        default: '#F1ECEC'
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '2rem',
            marginBottom: '2rem'
          }
        }
      }
    }
  })
}

function App() {
  const builtRoutes = buildRoutes();

  return (
    <Box width='auto' height='100%'>
      <ThemeProvider theme={light}>
        <RouterProvider router={builtRoutes} />
      </ThemeProvider>
    </Box>
  );
}

export default App;
