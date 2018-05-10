import { Login, Register, Home, Feed, FeedDetail, Profile, ProfileFeed } from 'pages';

const routes = [
	{
		exact: true,
		path: '/login',
		component: Login
	},
	{
		exact: true,
		path: '/register',
		component: Register
	},
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