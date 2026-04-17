const Firecrawl = require('firecrawl').default;

const fc = new Firecrawl({apiKey: 'fc-f8021a0e96034206b644a8343259d4c8'});

(async () => {
  const sessionId = '019d9dae-227c-74cb-8aaa-cdec4beb1667';
  
  console.log('Testing page content...');
  
  const result = await fc.browserExecute(sessionId, {
    code: `
      const title = await page.title();
      const url = page.url();
      console.log('---TITLE---');
      console.log(title);
      console.log('---URL---');
      console.log(url);
      console.log('---BODY---');
      const body = await page.evaluate(() => document.body.innerText);
      console.log(body.substring(0, 2000));
    `,
    language: 'node'
  });
  
  console.log('STDOUT:', result.stdout);
  console.log('RESULT:', result.result);
})();