// projects.js
const projects = [
  {
    id: 1,
    slug: 'mychart',
    title: 'Interactive MyChart',
    shortDescription: 'A simple, responsive portfolio built with HTML, CSS, and JavaScript.',
    longDescription: 'This portfolio website showcases my projects and skills. Built with vanilla HTML, CSS, and JavaScript for simplicity and performance. Features a clean design with smooth animations and responsive layout.',
    image: 'assets/wishingwell.jpg',
    categories: ['Full Stack', 'Healthcare', 'NLP/LLMs'],
    technologies: ['Flask', 'SupaBase', 'React Native'],
    githubUrl: 'https://github.com/hhekmat/hamedhekmat.github.io',
    liveUrl: 'https://hamedhekmat.github.io',
    features: [
        'Responsive design',
        'Dynamic content loading',
        'Clean, modern UI',
        'Fast performance'
    ]
  },
  {
    id: 2,
    slug: 'wishing-well',
    title: 'WishingWell',
    shortDescription: 'A simple, responsive portfolio built with HTML, CSS, and JavaScript.',
    longDescription: 'This portfolio website showcases my projects and skills. Built with vanilla HTML, CSS, and JavaScript for simplicity and performance. Features a clean design with smooth animations and responsive layout.',
    image: 'assets/wishingwell.jpg',
    categories: ['Mobile Development', 'For Funsies', 'Course Projects'],
    technologies: ['Flask', 'SupaBase', 'React Native'],
    githubUrl: 'https://github.com/hhekmat/hamedhekmat.github.io',
    liveUrl: 'https://hamedhekmat.github.io',
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
    shortDescription: 'A full-stack task management application with user authentication.',
    longDescription: 'A comprehensive task management application that allows users to create, organize, and track their tasks. Features include user authentication, task categorization, due date tracking, and real-time updates.',
    image: 'assets/task-manager.jpg',
    categories: ['Graph Theory', 'Systems Optimization','Course Projects'],
    technologies: ['networkx', 'matplotlib', 'seaborn'],
    githubUrl: 'https://github.com/hhekmat/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
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
    githubUrl: 'https://github.com/hhekmat/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
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
    githubUrl: 'https://github.com/hhekmat/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
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
    categories: ['Healthcare', 'Systems Optimization'],
    technologies: ['networkx', 'Multithreading/Parallelization'],
    githubUrl: 'https://github.com/hhekmat/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
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
    githubUrl: 'https://github.com/hhekmat/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
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
    githubUrl: 'https://github.com/hhekmat/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
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
    githubUrl: 'https://github.com/hhekmat/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
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
    githubUrl: 'https://github.com/hhekmat/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
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
    githubUrl: 'https://github.com/hhekmat/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
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
    githubUrl: 'https://github.com/hhekmat/data-viz',
    liveUrl: 'https://data-viz-demo.vercel.app',
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
