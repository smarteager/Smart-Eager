import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ScrollToTop from "../pages/Scroll";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import ACPage from "../pages/AC/AcPage";
import PrivacyPolicy from "../components/UI/Privacy_Policy";
import BookingForm from "../components/UI/BookingForm";
import ServicesList from "../components/UI/ServicesList";
import ServiceDetails from "../pages/HotServiceDetails";
import WinterPage from "../pages/Winter/WinterPage";
import RentalFormPage from "../pages/HotRentalFormPage";
import HeaterPage from "../pages/Heater/HeaterPage";
import W_Machine from "../pages/WM/W_Machine";
import ROPage from "../pages/RO-Purifier/ROPage";
import RefPage from "../pages/refrigerator/RefrigeratorPage";
import GeyserPage from "../pages/geyser/GeyserPage";
import InverterPage from "../pages/Inverter/InverterPage";
import ConstructionPage from "../pages/Construction/ConstructionPage";
import AllProduct from "../pages/AllProducts/AllProducts";
import KYCDoc from "../pages/kycDoc";
import ServicesDesc from "../components/UI/ServicesDesc";
import Termsandcondition from "../components/Policies/T&Cpolicy";
import ShippingPolicy from "../components/Policies/ShippingPolicy";
import CancelRefPol from "../components/Policies/Cancel&RefPol";
import SummerPage from "../pages/Summer/SummerPage";
import ACMaintainance from "../pages/Maintainance_Services/Maintainance";
const Routers = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/rental-form" element={<RentalFormPage />} />
        <Route path="/maintainance-services" element={<ACMaintainance />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ac" element={<ACPage />} />
        <Route path="/washing_machine" element={<W_Machine />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/Privacy_Policy" element={<PrivacyPolicy />} /> */}
        <Route path="/BookingForm" element={<BookingForm />} />
        {/* <Route path="/Services" element={<ServicesList />} /> */}
        <Route path="/ro-water-purifier-rental" element={<ROPage />} />
        <Route path="/refrigerator-rental" element={<RefPage />} />
        <Route path="/Geyser" element={<GeyserPage />} />
        <Route path="/inverter-rental" element={<InverterPage />} />
        <Route path="/room-heater" element={<HeaterPage />} />
        <Route path="/winter-products" element={<WinterPage />} />
        <Route path="/summer-rentals" element={<SummerPage />} />
        <Route
          path="/construction-equipment-rental"
          element={<ConstructionPage />}
        />
        <Route path="/home/allproducts" element={<AllProduct />} />
        <Route path="/kyc" element={<KYCDoc />} />
        <Route path="/service-Booking" element={<ServicesDesc />} />
        <Route path="/terms" element={<Termsandcondition />} />
        <Route path="/Return-Pol" element={<CancelRefPol />} />
        <Route path="/refunds" element={<ShippingPolicy />} />
      </Routes>
    </>
  );
};

export default Routers;
