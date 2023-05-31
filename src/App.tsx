import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import QuizPage from './pages/QuizPage';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './theme/globalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
