const {contentFullSpaceId,contentAccessToken,snipcartPublicKeyLive,nodeEnv,domain,googleAnalyticsId,keywords} = require('./environment')

/**
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * Learn about environment variables: https://gatsby.dev/env-vars
 */

let URL = nodeEnv === 'production' ? domain : 'http://localhost:8000'
const plugins = [
	'gatsby-plugin-typescript',
	'gatsby-plugin-react-helmet',
	{
		resolve: 'gatsby-source-contentful',
		options: {spaceId: contentFullSpaceId, accessToken: contentAccessToken}
	},
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			name: 'src',
			path: `${__dirname}/content`
		}
	},
	{
		resolve: 'gatsby-plugin-sass'

	},
	{
		resolve: 'gatsby-transformer-remark',
		options: {
			plugins: [
				'gatsby-remark-relative-images',
				{
					resolve: 'gatsby-remark-images',
					options: {
						maxWidth: 1000,
						maxHeight: 600,
						linkImagesToOriginal: false
					}
				}
			]
		}
	},
	{
		resolve: 'gatsby-plugin-snipcart',
		options: {apiKey: snipcartPublicKeyLive, autopop: false}
	},
	{
		resolve: 'gatsby-plugin-google-analytics',
		options: {trackingId: googleAnalyticsId}
	},
	'gatsby-plugin-fontawesome-css',
	'gatsby-remark-images',
	'gatsby-plugin-sharp',
	'gatsby-transformer-sharp',
	{
		resolve: 'gatsby-plugin-codegen',
		options: {}
	}
]

module.exports = {
	siteMetadata: {
		keywords: keywords,
		title: 'homestrength',
		author: 'Henri De Bel & Louis Seymons',
		titleTemplate: 'homestrength',
		description: 'webshop offering at home fitness solutions',
		url: domain,
		siteUrl: URL
	},
	plugins
}
