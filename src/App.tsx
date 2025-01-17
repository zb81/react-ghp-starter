import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div>
        <Button>123</Button>
      </div>
    </ThemeProvider>
  )
}
