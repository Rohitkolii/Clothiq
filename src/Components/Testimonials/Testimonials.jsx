import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Fashion Blogger, Delhi",
    image: "https://i.pravatar.cc/50?img=11",
    message: "Absolutely love the fabric quality and trendy designs from Clothiqs. Perfect for Delhi’s ever-changing fashion scene!"
  },
  {
    name: "Ravi Verma",
    role: "College Student, Mumbai",
    image: "https://i.pravatar.cc/50?img=12",
    message: "Stylish yet affordable! Got compliments from friends on my new kurta. Clothiqs never disappoints."
  },
  {
    name: "Priya Desai",
    role: "Software Engineer, Pune",
    image: "https://i.pravatar.cc/50?img=13",
    message: "Loved the quick delivery and packaging. The cotton top I bought is super breathable – ideal for Pune’s weather."
  },
  {
    name: "Aman Joshi",
    role: "Entrepreneur, Bengaluru",
    image: "https://i.pravatar.cc/50?img=14",
    message: "From casual to festive, Clothiqs has a great range. Their Indo-western wear fits perfectly and looks classy."
  },
  {
    name: "Sneha Reddy",
    role: "Fashion Enthusiast, Hyderabad",
    image: "https://i.pravatar.cc/50?img=15",
    message: "I’m obsessed with their saree collection. Modern prints with traditional elegance—love shopping here!"
  },
  {
    name: "Meera Iyer",
    role: "Marketing Executive, Chandigarh",
    image: "https://i.pravatar.cc/50?img=16",
    message: "Comfortable chinos and trendy shirts at great prices. Clothiqs is now my go-to brand for workwear."
  },
  {
    name: "Jatin Mehra",
    role: "Interior Designer, Chennai",
    image: "https://i.pravatar.cc/50?img=17",
    message: "Love the earthy tones and sustainable fabrics. Great to see an Indian brand supporting eco-fashion!"
  }
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
