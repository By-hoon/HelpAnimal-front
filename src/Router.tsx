import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Crew from "./routes/Crew";
import CrewCreate from "./routes/CrewCreate";
import CrewDetail from "./routes/CrewDetail";
import CrewEdit from "./routes/CrewEdit";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Recruitment from "./routes/Recruitment";
import RecruitmentCreate from "./routes/RecruitmentCreate";
import RecruitmentDetail from "./routes/RecruitmentDetail";
import RecruitmentEdit from "./routes/RecruitmentEdit";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/crew/create" element={<CrewCreate />} />
        <Route path="/crew/edit" element={<CrewEdit />}></Route>
        <Route path="/crew/detail" element={<CrewDetail />} />
        <Route path="/recruit" element={<Recruitment />} />
        <Route path="/recruit/create" element={<RecruitmentCreate />} />
        <Route path="/recruit/edit" element={<RecruitmentEdit />} />
        <Route path="/recruit/detail" element={<RecruitmentDetail />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
