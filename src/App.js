import { useContext } from "react";
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
import Search from "pages/Search/Search";
import ClientProfile from "pages/UserProfile/clientProfile";
import FreelancerProfile from "pages/UserProfile/freelancerProfile";
import Detail from "pages/Detail/Detail";
import UpdateProfile from "pages/UserProfile/UpdateUserProfile";
import ProtectedRoute from "routes/ProtectedRoute";
import AuthContext from "context/AuthContext/auth-context";
import { USER_TYPE } from "constants/utils";

const App = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx)
  console.log(authCtx.isLoggedIn);

  return (
    <Routes>
      <Route
        path="/"
        element={authCtx.isLoggedIn ? <ProtectedRoute>{USER_TYPE === 'Client' ? <ClientProfile/> : <FreelancerProfile/>}</ProtectedRoute> : <HomePage />}
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/otp/success"
        element={
          <ProtectedRoute>
            <SuccessfulOtp />
          </ProtectedRoute>
        }
      />
      <Route
        path="/otp/verify"
        element={
          <ProtectedRoute>
            <VerifyOtp />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/getstarted"
        element={
          <ProtectedRoute>
            <GettingStarted />
          </ProtectedRoute>
        }
      />
      <Route
        path="/verification_successful"
        element={
          <ProtectedRoute>
            <VerificationSuccessful />
          </ProtectedRoute>
        }
      />

      <Route
        path="/add/title"
        element={
          <ProtectedRoute>
            <TitleAdd />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add/work/experience"
        element={
          <ProtectedRoute>
            <WorkExperience />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add/education/qualification"
        element={
          <ProtectedRoute>
            <EducationForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add/skills"
        element={
          <ProtectedRoute>
            <SkillsAdd />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add/bio"
        element={
          <ProtectedRoute>
            <BioAdd />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile/submit"
        element={
          <ProtectedRoute>
            <ProfileView />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add/rate"
        element={
          <ProtectedRoute>
            <HourlyRateAdd />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add/preferences"
        element={
          <ProtectedRoute>
            <FreelancerPreferences />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add/client/headline"
        element={
          <ProtectedRoute>
            <Headline />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add/client/skills"
        element={
          <ProtectedRoute>
            <Skills />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add/client/scopes"
        element={
          <ProtectedRoute>
            <Scope />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add/client/budget"
        element={
          <ProtectedRoute>
            <Budget />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add/client/description"
        element={
          <ProtectedRoute>
            <Description />
          </ProtectedRoute>
        }
      />
      <Route path="/update/profile" element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />
      

      <Route
        path="/search"
        element={
          <ProtectedRoute>
            <Search />
          </ProtectedRoute>
        }
      />
      <Route
        path="/detail/:id"
        element={
          <ProtectedRoute>
            <Detail />
          </ProtectedRoute>
        }
      />
      
    </Routes>
  );
};

export default App;
