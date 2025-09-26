import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import Events from './components/Events';
import Register from './components/Register';
import Navbar from './components/Navbar';
import FooterNav from "./components/FooterNav";
import Event from "./components/Event";
import DramaForm from "./components/DramaForm";
function App()
{

  const events=[
    {
      eventName:"ADZAP",
      contact:"7010922948",
      prize:"2250",
      description:"Pitch the most outrageous product ideas imaginable! Say invisible socks or a smartphone that only works when you're asleep. Get creative, get funny, and keep the audience in stitches.",
      guidelines:[
        'Your product idea/ad should be unique and humorous. Think outside the box.',
        'Ensure all team members have a role in the ad and contribute to the overall performance.',
        'The use of simple props is allowed. Make sure any props are easy to manage within the time constraints.',
        'Be mindful of the time.'
      ],
      prelims:[
        'Each team should have 4-6 members.',
        'You will have 7 minutes to brainstorm and script your ad.',
        'Your performance should last 4-5 minutes. Going over the time limit will cost you points.',
        'Make sure your humor is clean. Offensive content or vulgar language is not allowed.',
        "The judge's decision is final."
      ]
    },
    {
      eventName:"DEBATE",
      contact:"7845080225",
      prize:"1500",
      description:"Prepare to engage in a battle of wits, where your critical thinking and communication skills will be put to the ultimate test. This event is designed to test your ability to argue both for and against a given topic, clearly and coherently, in a limited time setting.",
      guidelines:[
         "Individual Participation.",
    "Two-round event."
      ],
      prelims:[
        "Contestants will receive a topic just before they are set to speak. Preparation time of one minute will be allotted.",
        "Each contestant will have 3 minutes to deliver their speech.",
        "Block and Tackle:",
        ["- When prompted to 'BLOCK,' the contestant must speak against the topic.",
        "- When prompted to 'TACKLE,' the contestant must speak in favor of the topic.",
        "- The transitions between BLOCK and TACKLE will occur multiple times within the 3-minute time frame."]
      ],
      finals:[
        "Teams will be formed from those selected in Round 1.",
      "Teams will be given a topic 10 minutes before the debate begins.",
      "Speech Structure:",
      ["- The first two contestants from each team will present arguments in favor of the topic.",
      "- The third contestant will present a rebuttal speech, countering the points made by the opposing team."],
      "The jury's decision will be final."
      ]
    },
    
    {
      eventName:"DRAMA",
      contact:"8248255395",
      prize:"3750",
      description:"Get ready to bring your acting skills to life and command the stage! This is your moment to step into the spotlight and show the world what you’ve got. It’s not just about performing—it’s about seizing the chance to be at the center of attention and express your passion for drama. Get ready to entertain, explore, and let your talent shine when it’s your time to take the stage. The stage is set, and the spotlight is waiting for you!",
      guidelines:[
        'The first round of the event will be conducted based on the scripts submitted by the participating teams. Teams that are shortlisted for the final round will be notified via WhatsApp.'
        
      ],
      prelims:[
        'Each participating team must consist of 8-10 members. No request to change this shall be entertained.',
        'Teams are required to bring their own props and costumes. Hazardous materials or substances are strictly prohibited on stage. All props must be removed from the stage immediately after the performance.',
        'Each team is allotted a maximum of 20 minutes for their performance, including setup and cleanup time.',
        'Teams that exceed the time limit or violate any of the rules will face disqualification.',
        'Participants must arrive on time and adhere to all instructions provided at the start of the event.',
        'The use of obscene language, offensive content, or themes that may offend any group is strictly prohibited.',
        "The judges' decisions will be final and binding in all circumstances.",
        'Any disruptive behavior, such as tampering with another team’s props or equipment, will result in immediate disqualification.',
        "Participants and spectators are expected to maintain decorum and show respect throughout the event. Any form of misconduct or disrespectful behavior towards participants, judges, or organizers will not be tolerated.",
        "On-the-spot registration will not be accepted.",
      ]
    },
    {
      eventName:"DUMB C",
      contact:"9551014349",
      prize:"2250",
      description:"Demonstrate your perfect partnership with a game of Dumb Charades! This classic and entertaining game invites you and your partner to get imaginative with clues and lively gestures. It’s an ideal way to highlight your teamwork while enjoying endless laughs together!",
      guidelines:[
        'Each team should consist of 2 members.',
        'The event will feature 2 rounds.'
      ],
      prelims:[
        'Questions will be based on movies, day-to-day life objects, and proverbs/idioms.',
        'Splitting words or usage of codes and references are restricted.',
        'Mouthing words or using sounds are also restricted.',
        'Participants are not allowed to enact the exact word of the movie. They should enact the plot of the movie.',
        'Further rules will be explained at the venue.'
      ],
      finals:["Instructions for the finals will be given on the spot."]
    },
    {
      eventName: "JAM",
      contact:"9344346700",
      prize:"1500",
      description: "Just A Minute (JAM) is an exhilarating event that challenges participants to speak spontaneously on a given topic for one minute. This fast-paced competition not only tests quick thinking and creativity but also hones communication skills under pressure, providing an adrenaline-fueled experience that pushes speakers to their limits.",
      guidelines: [
        "Individual Participation.",
        "Two-round event."
      ],
      prelims: [
        "Prelims will be in EXTEMPORE format.",
        "Participants will each be given a scenario or a situation on which they have to speak for 1 minute.",
        "A preparation time of 1 minute will be provided.",
        "Shortlisted participants will be eligible for the finals."
      ],
      finals: [
        "Finals will be in TAP JAM format.",
        "The finalists are required to speak fluently while their competitors scrutinize their speech for errors.",
        "Further rules will be explained before the start of the finals."
      ]
    }
    
    ,
    {
      eventName: "MICROTALE",
      contact:"8667721591",
      prize:"1500",
      description: "Embark on a literary journey of brevity and depth at our Microtale event! With just a few words, weave stories that linger in minds and hearts. Join us for poetic magic where the tiniest tales hold the mightiest power by unleashing your creativity and crafting miniature worlds where every letter counts.",
      guidelines: [
        "Individual participation only.",
        "It is a single-round event.",
        "If any means of malpractice is found, the participant will be immediately disqualified."
      ],
      prelims: [
        "The topic will be given on the spot.",
        "The contestant has to write a tale on the given topic in less than 40 words.",
        "Plagiarism should be strictly avoided.",
        "Entries with vulgarity, profanity, or offensive/inappropriate content will be disqualified.",
        "Each person is allowed to submit only one entry.",
        "Time limit: 5 minutes."
      ]
    },
    {
      eventName: "POEM",
      contact:"8667721591",
      prize:"1500",
      description: "Step into a realm where words dance with imagery; let the picture guide your lyrical spree. Participants will be given a picture about which they have to write a poem on a topic that best suits it.",
      guidelines: [
        "Individual participation.",
        "It is a single-round event.",
        "Topics will be given on the spot."
      ],
      prelims: [
        "The poem should have a minimum of 8 lines and should not exceed 16 lines.",
        "Strictly avoid plagiarism.",
        "Poems containing vulgarity, profanity, or offensive/inappropriate content will not be considered for evaluation.",
        "A person is allowed to submit a maximum of 1 entry only.",
        "Usage of ChatGPT or any AI tool will result in immediate disqualification."
      ]
    },
    {
      eventName: "PUZZLE",
      contact:"7812868428",
      prize:"2250",
      description: "Prepare to twist your mind and challenge your thinking at our Puzzle event! Dive into a world of brainteasers that will test your logic and creativity. From cryptic riddles to intricate puzzles, every challenge will test your logic and wit. Ready to unlock the mysteries?",
      guidelines: [
        "Two members per team.",
        "It is a single-round event."
      ],
      prelims: [
        "Duration: 30 minutes.",
        "The use of mobile phones or digital aids is not allowed.",
        "Cheating or malpractice is strictly prohibited.",
        "The Jury's decision is final."
      ]
    },
    {
      eventName: "QUIZ",
      contact:"8072477148",
      prize:"2250",
      description: "Get ready for a fun quiz that tests your knowledge and quick thinking. Compete with the best and aim to be the top quiz champion. Only the sharpest will win. Show your skills and rise to the challenge!",
      guidelines: [
        "Each team should consist of 2 members.",
        "Two-round event."
      ],
      prelims: [
        "Use of mobile phones during the event will result in disqualification.",
        "The preliminaries will take place strictly within the allotted time.",
        "The top 6 teams will advance to the finals."
      ],
      finals: [
        "Final round rules will be announced on the spot."
      ]
    },
    {
      eventName: "SHIPWRECK",
      contact:"6374437435",
      prize:"1500",
      description: "A tempest of wit and wisdom, where words and a sense of humor are the lifeboats that save or sink. You’re a crewmate on a sinking ship, and there’s only one life jacket left. Your mission? Convince the captain to save you!",
      guidelines: [
        "All participants must compete individually.",
        "The event consists of two rounds: Prelims and Finals.",
        "Any controversial or offensive content will result in immediate disqualification."
      ],
      prelims: [
        "The prelims will follow a Block & Tackle format.",
        "Each participant has to speak both for and against the assigned topic.",
        "Participants have a total of 90 seconds to speak.",
        "The assigned topic cannot be changed once given.",
        "Additional instructions will be provided on the spot.",
        "The top 6 participants from the prelims will qualify for the finals."
      ],
      finals: [
        "In the finals, each contestant will be assigned a character, either fictional or non-fictional (e.g., Neeraj Chopra, Kamala Harris, Dora).",
        "Once assigned, characters cannot be changed.",
        "Additional instructions will be provided on the spot.",
        "The jury’s decision will be final."
      ]
    }
    
    ,{
      eventName: "UNO MINUTO",
      contact:"9361140647",
      prize:"1500",
      description: "Are you a person who can stun the observer with your electrifying performance? Then, this is for you! The stage is all yours for those 60 seconds. May it be any talent that makes you unique, may it be anything. Come on, people! Indulge us in astonishment with your stunning talents! The stage awaits.",
      guidelines: [
        "Individual participation.",
        "Two-round event."
      ],
      prelims: [
        "Participants shall showcase their talents of any kind (vulgarity and offensive content must be avoided).",
        "The participants are requested to bring their own props.",
        "The participants should attach an audio or video file of karaoke if needed to the designated link prior to the commencement of the event.",
        "Participants are requested to stick to the time limit of 60 seconds.",
        "Those who are shortlisted will advance to the finals."
      ],
      finals: [
        "All the rules in the prelims should be followed in finals as well.",
        "The performance shall be based on the same skill or it might be a different skill from the one performed in the prelims.",
        "In case of performing with the same skill, the content and the method of delivery should be different. Eg: If one chooses to dance, he/she may exhibit a different form of dance in the other round."
      ]
    }
    ]
 
   return(
   <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home></Home>} />
      
      <Route path="/Events" element={<Events></Events>} />
      <Route path="/Register" element={<Register></Register>} />
      <Route path="/drama" element={<DramaForm></DramaForm>} />
      <Route path="/event1" element={<Event eventName={events[0].eventName} contact={events[0].contact} prize={events[0].prize} eventDescription={events[0].description} eventGuidelines={events[0].guidelines} eventRules={events[0].prelims} eventFinals={events[0].finals}></Event>} />
      <Route path="/event2" element={<Event eventName={events[1].eventName} contact={events[1].contact} prize={events[1].prize} eventDescription={events[1].description} eventGuidelines={events[1].guidelines} eventRules={events[1].prelims} eventFinals={events[1].finals}></Event>} />
      <Route path="/event3" element={<Event eventName={events[2].eventName} contact={events[2].contact} prize={events[2].prize} eventDescription={events[2].description} eventGuidelines={events[2].guidelines} eventRules={events[2].prelims} eventFinals={events[2].finals}></Event>} />
      <Route path="/event4" element={<Event eventName={events[3].eventName} contact={events[3].contact} prize={events[3].prize} eventDescription={events[3].description} eventGuidelines={events[3].guidelines} eventRules={events[3].prelims} eventFinals={events[3].finals}></Event>} />
      <Route path="/event5" element={<Event eventName={events[4].eventName} contact={events[4].contact} prize={events[4].prize} eventDescription={events[4].description} eventGuidelines={events[4].guidelines} eventRules={events[4].prelims} eventFinals={events[4].finals}></Event>} />
      <Route path="/event6" element={<Event eventName={events[5].eventName} contact={events[5].contact} prize={events[5].prize} eventDescription={events[5].description} eventGuidelines={events[5].guidelines} eventRules={events[5].prelims} eventFinals={events[5].finals}></Event>} />
      <Route path="/event7" element={<Event eventName={events[6].eventName} contact={events[6].contact} prize={events[6].prize} eventDescription={events[6].description} eventGuidelines={events[6].guidelines} eventRules={events[6].prelims} eventFinals={events[6].finals}></Event>} />
      <Route path="/event8" element={<Event eventName={events[7].eventName} contact={events[7].contact} prize={events[7].prize} eventDescription={events[7].description} eventGuidelines={events[7].guidelines} eventRules={events[7].prelims} eventFinals={events[7].finals}></Event>} />
      <Route path="/event9" element={<Event eventName={events[8].eventName} contact={events[8].contact} prize={events[8].prize} eventDescription={events[8].description} eventGuidelines={events[8].guidelines} eventRules={events[8].prelims} eventFinals={events[8].finals}></Event>} />
      <Route path="/event10" element={<Event eventName={events[9].eventName} contact={events[9].contact} prize={events[9].prize} eventDescription={events[9].description} eventGuidelines={events[9].guidelines} eventRules={events[9].prelims} eventFinals={events[9].finals}></Event>} />
      <Route path="/event11" element={<Event eventName={events[10].eventName} contact={events[10].contact} prize={events[10].prize} eventDescription={events[10].description} eventGuidelines={events[10].guidelines} eventRules={events[10].prelims} eventFinals={events[10].finals}></Event>} />
      
    </Routes>
    
     <FooterNav></FooterNav> 
    
  </Router>)

  }

export default App;




