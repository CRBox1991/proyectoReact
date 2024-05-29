import { Outlet, Navigate } from "react-router-dom"

function PublicRoutes() {
  const user = null;
  //const user = { name: 'Critian' };
  

  if (!user) return <Outlet/>

  return <Navigate to="/profile" />
}

export default PublicRoutes