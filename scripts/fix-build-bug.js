#!/usr/bin/env node

/**
 * Post-build script to fix the getValue undefined bug in Next.js generated chunks
 * 
 * Bug: If module initialization fails, getValue remains undefined but is still called
 * Fix: Initialize getValue to null and add a guard check before calling it
 */

const fs = require('fs');
const path = require('path');

function findChunkFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findChunkFiles(filePath, fileList);
    } else if (file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

const buildChunksDir = path.join(__dirname, '..', '.next', 'build', 'chunks');

if (!fs.existsSync(buildChunksDir)) {
  console.log('⚠ Build chunks directory not found. Skipping fix.');
  process.exit(0);
}

const chunkFiles = findChunkFiles(buildChunksDir);
let fixed = false;

chunkFiles.forEach((filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern 1: Fix the initialization - set getValue to null initially
    // Match: let getValue; followed by try block
    if (/let getValue;\s*try\s*{/.test(content)) {
      content = content.replace(
        /let getValue;\s*try\s*{/,
        'let getValue = null;\n    try {'
      );
      modified = true;
    }

    // Pattern 2: Add guard check before calling getValue
    // Match: await getValue(internalIpc, ...args);
    if (/const value = await getValue\(internalIpc, \.\.\.args\);/.test(content)) {
      content = content.replace(
        /(\s+)const value = await getValue\(internalIpc, \.\.\.args\);/,
        `$1if (!getValue) {
$1    await ipc.sendError(new Error('Module initialization failed: getValue is not available'));
$1    continue;
$1}
$1const value = await getValue(internalIpc, ...args);`
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed bug in: ${path.relative(process.cwd(), filePath)}`);
      fixed = true;
    }
  } catch (error) {
    // Silently skip files that can't be read/written
  }
});

if (fixed) {
  console.log('\n✓ Build bug fix applied successfully');
} else {
  console.log('\n⚠ No matching patterns found to fix');
}

process.exit(0);

