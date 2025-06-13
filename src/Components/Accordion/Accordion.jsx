import React, { useState } from 'react';
import './Accordion.css';

const accordionData = [
  {
    title: "What is Clothiqs' return policy?",
    content: "We offer a hassle-free 7-day return policy on all unworn and unwashed items with original tags. Simply initiate a return from your account dashboard or contact our support team."
  },
  {
    title: "How long does shipping take?",
    content: "Standard delivery usually takes 3-7 business days depending on your location. We also offer express shipping options at checkout for faster delivery."
  },
  {
    title: "Do you offer international shipping?",
    content: "Yes, Clothiqs ships internationally. Shipping times and charges vary based on the destination. You’ll see estimated delivery times at checkout."
  },
  {
    title: "How do I find the right size?",
    content: "Each product page includes a detailed size chart. You can also refer to our general size guide or reach out to our customer care team for personalized help."
  },
  {
    title: "Can I cancel or modify my order after placing it?",
    content: "Orders can be canceled or modified within 1 hour of placing them. After that, we start processing your order to ensure timely delivery."
  }
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='usercon'>
        <h1 className='userh'>Frequently Asked Quetions</h1>
    <div className='userconin'>
        <div className="accordion-container">
      {accordionData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
          </div>
          {activeIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>


    <div data-aos="zoom-in-left" className="col2">

            <form>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="name">
                                Name :
                                <input type="text" 
                                placeholder='Enter your name'
                                name="user_name"
                                />
                            </label>
                        </div>
                        <div className="col">
                            <label htmlFor="email">
                                Email :
                                <input type="email" 
                                placeholder='example@gmail.com'
                                name="user_email"
                                />
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="phone">
                                Contact :
                                <input type="tel" 
                                placeholder='Enter your Contact no.'
                                 name="user_phone"
                                />
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="message">
                                Message :
                                <textarea 
                                name="message" 
                                id="message" 
                                // cols="30" 
                                rows="4"
                                placeholder='Enter your message or query'
                                ></textarea>
                            </label>
                        </div>
                    </div>

                    <button>Submit</button>
                </form>
            </div>
    </div>
    </div>
  );
};

export default Accordion;
