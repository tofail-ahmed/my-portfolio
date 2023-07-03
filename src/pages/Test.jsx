import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Test = () => {
      const [typedText, setTypedText] = useState('');

      const handleType = (count) => {
            // access word count number
            console.log(count);
      };

      const handleDone = () => {
            console.log('Done after 5 loops!');
      };

      const handleTyping = (text) => {
            setTypedText(text);
      };

      return (
            <div className='App'>
                  <h1 className='text-4xl font-bold text-green-400 my-24 '>
                        Hi, I am <span className='text-orange-600'>Tofail Ahmed</span> <br />{' '}
                        <span className='text-xl text-teal-700' >
                              {/* Style will be inherited from the parent element */}
                              <Typewriter
                                    words={['I’m a MERN Stack Web Developer from Bangladesh.',
                                          "I use HTML, CSS, Javascript, ReacJS, NodeJS, MongoDB and Move to create high-end interactive experiences.",
                                          "I am currently working from home.",
                                          "Feel free to ask anything, I am here to help you."

                                    ]}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={100}
                                    delaySpeed={800}
                                    onLoopDone={handleDone}
                                    onType={handleType}
                                    onTyping={handleTyping}
                              />
                              {typedText}
                        </span>
                  </h1>
            </div>
      );
};

export default Test;
