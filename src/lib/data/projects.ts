import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'quest',
		color: 'blue',
		description: 'The app allows users to manage support, submit and track tickets, pay invoices, monitor orders, view quotes, and access a customizable knowledge base.',
		shortDescription: 'Manage support, track tickets, and access a customizable knowledge base.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.quest.quest', label: 'Android' },
		  { to: 'https://apps.apple.com/ph/app/quest-by-sourcepass/id6460978331', label: 'iOS' }
		],
		logo: Assets.Quest,
		name: 'Quest',
		period: { from: new Date() },
		skills: getSkills('android', 'ios', 'swiftui', 'kotlin'),
		type: 'Support Management App',
		screenshots: [
		  { label: 'Screens', src: 'https://www.sourcepass.com/hs-fs/hubfs/QuestMobileBorder.png?width=2582&height=1250&name=QuestMobileBorder.png' }
		]
	  },
	  {
		slug: 'safe-t-tag',
		color: 'blue',
		description: 'Enhances electrical safety by replacing paper tags with instant device data access. Ideal for electricians, it offers secure data logging and online reporting.',
		shortDescription: 'Instant access to device data, replaces paper tags.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.safettag.safettag', label: 'Android' },
		  { to: 'https://apps.apple.com/ph/app/safe-t-tag/id6467346986', label: 'iOS' }
		],
		logo: Assets.SafeTTag,
		name: 'Safe T Tag',
		period: { from: new Date() },
		skills: getSkills('android', 'ios', 'swift', 'kotlin'),
		type: 'Electrical Safety App',
		screenshots: [
		  { label: 'Splash', src: 'https://play-lh.googleusercontent.com/TfWBkCwMv7ooMbTNsFIXOX3y9u_Bkq-ucU7M75fVyHxOnJLPxN2DQ0M_2WXQ7qQROt0=w1052-h592-rw' },
		  { label: 'Home', src: 'https://play-lh.googleusercontent.com/C0tocsC2vtKH4S4yPtFeoNR4-GcVfM259fJjkaFBGfnei7yaiI2oi9JQpgwuZReRAQ8=w1052-h592-rw' },
		  { label: 'Dashboard', src: 'https://play-lh.googleusercontent.com/xr3pAqxvSm27y6F5mK9LBJgj_EOjvbw9j2UpGLLtrFk4x6PsFqHm5vO_tCU7andr_Ek=w1052-h592-rw' },
		  { label: 'Distributors', src: 'https://play-lh.googleusercontent.com/3zfyaFB2AcW3sn3uEHrSfzGiETw52I_lZse9B_Rh5L3H8IwI-67i0i832pEHfaEc4Xs=w1052-h592-rw' }
		]
	  },
	  {
		slug: 'aloware-talk',
		color: 'blue',
		description: 'Make and receive calls, send and receive texts using your business line on your mobile phone.',
		shortDescription: 'Business calling and messaging app.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.aloware.talk', label: 'Android' }
		],
		logo: Assets.Talk2,
		name: 'Aloware Talk',
		period: { from: new Date() },
		skills: getSkills('android', 'ios', 'swift', 'kotlin'),
		type: 'Business Communication App',
		screenshots: [
		  { label: 'Inbox', src: 'https://play-lh.googleusercontent.com/6ZwtDrA-PdN9bVBPLuZiNdxKyjRha2RFMz3xDYviZ9iB7GGxiYcQuBfd_8Z50bS9jmCd=w526-h296-rw' },
		  { label: 'Dialer', src: 'https://play-lh.googleusercontent.com/Ub88XKKDvCPAn-OMIfZGmaRoKmdrmnT804NAXrQW1vS1WZellhCp1dTEqnemHsKheLA=w526-h296-rw' }
		]
	  },
	  {
		slug: 'the-first-try',
		color: 'blue',
		description: 'View interactive documents related to Touch Football.',
		shortDescription: 'Interactive Touch Football documents.',
		links: [
		  { to: 'https://apps.apple.com/us/app/the-first-try/id1536540418', label: 'iOS' }
		],
		logo: Assets.TouchFooty,
		name: 'The First Try',
		period: { from: new Date() },
		skills: getSkills('ios', 'swift'),
		type: 'Sports Documentation App',
		screenshots: [
		  { label: 'screen 1', src: '' }
		]
	  },
	  {
		slug: 'the-first-try-cms',
		color: 'blue',
		description: 'CMS for interactive documents related to Touch Football.',
		shortDescription: 'CMS for Interactive Touch Football documents.',
		links: [
		  { to: 'https://touchfooty.herokuapp.com/admin', label: 'Strapi CMS' }
		],
		logo: Assets.TouchFooty,
		name: 'Touch Footy CMS',
		period: { from: new Date() },
		skills: getSkills('strapi'),
		type: 'Sports Documentation App',
		screenshots: []
	  },
	  {
		slug: 'c-ex-group',
		color: 'blue',
		description: 'Provides dining, entertainment, and events information for three venues. Existing members can access membership details, view rewards, and receive personalized offers.',
		shortDescription: 'Venue and membership app.',
		links: [
		  { to: 'https://apps.apple.com/us/app/the-c-ex-group/id1575338636', label: 'iOS' },
		  { to: 'https://play.google.com/store/apps/details?id=com.cex', label: 'Android' }
		],
		logo: Assets.CEX,
		name: 'The C.ex Group',
		period: { from: new Date() },
		skills: getSkills('ios', 'android', 'swift', 'kotlin'),
		type: 'Venue Management App',
		screenshots: [
		  { label: 'Card', src: 'https://play-lh.googleusercontent.com/mOOedTjHThBpRLG9n1lhtrecdcH8PIDH_9oDTVsSxbx5FtCAbu3wY7Jv9yLqow16kF8p=w526-h296-rw' },
		  { label: 'Membership', src: 'https://play-lh.googleusercontent.com/370kyenIeMqB_GbxlaRy4kWHeQwLcgoNycpzgs6s1UP5ZaJeqI96kY8AtzUKuR5ZZOA=w526-h296-rw' },
		  { label: 'Auth', src: 'https://play-lh.googleusercontent.com/EYouooGWDXv8-TuXoj9Qj2ITxPDXPbr3ufO8NEtokQYNPs9wPHmaBthR4oQeFBDb9g=w526-h296-rw' },
		  { label: 'Main', src: 'https://play-lh.googleusercontent.com/8lDN-9obTAKdYwWiu_Vjos259Ol7miiGpnN-zJeADffVxMbEKpWepu5GDeOwxlHQXA=w526-h296-rw' },
		  { label: 'Food & Drink', src: 'https://play-lh.googleusercontent.com/6UBopA5VdY5ILXLDlDDjdMJAgEhMtI5wrEYx9C5cPH3gH22r1vE5iM5Y91xbgRiBNJw=w526-h296-rw' },
		  { label: 'Details', src: 'https://play-lh.googleusercontent.com/XJrXxBYmQHwM_JMv-cNDMA_rS1XWxv55tTSE52rQvvHe0lXjoRyNUo8m7VD32RJ806U=w526-h296-rw' },
		  { label: 'Pick a Box', src: 'https://play-lh.googleusercontent.com/HkuCEXPhayjcvhBWixkeRQ34T-YodFc1yCeWWRfCABDVNgGzrPS2LJSoWHl85S27VRo=w526-h296-rw' },
		  { label: 'Events', src: 'https://play-lh.googleusercontent.com/LqRD2lzRfgDzt6umG8xpsHPeWmZjIRz_ukedY2D_PA_-hnWHBAQteOVJx_kK4WiAuXQ=w526-h296-rw' }
		]
	  },

	  {
		slug: 'canterbury-leagues-club',
		color: 'blue',
		description: 'One of Sydney\'s premier hospitality destinations offering 5-star amenities including restaurants, bars, entertainment lounges, and a 24-hour health club. The app provides news and events happening at the club.',
		shortDescription: 'Hospitality app with 5-star amenities and event updates.',
		links: [
		  { to: 'https://apps.apple.com/us/app/canterbury-leagues-club/id1033068779', label: 'iOS' },
		  { to: 'https://play.google.com/store/apps/details?id=com.mogeneration.dailypress.canterbury.club.androidapp', label: 'Android' }
		],
		logo: Assets.Canterbury,
		name: 'Canterbury Leagues Club',
		period: { from: new Date() },
		skills: getSkills('ios', 'android', 'swift', 'kotlin'),
		type: 'Hospitality App',
		screenshots: [
		  { label: 'Menu', src: 'https://play-lh.googleusercontent.com/hzvAmociFu1cM9c3lkM6l9INO7__7qVFfd2kox3wS2nik-aXD9Ajqt_mp6h16i9Cwbs=w526-h296-rw' },
		  { label: 'Sub Menu', src: 'https://play-lh.googleusercontent.com/QNKS80V51uHKO3Y1MlUYASYssDFnHhKM92eTeNii3BioKNzaTS-iCZ8PIfsbqUStgQ=w526-h296-rw' },
		  { label: 'Pick A Box', src: 'https://play-lh.googleusercontent.com/MzwEHmwHU1BZA3HRBOgA0ypb2jiSr0Rpem-qTbtbXOPvMyXi-nhbeyiacvfz1mrYXA=w526-h296-rw' },
		  { label: 'About', src: 'https://play-lh.googleusercontent.com/RP6J6CUoysDn08c8UhcGR5vJSvgCv9M9iLJJ9CZoxMTRRqKdm0iEcoGfhkNL3UxfC2W3=w526-h296-rw' }
		]
	  },
	  {
		slug: 'cronulla-rsl',
		color: 'blue',
		description: 'Cronulla RSL offers multiple bar areas, an outdoor terrace, and event spaces with picturesque views of Bate Bay. The app serves as a hub for membership management and club news.',
		shortDescription: 'Beachside hospitality with membership management features.',
		links: [
		  { to: 'https://apps.apple.com/us/app/cronulla-rsl/id1546196285', label: 'iOS' },
		  { to: 'https://play.google.com/store/apps/details?id=com.cronullarsl', label: 'Android' }
		],
		logo: Assets.Cronulla,
		name: 'Cronulla RSL',
		period: { from: new Date() },
		skills: getSkills('ios', 'android', 'swift', 'kotlin'),
		type: 'Hospitality App',
		screenshots: [
			{ label: 'Auth', src: 'https://play-lh.googleusercontent.com/6pY1daW3518oDC0Q3RPu4VMEovDs88z1cB9WGX8DMfyXq1i3HpCJuadFORAMZjgAjqg=w526-h296-rw' },
			{ label: 'Biometric', src: 'https://play-lh.googleusercontent.com/ZK1Nf4apr_TCfmp7d16TQzHIwu0V4b6gyegozDslqHxeWcx3CXx1hq65BQZx2XUd4ek=w526-h296-rw' },
			{ label: 'Card', src: 'https://play-lh.googleusercontent.com/ErhXeqIzC2rA-HP6PordfeKdQLjOGMuYoDs6oH5-Z3EOf54Bd4GbboorBdYhQ5GofFk=w526-h296-rw' },
			{ label: 'Menu', src: 'https://play-lh.googleusercontent.com/2zthtpnJ7axDZCJkde3NsqDdYVQND7fusQtCuv-n20fpVq18ogPb9LUWK8F3OAZuY_w=w526-h296-rw' },
			{ label: 'Profile', src: 'https://play-lh.googleusercontent.com/TS9VLZz3wM_UD8-VwM1zRpFh8t4123QmIJa79WAdAOD4BQPqpg3wmvmZ57jchluPrsw=w526-h296-rw' }
		]
	  },
	  {
		slug: 'direct-wireless-security',
		color: 'blue',
		description: 'Enables users to arm/disarm security panels, view live status, and access alarm reports via their iOS or Android smartphones.',
		shortDescription: 'Security app for panel management and alarm monitoring.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=au.com.scsi.directwireless.dwsecurity&hl=en&gl=US', label: 'Android' },
		  { to: 'https://apps.apple.com/ph/app/dw-security/id1144262018', label: 'iOS' }
		],
		logo: Assets.DWSecurity,
		name: 'Direct Wireless Security',
		period: { from: new Date() },
		skills: getSkills('ios', 'android', 'swift', 'kotlin'),
		type: 'Security App',
		screenshots: [
		  { label: 'Login', src: 'https://play-lh.googleusercontent.com/QoeFdKp0M936Md-KGy3hZPtDCFUmg6ZJk2ES2Mvd37BsGmtCiIhzSRn3DW9t6EzL-w=w1052-h592-rw' },
		  { label: 'Biometrics', src: 'https://play-lh.googleusercontent.com/duSyMAkzDY-s7dwgpGQSYc_FO6hqNPajHd5RdWtkt-oQHSzD2jSnGpaOL3nVJVbP0NA=w1052-h592-rw' },
		  { label: 'Dashboard', src: 'https://play-lh.googleusercontent.com/dEoj4uUxfFWfDLplN1vn5aVdB9JUdadRGERbbGUClvhvCGlIPQqlXhpTPChDNSc9DQ=w1052-h592-rw' },
		  { label: 'Toolbox', src: 'https://play-lh.googleusercontent.com/FFEsqmSQ2LyJYED5DgWsDJiT5ZjLGEDpgb9mGM5uQBg75Illl2mv4YpgeosUhpzFORQ=w1052-h592-rw' },
		  { label: 'Account', src: 'https://play-lh.googleusercontent.com/vyv1LU5mMr_ieJSVFeSAoSv2pB40oFLNb-vF4V7HYAM1ytj6dFCbOvYYhlhaLSsPYL4=w1052-h592-rw' },
		  { label: 'History', src: 'https://play-lh.googleusercontent.com/wYfm2gB0GtX0DibXa8c-KtFLIdEgBTiqoU380q9f4e7cqnL14Y67l3vc7cKzPN_xtg=w1052-h592-rw' },
		  { label: 'Advance History', src: 'https://play-lh.googleusercontent.com/myXIE5u55TzI8B6-Re1yTOmiwBKg3iKH5v0pyL_CmvhUzPdvRkqBDXwuV3zg7nlSR2o=w1052-h592-rw' },
		  { label: 'Config', src: 'https://play-lh.googleusercontent.com/FohXEThy5E50vDG5FIObrdmDvp1o0IQZtc0RDJ8KFVvDG-1zS1jwCLqBnXehn__2AVc=w1052-h592-rw' }
		]
	  },
	  {
		slug: 'direct-wireless-tech-tools',
		color: 'blue',
		description: 'Provides access to CMS systems, DTU statuses, and configuration options, allowing users to control I/O ports and monitor signal strength and event reports.',
		shortDescription: 'CMS and DTU management with signal strength monitoring.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=au.com.scsi.directwireless.dwtechtool&hl=en_US&gl=US', label: 'Android' },
		  { to: 'https://apps.apple.com/us/app/dw-tech-tools/id1144280256', label: 'iOS' }
		],
		logo: Assets.DWTech,
		name: 'Direct Wireless Tech Tools',
		period: { from: new Date() },
		skills: getSkills('ios', 'android', 'swift', 'java'),
		type: 'Tech Tool App',
		screenshots: [
		  { label: 'Auth', src: 'https://play-lh.googleusercontent.com/ulMlYm433XWgtBb-aCZ0Ozi_UFVfx4s80c-xonqkDB8QUa4NJIueIfteqKjm61U5zQ=w526-h296-rw' },
		  { label: 'Main', src: 'https://play-lh.googleusercontent.com/p_jWZbdHCoXMeJbJVSslDHB7zeOz30InZaq2norC7Epu-h0vfXZ4s_VSuH0CiJm928w=w526-h296-rw' },
		  { label: 'Accounts', src: 'https://play-lh.googleusercontent.com/WSNfmSPrtGAmWmcrcugLJy3ys86Xsb8kNjoNkO_p4E_N1HXl22eNwi-8VlyqUw9hnD8=w526-h296-rw' },
		  { label: 'Status', src: 'https://play-lh.googleusercontent.com/5xoFJ8oSsKTvqKYZEfXkkPjVfw9Ib_v18EdIcsnSi-57jMr81LkYmW-T-xCnA08Jv1ex=w526-h296-rw' },
		  { label: 'Options', src: 'https://play-lh.googleusercontent.com/AiRVN5JbrsEq3D47wHbPqKLiUp4Wm1V_G9GjF9omKWJTH22Q5ESHJFwgXzT94M1XOg=w526-h296-rw' }
		]
	  },
	  {
		slug: 'dermobella-hair-2-evo',
		color: 'blue',
		description: 'A professional hair analysis tool that measures scalp hydration, hair loss, and density, offering detailed data on various hair health parameters.',
		shortDescription: 'Hair analysis app for professionals.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.dermobellahaircloud_new.android', label: 'Android' }
		],
		logo: Assets.DBHair,
		name: 'DermoBella Hair 2 EVO',
		period: { from: new Date() },
		skills: getSkills('android', 'java'),
		type: 'Hair Analysis App',
		screenshots: [
		  { label: 'Main', src: 'https://play-lh.googleusercontent.com/TglospZ2Wh3sZf0mOos5wI0Bbb8utO1ayFLVBz79vxyKsCij_H4BHh_qaOyFXxTffRDl=w526-h296-rw' },
		  { label: 'Customer Management', src: 'https://play-lh.googleusercontent.com/HPXpsT892QeGwz9j-ZqWbx69rnZpw1qyTaKPIYuCdV30l6zb3-dkvak3q03_6DOVOM5p=w526-h296-rw' },
		  { label: 'Analysis', src: 'https://play-lh.googleusercontent.com/xUPNDLKcNHtpkHtNBSRca8FKY-6k2OEfZTXoP75yp_H5UIShCrmFypFAGfROsO_oxCGm=w526-h296-rw' },
		  { label: 'Review', src: 'https://play-lh.googleusercontent.com/h81-Cc1FckoPdpWc4iReYGOqwTcsvSL8YPu0PdF0_BsX60Ym4Qb-8FhcMUaZ3AWP81Kx=w526-h296-rw' },
		  { label: 'Results', src: 'https://play-lh.googleusercontent.com/cYEU0z3K-ULBWOi6X2NdPhywMJmpZeooTEAXFK2mgXs8CMqi5qiHuTy7ejx8bUlveYbB=w526-h296-rw' }
		]
	  },
	  {
		slug: 'dermobella-skin-2-evo',
		color: 'blue',
		description: 'A skin diagnostic app that analyzes multiple parameters such as pores, wrinkles, pigmentation, and skin elasticity for professional use.',
		shortDescription: 'Professional skin diagnostic tool.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.dermobellaskincloud_new.android', label: 'Android' }
		],
		logo: Assets.DBSkin,
		name: 'DermoBella Skin 2 EVO',
		period: { from: new Date() },
		skills: getSkills('android', 'java'),
		type: 'Skin Diagnostic App',
		screenshots: [
		  { label: 'Main', src: 'https://play-lh.googleusercontent.com/1SVPkDnESEXgzmwLypvOSXPX3UT4_xbjjTBI5QplX3OSAhldZPsSPosl5cUDQStshA=w526-h296-rw' },
		  { label: 'Customer Management', src: 'https://play-lh.googleusercontent.com/IuMmQS8RkhbQtKbzKdNAzlwkpKjKduXs8gWqH3pRtFlq18TX0C0p_xthz3ZqjYTSZ_g=w526-h296-rw' },
		  { label: 'Analysis', src: 'https://play-lh.googleusercontent.com/2KVhe5E2nXQoc45PiHDfzPz_aXi4_IwAytT9JQfveu_tZIrp2FkCviifj4LVWvOL_AM=w526-h296-rw' },
		  { label: 'Review', src: 'https://play-lh.googleusercontent.com/L5CNhpOgG2MlYFjWsnI3fDIB9-Ta7IdY4g9nAGWDlv7LQFHafuXJCAudTz76pgMdP_A=w526-h296-rw' },
		  { label: 'Results', src: 'https://play-lh.googleusercontent.com/jddNdAREpILFNhl2BzmrA13rb1BIKJ--3REHmyPdHTs9Oh_zq0sx4RJiOwqQy343xA=w526-h296-rw' }
		]
	  },
	  {
		slug: 'port-grace-for-leaders',
		color: 'blue',
		description: 'A digital platform for church leaders to connect with their congregation, upload articles, share resources, and engage the community with sermons and discussions.',
		shortDescription: 'Digital platform for church leaders to engage with the congregation.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.peregrineconsultinggroup.portgrace.leader', label: 'Android' },
		  { to: 'https://apps.apple.com/lt/app/port-grace-for-leaders/id1572836895', label: 'iOS' }
		],
		logo: Assets.PortgraceLeader,
		name: 'Port Grace for Leaders',
		period: { from: new Date() },
		skills: getSkills('ios', 'android', 'swift', 'kotlin'),
		type: 'Church Leadership App',
		screenshots: [
			{ label: 'Dashboard', src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/66/b0/a4/66b0a4ba-722b-6ab5-0afb-0536628fca79/9da08125-e653-4d13-8f30-090aa2459634_leader_6.5_iphone_1.jpg/460x0w.webp' },
			{ label: 'Churches', src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/4d/bb/81/4dbb817f-a9d8-15a7-b2fd-89edc2ad6807/55dc2e30-cecb-437e-9ecb-a48046991ed2_leader_6.5_iphone_2.jpg/460x0w.webp' },
			{ label: 'Sermons', src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/54/bd/a5/54bda51d-d912-1a0e-d179-476b85579ed2/566f6846-660e-4d10-89ac-a51c286f47d0_leader_6.5_iphone_3.jpg/460x0w.webp' },
			{ label: 'Chat', src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/05/28/48/052848cf-56f2-7ca8-bdcb-5d01a8d1e0e9/8cf4f9e2-0384-4bf4-81ab-40e4e9e5bdc2_leader_6.5_iphone_4.jpg/460x0w.webp' }
		]
	  },
	  {
		slug: 'port-grace-for-members',
		color: 'blue',
		description: 'Allows congregation members to view resources, articles, and watch sermons from their pastor. The app enhances community engagement and helps members grow spiritually.',
		shortDescription: 'Congregation engagement app for spiritual growth.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.peregrineconsultinggroup.portgrace.user', label: 'Android' },
		  { to: 'https://apps.apple.com/lt/app/port-grace/id1549481663', label: 'iOS' }
		],
		logo: Assets.Portgrace,
		name: 'Port Grace for Members',
		period: { from: new Date() },
		skills: getSkills('ios', 'android', 'swift', 'kotlin'),
		type: 'Congregation Engagement App',
		screenshots: [
			{ label: 'Dashboard', src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/b8/f3/bb/b8f3bbfd-066c-3cb0-828c-8b9b09987564/63e78eda-d74c-4149-909b-7a1f658c2613_member_6.5_1.jpg/460x0w.webp' },
			{ label: 'Churches', src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/73/e2/9d/73e29db2-b10b-e8c5-c1d2-f1a51d518bb3/0a7c4f0a-2b74-4080-9114-c7280d8c3087_member_6.5_2.jpg/460x0w.webp' },
			{ label: 'Sermons', src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/4e/ba/9e/4eba9e8d-1a2a-56bc-26cf-421626f9895d/1449f31a-c31d-4a09-8e7c-f030a93fa00d_member_6.5_3.jpg/460x0w.webp' },
			{ label: 'Chat', src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/42/ef/e6/42efe6a8-f18f-6cf8-fb3f-a172ef3edc71/00919bb0-3778-4360-97d3-62ed0cabefb2_member_6.5_4.jpg/460x0w.webp' }
		]
	  },
	  {
		slug: 'hcm-employee',
		color: 'blue',
		description: 'The HCMevolve Employee App is the go-to self-service solution for employees within businesses utilizing the HCMevolve Platform for efficient timesheet and payroll management. With secure access, employees can conveniently review their personal profiles, submit timesheets, and more, streamlining administrative tasks.',
		shortDescription: 'Employee Self-Service',
		links: [
			{ to: 'https://play.google.com/store/apps/details?id=com.HCMevolve.employee', label: 'Android' }
		],
		logo: Assets.HCM,
		name: 'HCMEvolve Employee',
		period: { from: new Date() },
		skills: getSkills('android', 'kotlin'),
		type: 'Workforce Management App',
		screenshots: [
			{ label: 'Auth', src: 'https://play-lh.googleusercontent.com/wds7CxwmzjpBgag0SneXlzC2FrjSae2KT56EjbZB-7WM_ShS69cQWeVFP8SyVH8fNLA=w526-h296-rw' },
			{ label: 'Main', src: 'https://play-lh.googleusercontent.com/u9qttnqYwaav5RNeQMcCDreq-hqvwuGMY4x16nBQHn-iO5TarTtZH1y0IyBIaWJ1sTU=w526-h296-rw' },
			{ label: 'Profile', src: 'https://play-lh.googleusercontent.com/I93F9ioVCS2JPG0tbyVBHo45PUh1TOgfUhQEyozznVxLD4bCC9PcNVcq7B6ZVvdQzA=w526-h296-rw' },
			{ label: 'Timesheets', src: 'https://play-lh.googleusercontent.com/_Bw5AtVU7GPL6dRAY4yBugivndefyzfKdopRlxhqSpQs829MKFhTJ3I5vtZEF1xWjQHz=w526-h296-rw' },
			{ label: 'Manage Timesheet', src: 'https://play-lh.googleusercontent.com/qCBNemG6oeXr40YTiIRYzqs6xxJVLE6Mc-BTYGpobPYsgbFf_zOkEFLC1eCL6EIbGw=w526-h296-rw' },
			{ label: 'Modify Timesheet', src: 'https://play-lh.googleusercontent.com/KaQeYKgi0IDjXjuA4L4m0j5nXlwsW6AM6G_gYetTb5nyGEZdlSzKwIl9ad6QdZxw0560=w526-h296-rw' },
			{ label: 'Timesheet Status', src: 'https://play-lh.googleusercontent.com/8C1F3bPepcoBbQbgWNxh3xIvbIBZXFIKD0EVXPttOPM5As0JCzUP4EaVY8OubXIR4pw=w526-h296-rw' }
		]
	  },
	  {
		slug: 'goeconcierge',
		color: 'blue',
		description: 'A travel planning and expense management app that simplifies organization and enhances collaboration for professionals on the go.',
		shortDescription: 'Travel planner with expense management features.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.chairseven.goeconcierge', label: 'Android' },
		  { to: 'https://apps.apple.com/tt/app/goeconcierge/id1551900933', label: 'iOS' }
		],
		logo: Assets.GoEC,
		name: 'GoEConcierge',
		period: { from: new Date() },
		skills: getSkills('ios', 'android', 'swift', 'kotlin'),
		type: 'Travel Planning App',
		screenshots: [
			{ label: 'Features', src: 'https://image.winudf.com/v2/image1/Y29tLmNoYWlyc2V2ZW4uZ29lY29uY2llcmdlX3NjcmVlbl8wXzE2MzEyODgzOTNfMDcw/screen-0.webp?h=200&fakeurl=1&type=.webp' },
			{ label: 'Suitcases', src: 'https://image.winudf.com/v2/image1/Y29tLmNoYWlyc2V2ZW4uZ29lY29uY2llcmdlX3NjcmVlbl8xXzE2MzEyODgzOTVfMDQw/screen-1.webp?h=200&fakeurl=1&type=.webp' },
			{ label: 'Document', src: 'https://image.winudf.com/v2/image1/Y29tLmNoYWlyc2V2ZW4uZ29lY29uY2llcmdlX3NjcmVlbl8yXzE2MzEyODgzOThfMDE5/screen-2.webp?h=200&fakeurl=1&type=.webp' },
			{ label: 'Expense Report', src: 'https://image.winudf.com/v2/image1/Y29tLmNoYWlyc2V2ZW4uZ29lY29uY2llcmdlX3NjcmVlbl8zXzE2MzEyODg0MDlfMDI1/screen-3.webp?h=200&fakeurl=1&type=.webp' },
			{ label: 'Mileage', src: 'https://image.winudf.com/v2/image1/Y29tLmNoYWlyc2V2ZW4uZ29lY29uY2llcmdlX3NjcmVlbl80XzE2MzEyODg0MjRfMDk3/screen-4.webp?h=200&fakeurl=1&type=.webp' },
			{ label: 'Tasks & Lists', src: 'https://image.winudf.com/v2/image1/Y29tLmNoYWlyc2V2ZW4uZ29lY29uY2llcmdlX3NjcmVlbl81XzE2MzEyODg0MzBfMDUw/screen-5.webp?h=200&fakeurl=1&type=.webp' },
			{ label: 'Profile & Resources', src: 'https://image.winudf.com/v2/image1/Y29tLmNoYWlyc2V2ZW4uZ29lY29uY2llcmdlX3NjcmVlbl82XzE2MzEyODg0MzFfMDY3/screen-6.webp?h=200&fakeurl=1&type=.webp' }
		]
	  },
	  {
		slug: 'trackasource',
		color: 'blue',
		description: 'An internal iOS app that enables users to order various products from different categories.',
		shortDescription: 'Product ordering app.',
		links: [],
		logo: Assets.Unknown,
		name: 'Trackasource',
		period: { from: new Date() },
		skills: getSkills('ios', 'swift'),
		type: 'Product Ordering App',
		screenshots: []
	  },
	  {
		slug: 'amore-pizzeria-lb',
		color: 'blue',
		description: 'A pizza ordering app that offers options for collection or delivery, with quick checkout including Google Pay integration.',
		shortDescription: 'Pizza ordering app with collection or delivery options.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.digiruu.amorepizzeria&hl=en&gl=US', label: 'Android' }
		],
		logo: Assets.Amore,
		name: 'Amore Pizzeria LB',
		period: { from: new Date() },
		skills: getSkills('android', 'kotlin'),
		type: 'Food Ordering App',
		screenshots: [
		  { label: 'Menu', src: 'https://play-lh.googleusercontent.com/-hmQBnOSoHWqIg30YRYJWEhzy-aXCCxn0yseyJ25RJaS9UUdIrHcb3rO3Bs4Os_mzyJ9=w1052-h592-rw' },
		  { label: 'Gluten-Free', src: 'https://play-lh.googleusercontent.com/dbiWXulLP3_-KfGMeIpUrGGYhVfyaCou9Zf13bFajzCeR_Cl-gckJuENyRMFju-YYlc=w1052-h592-rw' },
		  { label: 'Checkout', src: 'https://play-lh.googleusercontent.com/ZxeY8U9ausNIHMuBJL0aXviZ3YbUiQNixpwhGgPF47rw_r_4-jbj4q9J5bCfpE0f6_5F=w1052-h592-rw' }
		]
	  },
	  {
		slug: 'tap',
		color: 'blue',
		description: 'A productivity app that simplifies task requests, information sharing, and updates between team members and management.',
		shortDescription: 'Task management and information sharing app.',
		links: [
		  { to: 'https://apps.apple.com/ph/app/cloudstaff-tap/id1434496444', label: 'iOS' }
		],
		logo: Assets.Tap,
		name: 'Cloudstaff Tap',
		period: { from: new Date() },
		skills: getSkills('ios', 'swift'),
		type: 'Productivity App',
		screenshots: [
		  { label: 'Splash', src: 'https://play-lh.googleusercontent.com/MpAbfrStlzkLSJoximu2lML80zZZsuJgCGsUIpvNjMzj6XZmp6IGnLZ6pEByw4v_jA=w1052-h592-rw' },
		  { label: 'Welcome', src: 'https://play-lh.googleusercontent.com/Nbflpzu6v42mKHhAXS_aTsAaXlPBYPnDvRhdaP30UXsfBa51R81U81pRB3lTSdHZ5wY=w1052-h592-rw' },
		  { label: 'Register', src: 'https://play-lh.googleusercontent.com/BGSkDP95-5TCnayhqpi11CYA3Sj6ClbOkaaaFISS6mlaTHtsKtOZ6Hh9xJUF9MmYQQ=w1052-h592-rw' },
		  { label: 'OTP', src: 'https://play-lh.googleusercontent.com/IVQZkdtegtx23v1isSuPx8cYTP5fbzo2FiXzvnd1bgG08xW6Ga0GtPhwBCevZ3i8WCY=w1052-h592-rw' },
		  { label: 'Dashboard Tile', src: 'https://play-lh.googleusercontent.com/5nnMXm1NXJ-Gi-icce25NJ7qqHu3Je_HWNH04R5Anf393gSZdov6CXkVQKgrZ3kjxQ=w1052-h592-rw' },
		  { label: 'Dashboard List', src: 'https://play-lh.googleusercontent.com/AZxxRUJDkEp6hS6a5z9hN-tnMS5VS387KOux8AjnFEBmGalltJiVik6PAkCm-IIt-A=w1052-h592-rw' }
		]
	  },
	  {
		slug: 'staff-central',
		color: 'blue',
		description: 'An application for timekeeping and serving as an information repository for staff, offering streamlined access to key resources.',
		shortDescription: 'Timekeeping and staff information management.',
		links: [
		  { to: 'https://play.google.com/store/apps/details?id=com.cloudstaff.staffcentral', label: 'Android' }
		],
		logo: Assets.StaffCentral,
		name: 'Cloudstaff Staff Central',
		period: { from: new Date() },
		skills: getSkills('android', 'kotlin'),
		type: 'Staff Management App',
		screenshots: [
		  { label: 'Auth', src: 'https://play-lh.googleusercontent.com/PHjQP2W9RQ4QK470bjXqNamrF3GAcPpLa7wViiFWyheMizsXSDZTZEug-c4eZ8EAGEE=w1052-h592-rw' },
		  { label: 'Welcome', src: 'https://play-lh.googleusercontent.com/lExtN0U-U6g588g416xBrfRyXxphjQz_IlCeei8869OBCotwytNv3kgucAPM8KZnmQ=w1052-h592-rw' },
		  { label: 'Timesheet', src: 'https://play-lh.googleusercontent.com/km8JGhFPzsSYewj_drfJmBdD5tqZOavnDihOSUCjYOf17MIHUuJS7MpfFK6RtDZU_A=w1052-h592-rw' },
		  { label: 'Break Status', src: 'https://play-lh.googleusercontent.com/BLPpcEJjduwIZODq7tKJcPZIMS-Yck8NbFvWq0t_SXB5YQGB5PKG-9uWzUp7aDVuevLL=w1052-h592-rw' },
		  { label: 'Status Timer', src: 'https://play-lh.googleusercontent.com/A1TdeorO7KlK1gLccYWGXdfviO7doPkclqw82joxhKPO4loriU9raQf00eYQ2TLlYU4M=w1052-h592-rw' },
		  { label: 'Ticket', src: 'https://play-lh.googleusercontent.com/OmCplfw57DbzUy77FFe3iNDG4Cml9FG4gj0LsC0Pfq8SP43WKngnleCFGkeXZJCCGJE=w1052-h592-rw' }
		]
	  },
	  {
		slug: 'dream-card-rewards',
		color: 'blue',
		description: 'View deals, redeem rewards, and manage your points using this app, which offers biddable items and personalized offers.',
		shortDescription: 'Rewards and points management app.',
		links: [
		  { to: 'https://apps.apple.com/in/app/cloudstaff-rewards/id1590970957', label: 'iOS' },
		  { to: 'https://play.google.com/store/apps/details?id=com.cloudstaff.rewardsv2&hl=en&gl=US', label: 'Android' }
		],
		logo: Assets.Rewards,
		name: 'Cloudstaff Rewards',
		period: { from: new Date() },
		skills: getSkills('ios', 'android', 'swift', 'kotlin'),
		type: 'Rewards App',
		screenshots: [
		  { label: 'Splash', src: 'https://apps.cloudstaff.com/assets/contents/2/image1539236281.PNG' },
		  { label: 'QR', src: 'https://apps.cloudstaff.com/assets/contents/2/image1539236286.PNG' },
		  { label: 'Auth', src: 'https://apps.cloudstaff.com/assets/contents/2/image1539236291.PNG' },
		  { label: 'OTP', src: 'https://apps.cloudstaff.com/assets/contents/2/image1539236299.PNG' },
		  { label: 'Main', src: 'https://apps.cloudstaff.com/assets/contents/2/image1539236303.PNG' },
		  { label: 'Points', src: 'https://apps.cloudstaff.com/assets/contents/2/image1539236307.PNG' },
		  { label: 'Deals', src: 'https://apps.cloudstaff.com/assets/contents/2/image1539236335.PNG' },
		  { label: 'Events', src: 'https://apps.cloudstaff.com/assets/contents/2/image1539236420.PNG' },
		  { label: 'Event Details', src: 'https://apps.cloudstaff.com/assets/contents/2/image1539236423.PNG' },
		  { label: 'Auctions', src: 'https://apps.cloudstaff.com/assets/contents/2/image1539236426.PNG' }
		]
	  },
	  {
		slug: 'botley-web-portal',
		color: 'blue',
		description: 'A web app serving as a configuration tool and knowledge base for the chatbot Botley, integrating with REST APIs for seamless access to data.',
		shortDescription: 'Chatbot configuration tool and knowledge base.',
		links: [
		  { to: 'https://botley.cloudstaff.com/', label: 'Web' }
		],
		logo: Assets.Botley,
		name: 'Botley Web Portal',
		period: { from: new Date() },
		skills: getSkills('cake', 'mysql', 'html', 'css', 'javascript'),
		type: 'Configuration Tool',
		screenshots: []
	  },
	  {
		slug: 'botley-chat-bot',
		color: 'blue',
		description: 'An automated enterprise assistant using AI and natural language processing to help staff access tools and information through a chatbot interface.',
		shortDescription: 'AI-powered enterprise chatbot assistant.',
		links: [],
		logo: Assets.Botley,
		name: 'Botley (Chat Bot)',
		period: { from: new Date() },
		skills: getSkills('python', 'javascript'),
		type: 'AI Chat Bot',
		screenshots: []
	  },
	  {
		slug: 'buzz',
		color: 'blue',
		description: 'An internal Android app used by clients to send messages to staff via standard communication protocols.',
		shortDescription: 'Internal messaging app for staff communication.',
		links: [],
		logo: Assets.Buzz,
		name: 'Buzz',
		period: { from: new Date() },
		skills: getSkills('android', 'kotlin'),
		type: 'Messaging App',
		screenshots: [
			{ label: 'Welcome', src: 'https://image.winudf.com/v2/image1/Y29tLmNsb3Vkc3RhZmYuYnV6el9zY3JlZW5fMF8xNTU1MjUwMDgzXzA5OQ/screen-0.webp?fakeurl=1&type=.webp' },
			{ label: 'Auth', src: 'https://image.winudf.com/v2/image1/Y29tLmNsb3Vkc3RhZmYuYnV6el9zY3JlZW5fMV8xNTU1MjUwMDg0XzAzMg/screen-1.webp?fakeurl=1&type=.webp' },
			{ label: 'OTP', src: 'https://image.winudf.com/v2/image1/Y29tLmNsb3Vkc3RhZmYuYnV6el9zY3JlZW5fMl8xNTU1MjUwMDg0XzAzNQ/screen-2.webp?fakeurl=1&type=.webp' },
			{ label: 'Main', src: 'https://image.winudf.com/v2/image1/Y29tLmNsb3Vkc3RhZmYuYnV6el9zY3JlZW5fM18xNTU1MjUwMDg1XzAwNA/screen-3.webp?fakeurl=1&type=.webp' },
			{ label: 'Options', src: 'https://image.winudf.com/v2/image1/Y29tLmNsb3Vkc3RhZmYuYnV6el9zY3JlZW5fNF8xNTU1MjUwMDg1XzAzMw/screen-4.webp?fakeurl=1&type=.webp' },
			{ label: 'Groups', src: 'https://image.winudf.com/v2/image1/Y29tLmNsb3Vkc3RhZmYuYnV6el9zY3JlZW5fNV8xNTU1MjUwMDg2XzA1Ng/screen-5.webp?fakeurl=1&type=.webp' },
			{ label: 'Templates', src: 'https://image.winudf.com/v2/image1/Y29tLmNsb3Vkc3RhZmYuYnV6el9zY3JlZW5fNl8xNTU1MjUwMDg2XzA5MA/screen-6.webp?fakeurl=1&type=.webp' },
			{ label: 'Confirmation', src: 'https://image.winudf.com/v2/image1/Y29tLmNsb3Vkc3RhZmYuYnV6el9zY3JlZW5fN18xNTU1MjUwMDg3XzA0NQ/screen-7.webp?fakeurl=1&type=.webp' }
		]
	  },
	  {
		slug: 'chat',
		color: 'blue',
		description: 'A customized version of Rocket Chat for internal company use, allowing team communication via iOS and Android apps.',
		shortDescription: 'Customized team communication platform.',
		links: [],
		logo: Assets.Chat,
		name: 'Cloudstaff Chat',
		period: { from: new Date() },
		skills: getSkills('ios', 'android', 'swift', 'java'),
		type: 'Team Communication App',
		screenshots: [
		  { label: 'Welcome', src: 'https://image.winudf.com/v2/image1/Y29tLmNsb3Vkc3RhZmYuY3NjaGF0X3NjcmVlbl8wXzE1NjcyMTg4NDFfMDUz/screen-0.webp?fakeurl=1&type=.webp' },
		  { label: 'Main', src: 'https://image.winudf.com/v2/image1/Y29tLmNsb3Vkc3RhZmYuY3NjaGF0X3NjcmVlbl8xXzE1NjcyMTg4NDFfMDY0/screen-1.webp?fakeurl=1&type=.webp' },
		  { label: 'Thread', src: 'https://image.winudf.com/v2/image1/Y29tLmNsb3Vkc3RhZmYuY3NjaGF0X3NjcmVlbl8yXzE1NjcyMTg4NDNfMDA1/screen-2.webp?fakeurl=1&type=.webp' },
		  { label: 'Details', src: 'https://image.winudf.com/v2/image1/Y29tLmNsb3Vkc3RhZmYuY3NjaGF0X3NjcmVlbl8zXzE1NjcyMTg4NDRfMDE5/screen-3.webp?fakeurl=1&type=.webp' },
		  { label: 'Profile', src: 'https://image.winudf.com/v2/image1/Y29tLmNsb3Vkc3RhZmYuY3NjaGF0X3NjcmVlbl80XzE1NjcyMTg4NDRfMDEw/screen-4.webp?fakeurl=1&type=.webp' },
		  { label: 'Settings', src: 'https://image.winudf.com/v2/image1/Y29tLmNsb3Vkc3RhZmYuY3NjaGF0X3NjcmVlbl81XzE1NjcyMTg4NDVfMDA0/screen-5.webp?fakeurl=1&type=.webp' }
		]
	  },
	  {
		slug: 'meetup',
		color: 'blue',
		description: 'A customized version of Jitsi meet mobile, enabling voice and video communication for internal company use.',
		shortDescription: 'Internal voice and video communication platform.',
		links: [],
		logo: Assets.Meetup,
		name: 'Cloudstaff Meetup',
		period: { from: new Date() },
		skills: getSkills('ios', 'android', 'swift', 'java'),
		type: 'Video Communication App',
		screenshots: [
			{ label: 'Settings', src: 'https://image.winudf.com/v2/image/Y29tLmNsb3Vkc3RhZmYubWVldHVwX3NjcmVlbl8wXzE1Mzg0ODkwNzJfMDAw/screen-0.webp?fakeurl=1&type=.webp' },
			{ label: 'Settings', src: 'https://image.winudf.com/v2/image/Y29tLmNsb3Vkc3RhZmYubWVldHVwX3NjcmVlbl8xXzE1Mzg0ODkwNzhfMDkw/screen-1.webp?fakeurl=1&type=.webp' }
		]
	  },
	  {
		slug: 'task-it',
		color: 'blue',
		description: 'An internal iOS app allowing users to record audio and video with notes and send them for remote task management.',
		shortDescription: 'Task management app with audio and video recording.',
		links: [],
		logo: Assets.TaskIt,
		name: 'Image Property Task It',
		period: { from: new Date() },
		skills: getSkills('ios', 'swift'),
		type: 'Real Estate Organizer App',
		screenshots: [
		  { label: 'Splash', src: 'https://apps.cloudstaff.com/assets/contents/31/image1532406169.png' },
		  { label: 'Auth', src: 'https://apps.cloudstaff.com/assets/contents/31/image1532406172.png' },
		  { label: 'Create', src: 'https://apps.cloudstaff.com/assets/contents/31/image1532406174.png' },
		  { label: 'Main', src: 'https://apps.cloudstaff.com/assets/contents/31/image1532406177.png' },
		  { label: 'Features', src: 'https://apps.cloudstaff.com/assets/contents/31/image1532406179.png' }
		]
	  },
	  {
		slug: 'specialtyiq-rxprecheck-module',
		color: 'blue',
		description: 'A specialty drug management web application that streamlines the drug prescription and validation process.',
		shortDescription: 'Specialty drug management web application.',
		links: [
		  { to: 'https://specialtyiq.com/', label: 'Web' }
		],
		logo: Assets.SpecialtyIQ,
		name: 'SpecialtyIQ - RXPreCheck Module',
		period: { from: new Date() },
		skills: getSkills('aspnet', 'html', 'css', 'javascript', 'csharp', 'mssql'),
		type: 'Specialty Drug Management App',
		screenshots: []
	  },
	  {
		slug: 'job-order-inventory-system',
		color: 'blue',
		description: 'A web application used for managing inventory items and assigning tasks to produce deliverables using available resources.',
		shortDescription: 'Inventory and job order management system.',
		links: [
		  { to: 'http://cs-proj-01.azurewebsites.net/', label: 'Web' }
		],
		logo: Assets.Cloudstaff,
		name: 'Job Order and Inventory System',
		period: { from: new Date() },
		skills: getSkills('aspnet', 'csharp', 'html', 'css', 'javascript', 'mssql'),
		type: 'Inventory Management App',
		screenshots: []
	  },
];

export const title = 'Projects';
