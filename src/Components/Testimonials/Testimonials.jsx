import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Alfonso Vutrows",
    role: "Scholar, University of Vancouver",
    image: "https://i.pravatar.cc/50?img=1",
    message: "Have a great time talking with Menghan. I’ve learned a lot about UX Design process and gained feedback about my portfolio."
  },
  {
    name: "Miracle Saris",
    role: "Enrollee, University of Montreal",
    image: "https://i.pravatar.cc/50?img=2",
    message: "I had a fantastic conversation with Alex! I learned a lot about the user experience design process and received some..."
  },
  {
    name: "Chance Saris",
    role: "Pupil, University of Ottawa",
    image: "https://i.pravatar.cc/50?img=3",
    message: "I had an amazing conversation with Alex! Gained valuable insights into the UX design process and received feedback on my portfolio."
  },
  {
    name: "Maren Rhiel Madsen",
    role: "Participant, University of Victoria",
    image: "https://i.pravatar.cc/50?img=4",
    message: "I had a fantastic conversation with Alex! I learned a lot about the user experience design journey and received..."
  },
  {
    name: "Philip Starton",
    role: "Learner, University of Calgary",
    image: "https://i.pravatar.cc/50?img=5",
    message: "I had an amazing conversation with Alex! Gained valuable insights into the UX Design process and received constructive feedback."
  },
  {
    name: "Tiara Bergson",
    role: "Attendee, University of Quebec",
    image: "https://i.pravatar.cc/50?img=6",
    message: "Just had a super fun chat with Menghan! Learned a ton about the UX design process and got some awesome feedback!"
  },
  {
    name: "Avery Juno",
    role: "Intern, University of Alberta",
    image: "https://i.pravatar.cc/50?img=7",
    message: "Great experience learning UX through the discussion. It really helped sharpen my approach to user empathy."
  },
];

const Testimonials = () => {
  const firstRow = testimonials.slice(0, 4);
  const secondRow = testimonials.slice(4);

  return (
    <div className='testimonial'>
    <div className="testimonial-wrapper">
        <h1><span>Dressed to Impress</span> * See What They Say</h1>
      <div className="testimonial-grid-row">
        {firstRow.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="message">"{item.message}"</p>
            <div className="user">
              <img src={item.image} alt={item.name} />
              <div>
                <strong>{item.name}</strong>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-grid2">
        {secondRow.map((item, index) => (
          <div className="testimonial-card full" key={index}>
            <p className="message">"{item.message}"</p>
            <div className="user">
              <img src={item.image} alt={item.name} />
              <div>
                <strong>{item.name}</strong>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
