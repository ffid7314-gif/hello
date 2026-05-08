const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');

// Obfuscate Player.js
const code = fs.readFileSync('Player.js', 'utf8');
const result = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    renameGlobals: false,
    stringArray: true
});

fs.writeFileSync('Player.js', result.getObfuscatedCode());
console.log('Player.js obfuscated!');
