export interface CaseStudy {
  id: number
  slug: string
  title: string
  category: string
  summary: string
  featuredImage: string
  externalLink?: string
  timeline?: string
  role?: string
  deliverables?: string
  overview?: string
  challenge?: string
  challengeImage?: string
  process?: {
    title: string
    description: string
    image: string
  }[]
  solution?: string
  solutionImages?: string[]
  results?: {
    stat: string
    title: string
    description: string
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  conclusion?: string
  link?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "strategize",
    title: "Strategize",
    category: "UX/UI Design",
    summary:
      "Enhancing executive engagement through intuitive design for a business intelligence application used by government organizations and enterprises.",
    timeline: "3 months",
    role: "UI/UX Designer",
    deliverables: "UX Research, UI Design, Interactive Prototypes",
    featuredImage: "/images/strategize.png",
    overview:
      "The existing application overwhelmed users with excessive data and lacked clear prioritization, leading to disengagement from executives. The interface needed to be simplified, focusing on key data to support quick, effective decision-making and increase usage. The target audience included high-ranking individuals such as CEOs, COOs, CFOs, Directors, and VPs who are responsible for overseeing major business units and making strategic decisions.",
    challenge:
      "Before embarking on this design journey, the parent application was cluttered with overwhelming data, making it difficult for leaders to extract meaningful insights. Engagement dropped as executives struggled with complex navigation and static visuals that failed to capture attention. User research revealed a 60% drop in user engagement, 70% underutilized dashboards, and a 55% user frustration rate, with users spending more than 2 minutes on tasks that should be simpler.",
    challengeImage: "/images/1.png",
    process: [
      {
        title: "User Research",
        description:
          "We began by talking to clients to understand their pain points. Common feedback included: 'I don't have time to shift through all this data,' 'It will be fantastic if I can access what I want at a place rather than browsing through workspaces and dashboards,' 'We need a streamlined design to prioritize key data,' and 'I really don't know why I am seeing these unnecessary items.'",
        image: "/images/2.png",
      },
      {
        title: "Problem Analysis",
        description:
          "Through careful research, analysis of user issues, and understanding business needs, we shaped the structure of the new application to address key challenges. We identified the need for simplified data presentation, actionable insights delivery, improved data visualization, and time-saving navigation.",
        image: "/images/3.png",
      },
      {
        title: "Visual Design",
        description:
          "As a solution, we carefully selected the most crucial dashboards that empower users to analyze and dive deeper into the data. These relevant, simplified dashboards were tailored for the executive experience. In addition, an Action Center was integrated for executives to easily review and approve requests and reports.",
        image: "/images/4.png",
      },
      {
        title: "Interaction Design",
        description:
          "For the Portfolio Performance Dashboard, I condensed the content into key points with an interactive overview displaying charts like 'Top 5 Projects by Objectives,' 'Top 5 Business Units,' and 'Projects by Budget.' Each chart element acts as a filter for more specific project data, with four levels of insight from high-level overview to individual project reports.",
        image: "/images/5.png",
      },
    ],
    solution:
      "The redesigned application features a streamlined, executive-friendly experience that drives engagement, simplifies data insights, and supports better decision-making. Key features include: 1) Portfolio Performance Dashboard with interactive charts and multi-level insights, 2) Action Center for managing approvals and viewing reports, 3) Tailored Menu Experience with customizable dashboard options, 4) Redesigned Power BI dashboards for visual consistency, and 5) Dedicated feedback screen for continuous improvement.",
    solutionImages: [
      "/images/6.png",
      "/images/7.png",
      "/images/8.png",
      "/images/9.png",
    ],
    results: [
      {
        stat: "Enhanced",
        title: "User Engagement",
        description:
          "Implemented interactive, visually appealing dashboards with layered navigation, encouraging deep dives into specific data points.",
      },
      {
        stat: "Simplified",
        title: "Data Presentation",
        description: "Prioritized insights and reduced clutter make essential data clear and accessible.",
      },
      {
        stat: "Improved",
        title: "Data Visualization",
        description:
          "Redesigned Power BI dashboards offer visually consistent and intuitive displays with better data visualization techniques.",
      },
    ],
    testimonial: {
      quote: "So far, so good. People are liking it - this is the initial feedback after testing with users.",
      author: "Project Feedback",
      role: "Initial Testing",
    },
    conclusion:
      "We transformed a complex and data-heavy application into a streamlined, executive-friendly experience that drives engagement, simplifies data insights, and supports better decision-making. The project achieved all deliverables: enhanced user engagement through interactive dashboards, simplified data presentation with prioritized insights, actionable insights delivery with custom report views, improved data visualization with consistent displays, and time-saving navigation with clear information hierarchy.",
    link: "https://example.com/strategize",
  },
  {
    id: 2,
    slug: "prosys",
    title: "ProSys",
    category: "AI Chatbot",
    summary:
      "An AI-powered chatbot designed to simplify project management for PMOs and executives, providing quick access to critical insights and actionable data.",
    timeline: "4 months",
    role: "UI/UX Designer",
    deliverables: "UX Research, UI Design, Interaction Design, Prototype",
    featuredImage: "/images/prosys.png",
    overview:
      "ProSys is an AI-powered chatbot designed to revolutionize project management by providing a seamless assistant that empowers PMOs and executives to make informed decisions faster. The solution aims to simplify access to critical project insights, enhance risk and issue tracking, ensure financial oversight, and improve overall efficiency by offering real-time updates, intelligent summaries, and actionable insights—all within an intuitive interface.",
    challenge:
      "Managing multiple projects in a fast-paced business environment can be overwhelming, even for the most experienced PMOs. Traditional dashboards often drown users in excessive data, leaving critical insights buried and decision-making delayed. This creates inefficiencies and risks that hinder project success. The challenge was to create a solution that could cut through the complexity and deliver precisely what users need, when they need it.",
    challengeImage: "/images/11.png",
    process: [
      {
        title: "Problem Definition",
        description:
          "I began by identifying the core pain points of project management professionals. Through interviews and research, I discovered that most users struggled with information overload, difficulty in accessing critical data quickly, and challenges in monitoring multiple projects simultaneously. This research helped define the key capabilities needed in the solution.",
        image: "/images/12.png",
      },
      {
        title: "User Persona Development",
        description:
          "I created detailed personas for the target audience, focusing on PMOs, project managers, and senior executives. Understanding their specific needs, workflows, and pain points was crucial in designing a solution that would truly address their challenges. The personas helped guide feature prioritization and interface design decisions.",
        image: "/images/13.png",
      },
      {
        title: "Feature Mapping",
        description:
          "Based on user research, I mapped out the key capabilities needed: project profile insights, risk management, issue tracking, financial oversight, schedule monitoring, and status summaries. Each feature was designed to address specific pain points and deliver maximum value to users.",
        image: "/images/14.png",
      },
      {
        title: "Interface Design",
        description:
          "I designed an intuitive chatbot interface that balances simplicity with powerful functionality. The design includes personalized greetings, suggested prompts based on user roles, quick access to related dashboards, and multiple input methods including text and voice. The interface adapts to different user types, showing the most relevant information based on their role and usage patterns.",
        image: "/images/15.png",
      },
    ],
    solution:
      "ProSys is an AI-powered chatbot that provides quick, reliable answers and insights for executives and project managers. Key features include: 1) Project Profile Insights for quick access to summaries and key details, 2) Risk Management to identify high-priority risks, 3) Issue Tracking to easily query open project issues, 4) Financial Oversight for detailed insights on budget variances, 5) Schedule Monitoring to stay updated on project delays, and 6) Status Summaries for concise project updates. The interface is personalized to each user, suggesting relevant dashboards and prompts based on their role and previous interactions. Users can interact through text or voice commands, making it accessible in various work contexts.",
    solutionImages: ["/images/16.png", "/images/17.png", "/images/18.png", "/images/19.png"],
    results: [
      {
        stat: "Simplified",
        title: "Decision Making",
        description:
          "Executives can now access critical project information in seconds rather than minutes, enabling faster and more informed decisions.",
      },
      {
        stat: "Enhanced",
        title: "Risk Management",
        description:
          "The chatbot proactively identifies risks without treatments, helping teams address potential issues before they impact project success.",
      },
      {
        stat: "Improved",
        title: "Efficiency",
        description:
          "Users report significant time savings when accessing project information, with intuitive voice and text commands replacing complex dashboard navigation.",
      },
    ],
    conclusion:
      "With the introduction of ProSys, I tackled the challenge of simplifying project management for PMOs and executives. The solution bridges the gap between complex data and actionable insights, enabling users to quickly access project profiles, monitor risks and issues, oversee budgets, and stay on top of schedules. This journey taught me the importance of understanding user pain points deeply and designing solutions that prioritize clarity and efficiency. I learned how to balance functionality with simplicity, ensuring the tool is powerful yet approachable. Most importantly, I realized the transformative potential of AI in redefining workflows and driving meaningful impact for users.",
    link: "https://example.com/prosys",
  },
  {
    id: 3,
    slug: "propshare",
    title: "PropShare",
    category: "Real Estate Investment Platform",
    summary:
      "A comprehensive platform designed to simplify real estate investment management for high-net-worth individuals and institutional investors.",
    timeline: "4 months",
    role: "UI/UX Designer",
    deliverables: "UX Research, User Personas, Information Architecture, UI Design",
    featuredImage: "/images/propshare.png",
    overview:
      "PropShare aims to address the challenges faced by investors in real estate fractional ownership, including complex onboarding processes, difficulty tracking investments, and fragmented communication with investment managers. The platform is designed to provide a seamless experience for various user types, from high-net-worth individuals to institutional investors.",
    challenge:
      "The real estate investment landscape presents multiple challenges: complex onboarding processes delay investment opportunities, tracking fractional ownership investments is cumbersome, and communication with investment managers is often fragmented. These issues particularly affect high-net-worth individuals and institutional investors looking to diversify their portfolios through real estate investments.",
    challengeImage: "/images/22.png",
    process: [
      {
        title: "User Research & Insights",
        description:
          "Through extensive interviews with potential users, we identified key pain points: limited liquidity in fractional ownership, complex onboarding processes, and difficulties in tracking investments. This research helped shape our understanding of user needs and expectations.",
        image: "/images/23.png",
      },
      {
        title: "Persona Development",
        description:
          "We created detailed personas representing our diverse user base, from experienced family office managers to first-time real estate investors. Each persona helped us understand specific needs and challenges faced by different user groups.",
        image: "/images/24.png",
      },
      {
        title: "Competitor Analysis",
        description:
          "We analyzed existing platforms like Alvy, hBits, and Strata Prop to identify gaps in the market and opportunities for differentiation. This analysis helped us understand what features were essential and what could be improved.",
        image: "/images/25.png",
      },
      {
        title: "Information Architecture",
        description:
          "We developed a comprehensive information architecture that organized features and content in an intuitive way, ensuring users could easily navigate between different sections of the platform.",
        image: "/images/26.png",
      },
    ],
    solution:
      "PropShare was designed as a comprehensive solution addressing key user pain points. The platform features a simplified digital KYC process, an intuitive dashboard for tracking investments, and seamless communication channels with investment managers. For premium investors, we included exclusive benefits such as early access to premium properties and bespoke legal/tax consulting.",
    solutionImages: [
      "/images/27.png",
      "/images/28.png",
      "/images/29.png",
      "/images/30.png",
    ],
    results: [
      {
        stat: "Simplified",
        title: "Digital Onboarding",
        description: "Reduced onboarding time from days to hours with a streamlined digital KYC process.",
      },
      {
        stat: "Enhanced",
        title: "Investment Tracking",
        description: "Provided real-time visibility into investment performance and property management.",
      },
      {
        stat: "Improved",
        title: "Communication",
        description: "Established direct channels between investors and investment managers, reducing response times.",
      },
    ],
    conclusion:
      "PropShare successfully addresses the complexities of real estate investment management by providing a user-friendly platform that caters to diverse investor needs. The project demonstrated the importance of understanding user pain points and creating solutions that balance functionality with ease of use.",
    link: "https://example.com/propshare",
  },
  {
    id: 4,
    slug: "designgram",
    title: "Designgram",
    category: "iOS Social Media App",
    summary: "A social media platform designed for the creative community",
    externalLink: "https://www.behance.net/gallery/186584111/iOS-Social-Media-App",
    featuredImage: "/images/designgram.png",
  },
  {
    id: 5,
    slug: "parkease",
    title: "Parkease",
    category: "iOS Parking App",
    summary: "Simplified parking slot booking experience",
    externalLink: "https://www.behance.net/gallery/189468519/iOS-Parking-slot-booking-app",
    featuredImage: "/images/parkease.png",
  },
  {
    id: 6,
    slug: "flyoverind",
    title: "Flyoverind",
    category: "iOS Education App",
    summary: "Study abroad platform for aspiring students",
    externalLink: "https://www.behance.net/gallery/186964201/iOS-Study-Abroad-App",
    featuredImage: "/images/flyoverind.png",
  },
]

