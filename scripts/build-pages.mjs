import { spawnSync } from 'node:child_process'
import { cpSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'

const base = process.env.PAGES_BASE_PATH || '/indian-point-classic/'
if (!base.startsWith('/') || !base.endsWith('/')) {
  console.error('PAGES_BASE_PATH must start and end with /')
  process.exit(1)
}
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const result = spawnSync(npm, ['run', 'build'], {
  env: { ...process.env, VITE_BASE_PATH: base },
  stdio: 'inherit',
})
if (result.status !== 0) process.exit(result.status ?? 1)
rmSync('docs', { recursive: true, force: true })
mkdirSync('docs', { recursive: true })
cpSync('dist', 'docs', { recursive: true })
writeFileSync('docs/.nojekyll', '')
console.log(`GitHub Pages files prepared in docs/ for ${base}`)
