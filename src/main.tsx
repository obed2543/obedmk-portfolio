import { createRoot } from 'react-dom/client'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "next-themes"
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <App />
    <Toaster />
  </ThemeProvider>
)