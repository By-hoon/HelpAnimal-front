import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Crew from "./routes/Crew";
import CrewCreate from "./routes/CrewCreate";
import CrewDetail from "./routes/CrewDetail";
import CrewEdit from "./routes/CrewEdit";
import Home from "./routes/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/crew/create" element={<CrewCreate />} />
        <Route path="/crew/edit" element={<CrewEdit />}></Route>
        <Route path="/crew/:id" element={<CrewDetail />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
