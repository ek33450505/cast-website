import { MotionConfig } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Architecture } from './components/Architecture'
import { Ecosystem } from './components/Ecosystem'
import { AgentRoster } from './components/AgentRoster'
import { TokenOptimization } from './components/TokenOptimization'
import { DashboardPreview } from './components/DashboardPreview'
import { Footer } from './components/Footer'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only absolute top-2 left-2 bg-[var(--accent)] text-black px-3 py-1 rounded z-50">Skip to content</a>
      <div className="min-h-screen bg-[var(--bg-primary)]">
        <Navbar />
        <main id="main">
          <Hero />
          <Features />
          <Architecture />
          <Ecosystem />
          <AgentRoster />
          <TokenOptimization />
          <DashboardPreview />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
