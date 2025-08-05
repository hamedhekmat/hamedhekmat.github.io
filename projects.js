// projects.js
const projects = [
  {
    id: 1,
    slug: 'mychart',
    title: 'Interactive MyChart Extension',
    shortDescription: 'Increasing the interpretability of medical records by building a personal chatbot and interactive timeline on top of MyChart.',
    longDescription: `
For Stanford Medicine's 2025 Business and Research Insights To Excellence (BRITE) internship program, I'm currently working on 
    `,
    image: '',
    categories: ['Full Stack', 'Healthcare', 'NLP/LLMs'],
    technologies: ['Flask', 'neo4j', 'PostgreSQL', 'React/Next.js'],
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
      'Warm UI/UX design',
      'cron based scheduling',
      'LLM-powered content moderation'
    ]
  },
  {
    id: 3,
    slug: 'ecd-diffusion',
    title: 'Diffusion and Eigenvector Centrality Dominance',
    shortDescription: 'Investigating the optimal seeding problem by exploring alternative models of diffusion and their relationship to various centrality measures.',
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
      ''
    ]
  },
  {
    id: 4,
    slug: 'pneumonia-classifier',
    title: 'Pneumonia Detection Mentorship',
    shortDescription: 'Mentored a team of high schoolers in developing a chest X-ray classification and object detection pipeline.',
    longDescription: `

    `,
    image: '',
    categories: ['Healthcare', 'AI/ML', 'CV'],
    technologies: ['PyTorch', 'TensorFlow', 'Transformers'],
    links: [
      { type: 'presentation', label: 'Final Presentation', url: 'assets/files/pneumonia_cv.pdf' },
    ],
    features: [
      ''
    ]
  },
  {
    id: 5,
    slug: 'surf-swim',
    title: 'System for Whole Institution Modeling (SWIM)',
    shortDescription: 'Decision support tool for patient flow and capacity management at Lucille Packard Childrens\' Hospital, with discrete event simulation-based backend.',
    longDescription: `
After inquiring about how I could contribute to the research done at SURF (Systems Utilization Research for) Stanford Medicine (Dr. David Scheinker's lab), I got involved with their project seeking to develop a simulation model to support capacity management and patient flow decision-making by hospital stakeholders. I collaborated with a team of grad students, implementing improvements to the backend of the model, while also designing validation and performance metrics to assess the overall performance of the model as well as the effectiveness of the changes we'd test out.

My primary focus was on improving the patient sampling mechanism. Through interviews with various hospital stakeholders, I learned more about how to modify our sampling logic to better mirror the institution's actual policies, which resulted in improvements in simulation accuracy from 94% to 98%.

Lastly, the team was also interested in exploring how the model would fare using data from a different institution. I was hired by Robert Wood Johnson Barnabas Healthcare as a Private Consultant and Software Engineer, spending the summer exploring how the model could be adapted to their policies and needs. After extensive research and interviews, I identified key differences between the patient flow and overall procedures at the two institutions and began exploring how to modularize SWIM in order to be quickly adapted to the needs of other institutions such as RWJBH. I also conducted analyses on their patient census and transfer data, presenting recommendations to their board on how to divide 96 beds made available by the opening of a new facility.
    `,
    image: 'assets/images/swim.png',
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
    shortDescription: 'Investigating max weight matching mechanism applied to Stanford Math department\'s Directed Reading Program\'s matching process.',
    longDescription: `
In ECON 136: Market Design, a large part of our final grade was dependent on the investigation/implementation of a solution to a market design problem of our choosing. My friend Gavin McDonell and I were aware of the current suboptimal process used by Stanford's Mathematics department in determining how to pair grad student mentors with undergrad participants for the Directed Reading Program. As of right now, the DRP committee (4 Math PhD students) pore through applications by hand, a tedious and time-consuming process.

Our proposed solution, grounded in extensive literature review, was to formulate weights between any potential mentor-mentee pair in order to solve for the max weight bipartite matching. By changing the application process to create applicant/mentor profiles leveraging qualities that are key indicators of high quality mentorship while weighting the importance of these qualities by applicant personal preference, we were able to demonstrate a significant improvement in average match quality, which can significantly contribute to program success in fostering greater involvement with mathematics in academia.

I was responsible for designing and implementing the simulation we used to demonstrate these results. In the process, I not only learned how to use networkx to model bipartite graphs in Python, but I also had to leverage asynchronous parallelization to allow us to simulate a large quantity of applicant pools and potential matches in order to increase our confidence in our results. The final report below explores in more detail the mathematical and theoretical considerations that went into our design, such as an investigation of the level of strategy-proofness we might observe with such a system.
    `,
    image: '',
    categories: ['Graph Theory', 'Systems Optimization', 'Course Projects'],
    technologies: ['networkx', 'Multithreading/Parallelization'],
    links: [
      { type: 'report', label: 'Final Report', url: 'assets/files/drp-matching.pdf' },
    ],
    features: [
      ''
    ]
  },
  {
    id: 7,
    slug: 'supahot',
    title: 'SUPaHOT',
    shortDescription: 'Comparing the effect of pretraining vs finetuning on performance of LLMs on medical interpretability RAG pipeline tasks.',
    longDescription: `
Hoping to build upon the limitations of Stanford research application LLMonFIHR, my friends Nina Boord, Michael Brockman, and I set about exploring the use of smaller LLMs for more specialized tasks involving healthcare data. FIHR is the standardized format for storing healthcare data, but on its own, a raw FIHR file is not very interpretable. As a result, LLMonFIHR was conceived to allow patients to interact with their health records through an LLM in a chatbot interface, providing simple interpretable responses to patient queries. However, the research application used OpenAI API, raising concerns regarding scalability as well as patient data privacy.

We recreated the backend pipeline of the application in Python, separating out the 3 functions for which LLMs are leveraged. In doing so, we were able to experiment with models other than GPT4, comparing the effect of domain-specific pretraining vs task-specific finetuning on the performance of smaller models for each of the 3 tasks in the pipeline. This not only taught us a lot about system design in managing how each step of the backend interacts with the next, but we also learned about the importance of subtle changes in data design and prompt engineering. Lastly, we gained hands- on experience with state-of-the-art LLMs, including fine-tuning methods such as LORA and how to effectively use hugging-face's transformers library for text streaming/generation.
    `,
    image: '',
    categories: ['Healthcare', 'NLP/LLMs'],
    technologies: ['PyTorch', 'Hugging Face Transformers', 'RAG'],
    links: [
      { type: 'report', label: 'Final Report', url: 'assets/files/supahot.pdf' },
    ],
    features: [
      ''
    ]
  },
  {
    id: 8,
    slug: 'threads',
    title: 'C++ Threads',
    shortDescription: 'Implementation of custom thread class in C++',
    longDescription: `
For my final project in CS 111: Operating Systems Principles, I implemented a custom thread class in C++. This project was a great opportunity to learn about the intricacies of multithreading and how to design a thread-safe data structure.
    `,
    image: '',
    categories: ['Systems', 'Course Projects'],
    technologies: ['C++', 'Multithreading/Parallelization', 'Mutexes', 'Condition Variables'],
    links: [],
    features: [
      'Safe from race conditions'
    ]
  },
  {
    id: 9,
    slug: 'heap',
    title: 'Heap Allocator',
    shortDescription: 'Custom implicit and explicit linked-list heap allocators in C.',
    longDescription: `
Capstone project for CS 107: Computer Organization and Systems. Designed and implemented custom implicit and explicit linked-list heap allocators, weighing tradeoffs between key performance metrics such as throughput and utilization.    
    `,
    image: '',
    categories: ['Systems', 'Course Projects'],
    technologies: ['C'],
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
    shortDescription: 'iOS app to promote emotional regulation for adolescents with anorexia nervosa.',
    longDescription: `
For my final project in CS 342: Building for Digital Health, a team of students and I collaborated with Stanford Health Care psychiatrists to build a mobile app to promote emotional regulation for adolescents with anorexia nervosa. We used SwiftUI for the frontend and Firebase for the backend.

My primary focus was on the journaling feature, which allows users to track their mood and emotions over time. I implemented a feature that allows users to set goals for their mood and emotions, and then tracks their progress towards achieving those goals.
    `,
    image: '',
    categories: ['Healthcare', 'Mobile Development', 'Course Projects'],
    technologies: ['SwiftUI', 'Firebase'],
    links: [
      { type: 'presentation', label: 'Final Presentation', url: 'assets/files/balance.pdf' },
      { type: 'github', label: 'GitHub', url: 'https://github.com/CS342/2023-Balance' }
    ],
    features: [
      'User authentication',
      'Spotify SDK integration',
      'Persisting journal entries'
    ]
  },
  {
    id: 11,
    slug: 'startup-predictor',
    title: 'Startup Success Predictor',
    shortDescription: 'Exploring regression and deep learning techniques for predicting startup success based on Kaggle dataset.',
    longDescription: `
Stanford's CS 221: AI Principles and Techniques course has an optional final project component, where students are provided the opportunity to work directly with a Course Assistant mentor on a project of their choosing. With a few of my friends who share my interest in tech entrepreneurship, we decided to apply key concepts from the ML unit to investigate whether it'd be possible to predict the success of a startup based on some of its features.

After finding a dataset on Kaggle (linked below), we had to make some decisions regarding feature selection, which informed we processed and formatted the raw data to prepare it for analysis. These decisions are detailed in our final report below. Then, we used sk-learn to train a logistic regression model to serve as our baseline, which we compared to a variety of configurations of small neural networks developed using PyTorch. We experimented with an assortment of combinations for hyperparameters such as learning rate, hidden layer depth, hidden layer width, and batch size, to examine their effect on overall performance.

After testing over 60 different initial hyperparameter configurations and examining accuracies ranging from 20% to over 80%, we observed the best performance with a learning rate of 0.1, batch size of 32, and 2 hidden layers with 5 and 4 nodes respectively, yielding 86.21% accuracy. More detailed discussion of our results can be found in the final report below. Overall, as an optional final project completed in somewhat of a rush and our first time working with PyTorch, this project served as an excellent learning opportunity regarding the importance of design choices at every step of the machine learning pipeline, be it data engineering all the way to hyperparameter tuning.
    `,
    image: '',
    categories: ['AI/ML', 'Course Projects'],
    technologies: ['networkx', 'Multithreading/Parallelization'],
    links: [
      { type: 'report', label: 'Final Report', url: 'assets/files/startup-predictor.pdf' },
      { type: 'presentation', label: 'Final Presentation', url: 'https://www.youtube.com/watch?v=kkI3YXysFrc&t=1s' },
    ],
    features: [
      ''
    ]
  },
  {
    id: 12,
    slug: 'leukemia-classifier',
    title: 'Leukemia Cell Classifier',
    shortDescription: 'Comparing the performance of state-of-the-art complex research methods to out-of-the-box ML libraries on classifying benign vs. malignant leukemia cells.',
    longDescription: `
For my final project in CS 279: Computational Biology, I compared the performance of state-of-the-art complex research methods to out-of-the-box ML libraries on an image classification task. I found a dataset of leukemia cell images from a previous online competition, along with a research paper explaining how they attained excellent performance on the test set using extensive image preprocessing, dataset augmentation, and a very intentionally designed neural network. As I was hoping to gain some practice with PyTorch and sci-kit-learn, I was curious about how large the performance gap would be between the researchers' results and my own.

I began by conducting PCA on some benign and malignant cell images to gain more insight about just how similar the two distinct classes were (along with the level of difficulty of the task). Afterward, I learned about random forest classification, which I could quickly do using sk-learn. This method yielded results that weren't much worse than the research paper before their implementation of Efficient Channel Attention! Though I didn't need to include it as part of my project in my final report below, out of curiosity I continued to experiment with making my own neural network for the task using PyTorch. This yielded slight improvement over the random forest classfication, but the remaining performance gap with the research team's excellent results helped me learn about the importance in neural network architecture design while reflecting on the steps that'd be involved in improving the performance of my model.
    `,
    image: '',
    categories: ['Healthcare', 'AI/ML', 'CV', 'Course Projects'],
    technologies: ['PyTorch', 'sk-learn', 'PCA', 'Random Forest'],
    links: [
      { type: 'report', label: 'Final Report', url: 'assets/files/leukemia-classifier.pdf' },
    ],
    features: [
      ''
    ]
  }
];

// Helper function to find project by slug
function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug);
}
