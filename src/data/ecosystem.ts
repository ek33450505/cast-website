export interface EcosystemComponent {
  name: string
  installCommand: string
  description: string
  version: string
  githubUrl: string
  tapName: string
  highlighted?: boolean
}

export const ecosystem: EcosystemComponent[] = [
  {
    name: 'CAST Core',
    installCommand: 'brew tap ek33450505/cast && brew install cast',
    description: 'The complete multi-agent framework',
    version: 'v4.6',
    githubUrl: 'https://github.com/ek33450505/claude-agent-team',
    tapName: 'ek33450505/cast',
    highlighted: true,
  },
  {
    name: 'CAST Agents',
    installCommand: 'brew tap ek33450505/cast-agents && brew install cast-agents',
    description: '17 specialist agent definitions',
    version: 'v0.1.0',
    githubUrl: 'https://github.com/ek33450505/cast-agents',
    tapName: 'ek33450505/cast-agents',
  },
  {
    name: 'CAST Hooks',
    installCommand: 'brew tap ek33450505/cast-hooks && brew install cast-hooks',
    description: 'Quality gate hook scripts',
    version: 'v0.1.0',
    githubUrl: 'https://github.com/ek33450505/cast-hooks',
    tapName: 'ek33450505/cast-hooks',
  },
  {
    name: 'CAST Observe',
    installCommand: 'brew tap ek33450505/cast-observe && brew install cast-observe',
    description: 'SQLite observability layer',
    version: 'v0.1.0',
    githubUrl: 'https://github.com/ek33450505/cast-observe',
    tapName: 'ek33450505/cast-observe',
  },
  {
    name: 'CAST Security',
    installCommand: 'brew tap ek33450505/cast-security && brew install cast-security',
    description: 'Security audit tooling',
    version: 'v0.1.0',
    githubUrl: 'https://github.com/ek33450505/cast-security',
    tapName: 'ek33450505/cast-security',
  },
  {
    name: 'CAST Memory',
    installCommand: 'brew tap ek33450505/cast-memory && brew install cast-memory',
    description: 'Persistent agent memory system',
    version: 'v0.1.0',
    githubUrl: 'https://github.com/ek33450505/cast-memory',
    tapName: 'ek33450505/cast-memory',
  },
  {
    name: 'CAST Dash',
    installCommand: 'brew tap ek33450505/cast-dash && brew install cast-dash',
    description: 'Terminal UI dashboard',
    version: 'v0.1.0',
    githubUrl: 'https://github.com/ek33450505/cast-dash',
    tapName: 'ek33450505/cast-dash',
  },
  {
    name: "Claude's Journal",
    installCommand: 'brew tap ek33450505/claudes-journal && brew install claudes-journal',
    description: 'Session journaling for Claude Code',
    version: 'v0.1.0',
    githubUrl: 'https://github.com/ek33450505/cast-claudes_journal',
    tapName: 'ek33450505/claudes-journal',
  },
]
