const fs = require("fs");
const path = require("path");

const code = fs.readFileSync(
    path.join(__dirname, "..", "index.js"),
    "utf8"
);

let marks = 0;

console.log("================================");
console.log("Student Marks Card Test");
console.log("================================");

// Test 1

if (/function\s+StudentCard/.test(code))
{
    console.log("✓ StudentCard component created");
    marks += 2;
}
else
{
    console.log("✗ StudentCard component missing");
}

// Test 2

if (/props/.test(code))
{
    console.log("✓ Props used");
    marks += 2;
}
else
{
    console.log("✗ Props not used");
}

// Test 3

if (/className\s*=\s*["'][^"']*card/.test(code))
{
    console.log("✓ Bootstrap Card used");
    marks += 2;
}
else
{
    console.log("✗ Bootstrap Card missing");
}

// Test 4

const studentCards = (code.match(/<StudentCard/g) || []).length;

if (studentCards >= 3)
{
    console.log("✓ Three StudentCard components rendered");
    marks += 2;
}
else
{
    console.log("✗ Three StudentCard components not rendered");
}

// Test 5

if (/image/.test(code) && /<img/.test(code))
{
    console.log("✓ Student image displayed");
    marks += 2;
}
else
{
    console.log("✗ Student image missing");
}

console.log("--------------------------------");
console.log("Total Marks :", marks + "/10");

if (marks === 10)
{
    console.log("All Test Cases Passed");
    process.exit(0);
}
else
{
    console.log("Some Test Cases Failed");
    process.exit(1);
}