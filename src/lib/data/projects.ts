import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'quest',
		color: '#ff3e00',
		description: 'The app allows users to manage support, submit and track tickets, pay invoices, monitor orders, view quotes, and access a customizable knowledge base.',
		shortDescription: 'Manage support, track tickets, and access a customizable knowledge base.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.quest.quest', label: 'Android' },
		  { to: 'https://apps.apple.com/ph/app/quest-by-sourcepass/id6460978331', label: 'iOS' }
		],
		logo: Assets.Unknown,
		name: 'Quest',
		period: { from: new Date() },
		skills: getSkills('android', 'ios'),
		type: 'Support Management App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'safe-t-tag',
		color: '#ff3e00',
		description: 'Enhances electrical safety by replacing paper tags with instant device data access. Ideal for electricians, it offers secure data logging and online reporting.',
		shortDescription: 'Instant access to device data, replaces paper tags.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.safettag.safettag', label: 'Android' },
		  { to: 'https://apps.apple.com/ph/app/safe-t-tag/id6467346986', label: 'iOS' }
		],
		logo: Assets.Unknown,
		name: 'Safe T Tag',
		period: { from: new Date() },
		skills: getSkills('android', 'ios'),
		type: 'Electrical Safety App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'aloware-talk',
		color: '#ff3e00',
		description: 'Make and receive calls, send and receive texts using your business line on your mobile phone.',
		shortDescription: 'Business calling and messaging app.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.aloware.talk', label: 'Android' }
		],
		logo: Assets.Unknown,
		name: 'Aloware Talk',
		period: { from: new Date() },
		skills: getSkills('android'),
		type: 'Business Communication App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'the-first-try',
		color: '#ff3e00',
		description: 'View interactive documents related to Touch Football.',
		shortDescription: 'Interactive Touch Football documents.',
		links: [
		  { to: 'https://apps.apple.com/us/app/the-first-try/id1536540418', label: 'iOS' }
		],
		logo: Assets.Unknown,
		name: 'The First Try',
		period: { from: new Date() },
		skills: getSkills('ios', 'android', 'web'),
		type: 'Sports Documentation App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'c-ex-group',
		color: '#ff3e00',
		description: 'Provides dining, entertainment, and events information for three venues. Existing members can access membership details, view rewards, and receive personalized offers.',
		shortDescription: 'Venue and membership app.',
		links: [
		  { to: 'https://apps.apple.com/us/app/the-c-ex-group/id1575338636', label: 'iOS' },
		  { to: 'https://play.google.com/store/apps/details?id=com.cex', label: 'Android' }
		],
		logo: Assets.Unknown,
		name: 'The C.ex Group',
		period: { from: new Date() },
		skills: getSkills('ios', 'android'),
		type: 'Venue Management App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },

	  {
		slug: 'canterbury-leagues-club',
		color: '#ff3e00',
		description: 'One of Sydney\'s premier hospitality destinations offering 5-star amenities including restaurants, bars, entertainment lounges, and a 24-hour health club. The app provides news and events happening at the club.',
		shortDescription: 'Hospitality app with 5-star amenities and event updates.',
		links: [
		  { to: 'https://apps.apple.com/us/app/canterbury-leagues-club/id1033068779', label: 'iOS' },
		  { to: 'https://play.google.com/store/apps/details?id=com.mogeneration.dailypress.canterbury.club.androidapp', label: 'Android' }
		],
		logo: Assets.Unknown,
		name: 'Canterbury Leagues Club',
		period: { from: new Date() },
		skills: getSkills('ios', 'android'),
		type: 'Hospitality App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'cronulla-rsl',
		color: '#ff3e00',
		description: 'Cronulla RSL offers multiple bar areas, an outdoor terrace, and event spaces with picturesque views of Bate Bay. The app serves as a hub for membership management and club news.',
		shortDescription: 'Beachside hospitality with membership management features.',
		links: [
		  { to: 'https://apps.apple.com/us/app/cronulla-rsl/id1546196285', label: 'iOS' },
		  { to: 'https://play.google.com/store/apps/details?id=com.cronullarsl', label: 'Android' }
		],
		logo: Assets.Unknown,
		name: 'Cronulla RSL',
		period: { from: new Date() },
		skills: getSkills('ios', 'android'),
		type: 'Hospitality App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'direct-wireless-security',
		color: '#ff3e00',
		description: 'Enables users to arm/disarm security panels, view live status, and access alarm reports via their iOS or Android smartphones.',
		shortDescription: 'Security app for panel management and alarm monitoring.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=au.com.scsi.directwireless.dwsecurity&hl=en&gl=US', label: 'Android' },
		  { to: 'https://apps.apple.com/ph/app/dw-security/id1144262018', label: 'iOS' }
		],
		logo: Assets.Unknown,
		name: 'Direct Wireless Security',
		period: { from: new Date() },
		skills: getSkills('ios', 'android'),
		type: 'Security App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'direct-wireless-tech-tools',
		color: '#ff3e00',
		description: 'Provides access to CMS systems, DTU statuses, and configuration options, allowing users to control I/O ports and monitor signal strength and event reports.',
		shortDescription: 'CMS and DTU management with signal strength monitoring.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=au.com.scsi.directwireless.dwtechtool&hl=en_US&gl=US', label: 'Android' },
		  { to: 'https://apps.apple.com/us/app/dw-tech-tools/id1144280256', label: 'iOS' }
		],
		logo: Assets.Unknown,
		name: 'Direct Wireless Tech Tools',
		period: { from: new Date() },
		skills: getSkills('ios', 'android'),
		type: 'Tech Tool App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'dermobella-hair-2-evo',
		color: '#ff3e00',
		description: 'A professional hair analysis tool that measures scalp hydration, hair loss, and density, offering detailed data on various hair health parameters.',
		shortDescription: 'Hair analysis app for professionals.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.dermobellahaircloud_new.android', label: 'Android' }
		],
		logo: Assets.Unknown,
		name: 'DermoBella Hair 2 EVO',
		period: { from: new Date() },
		skills: getSkills('android'),
		type: 'Hair Analysis App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'dermobella-skin-2-evo',
		color: '#ff3e00',
		description: 'A skin diagnostic app that analyzes multiple parameters such as pores, wrinkles, pigmentation, and skin elasticity for professional use.',
		shortDescription: 'Professional skin diagnostic tool.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.dermobellaskincloud_new.android', label: 'Android' }
		],
		logo: Assets.Unknown,
		name: 'DermoBella Skin 2 EVO',
		period: { from: new Date() },
		skills: getSkills('android'),
		type: 'Skin Diagnostic App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'port-grace-for-leaders',
		color: '#ff3e00',
		description: 'A digital platform for church leaders to connect with their congregation, upload articles, share resources, and engage the community with sermons and discussions.',
		shortDescription: 'Digital platform for church leaders to engage with the congregation.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.peregrineconsultinggroup.portgrace.leader', label: 'Android' },
		  { to: 'https://apps.apple.com/lt/app/port-grace-for-leaders/id1572836895', label: 'iOS' }
		],
		logo: Assets.Unknown,
		name: 'Port Grace for Leaders',
		period: { from: new Date() },
		skills: getSkills('ios', 'android'),
		type: 'Church Leadership App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'port-grace-for-members',
		color: '#ff3e00',
		description: 'Allows congregation members to view resources, articles, and watch sermons from their pastor. The app enhances community engagement and helps members grow spiritually.',
		shortDescription: 'Congregation engagement app for spiritual growth.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.peregrineconsultinggroup.portgrace.user', label: 'Android' },
		  { to: 'https://apps.apple.com/lt/app/port-grace/id1549481663', label: 'iOS' }
		],
		logo: Assets.Unknown,
		name: 'Port Grace for Members',
		period: { from: new Date() },
		skills: getSkills('ios', 'android'),
		type: 'Congregation Engagement App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'goeconcierge',
		color: '#ff3e00',
		description: 'A travel planning and expense management app that simplifies organization and enhances collaboration for professionals on the go.',
		shortDescription: 'Travel planner with expense management features.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.chairseven.goeconcierge', label: 'Android' },
		  { to: 'https://apps.apple.com/tt/app/goeconcierge/id1551900933', label: 'iOS' }
		],
		logo: Assets.Unknown,
		name: 'GoEConcierge',
		period: { from: new Date() },
		skills: getSkills('ios', 'android'),
		type: 'Travel Planning App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'amore-pizzeria-lb',
		color: '#ff3e00',
		description: 'A pizza ordering app that offers options for collection or delivery, with quick checkout including Google Pay integration.',
		shortDescription: 'Pizza ordering app with collection or delivery options.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.digiruu.amorepizzeria&hl=en&gl=US', label: 'Android' }
		],
		logo: Assets.Unknown,
		name: 'Amore Pizzeria LB',
		period: { from: new Date() },
		skills: getSkills('android'),
		type: 'Food Ordering App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'tap',
		color: '#ff3e00',
		description: 'A productivity app that simplifies task requests, information sharing, and updates between team members and management.',
		shortDescription: 'Task management and information sharing app.',
		links: [
		  { to: 'https://apps.apple.com/ph/app/cloudstaff-tap/id1434496444', label: 'iOS' }
		],
		logo: Assets.Unknown,
		name: 'Tap',
		period: { from: new Date() },
		skills: getSkills('ios'),
		type: 'Productivity App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'staff-central',
		color: '#ff3e00',
		description: 'An application for timekeeping and serving as an information repository for staff, offering streamlined access to key resources.',
		shortDescription: 'Timekeeping and staff information management.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.cloudstaff.staffcentral', label: 'Android' }
		],
		logo: Assets.Unknown,
		name: 'Staff Central',
		period: { from: new Date() },
		skills: getSkills('android'),
		type: 'Staff Management App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'dream-card-rewards',
		color: '#ff3e00',
		description: 'View deals, redeem rewards, and manage your points using this app, which offers biddable items and personalized offers.',
		shortDescription: 'Rewards and points management app.',
		links: [
		  { to: 'https://apps.apple.com/in/app/cloudstaff-rewards/id1590970957', label: 'iOS' },
		  { to: 'https://play.google.com/store/apps/details?id=com.cloudstaff.rewardsv2&hl=en&gl=US', label: 'Android' }
		],
		logo: Assets.Unknown,
		name: 'Dream Card Rewards',
		period: { from: new Date() },
		skills: getSkills('ios', 'android'),
		type: 'Rewards App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'botley-web-portal',
		color: '#ff3e00',
		description: 'A web app serving as a configuration tool and knowledge base for the chatbot Botley, integrating with REST APIs for seamless access to data.',
		shortDescription: 'Chatbot configuration tool and knowledge base.',
		links: [
		  { to: 'https://botley.cloudstaff.com/', label: 'Web' }
		],
		logo: Assets.Unknown,
		name: 'Botley Web Portal',
		period: { from: new Date() },
		skills: getSkills('cakephp', 'mysql', 'rest'),
		type: 'Configuration Tool',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'botley-chat-bot',
		color: '#ff3e00',
		description: 'An automated enterprise assistant using AI and natural language processing to help staff access tools and information through a chatbot interface.',
		shortDescription: 'AI-powered enterprise chatbot assistant.',
		links: [],
		logo: Assets.Unknown,
		name: 'Botley (Chat Bot)',
		period: { from: new Date() },
		skills: getSkills('python', 'aiml', 'javascript'),
		type: 'AI Chat Bot',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'specialtyiq-rxprecheck-module',
		color: '#ff3e00',
		description: 'A specialty drug management web application that streamlines the drug prescription and validation process.',
		shortDescription: 'Specialty drug management web application.',
		links: [
		  { to: 'https://specialtyiq.com/', label: 'Web' }
		],
		logo: Assets.Unknown,
		name: 'SpecialtyIQ - RXPreCheck Module',
		period: { from: new Date() },
		skills: getSkills('asp.net'),
		type: 'Specialty Drug Management App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'job-order-inventory-system',
		color: '#ff3e00',
		description: 'A web application used for managing inventory items and assigning tasks to produce deliverables using available resources.',
		shortDescription: 'Inventory and job order management system.',
		links: [
		  { to: 'http://cs-proj-01.azurewebsites.net/', label: 'Web' }
		],
		logo: Assets.Unknown,
		name: 'Job Order and Inventory System',
		period: { from: new Date() },
		skills: getSkills('asp.net'),
		type: 'Inventory Management App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'trackasource',
		color: '#ff3e00',
		description: 'An internal iOS app that enables users to order various products from different categories.',
		shortDescription: 'Product ordering app.',
		links: [],
		logo: Assets.Unknown,
		name: 'Trackasource',
		period: { from: new Date() },
		skills: getSkills('ios'),
		type: 'Product Ordering App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'human-capital-management',
		color: '#ff3e00',
		description: 'An enterprise app suite for managing workforce processes, including three mobile apps for employees, labor hire, and customers, designed to improve workforce efficiency.',
		shortDescription: 'Workforce management suite for enterprise use.',
		links: [],
		logo: Assets.Unknown,
		name: 'Human Capital Management',
		period: { from: new Date() },
		skills: getSkills('android'),
		type: 'Workforce Management App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'buzz',
		color: '#ff3e00',
		description: 'An internal Android app used by clients to send messages to staff via standard communication protocols.',
		shortDescription: 'Internal messaging app for staff communication.',
		links: [],
		logo: Assets.Unknown,
		name: 'Buzz',
		period: { from: new Date() },
		skills: getSkills('android'),
		type: 'Messaging App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'chat',
		color: '#ff3e00',
		description: 'A customized version of Rocket Chat for internal company use, allowing team communication via iOS and Android apps.',
		shortDescription: 'Customized team communication platform.',
		links: [],
		logo: Assets.Unknown,
		name: 'Chat',
		period: { from: new Date() },
		skills: getSkills('ios', 'android'),
		type: 'Team Communication App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'meetup',
		color: '#ff3e00',
		description: 'A customized version of Jitsi meet mobile, enabling voice and video communication for internal company use.',
		shortDescription: 'Internal voice and video communication platform.',
		links: [],
		logo: Assets.Unknown,
		name: 'Meetup',
		period: { from: new Date() },
		skills: getSkills('ios', 'android'),
		type: 'Video Communication App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  },
	  {
		slug: 'task-it',
		color: '#ff3e00',
		description: 'An internal iOS app allowing users to record audio and video with notes and send them for remote task management.',
		shortDescription: 'Task management app with audio and video recording.',
		links: [],
		logo: Assets.Unknown,
		name: 'Task It!',
		period: { from: new Date() },
		skills: getSkills('ios'),
		type: 'Task Management App',
		screenshots: [
		  { label: 'screen 1', src: 'https://example.com/screenshot1.jpg' }
		]
	  }
];

export const title = 'Projects';
