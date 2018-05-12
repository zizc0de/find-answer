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
		path: '/questions',
		component: Feed
	},
	{
		exact: true,
		path: '/question/:uid',
		component: FeedDetail
	},
	{
		exact: true,
		path: '/profile',
		component: Profile
	},
	{
		exact: true,
		path: '/profile/questions',
		component: ProfileFeed
	},
	{
		exact: true,
		path: '/',
		component: Home
	},
]

export default routes;