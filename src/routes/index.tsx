import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages';

export const ProjectRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
