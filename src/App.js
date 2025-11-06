import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🌟 Common Components

import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Nextgenmain from "./components/Nextgenmain";
import NextgenAI from "./components/NextgenAI";
import Contact from "./Contact/Contact";
import ContactFormm from "./Contact/ContactForm";
import GetIn from "./Contact/GetIn";
import Institution from "./components/Institution";
// import Footer from "./components/Footer";

// 🌟 Home Page Components
import Home from "./components/Home";
import AboutSection from "./components/AboutSection";
import CareerSection from "./components/CareerSection";
import BenefitsSection from "./components/BenefitsSection";
import CoursesSection from "./components/CoursesSection";
import AIProgramCard from "./components/AIProgramsSection";
import StatsCards from "./components/StatsSection";
import InstitutionalCollaboration from "./components/InstitutionalCollaboration";
// import Gallery from "./components/Gallery";
import JoinWithUs from "./components/JoinWithUs";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Internship from "./components/Internshipone"
import InternshipCards from "./components/internshiptwo"
import InternCard from "./components/internshipthree"
import ResearchInternship from "./components/Internshipfour"
import GetStart from "./components/Internshipfive"
import Applynow from "./components/Applynowone"
import  FillToEnroll from "./components/Applynowtwo"
import EnrollmentForm from "./components/Applynowthree"
import ScrollForCourses from "./components/Applynowfour"
import  AIPrograms from "./components/Applynowfive"


function App() {
  return (
    <Router>
      {/* 🌟 Navbar visible on all pages */}
      {/* <Navbar /> */}

      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutSection />
              <CareerSection />
              <BenefitsSection />
              <CoursesSection />
              <AIProgramCard />
              <StatsCards />
              <InstitutionalCollaboration />
              {/* <Gallery /> */}
              <JoinWithUs />
            </>
          }
        />

        {/* NextGen Page */}
        <Route
          path="/nextgen"
          element={
            <>
              <Nextgenmain />
              <NextgenAI />
              <ContactForm />
              <Banner />
            </>
          }
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <ContactFormm />
              <GetIn />
            </>
          }
        />

        {/* Courses Page */}
        <Route
          path="/courses"
          element={
            <>
              <Courses />
            </>
          }
        />

        {/* Institution Page */}
        <Route
          path="/institution"
          element={
            <>
              <Institution />
            </>
          }
        />


          <Route
          path="/internship"
          element={
            <>
              <Internship />
              <InternshipCards/>
              <InternCard/>
              <ResearchInternship/>
              <GetStart/>
            </>
          }
        />


          <Route
          path="/Apply"
          element={
            <>
           <Applynow/>
           < FillToEnroll/>
           < EnrollmentForm/>
           <ScrollForCourses/>
           <AIPrograms/>
            </>
          }
        />
      </Routes>

      {/* ✅ Footer visible on all pages (optional) */}
      <Footer />
    </Router>
  );
}

export default App;
