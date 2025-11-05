// Import project images
import diabetesImage from '@/assets/project-diabetes.jpg';
import salaryImage from '@/assets/project-salary.jpg';
import evImage from '@/assets/project-ev.jpg';
import retailImage from '@/assets/project-retail.jpg';

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  challenges?: string;
  solutions?: string;
  results?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'diabetes-prediction-model',
    title: 'Diabetes Prediction Model',
    description: 'A classification Machine Learning model that enables users to check their Diabetes status, aiming at reducing fear and promoting early detection.',
    longDescription: 'This comprehensive machine learning project leverages advanced classification algorithms to predict diabetes risk in patients. The model was trained on a dataset of over 10,000 patient records and achieves 92% accuracy in predicting diabetes onset.',
    image: diabetesImage,
    technologies: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas'],
    category: 'Machine Learning',
    demoUrl: 'https://github.com/Obed-Makori/streamlit_dashboard',
    githubUrl: 'https://github.com/Obed-Makori/streamlit_dashboard',
    challenges: 'The main challenge was handling imbalanced datasets and ensuring the model could generalize well to new, unseen data while maintaining high accuracy.',
    solutions: 'Implemented SMOTE for data balancing, used cross-validation for robust testing, and optimized hyperparameters using GridSearchCV.',
    results: 'Achieved 92% accuracy, 89% precision, and 91% recall. The interactive Streamlit dashboard makes it easy for healthcare professionals to use the model in real-world scenarios.'
  },
  {
    id: '2',
    slug: 'salary-dashboard-prediction',
    title: 'Salary Dashboard & Prediction',
    description: 'Data visualization tool tracking salary trends and distributions with integrated ML for salary predictions, enabling data-driven HR decisions.',
    longDescription: 'An end-to-end data analytics solution that combines interactive visualizations with machine learning to provide insights into salary trends and make predictions based on various factors including experience, education, and location.',
    image: salaryImage,
    technologies: ['Python', 'Streamlit', 'Plotly', 'ML'],
    category: 'Data Analysis',
    demoUrl: 'https://github.com/Obed-Makori/Salary-Prediction',
    githubUrl: 'https://github.com/Obed-Makori/Salary-Prediction',
    challenges: 'Integrating multiple data sources with different formats and creating a user-friendly interface that both technical and non-technical users could navigate.',
    solutions: 'Built a robust ETL pipeline for data cleaning and transformation, designed an intuitive dashboard layout, and implemented interactive filters for dynamic data exploration.',
    results: 'The dashboard is now used by HR teams to make informed decisions about compensation packages, resulting in improved salary equity and employee satisfaction.'
  },
  {
    id: '3',
    slug: 'electric-vehicle-dashboard',
    title: 'Electric Vehicle Dashboard',
    description: 'Comprehensive Tableau dashboard tracking key KPIs in electric vehicle usage data, evaluating green energy adoption success in the United States.',
    longDescription: 'A sophisticated business intelligence solution that visualizes electric vehicle adoption trends across the United States, helping policymakers and stakeholders understand the progress of green energy initiatives.',
    image: evImage,
    technologies: ['Tableau', 'Data Visualization', 'KPI Analysis'],
    category: 'Business Intelligence',
    demoUrl: 'https://public.tableau.com/app/profile/obed.makori3675/viz/EVDashboard_17276813907140/Dashboard?publish=yes',
    githubUrl: '#',
    challenges: 'Processing large datasets from multiple government sources and creating meaningful visualizations that could tell a compelling story about EV adoption.',
    solutions: 'Developed data aggregation scripts to clean and combine datasets, created calculated fields for advanced metrics, and designed an intuitive dashboard layout with drill-down capabilities.',
    results: 'The dashboard provides clear insights into EV adoption patterns, charging infrastructure distribution, and environmental impact, supporting data-driven policy decisions.'
  },
  {
    id: '4',
    slug: 'retailx-sales-dashboard',
    title: 'RetailX Sales Dashboard',
    description: 'Interactive Power BI dashboard providing insights into daily sales, profit margins, top-selling products, and regional performance for strategic decision making.',
    longDescription: 'A comprehensive Power BI solution that transforms raw sales data into actionable insights, enabling retail managers to track performance, identify trends, and make strategic decisions to optimize business operations.',
    image: retailImage,
    technologies: ['Power BI', 'DAX', 'Data Modeling', 'KPI'],
    category: 'Business Intelligence',
    demoUrl: 'https://github.com/Obed-Makori/RetailX-Power-BI-Dashboard',
    githubUrl: 'https://github.com/Obed-Makori/RetailX-Power-BI-Dashboard',
    challenges: 'Creating a scalable data model that could handle millions of transaction records while maintaining fast query performance and real-time updates.',
    solutions: 'Implemented star schema data modeling, optimized DAX calculations, and created incremental refresh strategies to ensure optimal performance.',
    results: 'The dashboard reduced reporting time by 75% and enabled managers to identify underperforming products and regions, leading to a 15% increase in overall profitability.'
  }
];

export const categories = ['All', 'Machine Learning', 'Data Analysis', 'Business Intelligence'];
