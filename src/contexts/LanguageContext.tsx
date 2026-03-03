import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'he';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.aboutUs': 'About Us',
    'nav.platform': 'Platform',
    'nav.solutions': 'Solutions',
    'nav.solutionsDropdown': 'Solutions',
    'nav.talentAcquisition': 'Talent Acquisition',
    'nav.leadershipInnovation': 'Leadership & Innovation',
    'nav.organizationalDynamics': 'Organizational Dynamics',
    'nav.methodology': 'Methodology',
    'nav.aiLabs': 'AI Labs (Beta)',
    'nav.academy': 'Academy',
    'nav.process': 'Our Process',
    'nav.skills': 'Network Skills',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',

    // Hero (new value proposition)
    'hero.title': 'Network Leadership',
    'hero.subtitle': 'Unlocking the full potential of the Skills-Based Organization',
    'hero.mainTitle': 'Build a Smarter, Connected Organization',
    'hero.mainSubtitle': 'Stop guessing who your top performers are and how they collaborate. Use our data-driven tools to hire smarter, empower agile leaders, break down silos, and accelerate organizational innovation.',
    'hero.exploreSolutions': 'Explore Our Solutions',
    'hero.cta': 'Book a Consultation',
    'hero.cta2': 'Our Process',
    'hero.activateNetwork': 'Activate Your Network',
    'hero.meetAgent': 'Meet the Collab Agent',
    'hero.trustedBy': 'Trusted by',
    'hero.trustedBySubtitle': 'Trusted by Forward-Thinking Organizations',

    // Homepage - The 3 Pillars
    'index.pillar1.title': 'Hire the Right Talent',
    'index.pillar1.text': 'Game-based cognitive assessments to identify candidates with the highest potential to integrate and succeed.',
    'index.pillar1.button': 'Discover Talent Tools',
    'index.pillar2.title': 'Develop Networked Leaders',
    'index.pillar2.text': 'Workshops and Network Behavior Skills (NBS) assessments that develop managers who connect people and drive innovation.',
    'index.pillar2.button': 'Explore Leadership Programs',
    'index.pillar3.title': 'Optimize Organizational Dynamics',
    'index.pillar3.text': 'Organizational Network Analysis (ONA) to reveal your cultural DNA, identify bottlenecks, and break down silos.',
    'index.pillar3.button': 'Discover ONA Platform',

    // Homepage - Our Philosophy
    'index.philosophy.title': 'The Science of Nodes and Edges',
    'index.philosophy.text': 'A winning organization is built on two things: excellent individuals (the nodes) and how they connect (the edges). We are the only platform that provides tools to measure and optimize both simultaneously.',

    // Homepage - The Future (AI Collab Agent)
    'index.future.title': 'Meet the Future of Work: AI Collab Agent (Beta)',
    'index.future.text': 'Our innovation lab is building the next generation of organizational intelligence. An AI agent that sits in your workflow, identifying collaboration opportunities and preventing silos in real-time.',
    'index.future.cta': 'Join the Waitlist',
    'index.future.ctaAlt': 'Become a Design Partner',

    // Myth Section
    'myth.title': 'The Org Chart is a Myth',
    'myth.subtitle': 'The Network is Reality',
    'myth.description': 'Value is no longer created in silos — it flows through invisible networks. We help you see, understand, and optimize these hidden connections.',

    // Process
    'process.title': 'From Hidden Data to Organizational Impact',
    'process.subtitle': 'The 4-Step Process',
    'process.step1.title': 'Identify',
    'process.step1.subtitle': 'Mapping',
    'process.step1.desc': 'Find your "Invisible Heroes" — the most connected and influential people based on actual collaboration data.',
    'process.step2.title': 'Diagnose',
    'process.step2.subtitle': 'Profiling',
    'process.step2.desc': 'Assess specific relational skills: ability to build trust, exert influence, and bridge disparate groups.',
    'process.step3.title': 'Developing',
    'process.step3.subtitle': 'Skills',
    'process.step3.desc': 'Targeted development programs to strengthen network leadership capabilities.',
    'process.step4.title': 'Implementing',
    'process.step4.subtitle': 'AI Agent',
    'process.step4.desc': 'AI-powered coaching and real-time connectivity insights for continuous improvement.',

    // Skills
    'skills.title': 'The Network Mindset',
    'skills.subtitle': 'Essential Skills for the Agile Era',
    'skills.hub.title': 'Network Hub',
    'skills.hub.desc': 'A person at the center of conversations, sought for advice and guidance. Builds high-trust relationships.',
    'skills.bridge.title': 'Strategic Bridge',
    'skills.bridge.desc': 'Connects between units, ranks, and different fields of expertise. Facilitates alignment and balance.',
    'skills.gardener.title': 'Network Gardener',
    'skills.gardener.desc': 'Maintains deep, local, continuous relationships. Strengthens high-quality relationships.',
    'skills.pioneer.title': 'Network Pioneer',
    'skills.pioneer.desc': 'Constantly searches for new connections and domains. Builds high-diversity relationships.',

    // Index
    'index.turnOrgChart': 'Turn Your Org Chart Into a Living Network',
    'index.orgChartDesc': 'Move beyond static hierarchies. We use Organizational Network Analysis (ONA) to reveal how work really gets done.',
    'index.innovation': 'Innovation & Silo Busting',
    'index.innovationDesc': 'Innovation happens at the intersection. We visualize structural holes and bridge disconnected silos to speed up ideation.',
    'index.retention': 'Retention & Burnout',
    'index.retentionDesc': 'Spot flight risks before they resign. Visualize isolated nodes (purple) vs. embedded employees to predict attrition.',
    'index.leadership': 'Network Leadership',
    'index.leadershipDesc': 'Shift from hierarchy to hub. Identify and train your central connectors to influence change and drive strategy.',
    'index.howWeDoIt': 'How We Do It',
    'index.explorePlatform': 'Explore The Platform',
    'index.risk': 'Risk',

    // Platform
    'platform.os': 'The OS for the Networked Organization',
    'platform.title': 'The Platform',
    'platform.subtitle': 'A powerful fusion of data, psychology, and AI that transforms static hierarchies into intelligent human networks.',
    'platform.onaEngine': 'The ONA Engine',
    'platform.visualizeInvisible': 'Visualize the Invisible',
    'platform.onaDesc': 'Passive Data: We map the actual structure and flow of your organization. Our engine identifies bottlenecks, isolated employees, and hidden influencers that traditional org charts miss.',
    'platform.onaFeature1': 'Visualize communication flows',
    'platform.onaFeature2': 'Identify key influencers',
    'platform.onaFeature3': 'Detect silos and isolation',
    'platform.networkProfiling': 'Network Profiling',
    'platform.deepInsight': 'Deep Behavioral Insight',
    'platform.profilingDesc': "Active Data: A research-backed questionnaire designed to uncover each employee's unique Network Persona. Identify natural strengths and personalized growth areas.",
    'platform.profilingFeature1': 'Discover your Network Persona',
    'platform.profilingFeature2': 'Research-backed methodology',
    'platform.profilingFeature3': 'Personalized growth insights',
    'platform.collabAgent': 'The Collab Agent',
    'platform.actionableNudges': 'Actionable Nudges',
    'platform.agentDesc': "Intervention: Our AI provides real-time 'nudges'. The agent suggests who employees should connect with to bridge gaps and improve overall network health.",
    'platform.agentFeature1': 'AI-driven connection suggestions',
    'platform.agentFeature2': 'Integration with Slack/Teams',
    'platform.agentFeature3': 'Actionable daily insights',
    'platform.seeHowItWorks': 'See How It Works',
    'platform.readyTransform': 'Ready to Transform Your Organization?',
    'platform.joinCompanies': 'Join the forward-thinking companies already using StepAhead.',
    'platform.bookDemo': 'Book a Demo',
    'platform.contactSales': 'Contact Sales',

    // Solutions
    'solutions.badge': 'SOLUTIONS FOR EVERY CHALLENGE',
    'solutions.title': 'Solving the Complexity of Modern Work',
    'solutions.subtitle': 'From breaking down silos to navigating complex organizational changes—we turn your biggest human challenges into manageable data insights.',
    'solutions.siloBusting': 'Silo Busting & Collaboration',
    'solutions.siloDesc': 'Organizations lose millions on disconnected departments. We identify communication breaks in real-time and nudge leaders to bridge the gaps instantly.',
    'solutions.siloBenefit1': 'Increase cross-functional innovation',
    'solutions.siloBenefit2': 'Reduce duplication of work',
    'solutions.siloBenefit3': 'Speed up decision making',
    'solutions.changeManagement': 'Change Management',
    'solutions.changeDesc': "Whether it's M&A, hyper-growth, or restructuring—change fails due to people dynamics. We map the network to identify key 'Change Agents' who can accelerate adoption and integration.",
    'solutions.changeBenefit1': 'Accelerate M&A integration',
    'solutions.changeBenefit2': 'Manage rapid growth pains',
    'solutions.changeBenefit3': 'Identify cultural blockers',
    'solutions.talentRetention': 'Talent Retention & Burnout',
    'solutions.retentionDesc': 'Spot flight risks before they resign. Our AI analyzes communication patterns to detect burnout (over-collaboration) and isolation (disengagement) early.',
    'solutions.retentionBenefit1': 'Predict burnout risk',
    'solutions.retentionBenefit2': 'Identify isolated high-performers',
    'solutions.retentionBenefit3': 'Improve manager-employee connection',
    'solutions.leadershipDev': 'Network Leadership Development',
    'solutions.leadershipDesc': "Hierarchy is dead. We measure and train managers on how to become 'Hubs' of trust and influence, using data-driven insights and gamified simulations.",
    'solutions.leadershipBenefit1': 'Move from command to connect',
    'solutions.leadershipBenefit2': 'Visualize leadership impact',
    'solutions.leadershipBenefit3': 'Data-driven coaching plans',
    'solutions.seeHowItWorks': 'See How It Works',
    'solutions.dontSlowDown': "Don't let invisible problems slow you down",
    'solutions.getStrategy': 'Get a Strategy Session',

    // Academy
    'academy.badge': 'PRACTICAL LEADERSHIP WORKSHOPS',
    'academy.title': 'Network Leadership Academy',
    'academy.subtitle': 'Practical workshops for the new era of management. We help leaders shift from a hierarchical mindset to a networked one, using advanced simulations and practical tools.',
    'academy.downloadSyllabus': 'Download Syllabus',
    'academy.methodology': 'THE METHODOLOGY',
    'academy.theoryMeetsPractice': 'Theory Meets Practice',
    'academy.methodologyDesc1': 'Network concepts can be abstract. To bridge the gap, we use advanced simulations (powered by Accelium) as a training aid.',
    'academy.methodologyDesc2': 'Think of it as a "Flight Simulator" for management. The games aren\'t the goal—they are the means to practice complex dynamics like resource allocation, negotiation, and collaboration in a risk-free environment.',
    'academy.methodologyFeature1': 'Active experimentation',
    'academy.methodologyFeature2': 'Immediate feedback loops',
    'academy.methodologyFeature3': 'Real-world analogy analysis',
    'academy.strategicSimulations': 'Strategic Simulations',
    'academy.interactiveTraining': 'Interactive Training Aid',
    'academy.coreModules': 'Core Modules',
    'academy.developingPillars': 'Developing the 4 Pillars of Network Intelligence',
    'academy.trustBuilding': 'Trust Building',
    'academy.trustDesc': 'Creating psychological safety in hybrid teams.',
    'academy.influence': 'Influence Without Authority',
    'academy.influenceDesc': 'Leading complex projects across silos.',
    'academy.networkMindset': 'Network Mindset',
    'academy.mindsetDesc': "Shifting from 'Command & Control' to 'Connect & Collaborate'.",
    'academy.strategicConnecting': 'Strategic Connecting',
    'academy.connectingDesc': 'Identifying and leveraging key organizational bridges.',
    'academy.upgradeDNA': 'Upgrade Your Management DNA',
    'academy.upgradeDesc': 'Equip your leaders with the skills they need to navigate a networked world.',
    'academy.bookWorkshop': 'Book a Workshop',

    // About
    'about.mission': 'OUR MISSION',
    'about.title': 'Architects of the Networked Organization',
    'about.subtitle': 'We exist to transform static hierarchies into living, breathing, adaptive networks of shared value.',
    'about.orgChartDead': 'The Org Chart is Dead.',
    'about.longLiveNetwork': 'Long Live the Network.',
    'about.story1': 'StepAhead was founded with the vision of developing innovative technology based on network analysis to enable collaboration and connect people.',
    'about.story2': 'For over a century, organizations were managed like machines: top-down, siloed, and rigid. But the world has changed. Work today is complex, collaborative, and fast-paced.',
    'about.story3': 'We combined the science of Organizational Network Analysis (ONA) with practical leadership tools to give leaders a new pair of glasses—ones that see the actual flow of trust, information, and innovation.',
    'about.whatDrivesUs': 'What Drives Us',
    'about.dataIntuition': 'Data-Driven Intuition',
    'about.dataIntuitionDesc': 'We believe in gut feeling, but we trust data. We visualize the invisible.',
    'about.peopleFirst': 'People First',
    'about.peopleFirstDesc': 'Nodes and edges are interesting, but human relationships are what truly matter.',
    'about.actionableInsights': 'Actionable Insights',
    'about.actionableDesc': "We don't just map the problem; we prompt the solution.",
    'about.meetLeadership': 'Meet the Leadership',
    'about.sharonRole': 'Founder & COO',
    'about.sharonBio': "An expert in organizational dynamics and conflict resolution. As the owner of 'Gome-Gevim', Israel's leading mediation center, Sharon ensures our technology serves the people, translating network data into actionable strategies that build trust.",
    'about.yuvalRole': 'Academic Advisor',
    'about.yuvalBio': 'A world-renowned authority on Network Theory. Chair of Leadership and Networks at WHU School of Management, Germany. Yuval provides the scientific backbone to our ONA algorithms and methodology.',
    'about.nadavRole': 'CEO',
    'about.nadavBio': "A pioneer in game-based assessment and skill development. With a background as a strategic thinking lecturer and EdTech expert, Nadav leads the vision of the 'Skills-Based Organization', focusing on uncovering hidden talent through technology.",
    'about.joinRevolution': 'Join the Revolution',
    'about.revolutionDesc': "Whether you are an organization looking to evolve or a partner looking to collaborate, we'd love to connect.",
    'about.contactUs': 'Contact Us',

    // CTA
    'cta.title': 'Ready to Unlock Your Network Potential?',
    'cta.description': 'Discover the hidden patterns of collaboration and leadership within your organization.',
    'cta.button': 'Schedule a Demo',

    // Footer
    'footer.tagline': 'Architects of the Networked Organization. We transform static hierarchies into adaptive, data-driven human networks.',
    'footer.platform': 'Platform',
    'footer.onaTechnology': 'ONA Technology',
    'footer.solutions': 'Solutions',
    'footer.useCases': 'Use Cases',
    'footer.company': 'Company',
    'footer.aboutUs': 'About Us',
    'footer.academy': 'Academy',
    'footer.contact': 'Contact',
    'footer.contactUs': 'Contact Us',
    'footer.location': 'Tel Aviv, Israel',
    'footer.globalOps': 'Global Operations',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
  },
  he: {
    // Navigation
    'nav.home': 'בית',
    'nav.about': 'אודותינו',
    'nav.aboutUs': 'אודותינו',
    'nav.platform': 'פלטפורמה',
    'nav.solutions': 'פתרונות',
    'nav.solutionsDropdown': 'פתרונות',
    'nav.talentAcquisition': 'גיוס טאלנטים',
    'nav.leadershipInnovation': 'מנהיגות וחדשנות',
    'nav.organizationalDynamics': 'דינמיקה ארגונית',
    'nav.methodology': 'מתודולוגיה',
    'nav.aiLabs': 'AI Labs (בטא)',
    'nav.academy': 'אקדמיה',
    'nav.process': 'התהליך שלנו',
    'nav.skills': 'כישורי רשת',
    'nav.contact': 'צור קשר',
    'nav.getStarted': 'התחל עכשיו',

    // Hero (new value proposition)
    'hero.title': 'מנהיגות רשתית',
    'hero.subtitle': 'מימוש מלוא הפוטנציאל של ארגון מבוסס כישורים',
    'hero.mainTitle': 'בנו ארגון חכם ומחובר',
    'hero.mainSubtitle': 'הפסיקו לנחש מי המובילים בארגון ואיך הם משתפים פעולה. השתמשו בכלים מבוססי הנתונים שלנו כדי לגייס חכם יותר, לחזק מנהיגים אג\'יליים, לשבור סיילואים ולהאיץ חדשנות ארגונית.',
    'hero.exploreSolutions': 'גלו את הפתרונות שלנו',
    'hero.cta': 'קבע שיחת ייעוץ',
    'hero.cta2': 'התהליך שלנו',
    'hero.activateNetwork': 'התחילו עכשיו',
    'hero.meetAgent': 'הכירו את הסוכן',
    'hero.trustedBy': 'סומכים עלינו',
    'hero.trustedBySubtitle': 'ארגונים מובילים שסומכים עלינו',

    // Homepage - The 3 Pillars
    'index.pillar1.title': 'גייסו את הטאלנט הנכון',
    'index.pillar1.text': 'הערכות קוגניטיביות מבוססות משחק לזיהוי מועמדים עם הפוטנציאל הגבוה ביותר להשתלב ולהצליח.',
    'index.pillar1.button': 'גלו כלי טאלנט',
    'index.pillar2.title': 'פיתחו מנהיגים רשתיים',
    'index.pillar2.text': 'סדנאות והערכות Network Behavior Skills (NBS) שמפתחות מנהלים שמחברים אנשים ומניעים חדשנות.',
    'index.pillar2.button': 'גלו תוכניות מנהיגות',
    'index.pillar3.title': 'מטבו דינמיקה ארגונית',
    'index.pillar3.text': 'ניתוח רשתות ארגוניות (ONA) לחשיפת ה-DNA התרבותי שלכם, זיהוי צווארי בקבוק ושבירת סיילואים.',
    'index.pillar3.button': 'גלו פלטפורמת ONA',

    // Homepage - Our Philosophy
    'index.philosophy.title': 'המדע של צמתים וקשרים',
    'index.philosophy.text': 'ארגון מנצח נבנה על שני דברים: אנשים מעולים (הצמתים) ואיך הם מתחברים (הקשרים). אנחנו הפלטפורמה היחידה שמספקת כלים למדוד ולמטב את שניהם במקביל.',

    // Homepage - The Future (AI Collab Agent)
    'index.future.title': 'פגשו את עתיד העבודה: AI Collab Agent (בטא)',
    'index.future.text': 'מעבדת החדשנות שלנו בונה את הדור הבא של האינטליגנציה הארגונית. סוכן AI שמיושם בתהליך העבודה שלכם, מזהה הזדמנויות שיתוף פעולה ומונע סיילואים בזמן אמת.',
    'index.future.cta': 'הצטרפו לרשימת ההמתנה',
    'index.future.ctaAlt': 'הפכו לשותף עיצוב',

    // Myth Section
    'myth.title': 'המבנה הארגוני הוא מיתוס',
    'myth.subtitle': 'הרשת היא המציאות',
    'myth.description': 'ערך כבר לא נוצר בממגורות — הוא זורם דרך רשתות בלתי נראות. אנחנו עוזרים לכם לראות, להבין ולמטב את הקשרים הנסתרים האלה.',

    // Process
    'process.title': 'מנתונים נסתרים להשפעה ארגונית',
    'process.subtitle': 'תהליך 4 השלבים',
    'process.step1.title': 'זיהוי',
    'process.step1.subtitle': 'מיפוי',
    'process.step1.desc': 'מצאו את ה"גיבורים הנסתרים" — האנשים המחוברים והמשפיעים ביותר על בסיס נתוני שיתוף פעולה אמיתיים.',
    'process.step2.title': 'אבחון',
    'process.step2.subtitle': 'פרופילינג',
    'process.step2.desc': 'הערכת כישורים יחסיים ספציפיים: יכולת לבנות אמון, להפעיל השפעה ולגשר בין קבוצות שונות.',
    'process.step3.title': 'פיתוח',
    'process.step3.subtitle': 'כישורים',
    'process.step3.desc': 'תוכניות פיתוח ממוקדות לחיזוק יכולות מנהיגות רשתית.',
    'process.step4.title': 'יישום',
    'process.step4.subtitle': 'סוכן AI',
    'process.step4.desc': 'אימון מונע AI ותובנות קישוריות בזמן אמת לשיפור מתמיד.',

    // Skills
    'skills.title': 'החשיבה הרשתית',
    'skills.subtitle': 'כישורים חיוניים לעידן הגמישות',
    'skills.hub.title': 'מרכז רשת',
    'skills.hub.desc': 'אדם במרכז השיחות, אליו פונים לייעוץ והדרכה. בונה יחסי אמון גבוהים.',
    'skills.bridge.title': 'גשר אסטרטגי',
    'skills.bridge.desc': 'מחבר בין יחידות, דרגים ותחומי מומחיות שונים. מאפשר יישור קו ואיזון.',
    'skills.gardener.title': 'גנן רשת',
    'skills.gardener.desc': 'מקיים קשרים עמוקים, מקומיים ורציפים. מחזק יחסים באיכות גבוהה.',
    'skills.pioneer.title': 'חלוץ רשת',
    'skills.pioneer.desc': 'מחפש כל הזמן קשרים ותחומים חדשים. בונה יחסים בגיוון גבוה.',

    // Index
    'index.turnOrgChart': 'הפוך את התרשים הארגוני לרשת חיה',
    'index.orgChartDesc': 'עבור מעבר להיררכיה סטטית. אנו משתמשים בניתוח רשתות (ONA) כדי לחשוף את הדינמיקה האמיתית של הארגון.',
    'index.innovation': 'מהירות וחדשנות',
    'index.innovationDesc': 'חדשנות קורית בחיבורים. אנחנו מזהים ומחברים בין סיילואים מנותקים.',
    'index.retention': 'שימור טאלנטים',
    'index.retentionDesc': 'זהה את העובדים המבודדים לפני שהם עוזבים. נתח את הרשת כדי לראות מי בסיכון.',
    'index.leadership': 'מנהיגות מודרנית',
    'index.leadershipDesc': 'מנהלים לומדים להשפיע דרך אמון וחיבורים (Hubs), לא רק דרך סמכות.',
    'index.howWeDoIt': 'איך אנחנו עושים את זה',
    'index.explorePlatform': 'גלה את הפלטפורמה',
    'index.risk': 'סיכון',

    // Platform
    'platform.os': 'מערכת ההפעלה לארגון המחובר',
    'platform.title': 'הפלטפורמה שלנו',
    'platform.subtitle': 'שילוב עוצמתי של דאטה, פסיכולוגיה ובינה מלאכותית שהופך היררכיה סטטית לרשת אנושית חכמה.',
    'platform.onaEngine': 'מנוע ה-ONA',
    'platform.visualizeInvisible': 'לראות את הבלתי נראה',
    'platform.onaDesc': 'דאטה פסיבי: אנחנו ממפים את המבנה והזרימה האמיתיים של הארגון. המערכת מזהה צווארי בקבוק, עובדים מבודדים ומוקדי השפעה נסתרים שלא מופיעים בתרשים הארגוני.',
    'platform.onaFeature1': 'מיפוי זרימת תקשורת',
    'platform.onaFeature2': 'זיהוי משפיענים מרכזיים',
    'platform.onaFeature3': 'איתור סיילואים וניתוקים',
    'platform.networkProfiling': 'פרופיל רשתי',
    'platform.deepInsight': 'מעבר למשחוק: פרסונות אמיתיות',
    'platform.profilingDesc': 'דאטה אקטיבי: שאלון מחקרי שנועד למפות את סגנון הרישות (Network Persona) של כל עובד. גלה את החוזקות הטבעיות והאזורים לצמיחה אישית.',
    'platform.profilingFeature1': 'גלה את הפרסונה הרשתית שלך',
    'platform.profilingFeature2': 'מתודולוגיה מבוססת מחקר',
    'platform.profilingFeature3': 'תובנות אישיות לצמיחה',
    'platform.collabAgent': 'סוכן ה-AI',
    'platform.actionableNudges': 'דחיפות בזמן אמת',
    'platform.agentDesc': "התערבות: בינה מלאכותית שנותנת 'דחיפות' (Nudges) בזמן אמת. הסוכן מציע לאנשים עם מי כדאי להם לדבר כדי לשפר את הרשת.",
    'platform.agentFeature1': 'הצעות לחיבור מבוססות AI',
    'platform.agentFeature2': 'אינטגרציה חלקה ל-Teams/Slack',
    'platform.agentFeature3': 'תובנות יומיות לפעולה',
    'platform.seeHowItWorks': 'ראה איך זה עובד',
    'platform.readyTransform': 'מוכנים להפוך את הארגון לרשתי?',
    'platform.joinCompanies': 'הצטרף לארגונים המובילים שכבר משתמשים ב-StepAhead',
    'platform.bookDemo': 'קבע הדגמה',
    'platform.contactSales': 'צור קשר עם מכירות',

    // Solutions
    'solutions.badge': 'פתרונות לכל אתגר',
    'solutions.title': 'פתרונות לארגונים בצמיחה ושינוי',
    'solutions.subtitle': 'אנחנו הופכים את האתגרים האנושיים המורכבים ביותר - סיילואים, שחיקה ושינויים ארגוניים - לתהליך מבוסס דאטה.',
    'solutions.siloBusting': 'שבירת סיילואים',
    'solutions.siloDesc': 'ארגונים מפסידים מיליונים על חוסר תקשורת. המערכת מזהה נתקים בזמן אמת ומציעה למנהלים למי להתחבר כדי להזרים את המידע מחדש.',
    'solutions.siloBenefit1': 'הגברת חדשנות בין-תפקידית',
    'solutions.siloBenefit2': 'הפחתת כפילות בעבודה',
    'solutions.siloBenefit3': 'האצת קבלת החלטות',
    'solutions.changeManagement': 'ניהול שינוי (Change Management)',
    'solutions.changeDesc': "בין אם זה מיזוג (M&A), צמיחה מהירה או ארגון מחדש - שינויים נכשלים בגלל אנשים. אנחנו ממפים את 'סוכני השינוי' שיעזרו להטמיע את המציאות החדשה.",
    'solutions.changeBenefit1': 'האצת אינטגרציה של מיזוגים',
    'solutions.changeBenefit2': 'ניהול כאבי צמיחה מהירה',
    'solutions.changeBenefit3': 'זיהוי חסמים תרבותיים',
    'solutions.talentRetention': 'שימור טאלנטים',
    'solutions.retentionDesc': 'זהה את העובדים המבודדים לפני שהם עוזבים. המערכת מזהה עומס תקשורתי (Overload) ובידוד חברתי לפני שמכתב ההתפטרות מגיע.',
    'solutions.retentionBenefit1': 'חיזוי סיכון לשחיקה',
    'solutions.retentionBenefit2': 'זיהוי ביצועים גבוהים מבודדים',
    'solutions.retentionBenefit3': 'שיפור הקשר בין מנהל לעובד',
    'solutions.leadershipDev': 'פיתוח מנהיגות רשתית',
    'solutions.leadershipDesc': "היררכיה זה פאסה. אנחנו מודדים ומלמדים מנהלים איך להפוך ל-'Hubs' של אמון והשפעה, בעזרת דאטה וסימולציות משחקיות.",
    'solutions.leadershipBenefit1': 'מעבר מפקודה לחיבור',
    'solutions.leadershipBenefit2': 'הדמיית השפעת מנהיגות',
    'solutions.leadershipBenefit3': 'תוכניות אימון מבוססות נתונים',
    'solutions.seeHowItWorks': 'ראה איך זה עובד',
    'solutions.dontSlowDown': 'אל תתן לבעיות בלתי נראות להאט אותך',
    'solutions.getStrategy': 'קבל פגישת אסטרטגיה',

    // Academy
    'academy.badge': 'סדנאות מנהיגות מעשיות',
    'academy.title': 'האקדמיה למנהיגות רשתית',
    'academy.subtitle': 'סדנאות מעשיות לפיתוח מיומנויות הניהול החדשות. אנחנו עוזרים למנהלים לעבור מתפיסה היררכית לתפיסה רשתית, באמצעות תרגול, סימולציות וכלים פרקטיים.',
    'academy.downloadSyllabus': 'הורד סילבוס',
    'academy.methodology': 'המתודולוגיה',
    'academy.theoryMeetsPractice': 'תיאוריה פוגשת פרקטיקה',
    'academy.methodologyDesc1': 'מושגי רשת יכולים להיות מופשטים. כדי לגשר על הפער, אנו משתמשים בסימולציות מתקדמות (בהנעת Accelium) ככלי אימון.',
    'academy.methodologyDesc2': 'חשבו על זה כ"סימולטור טיסה" לניהול. המשחקים אינם המטרה - הם האמצעי לתרגול דינמיקות מורכבות כמו הקצאת משאבים, משא ומתן ושיתוף פעולה בסביבה נטולת סיכון.',
    'academy.methodologyFeature1': 'ניסוי פעיל',
    'academy.methodologyFeature2': 'לולאות משוב מיידיות',
    'academy.methodologyFeature3': 'ניתוח אנלוגיה לעולם האמיתי',
    'academy.strategicSimulations': 'סימולציות אסטרטגיות',
    'academy.interactiveTraining': 'כלי אימון אינטראקטיבי',
    'academy.coreModules': 'מודולים מרכזיים',
    'academy.developingPillars': 'פיתוח 4 עמודי התווך של אינטליגנציה רשתית',
    'academy.trustBuilding': 'בניית אמון',
    'academy.trustDesc': 'יצירת ביטחון פסיכולוגי בצוותים היברידיים.',
    'academy.influence': 'השפעה ללא סמכות',
    'academy.influenceDesc': 'הובלת פרויקטים מורכבים בין סיילואים.',
    'academy.networkMindset': 'חשיבה רשתית',
    'academy.mindsetDesc': "מעבר מ'פקודה ושליטה' ל'חיבור ושיתוף פעולה'.",
    'academy.strategicConnecting': 'חיבור אסטרטגי',
    'academy.connectingDesc': 'זיהוי ומינוף גשרים ארגוניים מרכזיים.',
    'academy.upgradeDNA': 'שדרג את ה-DNA הניהולי שלך',
    'academy.upgradeDesc': 'צייד את המנהיגים שלך במיומנויות הדרושות לנווט בעולם רשתי.',
    'academy.bookWorkshop': 'קבע סדנה',

    // About
    'about.mission': 'המשימה שלנו',
    'about.title': 'ארכיטקטים של הארגון הרשתי',
    'about.subtitle': 'אנחנו כאן כדי להפוך מבנים ארגוניים קשיחים לרשתות חיות, נושמות ומסתגלות.',
    'about.orgChartDead': 'התרשים הארגוני מת.',
    'about.longLiveNetwork': 'יחי הרשת החדשה.',
    'about.story1': 'פאהד הוקמה מתוך חזון לפתח טכנולוגיה חדשנית המבוססת על ניתוח רשתות כדי לאפשר שיתוף פעולה ולחבר בין אנשים.',
    'about.story2': 'במשך למעלה ממאה שנה, ארגונים נוהלו כמו מכונות: מלמעלה למטה, בסיילואים ונוקשות. אבל העולם השתנה. העבודה כיום היא מורכבת, שיתופית ומהירה.',
    'about.story3': 'שילבנו את המדע של ניתוח רשתות ארגוניות (ONA) עם כלי מנהיגות פרקטיים כדי לתת למנהלים משקפיים חדשים - כאלה שרואים את הזרימה האמיתית של אמון, מידע וחדשנות.',
    'about.whatDrivesUs': 'מה מניע אותנו',
    'about.dataIntuition': 'אינטואיציה מבוססת דאטה',
    'about.dataIntuitionDesc': 'אנחנו מאמינים בתחושת בטן, אבל סומכים על דאטה. אנחנו הופכים את הבלתי-נראה לנראה.',
    'about.peopleFirst': 'אנשים לפני הכל',
    'about.peopleFirstDesc': 'צמתים וקווים זה מעניין, אבל מערכות יחסים אנושיות הן הדבר האמיתי.',
    'about.actionableInsights': 'תובנות לפעולה',
    'about.actionableDesc': 'אנחנו לא רק ממפים את הבעיה, אנחנו דוחפים לפתרון.',
    'about.meetLeadership': 'ההנהגה שלנו',
    'about.sharonRole': 'מייסדת ומנכ"ל תפעול',
    'about.sharonBio': "מומחית לדינמיקה ארגונית ופתרון קונפליקטים. כבעלים של 'גומא-גבים', המרכז המוביל בישראל לגישור ואימון, שרון מביאה ל-StepAhead את הניסיון האנושי העמוק הדרוש כדי להפוך דאטה יבש לאמון ושיתוף פעולה.",
    'about.yuvalRole': 'יועץ אקדמי',
    'about.yuvalBio': 'מוביל עולמי בתחום חקר הרשתות. ראש תחום מנהיגות ורשתות בבית הספר לניהול WHU בגרמניה. מביא את התיקוף המדעי והמתודולוגי לניתוח הרשתות של StepAhead.',
    'about.nadavRole': 'מנכ"ל',
    'about.nadavBio': "מומחה לטכנולוגיות למידה והערכת מיומנויות. מרצה לחשיבה אסטרטגית וחלוץ בתחום הלמידה מבוססת-משחק (GBL). ב-StepAhead, נדב מוביל את חזון הארגון מבוסס-המיומנויות וזיהוי הטאלנטים הנסתרים.",
    'about.joinRevolution': 'הצטרפו למהפכה',
    'about.revolutionDesc': 'בין אם אתם ארגון שרוצה להתפתח או שותף שרוצה לשתף פעולה, נשמח לשמוע מכם.',
    'about.contactUs': 'צרו קשר',

    // CTA
    'cta.title': 'מוכנים לממש את הפוטנציאל הרשתי שלכם?',
    'cta.description': 'גלו את הדפוסים הנסתרים של שיתוף פעולה ומנהיגות בארגון שלכם.',
    'cta.button': 'קבע הדגמה',

    // Footer
    'footer.tagline': 'ארכיטקטים של הארגון הרשתי. אנו הופכים היררכיות סטטיות לרשתות אנושיות מסתגלות ומבוססות נתונים.',
    'footer.platform': 'פלטפורמה',
    'footer.onaTechnology': 'טכנולוגיית ONA',
    'footer.solutions': 'פתרונות',
    'footer.useCases': 'מקרי שימוש',
    'footer.company': 'חברה',
    'footer.aboutUs': 'אודותינו',
    'footer.academy': 'אקדמיה',
    'footer.contact': 'צור קשר',
    'footer.contactUs': 'צור קשר',
    'footer.location': 'תל אביב, ישראל',
    'footer.globalOps': 'פעילות גלובלית',
    'footer.rights': 'כל הזכויות שמורות.',
    'footer.privacy': 'מדיניות פרטיות',
    'footer.terms': 'תנאי שימוש',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'he';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
