import React from 'react';
import EventCard from './EventCard';
import './EventList.css';

// Sample data for the event cards
const events = [
  { id: 1, title: 'Adzap', description: 'Pitch the most outrageous product ideas imaginable! Say, invisible socks or a smartphone that only works when you\'re asleep. Get creative, get funny, and keep the audience in stitches.', contact: '9191919101', prize: '2000' },
  { id: 2, title: 'Shipwreck' ,description: 'Stranded in the middle of the ocean, your ship is sinking fast. As your character, it\'s your last chance to convince the captain that the survival should be yours!', contact: '9191919101', prize: '2000' },
  { id: 3, title: 'Poem', description: 'Let your words flow in verse, where imagination meets emotion and every line becomes a heartfelt expression through poetry!!', contact: '9191919101', prize: '2000' },
  { id: 4, title: 'Microtale', description: 'Unleash your creativity in our Microtale event—craft tiny tales in few words, where every letter holds mighty magic!', contact: '9191919101', prize: '2000' },
  { id: 5, title: 'Mates Mania', description: 'Mates Mania is all about fun, laughter, and friendship! Enjoy a series of light games and quirky tasks with your buddies—no stress, just pure chill vibes.', contact: '9191919101', prize: '2000' },
  { id: 6, title: 'Debate', description: 'Where wits win wars, are you wizards ready to leave your opposers with verbally intellectual scars? Enter debate!', contact: '9191919101', prize: '2000' },
  { id: 7, title: 'Uno Minuto', description: 'Got talent but no stage? Unominuto welcomes you all. You can sing, dance, solve a Rubik\'s cube or show off any skill you\'re pro at; just own the stage for a minute, and you\'re good to go!', contact: '9191919101', prize: '2000' },
  { id: 8, title: 'Quiz', description: 'A fast-paced battle of brains where knowledge is your weapon and wit is your shield. Team up, think sharp, and prove you have what it takes to become the ultimate quiz champion!', contact: '9191919101', prize: '2000' }


];

const EventList = () => {
  return (
    <div className="app-container">
      <div className="event-list">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;