import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch({ 
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Set viewport to a nice laptop resolution
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    
    console.log('Navigating to app...');
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
    
    console.log('Searching for India...');
    // Type in search bar
    await page.type('input[type="text"]', 'India');
    
    // Wait for results and click the first one
    await page.waitForSelector('button'); // Assuming the list items are buttons or contain buttons
    // Small delay for UI to settle
    await new Promise(r => setTimeout(r, 1000));
    
    // Click on the first country result
    // We target the button that likely contains "India"
    const buttons = await page.$$('button');
    for (const btn of buttons) {
      const text = await page.evaluate(el => el.textContent, btn);
      if (text.includes('India')) {
        await btn.click();
        break;
      }
    }
    
    console.log('Waiting for map and details...');
    // Wait for the map to likely appear (delay is easiest/safest here)
    await new Promise(r => setTimeout(r, 3000));
    
    console.log('Taking screenshot...');
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    
    await browser.close();
    console.log('Screenshot saved to screenshot.png');
  } catch (error) {
    console.error('Error taking screenshot:', error);
    process.exit(1);
  }
})();
