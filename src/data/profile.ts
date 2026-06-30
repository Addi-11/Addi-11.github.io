export const profile = {
  name: "Aditi Singh",
  initials: "AS",
  role: "Software Engineer",
  tagline: "Building toward deep-learning research.",
  // Cycled in the animated hero subtitle.
  roles: [
    "Software Engineer",
    "MS Computer Science @ Georgia Tech",
    "DL researcher in the making",
  ],
  location: "Bangalore, India",
  email: "aditi.nith11@gmail.com",
  cvUrl:
    "https://drive.google.com/file/d/1o-civ78IcpaNnxPSZEGbIuiMtjgzYVYS/view?usp=drive_link",
  intro:
    "I am a software engineer working at the intersection of machine learning systems and research. I spent four years on Microsoft's Azure AI Platform scaling LLM inference and evaluation, and I am now on the Finance AI team at InMobi. Alongside work, I am pursuing a Master's in Computer Science with an AI specialization at Georgia Tech.",
  focus:
    "I'm an ML engineer who keeps wandering deeper into the stack - reproducing papers, training models from scratch, and chasing why they work. My focus is LLM efficiency, generative models, and RL. I'm looking for a research-assistant or research-engineering role to make that my full-time work.",
};

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Addi-11",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditi-singh4098",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:aditi.nith11@gmail.com",
    icon: "mail",
  },
  {
    label: "Medium",
    href: "https://medium.com/@addi_s",
    icon: "medium",
  },
  {
    label: "Goodreads",
    href: "https://www.goodreads.com/user/show/151890528-addi",
    icon: "book",
  },
];

export type Experience = {
  org: string;
  role: string;
  period: string;
  logo?: string;
  points: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    org: "InMobi - Finance AI",
    role: "Software Development Engineer II",
    period: "2026 - Present",
    current: true,
    points: [
      "Designing an Advertising Insights Engine that processes 200GB+ of daily data through distributed ETL pipelines and pre-aggregation for automated YoY/WoW trend, anomaly, and driver-attribution reporting.",
      "Architecting an ML framework combining ARIMA forecasting, Isolation Forests, and PCA/clustering with LLM-based narrative generation to produce executive summaries across advertising metrics (CTR, eCPM, impressions).",
    ],
  },
  {
    org: "Microsoft India - Azure AI Platform",
    role: "Software Development Engineer I",
    period: "2022 - 2026",
    logo: "/images/job-logo/microsoft.png",
    points: [
      "Scaled a foundation-model inference engine on vLLM with multi-modal support (Phi-4, Llama-3, Llama-4) for production workloads.",
      "Built production-grade deployment templates and containerized solutions for NVIDIA NIM and TensorRT, accelerating LLM deployment on Azure AI Studio.",
      "Architected a quota-management service enabling automated resource allocation across 1000+ GPT model deployments.",
      "Led an automated model-onboarding pipeline in Azure DevOps using mlflow, cutting onboarding time in AzureML Studio by 67%.",
      "Directed evaluation initiatives, designing LLM-as-a-Judge metrics (relevance, groundedness, RAI) and contributing Python metrics to the azureml-metrics library, reducing manual effort by 40%+.",
    ],
  },
  {
    org: "Amazon - Payment Products",
    role: "Software Development Intern",
    period: "2022",
    logo: "/images/job-logo/amazon.svg",
    points: [
      "Built the Amazon Insurance mobile app frontend in React with 10+ reusable components, partnering with UX designers and senior engineers to align technical design with customer requirements.",
    ],
  },
  {
    org: "IIT Kanpur - Center for Energy Regulation",
    role: "Research Intern",
    period: "2021",
    logo: "/images/job-logo/iit_kanpur.png",
    points: [
      "Developed a Python framework to map the center's regulatory opinions within policy documents, supporting compliance assessment.",
      "Applied NLP libraries (NLTK, spaCy, gensim) for text analysis and opinion mining.",
    ],
  },
];

export type Education = {
  org: string;
  degree: string;
  period: string;
  logo?: string;
  detail: string;
  coursework?: string[];
};

export const education: Education[] = [
  {
    org: "Georgia Institute of Technology",
    degree: "M.S. Computer Science - AI Specialization",
    period: "2025 - Present",
    detail:
      "Pursuing a Master's with an AI specialization while working full time.",
    coursework: [
      "Reinforcement Learning",
      "Machine Learning",
      "Deep Learning",
      "Computational Neuroscience",
      "Quantum Computing",
      "GPU Programming",
    ],
  },
  {
    org: "National Institute of Technology, Hamirpur",
    degree: "B.Tech in Computer Science",
    period: "2018 - 2022",
    logo: "/images/job-logo/nith.png",
    detail: "Graduated with a CGPA of 9.08 / 10.0.",
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "MuxyGPT - Hierarchical Multiplexer Layer",
    blurb:
      "Optimized LLM inference by architecting a hierarchical unembedding layer with multiplex routing. Built MuxyGPT from a vanilla GPT-2 124M by adding a router and multiplexer in the final layer; on EduFineWeb it beat the baseline HellaSwag score (0.310 vs 0.306) with 16% fewer FLOPs. Patent received.",
    tags: ["Patent", "LLMs", "Mixture-of-Experts", "Efficiency"],
    image: "/images/projects-logo/muxy-gpt.gif",
    featured: true,
  },
  {
    title: "Multimodal Medical Reasoning Agent",
    blurb:
      "Built a multimodal medical agent that combines visual understanding with deterministic tool selection over a 487-tool biomedical library for joint text-image reasoning. Fine-tuned a vision-language model with SFT + RL for tool grounding, reaching 58.2% on MedInstQA, +6.3 points over the SFT-only baseline.",
    tags: ["Multimodal", "Vision-Language", "Reinforcement Learning", "Agents"],
    featured: true,
  },
  {
    title: "Build Your Own GPT (GPT-2 124M)",
    blurb:
      "Engineered a GPT-2 124M model from scratch in PyTorch, surpassing the original paper's HellaSwag score (0.306 vs 0.282) using ahead-of-time compilation, distributed data parallelism, FlashAttention, the Adam optimizer, and a cosine-decay learning-rate schedule.",
    tags: ["LLMs", "Pretraining", "PyTorch", "Systems"],
    href: "https://github.com/Addi-11/build-nanogpt",
    image: "/images/projects-logo/gpt2-pretrain.gif",
    featured: true,
  },
  {
    title: "Neural Style Transfer",
    blurb:
      "TensorFlow implementation of 'A Neural Algorithm of Artistic Style', synthesizing images by optimizing content and style representations from a pretrained CNN.",
    tags: ["Generative", "Computer Vision", "TensorFlow"],
    href: "https://github.com/Addi-11/Neural_Style_Transfer",
    image: "/images/projects-logo/style-transfer.gif",
  },
  {
    title: "Pix2Pix Image Translation",
    blurb:
      "Conditional GAN for image-to-image translation following Isola et al., learning mappings such as sketches to photos and maps to aerial imagery.",
    tags: ["Generative", "cGAN", "Computer Vision"],
    href: "https://github.com/Addi-11/Image_Translation",
    image: "/images/projects-logo/pix2pix.gif",
  },
  {
    title: "DCGAN Digit Generation",
    blurb:
      "Deep Convolutional GAN built with the Keras Sequential API to generate handwritten digits, exploring stable adversarial training.",
    tags: ["Generative", "GAN", "Keras"],
    href: "https://github.com/Addi-11/Image_Generation",
    image: "/images/projects-logo/dcgan.gif",
  },
  {
    title: "Face Recognition",
    blurb:
      "Detection, extraction, and identification of faces using MTCNN for detection and a deep CNN for recognition.",
    tags: ["Computer Vision", "CNN"],
    href: "https://github.com/Addi-11/Face-Recognition",
    image: "/images/projects-logo/face-recogn.gif",
  },
  {
    title: "Depression Support Chatbot",
    blurb:
      "Encoder-decoder RNN with Bahdanau attention trained on Reddit data to provide supportive conversation, exploring sequence-to-sequence modeling.",
    tags: ["NLP", "Seq2Seq", "Attention"],
    href: "https://github.com/Addi-11/Depression-chatbot",
    image: "/images/projects-logo/chatbot.gif",
  },
  {
    title: "CartPole Actor-Critic",
    blurb:
      "Implemented the Actor-Critic (TD-learning) algorithm in TensorFlow and trained an agent on the OpenAI Gym CartPole environment as a hands-on study of RL fundamentals.",
    tags: ["Reinforcement Learning", "TensorFlow"],
    href: "https://github.com/Addi-11/OpenAI-envs",
    image: "/images/projects-logo/cartpole.gif",
  },
  {
    title: "Rock-Paper-Scissors Q-Learning",
    blurb:
      "Q-learning agent modeling RPS as a Markov Decision Process, filling a Q-table via the Bellman equation to outplay opponents.",
    tags: ["Reinforcement Learning", "MDP"],
    href: "https://github.com/Addi-11/Rock-Paper-Scissors",
    image: "/images/projects-logo/rps.gif",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "C / C++", "CUDA", "Go", "JavaScript", "SQL"],
  },
  {
    label: "ML / DL",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "mlflow",
      "PyTorch DDP",
    ],
  },
  {
    label: "ML infra & systems",
    items: [
      "vLLM",
      "TensorRT",
      "Kubernetes",
      "Docker",
      "Azure DevOps",
      "Azure Service Fabric",
    ],
  },
  {
    label: "Research areas",
    items: [
      "Deep Learning",
      "LLMs & Efficiency",
      "Reinforcement Learning",
      "Multimodal / Vision-Language",
      "Generative Models",
      "Computational Neuroscience",
    ],
  },
];
