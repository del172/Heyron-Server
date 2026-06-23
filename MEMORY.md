**Rank & Rent Website Creation Process**

**Phase 1: Niche Analysis & Setup**
1.  **Niche Selection & Validation:**
    *   Identify a profitable, local service niche (e.g., emergency plumber, roof repair, locksmith).
    *   **Search:** Use `web_search` to analyze search volume, competition, and average customer lifetime value for the niche.
    *   **Criteria:** Look for local-based services with high-ticket, recurring, or urgent needs.
2.  **Keyword Research:**
    *   **Search:** Use `web_search` (with tools like Ahrefs, SEMrush if accessible, or general search terms) to find primary keywords (e.g., "emergency roof repair [city name]"), secondary keywords, and long-tail queries.
    *   **Focus:** Identify keywords with commercial intent ("near me," "hire," "cost," "emergency").
3.  **Target Location Identification:**
    *   Define specific geographic areas (cities, counties) for the website.
    *   **Data Needed:** Population, business density, local service demand.
4.  **Website Structure & Content Planning:**
    *   **Core Pages:** Home, Services (detailed breakdown), About Us, Service Area, Contact Us, Blog/Resources.
    *   **Content Strategy:** Plan for unique, localized content that targets identified keywords. Emphasize trust signals (reviews, guarantees, emergency availability).
    *   **Call to Actions (CTAs):** Prominent phone numbers, "Get a Quote" forms, "Call Now" buttons.

**Phase 2: Website Development & Content Creation**
5.  **Niche Agent/Skill Definition:**
    *   **Decision:** Determine if a new agent or a refined skill is best for managing this specific niche. For rank-and-rent, an agent that can orchestrate content creation, basic site setup, and SEO tasks is ideal.
    *   **Documentation:** Save this decision and its rationale in `MEMORY.md`.
6.  **Content Generation:**
    *   **Utilize Firecrawl/Web Scraping (if applicable):** Scrape competitor websites for service descriptions, CTAs, and industry terms (ensure ethical and legal compliance).
    *   **AI Content Creation:** Use LLM capabilities to generate unique, keyword-rich content for each page. Localize content using identified city/area names.
    *   **Focus:** Create compelling service pages, an "About Us" highlighting trustworthiness, and a clear "Contact Us" page.
7.  **Website Build:**
    *   **Platform:** Choose a platform (e.g., WordPress with a suitable theme, or static site generator). For simplicity and speed in rank-and-rent, a pre-made theme or simple static site might be preferred.
    *   **Development:** Assemble the pages with generated content, ensuring mobile responsiveness and clear CTAs.
    *   **Tools:** Potentially use `exec` for command-line site builders or `browser` tool if interactive site building is needed (though less ideal for automation).
8.  **Basic On-Page SEO Implementation:**
    *   Integrate primary keywords naturally into page titles, headings (H1, H2), body text, and meta descriptions.
    *   Ensure proper image alt text is used.
    *   Implement schema markup for local businesses.

**Phase 3: Deployment & Optimization**
9.  **Deployment:**
    *   Host the website on a suitable platform (e.g., Vercel, Netlify, or a custom static host).
    *   **Tools:** `exec` with deployment CLIs (like Vercel CLI, Netlify CLI) or `write` to file system if deploying manually.
10. **Listing & Citation Building:**
    *   Create citations on relevant Local SEO directories (Google Business Profile, Yelp, etc.).
    *   **Tools:** This step might require manual input or specialized agents if available.
11. **Content Updates & SEO Monitoring:**
    *   Regularly add new content (blog posts, service area pages) targeting relevant keywords.
    *   **Tools:** `web_search` for keyword updates, `exec` for new content generation and deployment.
    *   Monitor rankings and traffic using available analytics.

**Phase 4: Monetization (The "Rent" Part)**
12. **Lead Generation & Lead Capture:**
    *   Ensure all contact forms and phone numbers are functional.
    *   **Tools:** `exec` to test form submissions, `message` to potentially forward leads.
13. **Client Acquisition:**
    *   Find local businesses in the niche willing to rent the lead-capturing website.
    *   **Tools:** `web_search` for local businesses, `message` for outreach (with caution).
