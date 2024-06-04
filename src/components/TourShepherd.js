export const tourSteps = [
  {
    id: 1,
    textVoice: 'Hello, I am Ayushri. Glad that you are interested in knowing more about my qualifications and interests. You can use voice commands like Next, Back, Okay, and Quit to continue.',
    textAutomated: 'Hello, I am Ayushri. Glad that you are interested in knowing more about my qualifications and interests.',
    textNormal: 'Hello, I am Ayushri. Glad that you are interested in knowing more about my qualifications and interests. Please continue using the buttons.',
    attachTo: {
      element: '.homecontent',
      on: 'left'
    },
    buttonsNormal: ["next","end"],
    buttonsVoice: ["next","end"],
    buttonsAutomated:[],
    selectedTab: 'home',
    audioIndex: 1
      
  },
  {
    id: 2,
    textVoice: 'I am currently pursuing a Masters in Computer Science at Texas A&M University.',
    textAutomated: 'I am currently pursuing a Masters in Computer Science at Texas A&M University.',
    textNormal: 'I am currently pursuing a Masters in Computer Science at Texas A&M University.',
    attachTo: {
      element: '#education-1.education',
      on: 'bottom'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'education',
    audioIndex: 2
  },
  {
    id: 3,
    textVoice: 'Previously, I completed my Bachelors in Computer Science from N.I.T Bhopal.',
    textAutomated: 'Previously, I completed my Bachelors in Computer Science from N.I.T Bhopal.',
    textNormal: 'Previously, I completed my Bachelors in Computer Science from N.I.T Bhopal.',
    attachTo: {
      element: '#education-2.education',
      on: 'top'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'education',
    audioIndex: 3
  },

  {
    id: 4,
    textVoice: 'My recent full-time work experience was at Optum, United Health Group as a Senior Data Engineer.',
    textAutomated: 'My recent full-time work experience was at Optum, United Health Group as a Senior Data Engineer.',
    textNormal: 'My recent full-time work experience was at Optum, United Health Group as a Senior Data Engineer.',
    attachTo: {
      element: '#experience-1.education',
      on: 'bottom'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'experience',
    audioIndex: 4
  },
  {
    id: 5,
    textVoice: 'Previously, I worked as a Software Engineer at Optum, United Health Group. ',
    textAutomated: 'Previously, I worked as a Software Engineer at Optum, United Health Group. ',
    textNormal: 'Previously, I worked as a Software Engineer at Optum, United Health Group. ',
    attachTo: {
      element: '#experience-2.education',
      on: 'bottom'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'experience',
    audioIndex: 5
  },
  {
    id: 6,
    textVoice: 'At ENDEAVR Institute, I worked under Dr. Wei Li as a Machine Learning Engineer on a project related to autonomous driving cars.',
    textAutomated: 'At ENDEAVR Institute, I worked under Dr. Wei Li as a Machine Learning Engineer on a project related to autonomous driving cars.',
    textNormal: 'At ENDEAVR Institute, I worked under Dr. Wei Li as a Machine Learning Engineer on a project related to autonomous driving cars.',
    attachTo: {
      element: '#experience-3.education',
      on: 'bottom'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'experience',
    audioIndex: 6
  },
  {
    id: 7,
    textVoice: 'Currently, I am working as a Research Technician under Dr. Siddharth Misra in the field of Machine Learning, Artificial Intelligence, and Generative AI related to Energy and Decarbonization. This is an extension of the work that we did last summer.',
    textAutomated: 'Currently, I am working as a Research Technician under Dr. Siddharth Misra in the field of Machine Learning, Artificial Intelligence, and Generative AI related to Energy and Decarbonization. This is an extension of the work that we did last summer.',
    textNormal: 'Currently, I am working as a Research Technician under Dr. Siddharth Misra in the field of Machine Learning, Artificial Intelligence, and Generative AI related to Energy and Decarbonization. This is an extension of the work that we did last summer.',
    attachTo: {
      element: '#experience-4.education',
      on: 'bottom'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'experience',
    audioIndex: 7
  },

  {
    id: 8,
    textVoice: 'I have experience in these programming and markup languages.',
    textAutomated: 'I have experience in these programming and markup languages.',
    textNormal: 'I have experience in these programming and markup languages.',
    attachTo: {
      element: '#skills-1',
      on: 'bottom'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'skills',
    audioIndex: 8
  },
  {
    id: 9,
    textVoice: 'I have experience in these frameworks and libraries.',
    textAutomated: 'I have experience in these frameworks and libraries.',
    textNormal: 'I have experience in these frameworks and libraries.',
    attachTo: {
      element: '#skills-2',
      on: 'bottom'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'skills',
    audioIndex: 9
  },
  {
    id: 10,
    textVoice: 'I have worked with a variety of databases and cloud technologies.',
    textAutomated: 'I have worked with a variety of databases and cloud technologies.',
    textNormal: 'I have worked with a variety of databases and cloud technologies.',
    attachTo: {
      element: '#skills-3',
      on: 'bottom'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'skills',
    audioIndex: 10
  },
  {
    id: 11,
    textVoice: 'I am proficient in using these software and tools.',
    textAutomated: 'I am proficient in using these software and tools.',
    textNormal: 'I am proficient in using these software and tools.',
    attachTo: {
      element: '#skills-4',
      on: 'top'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'skills',
    audioIndex: 11
  },

  {
    id: 12,
    textVoice: 'I have received certifications from Amazon.',
    textAutomated: 'I have received certifications from Amazon.',
    textNormal: 'I have received certifications from Amazon.',
    attachTo: {
      element: '#certifications-1',
      on: 'right'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'certifications',
    audioIndex: 12
  },
  {
    id: 13,
    textVoice: 'I have received certifications from Microsoft. ',
    textAutomated: 'I have received certifications from Microsoft. ',
    textNormal: 'I have received certifications from Microsoft. ',
    attachTo: {
      element: '#certifications-2',
      on: 'right'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'certifications',
    audioIndex: 13
  },
  {
    id: 14,
    textVoice: 'I have received certifications from Google. ',
    textAutomated: 'I have received certifications from Google. ',
    textNormal: 'I have received certifications from Google. ',
    attachTo: {
      element: '#certifications-3',
      on: 'right'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'certifications',
    audioIndex: 14
  },
  {
    id: 15,
    textVoice: 'I have received certifications from Nvidia, Kaggle, Coursera, and others.',
    textAutomated: 'I have received certifications from Nvidia, Kaggle, Coursera, and others.',
    textNormal: 'I have received certifications from Nvidia, Kaggle, Coursera, and others.',
    attachTo: {
      element: '#certifications-4',
      on: 'right'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'certifications',
    audioIndex: 15
  },

  {
    id: 16,
    textVoice: 'Conquer All is the latest project that I have worked on and submitted in ReactJam. It is a multiplayer strategy game where you can play against friends or challenge a tough AI that is hard to beat!',
    textAutomated: 'Conquer All is the latest project that I have worked on and submitted in ReactJam. It is a multiplayer strategy game where you can play against friends or challenge a tough AI that is hard to beat!',
    textNormal: 'Conquer All is the latest project that I have worked on and submitted in ReactJam. It is a multiplayer strategy game where you can play against friends or challenge a tough AI that is hard to beat!',
    attachTo: {
      element: '#project-1.project',
      on: 'right'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'projects',
    audioIndex: 16
  },
  {
    id: 17,
    textVoice: 'LLMSoundWare is a LLMWare + Streamlit web application that takes an audio file as input, transcribes it using LLMWare models, and performs various analyses on the transcription.',
    textAutomated: 'LLMSoundWare is a LLMWare + Streamlit web application that takes an audio file as input, transcribes it using LLMWare models, and performs various analyses on the transcription.',
    textNormal: 'LLMSoundWare is a LLMWare + Streamlit web application that takes an audio file as input, transcribes it using LLMWare models, and performs various analyses on the transcription.',
    attachTo: {
      element: '#project-2.project',
      on: 'left'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'projects',
    audioIndex: 17
  },
  {
    id: 18,
    textVoice: 'I have also worked on website and admin dashboard for SAAJ Heaven using Angular and Firebase.',
    textAutomated: 'I have also worked on website and admin dashboard for SAAJ Heaven using Angular and Firebase.',
    textNormal: 'I have also worked on website and admin dashboard for SAAJ Heaven using Angular and Firebase.',
    attachTo: {
      element: '#project-3.project',
      on: 'left'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'projects',
    audioIndex: 18
  },
  {
    id: 19,
    textVoice: 'These are some of my Machine Learning and Deep Learning projects.',
    textAutomated: 'These are some of my Machine Learning and Deep Learning projects.',
    textNormal: 'These are some of my Machine Learning and Deep Learning projects.',
    attachTo: {
      element: '#mlprojectsmultiple-1',
      on: 'bottom'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'projects',
    audioIndex: 19
  },
  {
    id: 20,
    textVoice: 'These are the projects that I created to develop new skills and participate in hacakthons and quests.',
    textAutomated: 'These are the projects that I created to develop new skills and participate in hacakthons and quests.',
    textNormal: 'These are the projects that I created to develop new skills and participate in hacakthons and quests.',
    attachTo: {
      element: '#mlprojectsmultiple-2',
      on: 'bottom'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'projects',
    audioIndex: 20
  },

  {
    id: 21,
    textVoice: 'I have received recognition for my work and passion for learning and creating things professionally and otherwise.',
    textAutomated: 'I have received recognition for my work and passion for learning and creating things professionally and otherwise.',
    textNormal: 'I have received recognition for my work and passion for learning and creating things professionally and otherwise.',
    attachTo: {
      element: '.achievements',
      on: 'right'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'recognition',
    audioIndex: 21
  },

  {
    id: 22,
    textVoice: 'I love contributing to the community apart from my technical work. As you can see, I have been a part of various community initiatives and groups.',
    textAutomated: 'I love contributing to the community apart from my technical work. As you can see, I have been a part of various community initiatives and groups.',
    textNormal: 'I love contributing to the community apart from my technical work. As you can see, I have been a part of various community initiatives and groups.',
    attachTo: {
      element: '#volunteerism',
      on: 'bottom'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'volunteer',
    audioIndex: 22
  },
  {
    id: 23,
    textVoice: 'If you are interested, I have a Cybersecurity blog on Hashnode.',
    textAutomated: 'If you are interested, I have a Cybersecurity blog on Hashnode.',
    textNormal: 'If you are interested, I have a Cybersecurity blog on Hashnode.',
    attachTo: {
      element: '#contact-5',
      on: 'bottom'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'contact',
    audioIndex: 23

    
  },
  {
    id: 24,
    textVoice: 'If you want to know more about graduate life at Texas A&M University, please read my Aggie Voice blog.',
    textAutomated: 'If you want to know more about graduate life at Texas A&M University, please read my Aggie Voice blog.',
    textNormal: 'If you want to know more about graduate life at Texas A&M University, please read my Aggie Voice blog.',
    attachTo: {
      element: '#contact-4',
      on: 'bottom'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'contact',
    audioIndex: 24
  },
  {
    id: 25, 
    textVoice: 'Feel free to refer to my github too! I am open for new collaborations and projects.',
    textAutomated: 'Feel free to refer to my github too! I am open for new collaborations and projects.',
    textNormal: 'Feel free to refer to my github too! I am open for new collaborations and projects.',
    attachTo: {
      element: '#contact-2',
      on: 'bottom'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'contact',
    audioIndex: 25
  },
  {
    id: 26,
    textVoice: 'ayushrijain19@gmail.com is my email if you prefer email communication like me :D',
    textAutomated: 'ayushrijain19@gmail.com is my email if you prefer email communication like me :D',
    textNormal: 'ayushrijain19@gmail.com is my email if you prefer email communication like me :D',
    attachTo: {
      element: '#contact-3',
      on: 'bottom'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'contact',
    audioIndex: 26
  },
  {
    id: 27,
    textVoice: 'I keep my LinkedIn profile updated with my latest work and projects. If you would like to know more, please reach out to me on LinkedIn.',
    textAutomated: 'I keep my LinkedIn profile updated with my latest work and projects. If you would like to know more, please reach out to me on LinkedIn.',
    textNormal: 'I keep my LinkedIn profile updated with my latest work and projects. If you would like to know more, please reach out to me on LinkedIn.',
    attachTo: {
      element: '#contact-1',
      on: 'bottom'
    },
    buttonsNormal: ["back","next"],
    buttonsVoice: ["back","next"],
    buttonsAutomated:[],
    selectedTab: 'contact',
    audioIndex: 27
  },
 {
  id: 28,
  textVoice: 'I hope we will connect soon. Thank you for stopping by!',
  textAutomated: 'I hope we will connect soon. Thank you for stopping by!',
  textNormal: 'I hope we will connect soon. Thank you for stopping by!',
  buttonsNormal: ["back","next"],
  buttonsVoice: ["back","next"],
  buttonsAutomated:[],
  selectedTab: 'home',
  audioIndex: 28
 }
];
