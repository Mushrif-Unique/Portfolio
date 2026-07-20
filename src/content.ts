import {
  Cloud,
  Server,
  Database,
  Github,
  Linkedin,
  Mail,
  Code2,
  Boxes,
  Container,
  GitBranch,
  KeyRound,
  Layers,
  Cpu,
  Globe,
  type LucideIcon,
} from 'lucide-react';

export const PROFILE = {
  name: 'Mohamad Mushrif',
  headline: 'Building reliable software for real-world problems.',
  subhead:
    'BICT (Hons) undergraduate and aspiring Cloud, DevOps, and Full-Stack Engineer building secure, scalable web applications.',
  about:
    "I'm Mohamad Nawas Mohamad Mushrif, a BICT (Hons) undergraduate at the University of Vavuniya. I combine full-stack development with cloud and DevOps practices to create secure, reliable software.",
  github: 'https://github.com/Mushrif-Unique',
  linkedin: 'https://www.linkedin.com/in/mohamad-mushrif-506b59302',
  email: 'mushrifjr3298@gmail.com',
  resume: '/resume.pdf',
  location: 'Mihintale, Sri Lanka',
};

export const WHAT_I_DO: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Cloud, title: 'Cloud', desc: 'Working with AWS EC2, S3, and IAM to support scalable deployments.' },
  { icon: GitBranch, title: 'DevOps', desc: 'Applying Docker, Kubernetes, Jenkins, Ansible, Terraform, and CI/CD practices.' },
  { icon: Code2, title: 'Full-Stack', desc: 'Building role-based applications with MERN, PHP, and .NET technologies.' },
  { icon: Cpu, title: 'Automation', desc: 'Using Bash and infrastructure-as-code tools to streamline delivery.' },
];

export const SKILLS: { group: string; icon: LucideIcon; items: string[] }[] = [
  { group: 'Programming Languages', icon: Layers, items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'C#'] },
  { group: 'Web Technologies', icon: Server, items: ['HTML5', 'CSS3', 'React.js', 'Node.js', 'Express.js', 'PHP'] },
  { group: 'Databases', icon: Database, items: ['MySQL', 'MongoDB'] },
  { group: 'Cloud & DevOps', icon: Container, items: ['AWS EC2', 'AWS S3', 'AWS IAM', 'Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'Terraform', 'CI/CD'] },
  { group: 'Tools & Platforms', icon: GitBranch, items: ['Git', 'GitHub', 'Linux (Ubuntu)', 'Bash', 'Figma', 'VS Code', 'Postman'] },
];

export const PROJECTS: { name: string; description: string; tags: string[]; github: string; demo?: string }[] = [
  {
    name: 'Tourvisito',
    description: 'AI-powered travel marketplace with role-based dashboards, secure bookings, and automated trip management.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Gemini AI', 'Stripe'],
    github: 'https://github.com/Mushrif-Unique/Tourvisito',
  },
  {
    name: 'Academic Timetable Management System',
    description: 'Group project that automates timetable scheduling, role-based management, and conflict detection for educational institutions.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Mushrif-Unique/atms',
  },
  {
    name: 'Home Rental Management System',
    description: 'C# .NET Framework desktop application with role-based access for tenants, landlords, and administrators.',
    tags: ['C#', '.NET Framework', 'Visual Studio'],
    github: 'https://github.com/Mushrif-Unique/HomeRentalManagementSystem',
  },
];

export const EXPERIENCE: { role: string; company: string; period: string; bullets: string[] }[] = [
  { role: 'IGVP for Partnership Development', company: 'AIESEC Sri Lanka, University of Vavuniya', period: 'Present', bullets: ['Supporting partnership development as part of AIESEC Sri Lanka at the University of Vavuniya.'] },
  { role: 'Football Team Captain', company: 'Faculty of Technological Studies', period: 'Present', bullets: ['Leading the faculty football team and coordinating team activities.'] },
  { role: 'Event Coordinator', company: 'Youngstar Sports Club', period: 'Present', bullets: ['Coordinating sports-club events and supporting their delivery.'] },
];

export const EDUCATION = {
  degree: 'Bachelor of Information and Communication Technology (Hons)',
  school: 'Faculty of Technological Studies, University of Vavuniya',
  period: '2023 - Present',
  details: 'Third Year, Second Semester. Focused on software engineering, cloud, DevOps, and full-stack development.',
};

export const CERTIFICATIONS: { title: string; issuer: string; year: string }[] = [
  { title: 'Terraform Fundamentals: Architecture & Core Utilities', issuer: 'Packt via Coursera', year: '2026' },
  { title: 'Introduction to DevOps', issuer: 'Great Learning', year: '2026' },
  { title: 'Introduction to Object-Oriented Programming in C++', issuer: 'Goldsmiths, University of London', year: '2024' },
  { title: 'Business Analysis & Process Management', issuer: 'Coursera Project Network', year: '2024' },
];

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIALS = [
  { label: 'GitHub', href: PROFILE.github, icon: Github },
  { label: 'LinkedIn', href: PROFILE.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${PROFILE.email}`, icon: Mail },
];

export const TECH_BADGES = [
  { label: 'MongoDB', icon: Database },
  { label: 'Express', icon: Server },
  { label: 'React', icon: Code2 },
  { label: 'Node.js', icon: Boxes },
  { label: 'AWS', icon: Cloud },
  { label: 'Docker', icon: Container },
  { label: 'DevOps', icon: KeyRound },
  { label: 'Web', icon: Globe },
];
