import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import QuizPage from './pages/QuizPage';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './theme/globalStyle';
import { NewQuiz } from './pages/NewQuiz/NewQuiz';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function App() {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/quiz/:quizId' element={<QuizPage />} />
                    <Route path='/new-quiz' element={<NewQuiz />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
