// import React, { useState, useEffect } from 'react';
// import '../App.css';
// import homegif from '../assets/homegif.gif';
// import Contact from './Contact';
// import Shepherd from 'shepherd.js';
// import 'shepherd.js/dist/css/shepherd.css';
// import { tourSteps } from './TourShepherd';

// const Home = ({ setSelectedTab }) => {
//   const [showDialog, setShowDialog] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [currentStepIndex, setCurrentStepIndex] = useState(0);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [synth] = useState(window.speechSynthesis);

//   const handlePause = () => {
//     setIsPaused(true);
//     synth.cancel();
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
//           //enabled: true
//           enabled: false
//         }
//       }
//     });

//     tourSteps.forEach(step => {
//       //console.log(`Step ID: ${step.id}, Selected Tab: ${step.selectedTab}`);
//       const buttons = step[`buttons${type}`].map(btn => {
//        // console.log(`Button: ${btn}`);
//         if (btn === 'end') {
//           return { text: 'End', 
//             action: () => {
//               if (synth.speaking) {
//                 synth.cancel();
//               }
//               tour.complete();
//           }};
//         } else if (btn === 'pause') {
//           return { text: 'Pause', action: handlePause };
//         } else if (btn === 'next') {
//           return { 
//             text: 'Next', 
//             action: () => {
//              // console.log('Next button clicked');
//               if (step.selectedTab && step.selectedTab !== '') {
//                 console.log(`Setting selectedTab to: ${step.selectedTab}`);
//                 setSelectedTab(step.selectedTab);
//               } else {
//                 console.log('No selectedTab for this step.');
//               }
//               tour.next();
//             }
//           };
//         } else if (btn === 'back') {
//           return { text: 'Back', action: tour.back };
//         }
//       });

//      // console.log('Buttons:', buttons);
//       const stepOptions = {
//         id: step.id,
//         attachTo: step.attachTo,
//         buttons,
//         text: step[`text${type}`],
//       };

//       tour.addStep(stepOptions);
//     });

//     return tour;
//   };

//   const normalTour = createTour('Normal');
//   // const voiceTour = createTour('Voice');
//   const automatedTour = createTour('Automated');

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

//   // const handleInteractClick = () => {
//   //   setShowDialog(true);
//   // };

//   const handleNormalInteraction = () => {
//     setShowDialog(false);
//     normalTour.start();
//   };

//   const handleAutomatedTour = () => {
//     // setShowDialog(false);
//     startAutomatedTour();
//   };

//   const startAutomatedTour = () => {
//     let stepIndex = currentStepIndex;
//     const nextStep = () => {
//       if (stepIndex < tourSteps.length && !isPaused) {
//         automatedTour.show(stepIndex);
        
//         const stepText = tourSteps[stepIndex].textAutomated;
        
//         speak(stepText, () => {
//           console.log(`Current Step Index: ${stepIndex}`);
//           if (tourSteps[stepIndex]?.selectedTab && tourSteps[stepIndex].selectedTab !== '') {
//             console.log(`Setting selectedTab to: ${tourSteps[stepIndex].selectedTab}`);
//             setSelectedTab(tourSteps[stepIndex].selectedTab);
//           }
//            else {
//             console.log('No selectedTab for this step.');
//           }
//           stepIndex = stepIndex + 1;
//         if (stepIndex < tourSteps.length) {
//           setTimeout(nextStep, 500); // Wait for 0.5 seconds before showing the next step
//         } else {
//           automatedTour.complete();
//         }
//       });
//       }
//     };
//     nextStep();
//   };

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
//               {/* <button className="interact-button" onClick={handleInteractClick}>Interact with me</button> */}
              
//               <button className="interact-button" onClick={handleAutomatedTour}>Hear me out!</button>
//             </div>
//           </div>

//           <h4 className="homeh5">Always learning and exploring the intersections of technology and innovation.</h4>
//           <h4 className="homeh5">Passionate about simplifying, automating, and optimizing pipelines, cloud applications, machine learning models, and software.</h4>
//           <h4 className="homeh5">Developing unique and simplistic applications in creative ways.</h4>
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

import React, { useState, useEffect } from 'react';
import '../App.css';
import homegif from '../assets/homegif.gif';
import Contact from './Contact';
import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';
import { tourSteps } from './TourShepherd';
// Import all the audio files
import audio1 from '../audios/1.m4a';
import audio2 from '../audios/2.m4a';
import audio3 from '../audios/3.m4a';
import audio4 from '../audios/4.m4a';
import audio5 from '../audios/5.m4a';
import audio6 from '../audios/6.m4a';
import audio7 from '../audios/7.m4a';
import audio8 from '../audios/8.m4a';
import audio9 from '../audios/9.m4a';
import audio10 from '../audios/10.m4a';
import audio11 from '../audios/11.m4a';
import audio12 from '../audios/12.m4a';
import audio13 from '../audios/13.m4a';
import audio14 from '../audios/14.m4a';
import audio15 from '../audios/15.m4a';
import audio16 from '../audios/16.m4a';
import audio17 from '../audios/17.m4a';
import audio18 from '../audios/18.m4a';
import audio19 from '../audios/19.m4a';
import audio20 from '../audios/20.m4a';
import audio21 from '../audios/21.m4a';
import audio22 from '../audios/22.m4a';
import audio23 from '../audios/23.m4a';
import audio24 from '../audios/24.m4a';
import audio25 from '../audios/25.m4a';
import audio26 from '../audios/26.m4a';
import audio27 from '../audios/27.m4a';
import audio28 from '../audios/28.m4a';
// Import other audio files as needed

// Map audio indices to their respective audio files
const audioMap = {
  1: audio1,
  2: audio2,
  3: audio3,
  4: audio4,
  5: audio5,
  6: audio6,
  7: audio7,
  8: audio8,
  9: audio9,
  10: audio10,
  11: audio11,
  12: audio12,
  13: audio13,
  14: audio14,
  15: audio15,
  16: audio16,
  17: audio17,
  18: audio18,
  19: audio19,
  20: audio20,
  21: audio21,
  22: audio22,
  23: audio23,
  24: audio24,
  25: audio25,
  26: audio26,
  27: audio27,
  28: audio28

};


const Home = ({ setSelectedTab }) => {
  // const [showDialog, setShowDialog] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [synth] = useState(window.speechSynthesis);

  const handlePause = () => {
    setIsPaused(true);
    synth.cancel();
  };

  const handleResume = () => {
    setIsPaused(false);
    startAutomatedTour();
  };

  const createTour = (type) => {
    const tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        scrollTo: true,
        cancelIcon: {
          enabled: false
        },
        classes: 'shepherd-theme-custom'
      }
    });

    tourSteps.forEach(step => {
      const buttons = step[`buttons${type}`].map(btn => {
        if (btn === 'end') {
          return { text: 'End', action: () => {
            if (synth.speaking) {
              synth.cancel();
            }
            tour.complete();
          }};
        } else if (btn === 'pause') {
          return { text: 'Pause', action: handlePause };
        } else if (btn === 'next') {
          return { text: 'Next', action: () => {
            if (step.selectedTab && step.selectedTab !== '') {
              setSelectedTab(step.selectedTab);
            }
            tour.next();
          }};
        } else if (btn === 'back') {
          return { text: 'Back', action: tour.back };
        }
      });

      const stepOptions = {
        id: step.id,
        attachTo: step.attachTo,
        buttons,
        text: step[`text${type}`],
      };

      tour.addStep(stepOptions);
    });

    return tour;
  };

  // const normalTour = createTour('Normal');
  const automatedTour = createTour('Automated');

  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const revealSection = () => {
      sections.forEach((section) => {
        if (window.scrollY + window.innerHeight > section.offsetTop) {
          section.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', revealSection);
    return () => window.removeEventListener('scroll', revealSection);
  }, []);

  function playAudioOrSpeak(text, audioIndex, onEnd) {
    let audioFile = null;
    if (audioIndex){
    audioFile = audioMap[audioIndex] ? new Audio(audioMap[audioIndex]) : null;
  }
    
if (audioFile) {
    audioFile.oncanplaythrough = () => {
      audioFile.play();
    };
    audioFile.onended = () => {
      if (onEnd) onEnd();
    };
  }
  else {
      if (typeof synth === "undefined" || !text) {
        return;
      }
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = synth.getVoices();
      const googleVoice = voices.find(voice => voice.name === "Google US English" && voice.lang === "en-US");
      if (googleVoice) {
        utterance.voice = googleVoice;
      }
      utterance.onend = () => {
        setIsSpeaking(false);
        if (onEnd) onEnd();
      };
      synth.speak(utterance);
  }
    
  }


  const handleAutomatedTour = () => {
    startAutomatedTour();
  };

  // const startAutomatedTour = () => {
  //   let stepIndex = currentStepIndex;
  //   const nextStep = () => {
  //     if (stepIndex < tourSteps.length && !isPaused) {
  //       automatedTour.show(stepIndex);
        
  //       const stepText = tourSteps[stepIndex].textAutomated;
  //       const audioIndex = tourSteps[stepIndex].audioIndex; // Assuming `audioIndex` is part of `tourSteps`
        
  //       playAudioOrSpeak(stepText, audioIndex, () => {
  //         if (tourSteps[stepIndex]?.selectedTab && tourSteps[stepIndex].selectedTab !== '') {
  //           setSelectedTab(tourSteps[stepIndex].selectedTab);
  //         }
  //         stepIndex = stepIndex + 1;
  //         if (stepIndex < tourSteps.length) {
  //           setTimeout(nextStep, 10); // Wait for 0.01 seconds before showing the next step
  //         } else {
  //           automatedTour.complete();
  //         }
  //       });
  //     }
  //   };
  //   nextStep();
  // };

  const startAutomatedTour = () => {
    let stepIndex = currentStepIndex;
    const nextStep = () => {
      if (stepIndex < tourSteps.length && !isPaused) {
        const step = tourSteps[stepIndex];
        const nextStepText = step.textAutomated;
        const audioIndex = step.audioIndex;
  
        const showNextStep = () => {
          automatedTour.show(stepIndex);
  
          playAudioOrSpeak(nextStepText, audioIndex, () => {
            stepIndex++;
  
            if (step.selectedTab && step.selectedTab !== '') {
              setSelectedTab(step.selectedTab);
            }
  
            if (stepIndex < tourSteps.length) {
              setTimeout(nextStep, 10); // Wait for 0.01 seconds before showing the next step
            } else {
              automatedTour.complete();
            }
          });
        };
  
        // Check if the next step requires a tab change
        if (step.selectedTab && step.selectedTab !== '') {
          setSelectedTab(step.selectedTab);
          setTimeout(showNextStep, 10); // Wait for tab change before showing the next step
        } else {
          showNextStep();
        }
      }
    };
    nextStep();
  };
  
  return (
    <>
      <section>
        <div className="homecontainer">
          <br />
          <h1>Hey! :D</h1>
          <h2>I am <span className="homename">Ayushri Jain</span>.</h2>

          <div className="homecontent">
            <div className="homeimage-container">
              <img className="homegif-image" src={homegif} alt="Home GIF" />
            </div>
            <div className="homecontent">
              <button className="interact-button" onClick={handleAutomatedTour}>Hear me out!</button>
            </div>
          </div>

          <h4 className="homeh5">Always learning and exploring the intersections of technology and innovation.</h4>
          <h4 className="homeh5">Passionate about simplifying, automating, and optimizing pipelines, cloud applications, machine learning models, and software.</h4>
          <h4 className="homeh5">Developing unique and simplistic applications in creative ways.</h4>
        </div>
      </section>
      <section><Contact /></section>

      {automatedTour.isActive() && (
        <div className="tour-controls">
          {isPaused ? (
            <button onClick={handleResume}>Resume Tour</button>
          ) : (
            <button onClick={handlePause}>Pause Tour</button>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
