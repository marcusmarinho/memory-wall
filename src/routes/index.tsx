import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage } from '../pages';

export const ProjectRoutes = () => {
  return (
    <BrowserRouter basename=''>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='*' element={<HomePage></HomePage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
