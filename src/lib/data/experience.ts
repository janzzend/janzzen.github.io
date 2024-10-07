import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'mobile-sourcepass',
		company: 'Sourcepass Inc.',
		description: '',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Melville, New York (Remote)',
		period: { from: new Date(2023, 6, 1), to: new Date() },
		skills: getSkills('android', 'ios', 'swiftui', 'kotlin', 'firebase', 'gainsight', 'stripe', 'figma'),
		name: 'Lead Android / iOS Developer',
		color: 'blue',
		links: [],
		logo: Assets.Sourcepass,
		shortDescription: ''
	},
	{
		slug: 'mobile-scsi',
		company: 'Security Communication Solutions International',
		description: '',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Clark, Philippines (Hybrid)',
		period: { from: new Date(2021, 7, 1), to: new Date(2024, 7, 1) },
		skills: getSkills('swift', 'kotlin', 'java', 'wearos', 'watchos', 'android', 'ios', 'firebase', 'xd'),
		name: 'Android / iOS / WearOS Developer',
		color: 'blue',
		links: [],
		logo: Assets.SCSI,
		shortDescription: ''
	},
	{
		slug: 'mobile-aloware',
		company: 'Aloware Inc.',
		description: '',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Los Angeles, California (Remote)',
		period: { from: new Date(2022, 7, 1), to: new Date(2024, 3, 1) },
		skills: getSkills('swift', 'kotlin', 'android', 'ios', 'firebase', 'twilio', 'figma'),
		name: 'Android / iOS Developer',
		color: 'green',
		links: [],
		logo: Assets.Aloware,
		shortDescription: ''
	},
	{
		slug: 'mobile-dailypress',
		company: 'Daily Press Group',
		description: '',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'New South Wales, Australia (Remote)',
		period: { from: new Date(2022, 6, 1), to: new Date(2023, 4, 1) },
		skills: getSkills('swift', 'kotlin', 'android', 'ios', 'java', 'strapi', 'php', 'firebase', 'xd'),
		name: 'Android / iOS / Backend Developer',
		color: 'blue',
		links: [],
		logo: Assets.DailyPress,
		shortDescription: ''
	},
	{
		slug: 'mobile-chowis',
		company: 'Chowis Co. Ltd.',
		description: '',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Gyeonggi-do, South Korea (Remote)',
		period: { from: new Date(2022, 1, 1), to: new Date(2022, 3, 1) },
		skills: getSkills('kotlin', 'java', 'android'),
		name: 'Android Developer',
		color: 'blue',
		links: [],
		logo: Assets.Chowis,
		shortDescription: ''
	},
	{
		slug: 'mobile-peregrine',
		company: 'Peregrine Consulting Group',
		description: '',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Chicago, Illinois (Remote)',
		period: { from: new Date(2021, 7, 1), to: new Date(2022, 0, 1) },
		skills: getSkills('swift', 'kotlin', 'android', 'ios', 'firebase', 'xd'),
		name: 'Android / iOS Developer',
		color: 'blue',
		links: [],
		logo: Assets.Peregrine,
		shortDescription: ''
	},
	{
		slug: 'mobile-chairseven',
		company: 'Chairseven Companies',
		description: '',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'New York, New York (Remote)',
		period: { from: new Date(2020, 10, 1), to: new Date(2021, 5, 1) },
		skills: getSkills('swift', 'kotlin', 'android', 'ios', 'stripe', 'firebase', 'xd'),
		name: 'Android / iOS Developer',
		color: 'blue',
		links: [],
		logo: Assets.Chairseven,
		shortDescription: ''
	},
	{
		slug: 'mobile-agile',
		company: '1080 Agile Pty Ltd',
		description: '',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Makati, Philippines (On-site)',
		period: { from: new Date(2019, 5, 1), to: new Date(2021, 7, 1) },
		skills: getSkills('kotlin', 'java', 'android', 'room', 'firebase', 'twilio', 'figma'),
		name: 'Android Developer',
		color: 'blue',
		links: [],
		logo: Assets.TenEighty,
		shortDescription: ''
	},
	{
		slug: 'mobile-cloudstaff',
		company: 'Cloudstaff Inc.',
		description: '',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Clark, Philippines (On-site)',
		period: { from: new Date(2016, 7, 1), to: new Date(2019, 4, 1) },
		skills: getSkills('android', 'ios', 'swift', 'kotlin', 'java', 'php', 'python', 'javascript', 'cake', 'html', 'css', 'cake', 'mysql', 'realm', 'room', 'xd', 'firebase'),
		name: 'Android / iOS / Web / AI Chat Bot Developer',
		color: 'blue',
		links: [],
		logo: Assets.Cloudstaff,
		shortDescription: ''
	},
	{
		slug: 'dotnet-filam',
		company: 'FilAm Software Technology Inc.',
		description: '',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Clark, Philippines (On-site)',
		period: { from: new Date(2016, 2, 1), to: new Date(2016, 6, 1) },
		skills: getSkills('csharp', 'css', 'html', 'javascript', 'aspnet', 'mssql'),
		name: 'Full Stack ASP.NET Web Developer',
		color: 'blue',
		links: [],
		logo: Assets.FilAm,
		shortDescription: ''
	},
	{
		slug: 'dotnet-cloudstaff',
		company: 'Cloudstaff Inc.',
		description: '',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Clark, Philippines (On-site)',
		period: { from: new Date(2015, 10, 1), to: new Date(2016, 2, 1) },
		skills: getSkills('csharp', 'css', 'html', 'javascript', 'aspnet', 'mssql'),
		name: 'Full Stack ASP.NET Web Developer',
		color: 'blue',
		links: [],
		logo: Assets.Cloudstaff,
		shortDescription: ''
	}
];

export const title = 'Experience';