# How to Get Real App Images from Official Websites

## Quick Method: App Store Screenshots

### Step 1: Visit App Store Pages
Open each app's App Store page in your browser:

- **Yahoo Mail**: https://apps.apple.com/us/app/yahoo-mail-organized-email/id577586159
- **Yahoo Finance**: https://apps.apple.com/us/app/yahoo-finance-stocks-news/id328412701
- **Yahoo News**: https://apps.apple.com/us/app/yahoo-news-your-guide-to-news/id304158842
- **ChargePoint**: https://apps.apple.com/us/app/chargepoint/id459366381
- **Walmart**: https://apps.apple.com/us/app/walmart/id338137227

### Step 2: Get Screenshot URLs
1. Open browser DevTools (F12 or Right-click → Inspect)
2. Go to **Network** tab
3. Filter by "Img" or "mzstatic"
4. Scroll to the screenshots section on the App Store page
5. You'll see image requests like: `https://is1-ssl.mzstatic.com/image/thumb/...`
6. Right-click on the request → Copy → Copy URL
7. The URL will look like: `https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/.../source/392x696bb.jpg`

### Step 3: Update the Code
1. Open `src/utils/appScreenshots.ts`
2. Replace the empty strings in `baseScreenshotUrls` with the URLs you copied
3. The image proxy service will automatically crop them to 800x600

## Alternative: Download and Host Locally

1. Download screenshots from App Store pages
2. Save to `/public/images/` folder with names like:
   - `yahoo-mail.png`
   - `yahoo-finance.png`
   - `chargepoint.png`
   - etc.
3. Update `src/data/resume.ts` with paths like `/images/yahoo-mail.png`

## Using Company Website Images

If you find images on official company websites:
1. Right-click on the image → Copy Image Address
2. Update `baseScreenshotUrls` in `appScreenshots.ts`
3. The proxy service will automatically crop and optimize them


