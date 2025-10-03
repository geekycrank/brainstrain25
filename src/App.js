import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import EventList from "./components/EventList";
import EventDetail from "./components/EventDetail";
import CampusAmbassador from "./components/CampusAmbassador";
import Contact from "./components/Contact";

function App() {
  
  const events=[
    {
      eventName:"ADZAP",
      contact:"9123576842",
      prize:"2250",
      description: "Pitch the wildest product ideas with a twist of humor and creativity! Entertain the crowd with quirky ads, crazy props and unforgettable performances!",
      guidelines:[
        "Design a product idea that's attractive, innovative, funny, and wildly imaginative.",
        "Every team member should take part in the act.",
        "Props are welcome—keep them simple and manageable.",
        "Stick to the time limit, or risk losing points."
      ],
      prelims:[
        "Teams must have 4–6 members.",
        "You'll get 7 minutes to plan and script your ad before the show begins, and 4–5 minutes to perform it (crossing the limit will cost points).",
        "Humor should be clean—no offensive jokes allowed.",
        "The judge's decision is final."
      ]
    },
    {
      eventName:"DEBATE",
      contact:"7418908013",
      prize:"1500",
      description:"Where wits win wars, are you wizards ready to leave your opposers with verbally intellectual scars? Enter debate!",
      guidelines:[
        "The debate will be conducted in two rounds.",
        "Topics will be provided on the spot for both rounds.",
        "Round 1 will have individual participation, and the top 6 will advance to the Round 2 as two teams of 3 members each.",
        "Use of offensive, vulgar, or disrespectful content will lead to disqualification.",
        "Reading directly from phones or papers is strictly prohibited."
      ],
      prelims:[
        "A random topic will be given on the spot.",
        "1 minute of preparation time.",
        "1 minute to speak.",
        "When prompted to TACKLE, speak in favor of the topic.",
        "When prompted to BLOCK, speak against the topic.",
        "You may be asked to switch multiple times during your speech."
      ],
      finals:[
        "Finalists will be grouped into teams.",
        "The format will be explained during the finale.",
        "Jury's decision is final."
      ]
    },
    
    {
      eventName:"DRAMA",
      contact:"6385698553",
      prize:"3750",
      description:"Step into a world where stories come alive and emotions take center stage! Drama isn't just an act it's an experience.The curtain is rising will you rise with it?",
      guidelines:[
        "The first round of the event will be conducted based on the scripts submitted by the participating teams. Teams that are shortlisted for the final round will be notified via WhatsApp."
      ],
      prelims:[
        "Each team must have 8–10 members. Teams outside this limit won't be allowed.",
        "Teams should arrange their own props and costumes. Hazardous materials are strictly not allowed.",
        "Performances must be completed within 20 minutes, including setup and clearance time.",
        "Exceeding the time limit or breaking the rules will lead to disqualification.",
        "Teams must report on time and follow all instructions given by the organizers.",
        "Foul language, offensive content, or inappropriate themes are strictly prohibited.",
        "Tampering with another team's equipment or props will lead to immediate disqualification—play fair!",
        "All performances must stick to the given theme.",
        "Participants and audience are expected to maintain respect and decorum towards everyone, including the judges and organizers.",
        "Only pre-registered teams can participate; spot registrations will not be accepted. The judges' decision is final."
      ]
    },
    {
      eventName:"MATES MANIA",
      contact:"9894579749",
      prize:"2250",
      description:"Mates Mania is all about fun, laughter, and friendship! Enjoy a series of light games and quirky tasks with your buddies—no stress, just pure chill vibes.",
      guidelines:[
        "Teams can have 2 to 4 members – bring your crew!",
        "A mix of fun games and mini challenges await to keep the smiles rolling.",
        "Stay cool, maintain the vibe, and respect the decorum.",
        "Rounds and surprises will be revealed only on the spot – expect the unexpected!"
      ],
      prelims:[
      ],
      finals:[]
    },
    {
      eventName: "JAM",
      contact:"9778117278",
      prize:"1500",
      description: "",
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
    },
    {
      eventName: "MICROTALE",
      contact:"7540009703",
      prize:"1500",
      description: "Unleash your creativity in our Microtale event—craft tiny tales in few words, where every letter holds mighty magic!",
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
      contact:"7540009703",
      prize:"1500",
      description: "Let your words flow in verse, where imagination meets emotion and every line becomes a heartfelt expression through poetry!!",
      guidelines: [
        "Individual participation.",
        "It is a single-round event.",
        "Topics will be given on the spot.",
        "15 minutes will be provided for composing the poem."
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
      contact:"8248581965",
      prize:"2250",
      description: "Puzzle your mind, crack the code! Brain teasers, riddles, and logic challenges await.",
      guidelines: [
        "2 members per team.",
        "This single-round event will put your magical minds to the test.",
        "Be prepared with your trusty Pen and Quill."
      ],
      prelims: [
        "Duration: 30 minutes.",
        "No magical gadgets or digital aids allowed.",
        "Cheating or dark magic is strictly prohibited.",
        "The jury's decision is final."
      ]
    },
    {
      eventName: "QUIZ",
      contact:"6379190226",
      prize:"2250",
      description: "A fast-paced battle of brains where knowledge is your weapon and wit is your shield. Team up, think sharp, and prove you have what it takes to become the ultimate quiz champion!",
      guidelines: [
        "Each team should consist of 2 members",
        "Two-round event."
      ],
      prelims: [
        "Using mobile phones during the event will lead to immediate disqualification.",
        "Preliminary rounds will be conducted strictly within the given time frame.",
        "Only the top six teams will qualify for the finals."
      ],
      finals: [
        "Final round rules will be announced on the spot."
      ]
    },
    {
      eventName: "SHIPWRECK",
      contact:"9629762581",
      prize:"1500",
      description: "Stranded in the middle of the ocean, your ship is sinking fast. As your character, it's your last chance to convince the captain that the survival should be yours!",
      guidelines: [
        "Solo event packed with drama and entertainment",
        "Characters and scenarios will be revealed on the spot",
        "Top 6 participants from Round 1 qualify for the Grand Showdown (Round 2)",
        "Language must remain clean, creative, and respectful",
        "Decisions of the jury is final and binding"
      ],
      prelims: [
        "You'll be given a quirky, unexpected scenario.",
        "1 minute to think, then it's your time to shine.",
        "Be spontaneous, imaginative, and engaging.",
        "Impress the captain — and you sail into Round 2."
      ],
      finals: [
        "A real or fictional character will be assigned to you.",
        "Become that character — live them, breathe them.",
        "Convince the captain why you  deserve the  life jacket."
      ]
    },
    {
      eventName: "UNO MINUTO",
      contact:"8610480703",
      prize:"1500",
      description: "Got talent but no stage? Unominuto welcomes you all. You can sing, dance, solve a Rubik's cube or show off any skill you're pro at; just own the stage for a minute, and you're good to go!",
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
        "All the rules in the prelims should be followed in finals as well. The performance shall be based on the same skill or it a might be different skill from the one performed in the prelims.",
        "In case of performing with the same skill, the content and the method of delivery should be different. Eg: If one chooses to dance, he/she may exhibit different form of dance in the other round.",
        "If the performance is of a different skill from the prelims, Bonus points are awarded.",
        "If it were to occur a tie, the audience will be given to vote a poll for the best performer."
      ]
    }
    ]
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<EventList events={events} />} />
        <Route path="/event/:eventName" element={<EventDetail events={events} />} />
        <Route path="/campus-ambassador" element={<CampusAmbassador />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;