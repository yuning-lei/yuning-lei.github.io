import { lstat, realpath, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Restrict cleanup to this checkout's generated dist directory. Never follow a link.
const workspace = await realpath(fileURLToPath(new URL('../', import.meta.url)));
const output = join(workspace, 'dist');
try {
  const info = await lstat(output);
  if (!info.isDirectory() || info.isSymbolicLink() || await realpath(output) !== output) {
    throw new Error(`Refusing to clean an unexpected build output path: ${output}`);
  }
  console.log(`Clearing generated output: ${output}`);
  await rm(output, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
