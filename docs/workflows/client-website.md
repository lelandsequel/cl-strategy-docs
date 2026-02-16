# Client Website Workflow

## Input (from client)

- Business name
- Current website URL
- Brief about the business

## Output

1. **New/rebuilt website** - Next.js, optimized
2. **SEO** - On-page optimization
3. **AEO** - Answer Engine Optimization (featured snippets, knowledge panels)
4. **pSEO** - Programmatic SEO - city-specific landing pages
5. **Slide deck** - Embedded on site, explaining:
   - What was wrong with their old site
   - What is SEO?
   - What is AEO?
   - What is pSEO?
   - How each was used to fix their site

## Workflow Steps

### 1. Build Website

```
Location: seo-sites/{city}-{business-type}/
Tech: Next.js (App Router)
Deploy: Push to GitHub → TJ deploys
```

### 2. SEO Audit & Optimization

- On-page: titles, meta, headings, content
- Technical: speed, mobile, schema
- Local: Google Business Profile, citations

### 3. AEO Implementation

- FAQ schema
- How-to schema
- Featured snippet optimization
- Knowledge panel optimization

### 4. pSEO (City Pages)

Generate city-specific pages for target markets:
- 19-city network structure
- Each city: unique content, local keywords
- Example: houston-plumber, austin-plumber, etc.

### 5. Create Slide Deck

1. Generate images with Gemini/nano-banana-pro
2. Create deck via Google Slides API
3. Embed on site (PDF viewer or link)

### 6. Deploy

- Push to GitHub
- TJ deploys via Vercel

## Files

- Deck template: Google Slides
- Site code: `seo-sites/`
- Output: Live URL
