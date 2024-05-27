import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AnimationProvider from './contexts/animationProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AnimationProvider>
    <App />
  </AnimationProvider>,
)
