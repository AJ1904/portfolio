// import React, { useState, useEffect } from 'react';
// import '../App.css';
// import homegif from '../assets/homegif.gif';
// import Contact from './Contact';
// import Shepherd from 'shepherd.js';
// import 'shepherd.js/dist/css/shepherd.css';
// import { tourSteps } from './TourShepherd';

// const Home = ({ setSelectedTab }) => {
//   const [isVoiceInteraction, setIsVoiceInteraction] = useState(false);
//   const [showDialog, setShowDialog] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [currentStepIndex, setCurrentStepIndex] = useState(0);
//   const [isSpeaking, setIsSpeaking] = useState(false);

//   const handlePause = () => {
//     setIsPaused(true);
//     synth.cancel(); // Cancel any ongoing speech
//   };
  
//   const handleResume = () => {
//     setIsPaused(false);
//     startAutomatedTour();
//   };

//   const createTour = (type) => {
//     const tour = new Shepherd.Tour({
//       useModalOverlay: true,
//       defaultStepOptions: {
//         scrollTo: true,
//         cancelIcon: {
//           enabled: true
//         }
//       }
//     });
  
//     tourSteps.forEach(step => {
//       for (const btn of step[`buttons${type}`]) {
//         if (btn === 'end') {
//           step[`buttons${type}`] = [{ text: 'End', action: tour.complete }];
//           break;
//         }
//         else if (btn === 'pause') {
//           step[`buttons${type}`] = [{ text: 'Pause', action: handlePause }];
//           break;
//         }
//         else if (btn === 'next') {
//           step[`buttons${type}`] = [{ text: 'Next', action: tour.next }];
//           break;
//         }
//         else if (btn === 'back') {
//           step[`buttons${type}`] = [{ text: 'Back', action: tour.back }];
//           break;
//         }
//       }
//       const stepOptions = {
//         id: step.id,
//         attachTo: step.attachTo,
//         buttons: step[`buttons${type}`],
//         text: step[`text${type}`],
//       };
  
//       tour.addStep(stepOptions);
//     });
  
//     return tour;
//   }
// // Create tours
//  const normalTour = createTour('Normal');
//  const voiceTour = createTour('Voice');
//  const automatedTour = createTour('Automated');

//   useEffect(() => {
//     const sections = document.querySelectorAll('.section');

//     const revealSection = () => {
//       sections.forEach((section) => {
//         if (window.scrollY + window.innerHeight > section.offsetTop) {
//           section.classList.add('show');
//         }
//       });
//     };

//     window.addEventListener('scroll', revealSection);
//     return () => window.removeEventListener('scroll', revealSection);
//   }, []);

 

//   // Initialize Web Speech API
//   const synth = window.speechSynthesis;

//   function speak(text, onEnd) {
//     if (typeof synth === "undefined" || !text) {
//       return;
//     }
//     setIsSpeaking(true);
//     const utterance = new SpeechSynthesisUtterance(text);
//     const voices = synth.getVoices();
//     const googleVoice = voices.find(voice => voice.name === "Google US English" && voice.lang === "en-US");
//     if (googleVoice) {
//       utterance.voice = googleVoice;
//     }
//     utterance.onend = () => {
//       setIsSpeaking(false);
//       if (onEnd) onEnd();
//     };
//     synth.speak(utterance);
//   }

//   // Speak the text of each step
//   automatedTour.on('show', (event) => {
//     const stepText = event.step.options.text;
//     speak(stepText);
//   });

//   // Speech recognition setup
//   // const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   // const speechRecognition = new SpeechRecognition();
//   // speechRecognition.continuous = true;
//   // speechRecognition.interimResults = false;

//   // speechRecognition.onresult = (event) => {
//   //   console.log('Speech recognition event:', event);  // Debugging information
//   //   const lastResult = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
//   //   console.log('Recognized speech:', lastResult);  // Debugging information

//   //   // Debugging statements to track the flow of execution
//   //   console.log('Current step:', tour.getCurrentStep());
//   //   if (lastResult === 'next' || lastResult === 'okay' || lastResult === 'ok') {
//   //     console.log('Navigating to next step...');
//   //     // tour.next();
//   //   } else if (lastResult === 'back') {
//   //     console.log('Navigating back to previous step...');
//   //     // tour.back();
//   //   } else if (lastResult === 'quit') {
//   //     console.log('Ending tour...');
//   //     // tour.complete();
//   //   }
//   // };

//   // const startVoiceInteraction = () => {
//   //   speechRecognition.start();
//   //   tour.start();
//   // };

//   const handleInteractClick = () => {
//     setShowDialog(true);
//   };

//   const handleNormalInteraction = () => {
//     setShowDialog(false);
//     automatedTour.start();
//   };

//   const handleAutomatedTour = () => {
//     setShowDialog(false);
//     startAutomatedTour();
//   };


//  // Handle automated tour
//  const startAutomatedTour = () => {
//   let stepIndex = 0;
//   const nextStep = () => {
//     if (stepIndex < tourSteps.length && !isPaused) {
//       automatedTour.show(stepIndex);
//       setCurrentStepIndex(stepIndex);
//       stepIndex++;
//       speak(tourSteps[stepIndex - 1].text, () => {
//         setTimeout(nextStep, 5000); // Wait for 5 seconds before showing the next step
//       });
//     }
//   };
//   nextStep();
// };



//   // const handleVoiceInteraction = () => {
//   //   setShowDialog(false);
//   //   navigator.mediaDevices.getUserMedia({ audio: true })
//   //     .then(() => {
//   //       startVoiceInteraction();
//   //     })
//   //     .catch((error) => {
//   //       console.error('Microphone permission denied', error);
//   //     });
//   // };

//   return (
//     <>
//       <section>
//         <div className="homecontainer">
//           <br />
//           <h1>Hey! :D</h1>
//           <h2>I am <span className="homename">Ayushri Jain</span>.</h2>

//           <div className="homecontent">
//             <div className="homeimage-container">
//               <img className="homegif-image" src={homegif} alt="Home GIF" />
//             </div>
//             <div className="homecontent">
//               <button className="interact-button" onClick={handleInteractClick}>Interact with me</button>
//             </div>
//           </div>

//           <h4 className="homeh5">Always learning and exploring the intersections of technology and innovation.</h4>
//           <h4 className="homeh5">Passionate about simplifying, automating, and optimizing pipelines, cloud applications, machine learning models, and software.</h4>
//           <h4 className="homeh5">Creating unique and simplistic applications in creative ways.</h4>
//         </div>
//       </section>
//       <section><Contact /></section>

//       {showDialog && (
//         <div className="dialog">
//           <div className="dialog-content">
//             <h3>Choose Interaction Mode</h3>
//             <button onClick={handleNormalInteraction}>Normal Interaction</button>
//             {/* <button onClick={handleVoiceInteraction}>Voice Interaction</button> */}
//             <button onClick={handleAutomatedTour}>Automated Tour</button>
//           </div>
//         </div>
//       )}

//       {automatedTour.isActive() && (
//         <div className="tour-controls">
//           {isPaused ? (
//             <button onClick={handleResume}>Resume Tour</button>
//           ) : (
//             <button onClick={handlePause}>Pause Tour</button>
//           )}
//         </div>
//       )}

//     </>
//   );

// };

// export default Home;


