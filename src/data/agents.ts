export interface Agent {
  name: string
  model: 'sonnet' | 'haiku'
  effort: 'high' | 'low'
  purpose: string
  category: 'core' | 'dev-workflow' | 'productivity' | 'knowledge'
}

export const agents: Agent[] = [
  // Core (16)
  { name: 'code-writer', model: 'sonnet', effort: 'high', purpose: 'Feature implementation across files', category: 'core' },
  { name: 'debugger', model: 'sonnet', effort: 'high', purpose: 'Root-cause diagnosis and bug fixes', category: 'core' },
  { name: 'planner', model: 'sonnet', effort: 'high', purpose: 'Sequenced task plans with Agent Dispatch Manifests', category: 'core' },
  { name: 'researcher', model: 'sonnet', effort: 'high', purpose: 'Multi-source analysis, gap reports, and citations', category: 'core' },
  { name: 'security', model: 'sonnet', effort: 'high', purpose: 'Auth, input validation, secrets, and vulnerability audit', category: 'core' },
  { name: 'merge', model: 'haiku', effort: 'low', purpose: 'Git merges, rebases, and conflict resolution', category: 'core' },
  { name: 'test-writer', model: 'haiku', effort: 'low', purpose: 'Unit and integration test creation', category: 'core' },
  { name: 'devops', model: 'haiku', effort: 'low', purpose: 'CI/CD, Docker, and infrastructure', category: 'core' },
  { name: 'docs', model: 'haiku', effort: 'low', purpose: 'Documentation, READMEs, and changelogs', category: 'core' },
  { name: 'morning-briefing', model: 'haiku', effort: 'low', purpose: 'Daily git activity summary', category: 'core' },
  { name: 'bash-specialist', model: 'haiku', effort: 'low', purpose: 'Shell scripts, BATS tests, and hook scripts', category: 'core' },
  { name: 'code-reviewer', model: 'haiku', effort: 'low', purpose: 'Diff review for correctness and conventions', category: 'core' },
  { name: 'test-runner', model: 'haiku', effort: 'low', purpose: 'Test suite execution and result reporting', category: 'core' },
  { name: 'commit', model: 'haiku', effort: 'low', purpose: 'Semantic git commits with Co-Authored-By', category: 'core' },
  { name: 'push', model: 'haiku', effort: 'low', purpose: 'Remote push with branch safety checks', category: 'core' },
  { name: 'frontend-qa', model: 'haiku', effort: 'low', purpose: 'React and TypeScript component review', category: 'core' },

  // Dev Workflow (6)
  { name: 'migration-reviewer', model: 'sonnet', effort: 'high', purpose: 'Database schema change safety and rollback plans', category: 'dev-workflow' },
  { name: 'api-contract', model: 'sonnet', effort: 'high', purpose: 'REST API breaking change detection', category: 'dev-workflow' },
  { name: 'perf-sentinel', model: 'sonnet', effort: 'high', purpose: 'Performance regression detection and git bisect', category: 'dev-workflow' },
  { name: 'adr-writer', model: 'haiku', effort: 'low', purpose: 'Architecture Decision Record drafting', category: 'dev-workflow' },
  { name: 'dep-auditor', model: 'haiku', effort: 'low', purpose: 'Dependency audit for CVEs, licenses, and compatibility', category: 'dev-workflow' },
  { name: 'release-notes', model: 'haiku', effort: 'low', purpose: 'Structured changelog generation from git history', category: 'dev-workflow' },

  // Productivity (5)
  { name: 'task-triage', model: 'haiku', effort: 'low', purpose: 'Todoist inbox triage and priority assignment', category: 'productivity' },
  { name: 'standup-writer', model: 'haiku', effort: 'low', purpose: 'Daily standup generation from git activity', category: 'productivity' },
  { name: 'meeting-prep', model: 'haiku', effort: 'low', purpose: 'Calendar-aware meeting prep briefs', category: 'productivity' },
  { name: 'email-drafter', model: 'haiku', effort: 'low', purpose: 'Professional email drafting (never sends)', category: 'productivity' },
  { name: 'pr-narrator', model: 'haiku', effort: 'low', purpose: 'PR diffs translated to stakeholder summaries', category: 'productivity' },

  // Knowledge (3)
  { name: 'knowledge-curator', model: 'haiku', effort: 'low', purpose: 'Obsidian vault organization and note linking', category: 'knowledge' },
  { name: 'learning-scout', model: 'sonnet', effort: 'high', purpose: 'Tech topic research and resource curation', category: 'knowledge' },
  { name: 'portfolio-sync', model: 'haiku', effort: 'low', purpose: 'Showcase repo READMEs synced with project stats', category: 'knowledge' },
]
