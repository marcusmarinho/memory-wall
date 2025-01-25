import { useEffect } from 'react';
import { ProjectRoutes } from './routes';
function App() {
  useEffect(() => {
    if (!window.location.hash) {
      window.location.replace(`${window.location.pathname}/#/`);
    }
  }, []);
  return <ProjectRoutes></ProjectRoutes>;
}

export default App;
