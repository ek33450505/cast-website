export interface Agent {
  name: string
  model: 'sonnet' | 'haiku'
  effort: 'high' | 'low'
  purpose: string
}

export const agents: Agent[] = [
  { name: 'code-writer', model: 'sonnet', effort: 'high', purpose: 'Feature implementation and code changes' },
  { name: 'debugger', model: 'sonnet', effort: 'high', purpose: 'Root-cause diagnosis and bug fixes' },
  { name: 'planner', model: 'sonnet', effort: 'high', purpose: 'Task plan creation and decomposition' },
  { name: 'orchestrator', model: 'sonnet', effort: 'high', purpose: 'Multi-agent plan execution' },
  { name: 'researcher', model: 'sonnet', effort: 'high', purpose: 'Multi-source analysis and investigation' },
  { name: 'security', model: 'sonnet', effort: 'high', purpose: 'Security auditing and vulnerability review' },
  { name: 'code-reviewer', model: 'haiku', effort: 'low', purpose: 'Diff review and quality feedback' },
  { name: 'test-runner', model: 'haiku', effort: 'low', purpose: 'Test execution and result reporting' },
  { name: 'test-writer', model: 'haiku', effort: 'low', purpose: 'Unit and integration test creation' },
  { name: 'commit', model: 'haiku', effort: 'low', purpose: 'Semantic git commits' },
  { name: 'push', model: 'haiku', effort: 'low', purpose: 'Remote push with safety gates' },
  { name: 'merge', model: 'haiku', effort: 'low', purpose: 'Git merges, rebases, conflict resolution' },
  { name: 'devops', model: 'haiku', effort: 'low', purpose: 'CI/CD, Docker, and infrastructure' },
  { name: 'docs', model: 'haiku', effort: 'low', purpose: 'Documentation generation and updates' },
  { name: 'bash-specialist', model: 'haiku', effort: 'low', purpose: 'Shell scripts and BATS tests' },
  { name: 'morning-briefing', model: 'haiku', effort: 'low', purpose: 'Daily git activity summary' },
  { name: 'frontend-qa', model: 'haiku', effort: 'low', purpose: 'React and TypeScript review' },
  { name: 'pa-briefing', model: 'sonnet', effort: 'high', purpose: 'Daily morning briefing with calendar, email, dev status' },
  { name: 'pa-meeting-prep', model: 'sonnet', effort: 'high', purpose: 'Meeting context from Confluence, Jira, Calendar' },
  { name: 'pa-weekly', model: 'sonnet', effort: 'high', purpose: 'Weekly report with sprint velocity and accomplishments' },
  { name: 'pa-triage', model: 'haiku', effort: 'low', purpose: 'Email inbox triage and categorization' },
  { name: 'pa-jira', model: 'haiku', effort: 'low', purpose: 'Jira stand-up generation from sprint data' },
  { name: 'pa-calendar', model: 'haiku', effort: 'low', purpose: 'Natural language calendar management' },
  { name: 'pa-eod', model: 'haiku', effort: 'low', purpose: 'End-of-day summary and carry-forward items' },
  { name: 'pa-backup', model: 'haiku', effort: 'low', purpose: 'Nightly backup of CLAUDE config and vault' },
]
