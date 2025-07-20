// projects.js
const projects = [
  {
    id: 1,
    slug: 'portfolio-website',
    title: 'Personal Portfolio Website',
    shortDescription: 'A simple, responsive portfolio built with HTML, CSS, and JavaScript.',
    longDescription: 'This portfolio website showcases my projects and skills. Built with vanilla HTML, CSS, and JavaScript for simplicity and performance. Features a clean design with smooth animations and responsive layout.',
    image: 'assets/portfolio.jpg',
    category: 'Web Development',
    technologies: ['HTML', 'CSS', 'JavaScript'],
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
    slug: 'task-manager',
    title: 'Task Management App',
    shortDescription: 'A full-stack task management application with user authentication.',
    longDescription: 'A comprehensive task management application that allows users to create, organize, and track their tasks. Features include user authentication, task categorization, due date tracking, and real-time updates.',
    image: 'assets/task-manager.jpg',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
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
    id: 3,
    slug: 'data-viz',
    title: 'Data Visualization Dashboard',
    shortDescription: 'Interactive dashboard for visualizing complex datasets.',
    longDescription: 'An interactive data visualization dashboard that transforms complex datasets into meaningful insights. Features multiple chart types, real-time data updates, and customizable filters.',
    image: 'assets/data-viz.jpg',
    category: 'Data Science',
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
