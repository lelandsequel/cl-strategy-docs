# Deployment & Documentation Workflow

## Standard Deployment

1. **Push to GitHub ONLY** — TJ handles Vercel deployments
2. Do NOT use `vercel` CLI
3. Always verify local build before pushing

## Documentation Required (EVERY project)

Every project, app, website, or commit must be documented:

1. **Add to MkDocs** — Create/update `docs/projects/{project-name}.md`
2. **Add to memory** — Log significant builds in `memory/YYYY-MM-DD.md`

## Testing Required (EVERY build)

When building anything:

1. **Spawn 2 sub-agents** to test the build
2. **Document test results** — Add to project docs

```
Example:
## Test Results
- ✅ Sub-agent 1: [test description]
- ✅ Sub-agent 2: [test description]
```

## Local Build Check

```bash
cd <project-folder>
npm run build
```

If build passes → push to GitHub

## Vercel

- TJ's account: Vercel org for C&L Strategy
- Each project:独立 deployment
- Custom domains where applicable

## Common Issues

- Build fails → check console errors
- Environment variables → `.env.local` not pushed (add to `.gitignore`)
- API keys → use Vercel project settings
