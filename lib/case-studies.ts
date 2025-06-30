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
    slug: "strategy-zero-dashboard",
    title: "Redesigning the Heart of Strategy Zero: A Dashboard Revolution",
    category: "UX/UI Design",
    summary: "Transforming a 10-year-old enterprise project management platform from a client retention liability into a competitive advantage through user-centered dashboard redesign.",
    timeline: "6 months",
    role: "Lead UX/UI Designer",
    deliverables: "UX Research, Information Architecture, UI Design, User Testing, Design System",
    featuredImage: "/images/stratcore-thumbnail.png",
    overview: "Strategy Zero is a comprehensive enterprise project management platform serving major clients including Dubai Holdings, Unity Water, and the UAE Government. The platform had experienced significant client attrition, dropping from 13 major clients to just 5-6, primarily due to a legacy dashboard that was driving users away. This project focused on redesigning the core dashboard experience to improve user engagement, reduce cognitive load, and ultimately retain clients by making the platform more intuitive and efficient.",
    challenge: "The existing 10-year-old dashboard was causing significant user frustration and client churn. Key issues included: client retention dropping from 13 to 5-6 major enterprises, users struggling to find essential project information without navigating through multiple workspaces, confusing action categories ('Actions' vs 'Assigned to me'), zero-value content taking up prime dashboard real estate, and inconsistent typography creating cognitive overload. The challenge was to transform this legacy liability into a competitive advantage while maintaining the platform's powerful functionality.",
    challengeImage: "/images/stratcore-thumbnail.png",
    process: [
      {
        title: "Discovery & Analysis",
        description: "Before jumping into UI fixes, we partnered with business consultants who regularly speak with clients to understand what actually matters. We analyzed user behavior patterns across all client organizations, identified core workflows for Project Managers (PM) and Portfolio Management Office (PMO) users, created information architecture focused only on high-value features, and developed user personas based on real usage data rather than assumptions.",
        image: "/images/stratcore-thumbnail.png",
      },
      {
        title: "Strategic Design Shift",
        description: "We made a crucial decision to focus on projects, not features. Most PMs handle 1-2 projects normally (3-4 in worst cases), so we designed around that reality. This project-centric approach led to innovations like clean project selection dropdowns, visual timeline views showing deliverables and risks, intelligent activity logs with real-time feeds, and simplified action panels with clear status-based organization.",
        image: "/images/placeholder.svg",
      },
      {
        title: "PM Dashboard Redesign",
        description: "The PM dashboard transformation included: project selection at the top with contextual updates, visual timeline view for instant project overview, intelligent activity log with clickable activities, Project Status Report (PSR) trend visualization, simplified actions panel with status-based organization, and curated essential workspaces with quick access search.",
        image: "/images/placeholder.svg",
      },
      {
        title: "PMO Dashboard Enhancement",
        description: "For PMOs handling multiple projects, we designed for scale and oversight with: workspace hierarchy for daily operations and configuration management, centralized reporting hub with published reports and custom templates, Kanban action management with visual priority boards, and smart watchlists for critical dashboards and customizable monitoring.",
        image: "/images/placeholder.svg",
      },
    ],
    solution: "The redesigned dashboard system features two distinct but complementary interfaces: a project-centric PM dashboard and a portfolio-level PMO dashboard. The PM dashboard focuses on individual project management with contextual information display, visual timelines, intelligent activity tracking, and streamlined action management. The PMO dashboard provides portfolio-level intelligence with workspace hierarchy, centralized reporting, Kanban action management, and smart watchlists. Both dashboards follow consistent design principles of context over content, clear visual hierarchy, reduced cognitive load, and optimized speed of completion.",
    solutionImages: [
      "/images/stratcore-thumbnail.png",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
    ],
    results: [
      {
        stat: "62%",
        title: "Faster Task Completion",
        description: "Average task completion time reduced from 8.5 minutes to 3.2 minutes, significantly improving user efficiency and productivity.",
      },
      {
        stat: "73%",
        title: "Reduced Navigation",
        description: "Dashboard navigation clicks reduced from 12-15 clicks to 3-5 clicks, streamlining user workflows and reducing cognitive load.",
      },
      {
        stat: "75%",
        title: "User Satisfaction",
        description: "User satisfaction score increased from 2.4/5 to 4.2/5, indicating strong positive reception of the redesigned interface.",
      },
      {
        stat: "90%",
        title: "Faster Information Access",
        description: "Time to find project information reduced from 5+ minutes to 30 seconds, dramatically improving user experience and decision-making speed.",
      },
      {
        stat: "80%",
        title: "PSR Creation Speed",
        description: "Project Status Report creation time reduced from 15+ minutes to under 3 minutes, enabling more frequent and timely reporting.",
      },
    ],
    testimonial: {
      quote: "The new dashboard feels like we're using a completely different product. Everything I need is right there, and it actually makes sense now.",
      author: "PMO Director",
      role: "Major Government Client",
    },
    conclusion: "This dashboard redesign represents a fundamental shift in how we approach enterprise software design at Strategy Zero. By putting user needs first and backing decisions with real data, we've created dashboards that don't just look better—they work better. The redesign has led to increased feature adoption, better project outcomes through faster information access, improved client satisfaction indicators, and a clear design system for future features. The key takeaway is that sometimes the best innovation isn't adding more features—it's removing the friction that prevents users from achieving their goals. This project transformed a legacy liability into a competitive advantage and set the foundation for continued platform improvement.",
    link: "https://example.com/strategy-zero",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    slug: "designgram",
    title: "Designgram",
    category: "iOS Social Media App",
    summary: "A social media platform designed for the creative community",
    externalLink: "https://www.behance.net/gallery/186584111/iOS-Social-Media-App",
    featuredImage: "/images/designgram.png",
  },
  {
    id: 6,
    slug: "parkease",
    title: "Parkease",
    category: "iOS Parking App",
    summary: "Simplified parking slot booking experience",
    externalLink: "https://www.behance.net/gallery/189468519/iOS-Parking-slot-booking-app",
    featuredImage: "/images/parkease.png",
  },
  {
    id: 7,
    slug: "flyoverind",
    title: "Flyoverind",
    category: "iOS Education App",
    summary: "Study abroad platform for aspiring students",
    externalLink: "https://www.behance.net/gallery/186964201/iOS-Study-Abroad-App",
    featuredImage: "/images/flyoverind.png",
  },
]

