import { Home, Feed, FeedDetail, Profile, ProfileFeed } from 'pages';

const routes = [
	{
		exact: true,
		path: '/feed',
		component: Feed
	},
	{
		exact: true,
		path: '/feed/detail',
		component: FeedDetail
	},
	{
		exact: true,
		path: '/profile',
		component: Profile
	},
	{
		exact: true,
		path: '/profile/feed',
		component: ProfileFeed
	},
	{
		exact: true,
		path: '/',
		component: Home
	},
]

export default routes;