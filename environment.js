const contentFullSpaceId = process.env.CONTENTFUL_SPACEID || 'xxxxxxxxxxxx'
const contentAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN || 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
const snipcartPublicKeyLive = process.env.SNIPCART_PUBLIC_KEY_LIVE || 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
const nodeEnv = process.env.NODE_ENV  || 'local'
const domain  = 'https://www.homestrength.be'
const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_TRACKING_ID|| 'xxxxxxxxxxxxxx'
const keywords = ['fitness', 'equipment', 'home', 'power', 'health', 'quality', 'workout', 'gym']
  
module.exports = {
	contentFullSpaceId,
	contentAccessToken,
	snipcartPublicKeyLive,
	nodeEnv,
	domain,
	googleAnalyticsId,
	keywords
}

