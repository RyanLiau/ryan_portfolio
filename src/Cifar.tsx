import { Layout } from './components/layout/Cifar_Layout';
import { Hero } from './components/sections/Cifar_hero';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { lazy } from 'react';

const Projects = lazy(() => import('./components/sections/cifar_project_steps/cifar_1'));
const Projects2 = lazy(() => import('./components/sections/cifar_project_steps/cifar_2'));
const Projects3 = lazy(() => import('./components/sections/cifar_project_steps/cifar_3'));
const Projects4 = lazy(() => import('./components/sections/cifar_project_steps/cifar_4'));


function Cifar() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        {/* Hero section is critical for LCP, so keep it eager loadeddfadf */}
        <Hero />
        <Projects />
        <Projects2 />
        <Projects3 />
        <Projects4 />
      </Layout>
    </ThemeProvider>
  );
}

export default Cifar;
