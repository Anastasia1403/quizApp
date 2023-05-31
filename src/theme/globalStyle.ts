import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*,
*::before, 
*::after { 
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
}

html, 
body { 
  max-width: 100%; 
  overflow-x: hidden; 
}
html {
  height: fill-available;
  height: -webkit-fill-available;
}
body {
  min-height: 100vh;
  max-height: 100vh;
  min-height: fill-available;
  min-height: -webkit-fill-available;
  scroll-behavior: smooth; 
  text-rendering: optimizeSpeed; 
  line-height: 1.2; 
  font-family: 'Gudea', sans-serif;
}
#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
a, button {
  cursor: pointer;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}

ul, 
ol { 
  list-style: none; 
} 
 
a:not([class]) { 
  text-decoration-skip-ink: auto; 
} 
 
img { 
  max-width: 100%; 
  display: block; 
} 

input, 
button, 
textarea, 
select { 
  font: inherit; 
} 

  ::-webkit-scrollbar {
  width: 8px;
  border-radius: 8px;
  -webkit-transition: 150ms;
  transition: 150ms;
}

::-webkit-scrollbar-track {
  background: #f2f2f2;
  border-radius: 8px;
  -webkit-transition: 150ms;
  transition: 150ms;
}

::-webkit-scrollbar-thumb {
    background: #3255FF;
    border-radius: 8px;
    -webkit-transition: 150ms;
    transition: 150ms;
}
 
@media (prefers-reduced-motion: reduce) { 
  * { 
    animation-duration: 0.01ms !important; 
    animation-iteration-count: 1 !important; 
    transition-duration: 0.01ms !important; 
    scroll-behavior: auto !important; 
  } 
}
`;
