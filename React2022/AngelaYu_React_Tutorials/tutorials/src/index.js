import React from 'react';
import ReactDOM from 'react-dom/client';

// import KeeperApp from './Components/KeeperApp/KeeperApp';
// import PropsDemo from './Components/PropsDemo/PropsDemo';
// import PropsChallenge from './Components/PropsChallenge/PropsChallenge';
// import EmojipediaApp from './Components/Emojipedia/EmojipediaApp';
// import CondRendering from './Components/ConditionalRendering/CondRendering';
// import ConditionalRenderingChallenge from './Components/ConditionalRenderingChallenge/CondRenderingChallenge';
// import DeclarativeProgramming from './Components/DeclarativeProgramming/DeclarativeProgramming';
// import HooksApp from './Components/Hooks/HooksApp';
// import HooksChallenge from './Components/HooksChallenge/HooksChallenge';
// import EventHandingApp from './Components/EventHandling/EventHandlingApp';
// import EventFormApp from './Components/EventForm (complex state 1)/EventFormApp';
// import ComplexStateChallenge from './Components/ComplexStateChallenge/ComplexStateChallenge';
import SpreadOpChallenge from './Components/SpreadOpChallenge/SpreadOpChallange';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SpreadOpChallenge />
  </React.StrictMode>
);