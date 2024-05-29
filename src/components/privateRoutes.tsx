import { Outlet, Navigate } from "react-router-dom"

function PrivateRoutes() {
  const user = null;
    // const user = { name: 'Critian' };
  

  if (!user) return <Navigate to="/" />

  return <Outlet />
}

export default PrivateRoutes