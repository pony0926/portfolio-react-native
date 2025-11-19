// Automatic screenshot extraction from App Store and Google Play pages
// Uses iTunes Search API and direct image extraction to get real app screenshots

import { projects } from '../data/resume';

// Image proxy service for fetching and cropping images from any URL
const cropImage = (url: string, width: number = 800, height: number = 600): string => {
  if (!url) return '';
  // Use images.weserv.nl for cropping and optimization
  // This service fetches images from any URL and crops them
  return `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=${width}&h=${height}&fit=cover&output=webp`;
};

// Extract App Store ID from URL
const extractAppStoreId = (url: string): string | null => {
  if (!url) return null;
  const match = url.match(/\/id(\d+)/);
  return match ? match[1] : null;
};

// Note: For apps that don't have pre-fetched screenshots, you can:
// 1. Visit the App Store/Google Play page
// 2. Open DevTools → Network tab
// 3. Find screenshot image requests (is1-ssl.mzstatic.com for App Store)
// 4. Copy the direct image URL and add it to preFetchedScreenshots below

// Pre-fetched screenshot URLs from App Store and Google Play
// These are the actual screenshot image URLs extracted from the store pages
// Format: Direct image URLs from is1-ssl.mzstatic.com (App Store) or play-lh.googleusercontent.com (Google Play)
// 
// To get these URLs:
// 1. Visit the App Store/Google Play page for the app
// 2. Open browser DevTools (F12) → Network tab
// 3. Filter by "Img" or "mzstatic" (for App Store) or "play-lh" (for Google Play)
// 4. Scroll to the screenshots section on the store page
// 5. Find the image requests and copy the full image URL
// 6. Paste it here
const preFetchedScreenshots: Record<string, string> = {
  // Yahoo Mail - Fetched from iTunes API
  'yahoo-mail': 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/85/87/ad/8587ad0e-8173-dce0-9a92-81b3d3aa446c/e4eba64c-434e-44fb-b3e1-92602668a649_Tier-1_iPad_EN-US_Accounts.jpg/552x414bb.jpg',
  
  // Yahoo Finance - Fetched from iTunes API
  'yahoo-finance': 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9d/b3/84/9db384eb-0a87-dcac-ccba-f16e019676c2/1_iphone_5.5_en-CA.png/392x696bb.png',
  
  // ChargePoint - Fetched from iTunes API
  'chargepoint-main': 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/c6/7d/75/c67d7534-b790-3a9a-4186-627f5a6fe22a/4a9d7ab2-4fb7-4f53-8c3e-234c170e48f7_iOS_iPhone6.5_1242x2208_NA_US_U002bCanada_English_1.png/392x696bb.png',
  'chargepoint-payments': 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/ed/eb/8c/edeb8c0f-bcbc-325a-0daa-fe2b9414f282/9421312f-357c-483f-817d-a1a842bc61a8_iOS_iPhone6.5_1242x2688_NA_US_U002bCanada_English_2.png/230x498bb.webp', // Same as main ChargePoint app
  'chargepoint-fleet': 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/6e/82/1f/6e821f29-f184-9b23-e8d5-50e381daeb7a/041ba47e-e06a-4c10-9b11-519a6b86bfd7_iOS_iPhone6.5_1242x2688_NA_US_U002bCanada_English_3.png/230x498bb.webp', // Same as main ChargePoint app
  
  // Pear Therapeutics apps
  'pear-reset': 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/1e/3c/52/1e3c524d-cb15-7b02-4af1-cb8723c6893f/531022a3-5705-4a5c-90a1-aaf048559ef6_5.5__Display_1.jpg/392x696bb.jpg',
  'pear-reset-o': 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/1e/3c/52/1e3c524d-cb15-7b02-4af1-cb8723c6893f/531022a3-5705-4a5c-90a1-aaf048559ef6_5.5__Display_1.jpg/392x696bb.jpg', // Same as reSET
  
  // Walmart - Need to fetch
  'walmart-shopping': 'https://i.ytimg.com/vi/BZ0CAZvkaUI/hqdefault.jpg',
  'walmart-migration': 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f2/7b/09/f27b09f0-dd3e-e26e-f1d1-779a614050f2/6493475-001-FY26-Mobile-App-ASO-Sparky-Kit-06-13-IOS-65.jpg/230x498bb.webp'
};


// Get screenshot URL for a project
// Uses pre-fetched URLs first, then tries to construct from app links using iTunes API
export const getProjectScreenshot = (projectId: string): string => {
  // First, check pre-fetched screenshots
  const preFetchedUrl = preFetchedScreenshots[projectId];
  if (preFetchedUrl) {
    return cropImage(preFetchedUrl, 800, 600);
  }
  
  // If no pre-fetched URL, try to construct iTunes API URL for dynamic fetching
  // The component will need to handle this async, but we can provide the API endpoint
  const project = projects.find(p => p.id === projectId);
  if (!project || !project.appLinks) return '';
  
  // Try App Store first
  if (project.appLinks.appStore) {
    const appId = extractAppStoreId(project.appLinks.appStore);
    if (appId) {
      // Return empty - component should use fetchScreenshotFromItunes for async loading
      // Or we can use a service that provides the screenshot URL directly
      return '';
    }
  }
  
  // Fallback to Google Play (would need similar extraction)
  if (project.appLinks.googlePlay) {
    return '';
  }
  
  return '';
};

// Get screenshot URL with async support for dynamic fetching
// This can be used by components that support async image loading
export const getProjectScreenshotAsync = async (projectId: string): Promise<string> => {
  // First, check pre-fetched screenshots
  const preFetchedUrl = preFetchedScreenshots[projectId];
  if (preFetchedUrl) {
    return cropImage(preFetchedUrl, 800, 600);
  }
  
  // Try to fetch from iTunes API
  const project = projects.find(p => p.id === projectId);
  if (!project || !project.appLinks) return '';
  
  if (project.appLinks.appStore) {
    const appId = extractAppStoreId(project.appLinks.appStore);
    if (appId) {
      const screenshotUrl = await fetchScreenshotFromItunes(appId);
      if (screenshotUrl) {
        return cropImage(screenshotUrl, 800, 600);
      }
    }
  }
  
  return '';
};

// Helper function to fetch screenshot URL from iTunes API
// This can be called to populate the preFetchedScreenshots object
export const fetchScreenshotFromItunes = async (appId: string): Promise<string> => {
  try {
    const apiUrl = `https://itunes.apple.com/lookup?id=${appId}&country=us`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;
    
    const response = await fetch(proxyUrl);
    const data = await response.json();
    const appData = JSON.parse(data.contents);
    
    if (appData.results && appData.results.length > 0) {
      const app = appData.results[0];
      // Get the first iPhone screenshot
      if (app.screenshotUrls && app.screenshotUrls.length > 0) {
        return app.screenshotUrls[0];
      }
      // Fallback to iPad screenshots
      if (app.ipadScreenshotUrls && app.ipadScreenshotUrls.length > 0) {
        return app.ipadScreenshotUrls[0];
      }
    }
  } catch (error) {
    console.error('Error fetching screenshot from iTunes:', error);
  }
  return '';
};
