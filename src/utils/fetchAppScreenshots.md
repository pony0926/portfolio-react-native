# Instructions for Getting Real App Screenshots

## Quick Method: Use App Store Screenshots

1. **Visit App Store Pages:**
   - Yahoo Mail: https://apps.apple.com/us/app/yahoo-mail-organized-email/id577586159
   - Yahoo Finance: https://apps.apple.com/us/app/yahoo-finance-stocks-news/id328412701
   - Yahoo News: https://apps.apple.com/us/app/yahoo-news-your-guide-to-news/id304158842
   - ChargePoint: https://apps.apple.com/us/app/chargepoint/id459366381
   - Walmart: https://apps.apple.com/us/app/walmart/id338137227

2. **Get Screenshot URLs:**
   - Open browser DevTools (F12)
   - Go to Network tab
   - Scroll to screenshots section on App Store page
   - Look for requests to `is1-ssl.mzstatic.com`
   - Copy the full image URL
   - Add cropping: `?w=800&h=600&fit=crop&crop=center`

3. **Update `src/utils/appScreenshots.ts`:**
   - Replace placeholder URLs with real screenshot URLs

## Alternative: Download and Host Locally

1. Download screenshots from App Store pages
2. Save to `/public/images/` folder
3. Update `resume.ts` with paths like `/images/yahoo-mail.png`


