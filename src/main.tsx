import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import Contact from './components/component/Contact.tsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import MyListing from './components/Screens/MyListing.tsx'
import ProtectedComp from './Authentication/ProtectedComp.tsx'
import AddNewListing from './components/Screens/AddNewListing.tsx'
import CarDetailsScreen from './components/Screens/CarDetailsScreen.tsx'
import SearchScreen from './components/Screens/Search.tsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/Mylisting',
    element : <ProtectedComp element={<MyListing/>}/>
  },
  {
    path:'/AddLsiting',
    element : <ProtectedComp element={<AddNewListing/>}/>
  },
  {
    path:'/CarDetailsScreen/:id',
    element : <CarDetailsScreen/> 
  },
  {
    path:'/SearchScreen',
    element : <SearchScreen/> 
  },
  {
    path:'*',
    element:<div>some Issue</div>
  }
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')!).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
  <RouterProvider router={router}></RouterProvider>
  </ClerkProvider>
)
