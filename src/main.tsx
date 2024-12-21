import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import DashBoardPage from './pages/dashboard/dashboard-page';
import SignInPage from './pages/sign-in/sign-in-page';
import './index.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <DashBoardPage />
  },
  {
    path: '/sign-in',
    element: <SignInPage />
  },
])
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
