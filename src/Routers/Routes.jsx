import { Routes, Route } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import LoginPage from '../Pages/LoginPage'
import Services from "../Pages/Services";
import Dashboard from "../Pages/Dashboard";
import Not_found from "../Pages/not_found";

const AppRoute = () => {
  return(
    <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='LoginPage' element={<LoginPage />} />
      <Route path="services" element={<Services />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
    <Route path="/*" element={<Not_found />} />
  </Routes>
  )
}

export default AppRoute;
