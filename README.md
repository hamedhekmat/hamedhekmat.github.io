# Hamed Hekmat - Personal Portfolio

A modern, responsive portfolio website built with React and Vite. Showcase your projects, skills, and experience with a clean, professional design.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Project Filtering**: Filter projects by category (Web Development, Full Stack, Mobile Development, etc.)
- **Project Details**: Detailed project pages with descriptions, technologies, and links
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Modern styling with flexbox and grid
- **GitHub Pages** - Free hosting and deployment

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hamedhekmat/hamedhekmat.github.io.git
cd hamedhekmat.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Adding Your Projects

Edit `src/data/projects.js` to add your own projects:

```javascript
{
  id: 1,
  slug: 'your-project-slug',
  title: 'Your Project Title',
  shortDescription: 'Brief description for the homepage',
  longDescription: 'Detailed description for the project page',
  image: '/your-project-image.jpg',
  category: 'Web Development',
  technologies: ['React', 'Node.js', 'MongoDB'],
  githubUrl: 'https://github.com/yourusername/project',
  liveUrl: 'https://your-project-demo.com',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ]
}
```

### Updating Personal Information

1. **Header**: Edit `src/components/Header.jsx` to update your name, bio, and social links
2. **Profile Image**: Add your headshot as `public/headshot.jpg`
3. **Project Images**: Add project images to the `public/` folder

### Styling

All CSS files are organized by component:
- `src/components/Header.css` - Header styling
- `src/components/FilterBar.css` - Filter buttons styling
- `src/components/ProjectCard.css` - Project card styling
- `src/pages/HomePage.css` - Homepage layout
- `src/pages/ProjectDetail.css` - Project detail page styling

## Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist/` folder

3. Configure GitHub Pages to serve from the `dist/` folder or deploy the contents to your GitHub Pages repository

### Other Platforms

This project can be deployed to any static hosting service:
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist/` folder
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload the `dist/` folder

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Always-visible header
│   ├── FilterBar.jsx   # Project filtering
│   └── ProjectCard.jsx # Project preview cards
├── data/
│   └── projects.js     # Project data
├── pages/
│   ├── HomePage.jsx    # Homepage with project grid
│   └── ProjectDetail.jsx # Individual project pages
├── App.jsx             # Main app component
└── main.jsx           # React entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **GitHub**: [@hamedhekmat](https://github.com/hamedhekmat)
- **LinkedIn**: [Hamed Hekmat](https://linkedin.com/in/hamedhekmat)
- **Email**: hamed@example.com

---

Built with ❤️ using React and Vite
