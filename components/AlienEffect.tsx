import { TypeAnimation } from 'react-type-animation';

const AlienEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Computer Scientist',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web developer',
        1000,
        'Programmer',
        1000,
        'Web Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default AlienEffect;