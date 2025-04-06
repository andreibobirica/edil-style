const { execSync } = require('child_process');
const fs = require('fs');

// Create screenshots-contrast directory if it doesn't exist
if (!fs.existsSync('./screenshots-contrast')) {
  fs.mkdirSync('./screenshots-contrast');
}

// List of sections to capture
const sections = [
  { name: 'home', fullPage: false },
  { name: 'servizi', fullPage: true },
  { name: 'chi-siamo', fullPage: true },
  { name: 'galleria', fullPage: true },
  { name: 'testimonianze', fullPage: true },
  { name: 'contatti', fullPage: true }
];

// Capture screenshots-contrast for each section
sections.forEach(section => {
  console.log(`Capturing screenshot for ${section.name}...`);
  
  // Remove existing file if it exists
  const filePath = `screenshots-contrast/${section.name}.png`;
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`Removed existing file: ${filePath}`);
    } catch (error) {
      console.error(`Failed to remove existing file: ${error.message}`);
    }
  }
  
  try {
    execSync(
      `npx capture-website-cli http://localhost:3001/#${section.name} --output screenshots-contrast/${section.name}.png ${section.fullPage ? '--full-page' : ''} --width 1920 --height 1080 --delay 2`,
      { stdio: 'inherit' }
    );
    console.log(`Screenshot saved to screenshots-contrast/${section.name}.png`);
  } catch (error) {
    console.error(`Failed to capture ${section.name}:`, error.message);
  }
});

console.log('All screenshots-contrast captured! Check the screenshots-contrast directory.'); 