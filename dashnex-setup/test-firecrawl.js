const Firecrawl = require('firecrawl').default;

const fc = new Firecrawl({apiKey: 'fc-f8021a0e96034206b644a8343259d4c8'});

async function interactWithPage() {
  // First scrape the affiliates page to get a session
  console.log('Scraping affiliates page...');
  const scrapeResult = await fc.scrape('https://www.braintraining4dogs.com/affiliates/', {
    formats: ['markdown']
  });
  
  const scrapeId = scrapeResult.metadata?.scrapeId;
  console.log('Got scrapeId:', scrapeId);
  
  if (!scrapeId) {
    console.log('No scrapeId, trying to get existing session...');
    // Try the one from earlier
  }
  
  // Now try to interact - click on Free Giveaways
  console.log('Trying to interact...');
  
  try {
    const interactResult = await fc.interact(scrapeId, {
      prompt: 'Click on the link that says "Free Giveaways" and tell me what free resources are listed.'
    });
    console.log('Result:', JSON.stringify(interactResult, null, 2));
  } catch (e) {
    console.log('Interact error:', e.message);
  }
}

interactWithPage().catch(console.error);