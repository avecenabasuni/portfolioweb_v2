// ============================================
// PORTFOLIO DATA - Edit your content here!
// ============================================
// This file contains all your portfolio content.
// Simply edit the arrays below to update your site.
// No coding knowledge required - just follow the patterns!

const DATA = {

  // ============================================
  // SELECTED WORK / PROJECTS
  // ============================================
  // Add new projects by copying the template below
  // and filling in your details.
  /*
  TEMPLATE:
  {
    id: 'unique-id',           // Unique identifier (lowercase, dashes)
    title: 'Project Title',
    summary: 'One line description',
    tags: ['Tag1', 'Tag2'],    // Skills/technologies used
    outcome: 'Key result or metric',
    status: 'Completed',       // Completed, In Progress, etc.
    challenge: [
      'First challenge point',
      'Second challenge point'
    ],
    impact: [
      '<strong>Highlight</strong> key impact',
      'Another impact point'
    ],
    techStack: ['Tech1', 'Tech2', 'Tech3'],
    learnings: [
      'What you learned'
    ],
    media: [
      { type: 'placeholder', label: 'Screenshot' }
    ],
    links: { 
      github: 'https://github.com/...', 
      docs: 'https://...' 
    },
    icon: 'visibility'  // Material icon name (see ICONS in app.js)
  },
  */
  projects: [
    {
      id: 'new-relic-observability',
      title: 'Full Stack Observability Implementation',
      summary: 'End-to-end monitoring setup using New Relic for enterprise clients.',
      tags: ['New Relic', 'APM', 'Infrastructure'],
      outcome: 'Reduced support tickets by 10% and boosted client satisfaction.',
      status: 'Deployed',
      challenge: [
        'Clients lacked visibility into application performance and errors.',
        'No centralized dashboard for infrastructure and application metrics.',
        'Manual troubleshooting was time-consuming and error-prone.'
      ],
      impact: [
        '<strong>Reduced support tickets by 10%</strong> through proactive monitoring.',
        'Increased internal teams product knowledge by up to 10% via technical trainings.',
        'Enabled self-service dashboards for development teams.'
      ],
      techStack: ['New Relic APM', 'Infrastructure Agent', 'Logs', 'Alerts', 'Dashboards'],
      learnings: [
        'Start with business-critical transactions for APM instrumentation.',
        'Custom dashboards drive adoption more than default views.'
      ],
      media: [
        { type: 'placeholder', label: 'APM Dashboard' },
        { type: 'placeholder', label: 'Infrastructure View' },
        { type: 'placeholder', label: 'Alert Policies' }
      ],
      links: { github: '#', docs: '#' },
      icon: 'monitoring'
    },
    {
      id: 'nutanix-hci',
      title: 'Nutanix HCI Deployment',
      summary: 'Hyperconverged infrastructure sizing and implementation for clients.',
      tags: ['Nutanix', 'HCI', 'Virtualization'],
      outcome: 'Optimized cluster sizing and improved infrastructure reliability.',
      status: 'Deployed',
      challenge: [
        'Traditional infrastructure was costly and complex to manage.',
        'Clients needed simplified hyperconverged solutions.',
        'Required proper sizing for various workloads.'
      ],
      impact: [
        '<strong>Streamlined infrastructure management</strong> for multiple clients.',
        'Delivered comprehensive technical documentation (BOQ, HLD, LLD).',
        'Ensured on-time delivery and consistent quality.'
      ],
      techStack: ['Nutanix AOS', 'Prism Central', 'AHV', 'Calm', 'Files'],
      learnings: [
        'Proper sizing is critical for HCI performance.',
        'POC sessions are key to demonstrating solution value.'
      ],
      media: [
        { type: 'placeholder', label: 'Cluster Dashboard' },
        { type: 'placeholder', label: 'Sizing Calculator' }
      ],
      links: { github: '#', docs: '#' },
      icon: 'dns'
    },
    {
      id: 'syringe-pump',
      title: 'Arduino-based Syringe Pump',
      summary: 'Low-cost medical device for precise fluid delivery developed with a multidisciplinary team at Covent Indonesia.',
      tags: ['Arduino', 'C/C++', 'Embedded', 'Medical Device'],
      outcome: 'Enabled precise fluid delivery adhering to health standards.',
      status: 'Completed',
      challenge: [
        'Medical devices were too expensive for resource-limited settings.',
        'Required precise fluid delivery with intuitive UI.',
        'Must adhere to health and safety standards.'
      ],
      impact: [
        '<strong>Developed low-cost alternative</strong> for medical professionals.',
        'Designed intuitive user interface for ease of use.',
        'Passed rigorous testing and debugging for reliability.'
      ],
      techStack: ['Arduino', 'C/C++', 'Stepper Motors', 'LCD Display', 'Embedded Systems'],
      learnings: [
        'Medical devices require extensive testing and validation.',
        'User interface simplicity is crucial for adoption.'
      ],
      media: [
        { type: 'image', src: 'assets/images/project-2.png', label: 'Device Prototype' }
      ],
      links: { github: '#', docs: '#' },
      icon: 'settings_suggest'
    },
    {
      id: 'iot-door-lock',
      title: 'IoT-Based Door Lock System',
      summary: 'Smart door security system for the Electronics Laboratory using RFID and ESP32 microcontroller.',
      tags: ['ESP32', 'IoT', 'RFID', 'Firebase'],
      outcome: 'Implemented in the 3rd Floor DTE Building Electronics Lab.',
      status: 'Deployed',
      challenge: [
        'Laboratory room needed secure access control system.',
        'Required integration with student ID cards.',
        'Door opening data needed to be logged to database.'
      ],
      impact: [
        '<strong>Easy, practical, and safe</strong> access for authorized users.',
        'Real-time logging of door access to Firebase database.',
        'Seamless integration with existing student ID cards.'
      ],
      techStack: ['ESP32', 'RFID Reader', 'Firebase', 'Wi-Fi', 'C/C++'],
      learnings: [
        'IoT systems require robust error handling for connectivity issues.',
        'RFID integration needs careful calibration for reliability.'
      ],
      media: [
        { type: 'image', src: 'assets/images/project-3.png', label: 'System Overview' }
      ],
      links: { github: '#', docs: '#' },
      icon: 'lock'
    },
    {
      id: 'smart-trash-bin',
      title: 'Smart Trash Bin with Auto Sanitizer',
      summary: 'Arduino-based trash can with automatic lid and integrated hand sanitizer dispenser.',
      tags: ['Arduino', 'Ultrasonic', 'Servo', 'IoT'],
      outcome: 'Touchless waste disposal with automatic hand sanitization.',
      status: 'Completed',
      challenge: [
        'Needed touchless solution for hygiene during COVID-19.',
        'Integrated hand sanitizer for complete hygiene workflow.',
        'Required reliable proximity detection.'
      ],
      impact: [
        '<strong>Touchless operation</strong> for improved hygiene.',
        'Automatic hand sanitizer dispensing after trash disposal.',
        'Buzzer alarm for sanitizer reminder.'
      ],
      techStack: ['Arduino', 'Ultrasonic Sensor', 'Servo Motor', 'Buzzer', 'C/C++'],
      learnings: [
        'Sensor placement is critical for reliable detection.',
        'Mechanical integration requires precise timing control.'
      ],
      media: [
        { type: 'image', src: 'assets/images/project-4.png', label: 'Prototype' }
      ],
      links: { github: '#', docs: '#' },
      icon: 'delete'
    },
    {
      id: 'potentiostat-esp32',
      title: 'Potentiostat for Cyclic Voltammetry',
      summary: 'Affordable open-source potentiostat using ESP32 for electrochemical analysis.',
      tags: ['ESP32', 'Electronics', 'Op-Amp', 'Electrochemistry'],
      outcome: 'Built affordable device (~537,600 IDR) for cyclic voltammetry.',
      status: 'Thesis Project',
      challenge: [
        'Commercial potentiostats are expensive for educational use.',
        'Required precise voltage sweep and current measurement.',
        'Needed open-source solution for reproducibility.'
      ],
      impact: [
        '<strong>Affordable alternative</strong> at ~537,600 IDR.',
        'Current range: -430 µA to +410 µA.',
        'Sweep voltage range: -1.5V to 1.5V.'
      ],
      techStack: ['ESP32', 'Op-Amps', 'Resistors', 'Capacitors', 'Diodes', 'C/C++'],
      learnings: [
        'Analog circuit design requires careful noise management.',
        'Calibration is essential for measurement accuracy.'
      ],
      media: [
        { type: 'image', src: 'assets/images/project-5.png', label: 'Device & Output' }
      ],
      links: { github: '#', docs: '#' },
      icon: 'science'
    }
  ],

  // ============================================
  // THE VAULT - Quick showcase items
  // ============================================
  // Add new vault items by copying this template:
  /*
  { id: 99, title: 'Item Title', category: 'Category', description: 'Short desc', icon: 'dashboard' },
  */
  vault: [
    { id: 1, title: 'New Relic Dashboards', category: 'Observability', description: 'Custom APM & Infra Dashboards', icon: 'dashboard' },
    { id: 2, title: 'AWS Architecture Diagrams', category: 'AWS', description: 'Cloud Infrastructure Design', icon: 'cloud' },
    { id: 3, title: 'Nutanix Sizing Docs', category: 'Docs', description: 'HCI Cluster Sizing', icon: 'description' },
    { id: 4, title: 'IoT Door Lock System', category: 'Embedded', description: 'Lab Security Project', icon: 'lock' },
    { id: 5, title: 'Smart Trash Bin', category: 'Embedded', description: 'Auto Sanitizer Integration', icon: 'settings_suggest' },
    { id: 6, title: 'Potentiostat ESP32', category: 'Embedded', description: 'Cyclic Voltammetry Analysis', icon: 'terminal' },
    { id: 7, title: 'Linux Admin Scripts', category: 'SysAdmin', description: 'Automation Utilities', icon: 'terminal' },
    { id: 8, title: 'DR Planning Docs', category: 'Docs', description: 'Disaster Recovery', icon: 'security' },
    { id: 9, title: 'NRQL Queries', category: 'Observability', description: 'New Relic Query Library', icon: 'code' },
    { id: 10, title: 'Exchange Server Setup', category: 'SysAdmin', description: 'Microsoft Admin', icon: 'mail' },
    { id: 11, title: 'Active Directory', category: 'SysAdmin', description: 'Windows Server Admin', icon: 'group' },
    { id: 12, title: 'Practicum Modules', category: 'Docs', description: 'Embedded Systems Course', icon: 'menu_book' }
  ],

  // ============================================
  // WRITING / ARTICLES
  // ============================================
  /*
  TEMPLATE:
  {
    title: 'Article Title',
    excerpt: 'Brief description of the article',
    platform: 'Medium',
    readTime: '5 min read',
    link: 'https://medium.com/...',
    icon: 'article'
  },
  */
  writing: [
    {
      title: 'Send New Relic Alerts to Telegram (Pure Webhook, Zero Middleware)',
      excerpt: 'Push New Relic alerts to Telegram without spinning up servers or Lambda. Just a webhook that hits your Telegram bot directly.',
      platform: 'Medium',
      readTime: '5 min read',
      link: 'https://medium.com/@avecenabasuni/send-new-relic-alerts-to-telegram-pure-webhook-zero-middleware-f1c1234567',
      icon: 'notifications_active'
    },
    {
      title: 'A Practical Guide to Modern Application Observability',
      excerpt: 'In today\'s world of complex, cloud-native apps, knowing something\'s wrong isn\'t enough — you need to know what, where, and why.',
      platform: 'Medium',
      readTime: '8 min read',
      link: 'https://medium.com/@avecenabasuni/a-practical-guide-to-modern-application-observability-db59b4d0c2cf',
      icon: 'visibility'
    },
    {
      title: 'Perlinuxan Duniawi',
      excerpt: 'Kenapa development lebih gampang di Linux daripada di Windows? Simak tulisan ini!',
      platform: 'Medium',
      readTime: '4 min read',
      link: 'https://medium.com/@avecenalegacy/perlinuxan-duniawi-e0627927e647',
      icon: 'terminal'
    }
  ],

  // ============================================
  // EXPERIENCE / WORK HISTORY
  // ============================================
  /*
  TEMPLATE:
  {
    title: 'Job Title',
    company: 'Company Name',
    period: 'Month Year - Month Year',
    current: true/false,
    points: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2'
    ]
  },
  */
  experience: [
    {
      title: 'Associate Observability Engineer',
      company: 'PT Astra Graphia Information Technology',
      period: 'Apr 2024 - Present',
      current: true,
      points: [
        'Implemented New Relic observability across enterprise clients.',
        'Developed custom NRQL dashboards reducing alert noise by 40%.',
        'Automated infrastructure monitoring with Terraform.',
        'Trained 50+ engineers on observability best practices.'
      ]
    },
    {
      title: 'Junior Systems Engineer',
      company: 'PT Kairos Utama Indonesia',
      period: 'Apr 2023 - Mar 2024',
      current: false,
      points: [
        'Designed and implemented secure, high-performance server systems.',
        'Managed Microsoft environments (Exchange, AD, SQL Server).',
        'Achieved high first-call resolution during 24/7 operations.',
        'Developed disaster recovery plans for business continuity.'
      ]
    },
    {
      title: 'Embedded Systems Engineer',
      company: 'Covent Indonesia',
      period: 'Aug 2021 - Jan 2023',
      current: false,
      points: [
        'Developed Arduino-based Syringe Pump for medical use.',
        'Designed intuitive user interfaces for medical devices.',
        'Programmed microcontrollers in C/C++ for accurate fluid delivery.'
      ]
    }
  ],

  // ============================================
  // CERTIFICATIONS
  // ============================================
  certifications: {
    // Featured certification (shown prominently)
    featured: {
      provider: 'AWS',
      title: 'Solutions Architect',
      level: 'Associate Level',
      issued: '2024',
      id: 'AWS-SAA',
      link: 'https://www.credly.com/badges/d65aeee4-927e-4dcf-9b2a-166fcea82751/public_url',
      logo: 'assets/images/aws.png'
    },
    // Mini cards shown next to featured
    others: [
      {
        title: 'New Relic Adv.',
        issuer: 'New Relic',
        link: 'https://credentials.newrelic.com/9c83be61-d154-45cb-bc83-7accd8cf447a',
        logo: 'assets/images/newrelic.png'
      },
      {
        title: 'GCP CDL',
        issuer: 'Google Cloud',
        link: 'https://www.credential.net/e2d66dd1-d66e-48ae-b65f-256690c2614b',
        logo: 'assets/images/google.png'
      }
    ],
    // Number shown on "+X" button
    moreCount: 22,
    // All certifications (shown in modal when clicking +X)
    /*
    TEMPLATE:
    { title: 'Certification Name', issuer: 'Issuing Organization', icon: 'cloud', link: 'https://...', logo: 'assets/images/...' },
    */
    all: [
      { title: 'AWS Solutions Architect Associate', issuer: 'Amazon Web Services', icon: 'cloud', link: 'https://www.credly.com/badges/d65aeee4-927e-4dcf-9b2a-166fcea82751/public_url', logo: 'assets/images/aws.png' },
      { title: 'New Relic Advanced Practitioner', issuer: 'New Relic', icon: 'monitoring', link: 'https://credentials.newrelic.com/9c83be61-d154-45cb-bc83-7accd8cf447a', logo: 'assets/images/newrelic.png' },
      { title: 'Google Cloud Digital Leader', issuer: 'Google Cloud', icon: 'cloud', link: 'https://www.credential.net/e2d66dd1-d66e-48ae-b65f-256690c2614b', logo: 'assets/images/google.png' },
      { title: 'Nutanix Certified Professional - MCI 6', issuer: 'Nutanix', icon: 'dns', link: 'https://www.credly.com/badges/0e312ff1-adac-41b7-9078-c12f5b8f8426/linked_in_profile', logo: 'assets/images/ncpmci.png' },
      { title: 'Nutanix Certified Associate 6', issuer: 'Nutanix', icon: 'dns', link: 'https://www.credly.com/badges/f4611960-d413-4c9e-a326-aee0549e3a60/linked_in_profile', logo: 'assets/images/nca.png' },
      { title: 'Nutanix Sizing Professional', issuer: 'Nutanix', icon: 'dns', link: 'https://www.credly.com/badges/378bd7df-296e-49ee-92ef-c72c72dfc20d/linked_in_profile', logo: 'assets/images/nsp.png' },
      { title: 'Nutanix Accredited Professional - Infra', issuer: 'Nutanix', icon: 'dns', link: 'https://www.credly.com/badges/b956ae95-53d7-4c9f-9bd9-fb96aa69a894/linked_in_profile', logo: 'assets/images/napi.png' },
      { title: 'Nutanix Certified Sales Representative', issuer: 'Nutanix', icon: 'dns', link: 'https://www.credly.com/badges/66986869-d554-474c-834f-05a7cd49c32c/linked_in_profile', logo: 'assets/images/ncsp.png' },
      { title: 'Nutanix Accredited Associate - Infra', issuer: 'Nutanix', icon: 'dns', link: 'https://www.credly.com/badges/0ad7f09b-f30f-4c99-bf2c-683e38514e58/linked_in_profile', logo: 'assets/images/naai.png' },
      { title: 'Full Stack Observability Practitioner', issuer: 'New Relic', icon: 'visibility', link: 'https://credentials.newrelic.com/9a3259c9-7e16-4fa1-b744-c0ed5780a9d8', logo: 'assets/images/fsop.png' },
      { title: 'New Relic Verified Foundation', issuer: 'New Relic', icon: 'visibility', link: 'https://credentials.newrelic.com/068e7e5b-c3a9-4aed-8786-6f9134fd66aa', logo: 'assets/images/nvf.png' },
      { title: 'Certified Secure Computer User (C/SCU)', issuer: 'EC-Council', icon: 'security', link: '#', logo: 'assets/images/cscu.jpeg' },
      { title: 'CCNA: Enterprise Networking, Security, and Automation', issuer: 'Cisco', icon: 'router', link: 'https://www.credly.com/badges/e9a6ea82-0af7-4c8f-b48a-2a4538bb4c85', logo: 'assets/images/CCNAENSA__1_.png' },
      { title: 'CCNA: Switching, Routing, and Wireless Essentials', issuer: 'Cisco', icon: 'router', link: 'https://www.credly.com/badges/e9a6ea82-0af7-4c8f-b48a-2a4538bb4c85', logo: 'assets/images/CCNASRWE__1_.png' },
      { title: 'CCNA: Introduction to Networks', issuer: 'Cisco', icon: 'router', link: 'https://www.credly.com/badges/46a2d6c9-2454-4a73-8ace-72bdaf3eb340/linked_in_profile', logo: 'assets/images/CCNAITN__1_.png' },
      { title: 'Google IT Support Professional', issuer: 'Google', icon: 'computer', link: 'https://www.coursera.org/account/accomplishments/professional-cert/M8P665NBR4YF', logo: 'assets/images/googleitsupport.jpg' },
      { title: 'AWS Academy: Machine Learning Foundations', issuer: 'AWS', icon: 'smart_toy', link: 'https://www.credly.com/badges/0fa7352a-4bcc-454c-8fba-f5a138862077/linked_in_profile', logo: 'assets/images/awsml.png' },
      { title: 'AWS Academy: Cloud Architecting', issuer: 'AWS', icon: 'cloud', link: 'https://www.credly.com/badges/85575361-3564-41cb-9bda-e615e798eaaf/linked_in_profile', logo: 'assets/images/awsca.png' },
      { title: 'AWS Academy: Cloud Foundations', issuer: 'AWS', icon: 'cloud', link: 'https://www.credly.com/badges/880f1f69-c013-4169-9fef-c570b87b1a28', logo: 'assets/images/awscf.png' },
      { title: 'Cisco: Introduction to IoT', issuer: 'Cisco', icon: 'device_hub', link: 'https://www.credly.com/badges/e9a6ea82-0af7-4c8f-b48a-2a4538bb4c85', logo: 'assets/images/ciscoiot.png' }
    ]
  },

  // ============================================
  // TECHNICAL PILLARS
  // ============================================
  /*
  TEMPLATE:
  {
    title: 'Pillar Name',
    icon: 'visibility',
    skills: ['Skill1', 'Skill2', 'Skill3']
  },
  */
  pillars: [
    {
      title: 'Observability',
      icon: 'visibility',
      skills: ['New Relic', 'Datadog', 'Prometheus', 'Grafana', 'OpenTelemetry']
    },
    {
      title: 'Cloud & Infra',
      icon: 'cloud',
      skills: ['AWS', 'GCP', 'Terraform', 'Kubernetes', 'Docker']
    },
    {
      title: 'DevOps & CI/CD',
      icon: 'settings_suggest',
      skills: ['GitHub Actions', 'Jenkins', 'Git', 'Ansible', 'Bash']
    },
    {
      title: 'Site Reliability',
      icon: 'health_and_safety',
      skills: ['SLO/SLI', 'Incident Mgmt', 'Chaos Eng', 'Performance', 'Security']
    }
  ],

  // ============================================
  // STATS (Hero section numbers)
  // ============================================
  stats: [
    { value: 20, suffix: '+', label: 'Certifications', icon: 'verified', link: '#about' },
    { value: 10, suffix: '%', label: 'Ticket Reduction', icon: 'notifications_active', link: '#work' },
    { value: 50, suffix: '+', label: 'Students Trained', icon: 'group', link: '#about' },
    { value: 3, suffix: '+', label: 'Years Experience', icon: 'menu_book', link: '#about' }
  ],

  // ============================================
  // CONTACT INFO
  // ============================================
  contact: {
    email: 'avecenabasuni@gmail.com',
    linkedin: 'https://linkedin.com/in/avecenabasuni',
    whatsapp: 'https://wa.me/6281234567890',
    github: 'https://github.com/avecenabasuni',
    medium: 'https://medium.com/@avecenabasuni'
  }
};
