
import './App.css'
import AppRouter from './app/AppRouter'
import { ThemeProvider } from './app/ThemeContext'

function App() {
  

  return (
    <>
      
      <ThemeProvider>
        <AppRouter/>
      </ThemeProvider>
    </>
  )
}

export default App
