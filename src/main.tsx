import { createRoot } from 'react-dom/client'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "next-themes"
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    <App />
    <Toaster />
  </ThemeProvider>
)