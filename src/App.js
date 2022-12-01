import { Routes, Route } from "react-router-dom";

import Signup from "pages/Signup/Signup";

import GettingStarted from "pages/Signup/GettingStarted";
import EducationForm from "pages/FreelancerRegistration/EducationForm";
import FreelancerPreferences from "pages/FreelancerRegistration/FreelancerPreferences";
import WorkExperience from "pages/FreelancerRegistration/WorkExperienceForm";
import VerifyOtp from "pages/OTP/VerifyOtp";
import SuccessfulOtp from "pages/OTP/SuccessfulOtp";
import TitleAdd from "pages/FreelancerRegistration/TitleAdd";
import SkillsAdd from "pages/FreelancerRegistration/SkillsAdd";
import BioAdd from "pages/FreelancerRegistration/BioAdd";
import HourlyRateAdd from "pages/FreelancerRegistration/HourlyRateAdd";
import Headline from "pages/ClientRegistration/HeadlineAdd";
import Skills from "pages/ClientRegistration/SkillsAdd";
import Scope from "pages/ClientRegistration/ScopeAdd";
import Budget from "pages/ClientRegistration/BudgetAdd";
import Description from "pages/ClientRegistration/DescriptionAdd";
import Login from "pages/UserLogin/UserLogin";
import Dashboard from "pages/Dashboard/Dashboard";
import VerificationSuccessful from "pages/Signup/VerificationSuccessful";
import ProfileView from "pages/FreelancerRegistration/ProfileView";
import HomePage from "pages/HomePage/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/otp/success" element={<SuccessfulOtp />} />
      <Route path="/otp/verify" element={<VerifyOtp />} />
      <Route path="" element={<Signup />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/getstarted" element={<GettingStarted />} />
      <Route
        path="/verification_successful"
        element={<VerificationSuccessful />}
      />
      <Route path="/add/title" element={<TitleAdd />} />
      <Route path="/add/work/experience" element={<WorkExperience />} />
      <Route path="/add/education/qualification" element={<EducationForm />} />
      <Route path="/add/skills" element={<SkillsAdd />} />
      <Route path="/add/bio" element={<BioAdd />} />
      <Route path="/profile/submit" element={<ProfileView />} />
      <Route path="/add/rate" element={<HourlyRateAdd />} />
      <Route path="/add/preferences" element={<FreelancerPreferences />} />
      <Route path="/add/client/headline" element={<Headline />} />
      <Route path="/add/client/skills" element={<Skills />} />
      <Route path="/add/client/scopes" element={<Scope />} />
      <Route path="/add/client/budget" element={<Budget />} />
      <Route path="/add/client/description" element={<Description />} />
      <Route path="/" element={<HomePage />} />

      {/* <Route path="/user/login" element={<Login />} /> */}
    </Routes>
  );
};

export default App;
