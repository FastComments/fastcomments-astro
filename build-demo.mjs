#!/usr/bin/env node
// Builds the Astro showcase example. BUILD_DEMO=1 toggles astro.config.mjs
// to set base: '/commenting-system-for-astro' so assets resolve correctly.
import { execSync } from 'node:child_process';
import { rmSync, renameSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const EXAMPLE = resolve(ROOT, 'example');
const OUT = resolve(ROOT, 'demo-dist');

const sh = (cmd, cwd = ROOT, env = {}) => {
    console.log('$', cmd, `(${cwd})`);
    execSync(cmd, { stdio: 'inherit', cwd, env: { ...process.env, ...env } });
};

sh('npm ci', EXAMPLE);
sh('npx astro build', EXAMPLE, { BUILD_DEMO: '1' });

rmSync(OUT, { recursive: true, force: true });
renameSync(resolve(EXAMPLE, 'dist'), OUT);
console.log('Built fastcomments-astro demo at', OUT);
