import React from 'react';
import '../App.css';
import gitlogo from '../assets/github.png';
import tamulogo from '../assets/tamu_logo.png';
import manitlogo from '../assets/manit_logo.png';
import logo from '../assets/logo.png';
import saajlogo from '../assets/saaj_logo.png';
import rotaractlogo from '../assets/rotaract_logo.jpeg';
import helloworldlogo from '../assets/helloworld_logo.png';
import valentine from '../assets/valentine.png';
import conqueralllogo from '../assets/conquerall.png';
import llmwsoundarelogo from '../assets/llmsoundware.png';
import poemdlelogo from '../assets/poemdle.svg';

const Projects = () => {
  return (
    
      <div className='leftalign'>
      
      <div className="projects">
    <div className="project" id="project-1"> 
        <div className="education" >
            <div className="education-logo">
                <a href="https://join.rune.ai/game/DYoIVuI6-GQE" target="_blank" rel="noreferrer"><img src={conqueralllogo} alt="Conquer All Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>Conquer All on Rune</h4>
                <h5>🛠️ React, Javascript, Rune, Artificial Intelligence</h5>
                <ul className="custom-list">
                    <li><h6 className="educationh6">👩🏻‍💻 Conquer All is a fun and simple multiplayer strategy game where you send armies to capture castles.</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 Play against friends or challenge a tough AI that is hard to beat! </h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 This game is submitted in React Jam Spring 2024 on Rune platform.</h6></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="project" id="project-2">
        <div className="education">
            <div className="education-logo">
                <a href="https://github.com/AJ1904/llmsoundware" target="_blank" rel="noreferrer"><img src={llmwsoundarelogo} alt="LLMSoundWare Screen"></img></a>
            </div>
            <div className="education-text">
                <h4>LLMSoundWare</h4>
                <h5>🛠️ LLMWare, Streamlit, Python, Natural Language Processing, Large Language Model</h5>
                <ul className="custom-list">
                    <li><h6 className="educationh6">👩🏻‍💻 This project is a LLMWare + Streamlit web application that takes an audio file as input, transcribes it using LLMWare models, and performs various analyses on the transcription.</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 The app provides insights into sentiment, named entities, topics, categories, intents, emotions, and summaries extracted from the audio content.</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 Additionally, it features an interactive chatbot powered by the Dragon model from LLMWare, allowing users to ask questions about the audio and its analysis.</h6></li>

                     
                </ul>
            </div>
        </div>
    </div>
</div>

<div className="projects">
    <div className="project" id="project-3"> 
        <div className="education" >
            <div className="education-logo">
                <a href="https://saajheaven.web.app/" target="_blank" rel="noreferrer"><img src={saajlogo} alt="SAAJ Heaven Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>SAAJ Heaven Website</h4>
                <h5>🛠️ Angular, Firebase, Software Engineering</h5>
                <ul className="custom-list">
                    <li><h6 className="educationh6">👩🏻‍💻 SAAJ Heaven is an art & craft store which creates and sells handmade traditional decor for festivals and other occasions.</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 Along with the store website, I have also built admin dashboard for them to manage their store webpage.</h6></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="project" id="project-4">
    <div className="education">
            <div className="education-logo">
                <a href="https://github.com/AJ1904/Microsoft-Ignite-Azure-AI-Language" target="_blank" rel="noreferrer"><img src="https://github.com/AJ1904/Microsoft-Ignite-Azure-AI-Language/assets/49027490/4438e3a4-2f84-40c9-98cf-c0b12d2928cb" alt="Microsoft Ignite Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>Microsoft Ignite Azure AI Challenge</h4>
                <h5>🛠️ Artificial Intelligence, Microsoft Azure</h5>
                <ul className="custom-list">
                    <li><h6 className="educationh6">👩🏻‍💻 I successfully completed the Microsoft Ignite module on Azure AI Language, focusing on building natural language processing (NLP) solutions using Azure AI Language services.</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 This challenge covered nine modules aligned with the assessment requirement of building a natural language processing solution with Azure AI Language.</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 It was a valuable learning experience, contributing to my understanding of language models and their applications in real-world scenarios.</h6></li>
                </ul>
            </div>
        </div>
        
    </div>
</div>


<div id ="mlprojectsmultiple-1">
<div className="projects">
    <div className="project" id="project-5">
        <div className="education">
            <div className="education-logo">
                <a href="https://github.com/AJ1904/machine-translation-artificial-language" target="_blank" rel="noreferrer"><img src={gitlogo} alt="git Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>Powerful deep learning model for machine translation</h4>
                <h5>🛠️ TensorFlow, Transfer Learning, High Performance Computing (HPC), Machine Learning, Deep Learning</h5>
                <ul className="custom-list">
                    <li><h6 className="educationh6">👩🏻‍💻 This study focuses on machine translation for two synthetic languages: an "Input Language" and an "Output Language." </h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 The aim is to construct a model that can effectively translate texts from the "Input Language" to the "Output Language." </h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 The challenge is that model's performance will be assessed using a testing set similar to the aforementioned training set. The evaluation metric, "test accuracy," measures the fidelity of the model's translations. A translation in the Output Language generated by the model will be deemed "correct" only if it precisely matches the ground-truth text.
                     </h6></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="project" id="project-6">
        <div className="education">
            <div className="education-logo">
                <a href="https://github.com/AJ1904/noisy-mnist-classification-deep-learning" target="_blank" rel="noreferrer"><img src={gitlogo} alt="git Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>Deep Learning Model on Noisy MNIST Handwritten Digits Dataset</h4>
                <h5>🛠️ TensorFlow, Transfer Learning, Deep Learning Models using Multiple GPUs, Machine Learning, Deep Learning</h5>
                <ul className="custom-list">
                    <li><h6 className="educationh6">👩🏻‍💻 When we add noise to images in the MNIST dataset, the digits in the images become more and more difficult for human to recognize. However, interestingly, deep neural networks can still be trained to recognize them relatively well.</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 As part of this project, I trained a good hand-written-digit recognition classifier for the noisy images using TensorFlow Keras. Achieved an accuracy of 69.7% on the unseen dataset.</h6></li>
                </ul>
            </div>
        </div>
    </div>
</div>



<div className="projects" >
    <div className="project" id="project-7">
    <div className="education">
            <div className="education-logo">
                <a href="https://github.com/AJ1904/Sentiment-Analysis-Using-Transformers" target="_blank" rel="noreferrer"><img src={gitlogo} alt="git Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>Sentiment Analysis Using Transformers</h4>
                <h5>🛠️ TensorFlow, PyTorch, Machine Learning, Python</h5>
                <ul className="custom-list">
                    <li><h6 className="educationh6">👩🏻‍💻 This project is about exploring and implementing various machine learning models like CNN, RNN and Transformers for sentiment analysis based on the YELP text review and stars.</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 <a href="https://www.linkedin.com/in/ayushrijain/details/projects/50879504/multiple-media-viewer?profileId=ACoAAB92TxMBv2ka7uTyeovNcno2w0r-QrjBL_0&treasuryMediaId=1635554415863&type=DOCUMENT&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BycUMRUCJRimajiHbqP%2F%2FQw%3D%3D" target="_blank" rel="noreferrer">Report Link</a></h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 Improved legacy code, thoroughly tested using rpsec testing tool and wrote cucumber tests to have 100% code coverage</h6></li>
                </ul>
            </div>
        </div>
        
    </div>
    <div className="project" id="project-8">
    <div className="education">
            <div className="education-logo">
                <a href="https://github.com/AJ1904/machine-learning-from-scratch" target="_blank" rel="noreferrer"><img src={gitlogo} alt="Project Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>Machine Learning From Scratch</h4>
                <h5>🛠️ TensorFlow, Machine Learning</h5>
                <ul className="custom-list">
                    <li><h6 className="educationh6">👩🏻‍💻 This study contains projects related to Machine Learning CSCE 633. </h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 It covers Linear Regression, Logistic Regression, Regularization, Decision Trees, Gradient Boosting, Feed Forward Neural Networks, Convolutional Neural Networks, Support Vector Machines, Unsupervised Learning including Clustering.</h6></li>
                </ul>
            </div>
        </div>
    </div>
</div>



<div className="projects">
    <div className="project" id="project-9">
        <div className="education">
            <div className="education-logo">
                <a href="https://www.linkedin.com/in/ayushrijain/#:~:text=to%20Detail%20%C2%B7%20Collaboration-,Machine%20Learning%20Engineer,-Machine%20Learning%20Engineer" target="_blank" rel="noreferrer"><img src={tamulogo} alt="TAMU Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>Autonomous Vehicle Navigation: using Carla neural networks & AI</h4>
                <h5>🛠️ Carla, Python, Neural Networks, Computer Vision</h5>
                <ul className="custom-list">
                    <li><h6 className="educationh6">👩🏻‍💻 Created end-to-end autonomous driving solutions in Python and simulated results in Carla </h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 Applied computer vision, sensor data processing & AI algorithms to enhance community mobility and quality of life</h6></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="project" id="project-10">
        <div className="education">
            <div className="education-logo">
                <a href="https://github.com/FashioNXT/NXTFolio" target="_blank" rel="noreferrer"><img src={tamulogo} alt="TAMU Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>NXTFolio: A Ruby on Rails Web App for Fashion industry FashionNXT</h4>
                <h5>🛠️ Ruby on Rails, HTML, CSS, Cucumber, Selenium, RSpec</h5>
                <ul className="custom-list">
                    <li><h6 className="educationh6">👩🏻‍💻 Developed the web app's features like login, tagging, seeding using Html, CSS, S3, Ruby on Rails</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 Designed and implemented the customer relation management portal, led & helped the team to implement mobile UI, github automated tests, job portal, travel, follow features</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 Improved legacy code, thoroughly tested using rpsec testing tool and wrote cucumber tests to have 100% code coverage</h6></li>
                </ul>
            </div>
        </div>
    </div>
</div>




<div className="projects">
    <div className="project" id="project-11">
        <div className="education">
            <div className="education-logo">
                <a href="https://www.linkedin.com/in/ayushrijain/details/projects/#:~:text=and%20cucumber%20tests-,Major%20Project%20%3A%20%27Enhancing%20the%20Capability%20of%20Analytical%20Hierarchy%20Process%20using%20Fuzzy%20Logic%20embedded%20with%20Neural%20Networks%27,-Major%20Project%20%3A%20%27Enhancing" target="_blank" rel="noreferrer"><img src={manitlogo} alt="manit Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>Enhancing the Capability of Analytical Hierarchy Process using Fuzzy Logic embedded with Neural Networks'</h4>
                <h5>🛠️ Python, Java, Fuzzy Logic, Neural Networks</h5>
                <ul className="custom-list">
                    <li><h6 className="educationh6">👩🏻‍💻 Developed a multi-criteria classification model through integration of fuzzy analytical hierarchy process and NN</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 Achieved 97.7% accuracy in predicting results of Swachha Bharat Abhiyan </h6></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="project" id="project-12">
        <div className="education">
            <div className="education-logo">
                <a href="https://www.linkedin.com/in/ayushrijain/details/projects/#:~:text=Swachha%20Bharat%20Abhiyan%E2%80%9D.-,Minor%20Project%20%3A%20%27Text%20to%20Emoji%27,-Minor%20Project%20%3A%20%27Text" target="_blank" rel="noreferrer"><img src={manitlogo} alt="manit Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>Text to Emoji</h4>
                <h5>🛠️ Python, Android, Machine Learning, Java</h5>
                <ul className="custom-list">
                    <li><h6 className="educationh6">👩🏻‍💻 Developed android application to suggest emojis based on given text with 95% accuracy</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 Implemented machine learning models Naive Bayes, Random Forest, SVM, Neural Networks using Python</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 Improved legacy code, thoroughly tested using rpsec testing tool and wrote cucumber tests to have 100% code coverage</h6></li>
                </ul>
            </div>
        </div>
    </div>
</div>


</div>
<div className="projects">
    <div className="project" id="project-13">
        <div className="education">
            <div className="education-logo">
                <a href="https://www.linkedin.com/in/ayushrijain/details/projects/#:~:text=for%20training%20purpose.-,Software%20Engineering%20Project%20%3A%20%27Rotaract%20App%27,-Software%20Engineering%20Project" target="_blank" rel="noreferrer"><img src={rotaractlogo} alt="TAMU Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>Rotaract App</h4>
                <h5>🛠️ Android, Java, Kotlin</h5>
                <ul className="custom-list">
                    <li><h6 className="educationh6">👩🏻‍💻 Developed attendance tracking feature using user friendly UI designs</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 App was used by volunteers of Rotaract Club MANIT to manage attendance and information of their students</h6></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="project" id="project-14">
        <div className="education">
            <div className="education-logo">
                <a href="https://github.com/AJ1904/Natural-Language-Processing" target="_blank" rel="noreferrer"><img src={gitlogo} alt="git Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>Natural Language Processing</h4>
                <h5>🛠️ HuggingFace, Python, Jupyter</h5>
                <ul className="custom-list">
                    <li><h6 className="educationh6">👩🏻‍💻 This study is about using transformers for various natural language processing tasks</h6></li>
                    
                </ul>
            </div>
        </div>
    </div>
</div>


<div id ="mlprojectsmultiple-2">
<div className="projects">
    <div className="project" id="project-15">
        <div className="education">
            <div className="education-logo">
                <a href="https://github.com/AJ1904/portfolio" target="_blank" rel="noreferrer"><img src={logo} alt="Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>Personal Portfolio</h4>
                <h5>🛠️ Taipy, Python, HTML, CSS, Angular, Firebase</h5>
                <ul className="custom-list">
                  <li><h6 className="educationh6">👩🏻‍💻 (This) Personal Portfolio developed using React.</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 Another <a href="https://github.com/AJ1904/taipy-portfolio" target="_blank" rel="noreferrer"> portfolio</a> developed using Taipy.</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 Another <a href="https://aj1904.github.io/codespaces-portfolio/" target="_blank" rel="noreferrer"> portfolio</a> using Github Codespaces and Github Pages.</h6></li>
                    <li><h6 className="educationh6">👩🏻‍💻 Old <a href="https://ayushrijain.web.app/" target="_blank" rel="noreferrer"> portfolio</a> using Javascript and Firebase.</h6></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="project" id="project-16">
        <div className="education" >
            <div className="education-logo">
                <a href="https://github.com/AJ1904/hello-world" target="_blank" rel="noreferrer"><img src={helloworldlogo} alt="Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>Hello World</h4>
                <h5>🛠️ Taipy, Python</h5>
                <ul className="custom-list">
                  <li><h6 className="educationh6">👩🏻‍💻 Fun way of translating of 'Hello World!' in 76 languages used worldwide.</h6></li>
                </ul>
            </div>
        </div>
    </div>
    
</div>

    <div className="projects">
    <div className="project" id="project-17">
        <div className="education">
            <div className="education-logo">
                <a href="https://missionvalentine.netlify.app" target="_blank" rel="noreferrer"><img src={valentine} alt="Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>Mission Valentine</h4>
                <h5>🛠️ React, D3, Javascript, HTML, CSS, Netlify, Adobe</h5>
                <ul className="custom-list">
                  <li><h6 className="educationh6">👩🏻‍💻 React web application with D3 and multiple games, timers, puzzle, paint, audio.</h6></li>
                  <li><h6 className="educationh6">👩🏻‍💻 Used Adobe Firefly for generating images with Prompt Engineering.</h6></li>
                  <li><h6 className="educationh6">👩🏻‍💻 Use key anonymous to enter!</h6></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="project" id="project-18">
        <div className="education">
            <div className="education-logo">
                <a href="https://poemdle.netlify.app" target="_blank" rel="noreferrer"><img src={poemdlelogo} alt="Poemdle Logo"></img></a>
            </div>
            <div className="education-text">
                <h4>Poemdle</h4>
                <h5>🛠️ React, JavaScript, Cascading Style Sheets (CSS), Artificial Intelligence (AI)</h5>
                <ul className="custom-list">
                  <li><h6 className="educationh6">👩🏻‍💻 This project is an extension of Wordle and uses AI, MindsDB, Flagsmith and React.</h6></li>
                  <li><h6 className="educationh6">👩🏻‍💻 Instead of guessing just one word, you unravel the mysteries of entire poems. Welcome to a new dimension of wordplay, where every guess is a step closer to unlocking the poet's heart.</h6></li>
                  <li><h6 className="educationh6">👩🏻‍💻 Poemdle secured 4th position in <a href="https://quine.sh/quests/creator/submissions?questId=8" target="_blank" rel="noreferrer">Quine's Quest 008</a>.</h6></li>
                </ul>

                 
            </div>
        </div>
    </div>
    </div>
    
    
</div>

      </div>
  );
};

export default Projects;

