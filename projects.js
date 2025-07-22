// projects.js
const projects = [
  {
    id: 1,
    slug: 'mychart',
    title: 'Interactive MyChart Extension',
    shortDescription: 'Increasing the interpretability of medical records via personal chatbot and interactive timeline.',
    longDescription: `
For Stanford Medicine's 2025 Business and Research Insights To Excellence (BRITE) internship program, I'm currently working on 
    `,
    image: '',
    categories: ['Full Stack', 'Healthcare', 'NLP/LLMs'],
    technologies: ['Flask', 'neo4j', 'SupaBase', 'React Native'],
    links: [],
    features: [
        'Knowledge graph representation of medical records',
        'GraphRAG enabled chat completion',
        'Interactive timeline of medical journey'
    ]
  },
  {
    id: 2,
    slug: 'wishing-well',
    title: 'WishingWell',
    shortDescription: 'iOS app for spreading kindness through daily microinteractions.',
    longDescription: `
WishingWell is an iOS app that allows users to spread kindness through daily microinteractions. It's a simple app that allows users to send wishes to their friends and family.
    `,
    image: '/assets/images/wishingwell.png',
    categories: ['Mobile Development', 'For Funsies', 'Course Projects'],
    technologies: ['Flask', 'SupaBase', 'React Native', 'Render'],
    links: [
      { type: 'report', label: 'Final Report', url: '/assets/files/wishingwell.pdf' }
    ],
    features: [
      'Responsive design',
      'Dynamic content loading',
      'Clean, modern UI',
      'Fast performance'
    ]
  },
  {
    id: 3,
    slug: 'ecd-diffusion',
    title: 'Diffusion Models and Eigenvector Centrality Dominance',
    shortDescription: 'Modeling the optimal seeding problem by exploring alternative models of diffusion and their relationship to centrality measures.',
    longDescription: `
This project explores the relationship between diffusion models and eigenvector centrality dominance.
    `,
    image: '',
    categories: ['Graph Theory', 'Systems Optimization', 'Course Projects'],
    technologies: ['networkx', 'matplotlib', 'seaborn'],
    links: [
      { type: 'report', label: 'Final Report', url: '/assets/files/ecd-diffusion.pdf' },
      { type: 'github', label: 'GitHub', url: 'https://github.com/hamedhekmat/ecd-diffusion' }
    ],
    features: [
      'User authentication',
      'Task categorization',
      'Real-time updates',
      'Responsive design'
    ]
  },
  {
    id: 4,
    slug: 'pneumonia-classifier',
    title: 'Pneumonia Detection Mentorship',
    shortDescription: 'A full-stack task management application with user authentication.',
    longDescription: 'A comprehensive task management application that allows users to create, organize, and track their tasks. Features include user authentication, task categorization, due date tracking, and real-time updates.',
    image: 'assets/task-manager.jpg',
    categories: ['Healthcare', 'AI/ML', 'CV'],
    technologies: ['networkx', 'matplotlib', 'seaborn'],
    links: [
      { type: 'presentation', label: 'Final Presentation', url: 'assets/files/pneumonia-classifier.pdf' },
    ],
    features: [
      'User authentication',
      'Task categorization',
      'Real-time updates',
      'Responsive design'
    ]
  },
  {
    id: 5,
    slug: 'surf-swim',
    title: 'System for Whole Institution Modeling (SWIM)',
    shortDescription: 'A full-stack task management application with user authentication.',
    longDescription: 'A comprehensive task management application that allows users to create, organize, and track their tasks. Features include user authentication, task categorization, due date tracking, and real-time updates.',
    image: 'assets/task-manager.jpg',
    categories: ['Healthcare', 'Systems Optimization'],
    technologies: ['networkx', 'Multithreading/Parallelization'],
    links: [
      { type: 'presentation', label: 'Final Presentation', url: 'assets/files/swim-presentation.pdf' },
    ],
    features: [
      'User authentication',
      'Task categorization',
      'Real-time updates',
      'Responsive design'
    ]
  },
  {
    id: 6,
    slug: 'drp-matching',
    title: 'Stanford Math DRP Matching Proposal',
    shortDescription: 'A full-stack task management application with user authentication.',
    longDescription: 'A comprehensive task management application that allows users to create, organize, and track their tasks. Features include user authentication, task categorization, due date tracking, and real-time updates.',
    image: 'assets/task-manager.jpg',
    categories: ['Graph Theory', 'Systems Optimization', 'Course Projects'],
    technologies: ['networkx', 'Multithreading/Parallelization'],
    links: [
      { type: 'report', label: 'Final Report', url: 'assets/files/drp-matching.pdf' },
    ],
    features: [
      'User authentication',
      'Task categorization',
      'Real-time updates',
      'Responsive design'
    ]
  },
  {
    id: 7,
    slug: 'supahot',
    title: 'SUPaHOT',
    shortDescription: 'A full-stack task management application with user authentication.',
    longDescription: 'A comprehensive task management application that allows users to create, organize, and track their tasks. Features include user authentication, task categorization, due date tracking, and real-time updates.',
    image: 'assets/task-manager.jpg',
    categories: ['Healthcare', 'NLP/LLMs'],
    technologies: ['PyTorch', 'Hugging Face Transformers', 'RAG'],
    links: [
      { type: 'Report', label: 'Final Report', url: 'assets/files/supahot.pdf' },
    ],
    features: [
      'User authentication',
      'Task categorization',
      'Real-time updates',
      'Responsive design'
    ]
  },
  {
    id: 8,
    slug: 'threads',
    title: 'C++ Threads',
    shortDescription: 'A full-stack task management application with user authentication.',
    longDescription: 'A comprehensive task management application that allows users to create, organize, and track their tasks. Features include user authentication, task categorization, due date tracking, and real-time updates.',
    image: 'assets/task-manager.jpg',
    categories: ['Systems', 'Course Projects'],
    technologies: ['networkx', 'Multithreading/Parallelization'],
    links: [],
    features: [
      'User authentication',
      'Task categorization',
      'Real-time updates',
      'Responsive design'
    ]
  },
  {
    id: 9,
    slug: 'heap',
    title: 'Heap Allocator',
    shortDescription: 'A full-stack task management application with user authentication.',
    longDescription: 'A comprehensive task management application that allows users to create, organize, and track their tasks. Features include user authentication, task categorization, due date tracking, and real-time updates.',
    image: 'assets/task-manager.jpg',
    categories: ['Systems', 'Course Projects'],
    technologies: ['networkx', 'Multithreading/Parallelization'],
    links: [],
    features: [
      'User authentication',
      'Task categorization',
      'Real-time updates',
      'Responsive design'
    ]
  },
  {
    id: 10,
    slug: 'balance',
    title: 'Balance Emotion Regulation App',
    shortDescription: 'A full-stack task management application with user authentication.',
    longDescription: 'A comprehensive task management application that allows users to create, organize, and track their tasks. Features include user authentication, task categorization, due date tracking, and real-time updates.',
    image: 'assets/task-manager.jpg',
    categories: ['Healthcare', 'Mobile Development', 'Course Projects'],
    technologies: ['networkx', 'Multithreading/Parallelization'],
    links: [],
    features: [
      'User authentication',
      'Task categorization',
      'Real-time updates',
      'Responsive design'
    ]
  },
  {
    id: 11,
    slug: 'startup-predictor',
    title: 'Startup Success Predictor',
    shortDescription: 'A full-stack task management application with user authentication.',
    longDescription: 'A comprehensive task management application that allows users to create, organize, and track their tasks. Features include user authentication, task categorization, due date tracking, and real-time updates.',
    image: 'assets/task-manager.jpg',
    categories: ['AI/ML', 'Course Projects'],
    technologies: ['networkx', 'Multithreading/Parallelization'],
    links: [
      { type: 'report', label: 'Final Report', url: 'assets/files/startup-predictor.pdf' },
    ],
    features: [
      'User authentication',
      'Task categorization',
      'Real-time updates',
      'Responsive design'
    ]
  },
  {
    id: 12,
    slug: 'leukemia-classifier',
    title: 'Leukemia Cell Classifier',
    shortDescription: 'Interactive dashboard for visualizing complex datasets.',
    longDescription: 'An interactive data visualization dashboard that transforms complex datasets into meaningful insights. Features multiple chart types, real-time data updates, and customizable filters.',
    image: 'assets/data-viz.jpg',
    categories: ['Healthcare', 'AI/ML', 'CV', 'Course Projects'],
    technologies: ['React', 'D3.js', 'TypeScript', 'Chart.js'],
    links: [
      { type: 'report', label: 'Final Report', url: 'assets/files/leukemia-classifier.pdf' },
    ],
    features: [
      'Interactive charts',
      'Real-time data',
      'Customizable filters',
      'Responsive design'
    ]
  }
];

// Helper function to find project by slug
function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug);
}
