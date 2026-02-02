
const fs = require('fs');
const path = require('path');

const filePath = path.join('app', 'products', 'page.tsx');
const content = fs.readFileSync(filePath, 'utf8');

// Extract productDetailsMap keys
// Look for pattern: const productDetailsMap: Record<string, ProductDetail> = { ... };
// We need to parse the object literal.
// Since it's TSX, it might be hard to parse with regex perfectly, but let's try.

// Find the start of the map
const mapStartRegex = /const productDetailsMap: Record<string, ProductDetail> = \{/;
const mapStartMatch = content.match(mapStartRegex);
if (!mapStartMatch) {
    console.error("Could not find productDetailsMap start");
    process.exit(1);
}

const mapStartIndex = mapStartMatch.index + mapStartMatch[0].length;
let braceCount = 1;
let mapEndIndex = -1;

for (let i = mapStartIndex; i < content.length; i++) {
    if (content[i] === '{') braceCount++;
    else if (content[i] === '}') braceCount--;

    if (braceCount === 0) {
        mapEndIndex = i;
        break;
    }
}

if (mapEndIndex === -1) {
    console.error("Could not find productDetailsMap end");
    process.exit(1);
}

const mapContent = content.substring(mapStartIndex, mapEndIndex);

// Regex to find keys in the map. Keys can be "Key Name" or KeyName (if valid identifier)
// This is a naive regex, but might work for the format we saw.
// Lines look like:   "Key Name": { or   KeyName: {
const mapKeyRegex = /^\s*(?:"([^"]+)"|([a-zA-Z0-9_]+))\s*:/gm;
const definedKeys = new Set();
let match;
while ((match = mapKeyRegex.exec(mapContent)) !== null) {
    const key = match[1] || match[2];
    if (key) definedKeys.add(key);
}

console.log("Defined Keys:", definedKeys.size);

// Extract usage in products array
// Look for productDetailsMap["Key"]
const productsStartRegex = /const products: ProductDetail\[\] = \[/;
const productsStartMatch = content.match(productsStartRegex);
if (!productsStartMatch) {
    console.error("Could not find products array start");
    process.exit(1);
}
// We can just search the whole file for usages, or restrict to the array block.
// Let's search lines after products definition.

const productsContent = content.substring(productsStartMatch.index);
const usageRegex = /productDetailsMap\["([^"]+)"\]/g;

const missingKeys = [];
while ((match = usageRegex.exec(productsContent)) !== null) {
    const usedKey = match[1];
    if (!definedKeys.has(usedKey)) {
        missingKeys.push(usedKey);
    }
}

console.log("Missing Keys:", missingKeys);
