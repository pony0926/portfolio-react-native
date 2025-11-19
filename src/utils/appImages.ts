// App icon service and fallback system
// Using app-icon.net service for reliable app icons

export const getAppIconUrl = (bundleId: string, appStoreId?: string): string => {
  // Try app-icon.net service first (works for both iOS and Android)
  if (bundleId) {
    return `https://app-icon.net/api/${bundleId}/icon-512.png`;
  }
  // Fallback to App Store icon if we have the ID
  if (appStoreId) {
    return `https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/5a/0b/3c/5a0b3c1a-2c3a-4b3a-8b3a-8b3a8b3a8b3a/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg`;
  }
  return '';
};

// Bundle IDs for each app
export const appBundleIds: Record<string, { ios?: string; android?: string; appStoreId?: string }> = {
  'yahoo-mail': {
    ios: 'com.yahoo.mobile.mail',
    android: 'com.yahoo.mobile.client.android.mail',
    appStoreId: '577586159'
  },
  'yahoo-finance': {
    ios: 'com.yahoo.mobile.finance',
    android: 'com.yahoo.mobile.client.android.finance',
    appStoreId: '328412701'
  },
  'yahoo-news': {
    ios: 'com.yahoo.mobile.news',
    android: 'com.yahoo.mobile.client.android.yahoo',
    appStoreId: '304158842'
  },
  'chargepoint-main': {
    ios: 'com.coulomb.chargepoint',
    android: 'com.coulomb.chargepoint',
    appStoreId: '459366381'
  },
  'chargepoint-payments': {
    ios: 'com.coulomb.chargepoint',
    android: 'com.coulomb.chargepoint',
    appStoreId: '459366381'
  },
  'chargepoint-fleet': {
    ios: 'com.coulomb.chargepoint',
    android: 'com.coulomb.chargepoint',
    appStoreId: '459366381'
  },
  'pear-reset': {
    ios: 'com.peartherapeutics.reset',
    appStoreId: '1440500001'
  },
  'pear-reset-o': {
    ios: 'com.peartherapeutics.reset-o',
    appStoreId: '1440500002'
  },
  'pear-somryst': {
    ios: 'com.peartherapeutics.somryst',
    appStoreId: '1502587180'
  },
  'walmart-shopping': {
    ios: 'com.walmart.ecommerce',
    android: 'com.walmart.android',
    appStoreId: '338137227'
  },
  'walmart-migration': {
    ios: 'com.walmart.ecommerce',
    android: 'com.walmart.android',
    appStoreId: '338137227'
  }
};

// Generate gradient background based on company
export const getCompanyGradient = (company: string): string => {
  const gradients: Record<string, string> = {
    'Yahoo': 'from-purple-600/30 to-blue-600/30',
    'ChargePoint': 'from-green-600/30 to-blue-600/30',
    'Pear Therapeutics': 'from-blue-600/30 to-indigo-600/30',
    'Walmart eCommerce': 'from-blue-600/30 to-cyan-600/30',
  };
  return gradients[company] || 'from-blue-600/30 to-purple-600/30';
};

// Get app icon with fallback
export const getAppIcon = (projectId: string, _company: string): string => {
  const bundleInfo = appBundleIds[projectId];
  if (bundleInfo?.ios) {
    return getAppIconUrl(bundleInfo.ios, bundleInfo.appStoreId);
  }
  if (bundleInfo?.android) {
    return getAppIconUrl(bundleInfo.android);
  }
  return '';
};

// App-specific visual representations (for fallback)
export const getAppVisual = (projectId: string, company: string, _title: string): { icon: string; color: string; text: string } => {
  const visuals: Record<string, { icon: string; color: string; text: string }> = {
    'yahoo-mail': { icon: '📧', color: 'from-purple-500 to-blue-500', text: 'Yahoo Mail' },
    'yahoo-finance': { icon: '📈', color: 'from-green-500 to-blue-500', text: 'Yahoo Finance' },
    'yahoo-news': { icon: '📰', color: 'from-red-500 to-orange-500', text: 'Yahoo News' },
    'chargepoint-main': { icon: '🔌', color: 'from-green-500 to-emerald-500', text: 'ChargePoint' },
    'chargepoint-payments': { icon: '💳', color: 'from-blue-500 to-indigo-500', text: 'Payments' },
    'chargepoint-fleet': { icon: '🚗', color: 'from-cyan-500 to-blue-500', text: 'Fleet & Smart Home' },
    'pear-reset': { icon: '💊', color: 'from-blue-500 to-purple-500', text: 'reSET' },
    'pear-reset-o': { icon: '🏥', color: 'from-indigo-500 to-blue-500', text: 'reSET-O' },
    'pear-somryst': { icon: '😴', color: 'from-purple-500 to-pink-500', text: 'Somryst' },
    'walmart-shopping': { icon: '🛒', color: 'from-blue-500 to-cyan-500', text: 'Walmart' },
    'walmart-migration': { icon: '⚡', color: 'from-yellow-500 to-orange-500', text: 'React Native' },
  };
  
  return visuals[projectId] || { icon: company.charAt(0), color: getCompanyGradient(company), text: company };
};
