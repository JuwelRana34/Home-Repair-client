import { Routes, Route } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import LoginPage from '../Pages/LoginPage'
import Services from "../Pages/Services";
import Dashboard from "../Pages/Dashboard";
import Not_found from "../Pages/not_found";
import SignUp from "../Pages/SignUp";
import Add_service from "../Pages/Add_service";
import Booked_services from "../Pages/Booked_services";
import Manage_service from "../Pages/Manage_service";
import Service_To_Do from "../Pages/Service_To_Do";
import PrivetRoute from "./PrivetRoute";
import ServiceDetails from "../Pages/ServiceDetails";
import UpdateService from "../Pages/UpdateService";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";

const AppRoute = () => {
  return(
    <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='LoginPage' element={<LoginPage />} />
      <Route path='signup' element={<SignUp />} />
      <Route path="services" element={<Services />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="Contactus" element={<ContactUs />} />
      <Route path="about" element={<AboutUs/>} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="add-service" element={ <PrivetRoute> <Add_service /> </PrivetRoute> } />
      <Route path="manage-service" element={<PrivetRoute>< Manage_service/></PrivetRoute>} />
      <Route path="UpdateService/:id" element={<PrivetRoute>< UpdateService/></PrivetRoute>} />
      <Route path="booked-services" element={<PrivetRoute><Booked_services /></PrivetRoute>} />
      <Route path="service-To-Do" element={<PrivetRoute><Service_To_Do/></PrivetRoute>} />
      <Route path="serviceDetails/:id" element={<PrivetRoute><ServiceDetails/></PrivetRoute>} />
    </Route>
    <Route path="/*" element={<Not_found />} />
  </Routes>
  )
}

export default AppRoute;
