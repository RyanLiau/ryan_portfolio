import { Layout } from './components/layout/Proj_Layout';
import { Hero } from './components/sections/Course_hero';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { lazy } from 'react';

const Projects = lazy(() => import('./components/sections/cr_project_steps/cr_1'));
const Projects2 = lazy(() => import('./components/sections/cr_project_steps/cr_2'));
const Projects3 = lazy(() => import('./components/sections/cr_project_steps/cr_3'));
const Projects4 = lazy(() => import('./components/sections/cr_project_steps/cr_4'));


function Course_Recommender() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        {/* Hero section is critical for LCP, so keep it eager loaded */}
        <Hero />
        <Projects />
        <Projects2 />
        <Projects3 />
        <Projects4 />
      </Layout>
    </ThemeProvider>
  );
}

export default Course_Recommender;
