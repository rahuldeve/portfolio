// Content from Rahul's resume. Edit here and the Work and Projects pages update.
export const experience = [
  {
    company: 'Johnson & Johnson',
    role: 'Full Stack Data Scientist (Contract)',
    where: 'Titusville, NJ',
    when: '2024 – 2026',
    points: [
      'Built an end-to-end dashboard framework for visualizing manufacturing process parameters, now deployed for three drug products and used by 150+ process modelers and stakeholders.',
      'Built an LLM plotting agent with Hugging Face smolagents, Bokeh and GPT-4o, served from a Quart backend with a Streamlit chat interface for interacting with plots and asking follow-up questions.',
      'Developed an XGBoost model that predicts batch viability from process parameters with 82% recall.',
      'Automated the weekly manufacturing process report with Matplotlib, python-pptx and Azure.',
      'Ran root cause analyses for out-of-specification incidents and presented findings to stakeholders.',
    ],
  },
  {
    company: 'Ernest Mario School of Pharmacy',
    role: 'Research Associate',
    where: 'New Brunswick, NJ',
    when: '2023 – 2024',
    points: [
      'Built binary classifiers with RDKit and LightGBM to predict toxicity and malaria inhibition.',
      'Scaled hyperparameter tuning and inference with the Ray distributed computing framework.',
      'Validated predictions with in vitro testing and identified 7 potential anti-malarial drugs.',
      'Built a pairwise GNN classifier in PyTorch for highly imbalanced drug datasets, improving F1 by 24%.',
    ],
  },
  {
    company: 'Rutgers University',
    role: 'Research Assistant',
    where: 'New Brunswick, NJ',
    when: '2021 – 2022',
    points: [
      'Built supervised classifiers to detect fake news, reaching 87% accuracy.',
      'Quantified political-leaning bias introduced by supervised approaches and developed mitigation techniques that improved bias metrics by over 40%.',
      'Co-presented the findings at the 16th International AAAI Conference on Web and Social Media (2022).',
    ],
  },
];

export const education = [
  {
    school: 'Rutgers University, New Brunswick',
    degree: 'M.S. in Computer and Information Sciences, Machine Learning',
    when: '2021 – 2022',
    note: 'GPA 3.88 / 4',
  },
];

export const publications = [
  { title: 'Collaborative Human-AI Risk Annotation: Co-Annotating Online Incivility with CHAIRA', venue: 'iConference 2025' },
  { title: 'Misinformation Detection Algorithms and Fairness across Political Ideologies: The Impact of Article Level Labelling', venue: '15th ACM Web Science Conference, 2023' },
  { title: 'Toward Fairness in Misinformation Detection Algorithms', venue: 'Workshop Proceedings of the 16th International AAAI Conference on Web and Social Media, 2022' },
];

export const projects = [
  {
    name: 'Entity Boxes',
    where: 'Rutgers University',
    summary: 'A new approach to predicting concept hierarchies from text descriptions, modifying BERT to generate box embeddings.',
    tags: ['NLP', 'BERT', 'Box embeddings'],
  },
  {
    name: 'Flight Cancellation Trend Visualizer',
    where: 'Rutgers University',
    summary: 'A dashboard of time-series trends in US flight cancellations over 22 years and 120 million records, built on Apache Spark. Outstanding Project, 2022.',
    tags: ['Apache Spark', 'Data visualization'],
  },
];

export const skills = {
  Languages: ['Python', 'SQL', 'JavaScript', 'Java', 'Rust', 'HTML', 'CSS'],
  Libraries: ['Pandas', 'scikit-learn', 'PyTorch', 'XGBoost', 'LightGBM', 'Matplotlib', 'Flask', 'Streamlit', 'Ray', 'RDKit'],
  Tools: ['MySQL', 'AWS', 'Azure', 'Git', 'Docker', 'Apache Spark', 'Jira', 'Bitbucket'],
};
