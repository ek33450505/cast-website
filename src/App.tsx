import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Architecture } from './components/Architecture'
import { Ecosystem } from './components/Ecosystem'
import { AgentRoster } from './components/AgentRoster'
import { DashboardPreview } from './components/DashboardPreview'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Architecture />
        <Ecosystem />
        <AgentRoster />
        <DashboardPreview />
      </main>
      <Footer />
    </div>
  )
}

export default App
