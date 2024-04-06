import { useEffect } from 'react';
import weBest from '../../assets/weBest.svg'

const Vision = () => {
  useEffect(() => {
    const animateWords = () => {
      const words = document.querySelectorAll('.glow');
      let currentIndex = 0;
      const highlightWord = () => {
        words.forEach(w => w.classList.remove('text-green-300', 'font-bold', 'text-3xl'));
        words[currentIndex].classList.add('text-green-300', 'font-bold', 'text-3xl');
        currentIndex = (currentIndex + 1) % words.length;
      };
      highlightWord();
      const intervalId = setInterval(highlightWord, 3000); 
      return () => clearInterval(intervalId);
    };
    animateWords();
  }, []); 

  return (
    <div className="min-h-screen relative pt-28 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <p className="text-9xl font-bold text-green-100 -z-10 absolute">
          Purpose of
        </p>
        <p className="pt-20 text-6xl font-bold z-20 hover-stroke">HRHive</p>
        <div className="grid grid-cols-2 gap-20 mt-20">
          <p className="text-3xl">
            HRHive is a comprehensive platform that can <span className='glow'>revolutionize any
            business.</span> It is the most <span className="glow">effective and time-saving</span> tool for <span className='glow'>human
            resource management</span>, offering <span className="glow">unparalleled efficiency and {' '}
            productivity</span>. With HRHive, businesses can <span className="glow">streamline HR
            processes</span>, optimize resource allocation, and <span className="glow">enhance overall
            organizational performance</span>.
          </p>
          <p className="text-3xl">
            Our platform empowers HR professionals with <span className="glow">advanced features and
            intuitive interfaces,</span> enabling them to <span className="glow">effortlessly navigate complex
            HR tasks</span> and <span className="glow">make data-driven decisions</span>. Experience the
            transformative power of HRHive and<span className="glow"> unlock the full potential of your
            workforce.</span>
          </p>
        </div>
        {/* main container */}
        <div className='flex justify-between mt-20'>
          <div>
            <p className='text-5xl font-extrabold hover-stroke'>10+</p>
            <p>Multinational company</p>
          </div>
          <div>
            <p className='text-5xl font-extrabold hover-stroke'>1200+</p>
            <p>Small Company</p>
          </div>
          <div>
            <p className='text-5xl font-extrabold hover-stroke'>9.2m+</p>
            <p>Worker Being Managed</p>
          </div>
          <div>
            <p className='text-5xl font-extrabold hover-stroke'>17.2m+</p>
            <p>Excruciating Hours Saved</p>
          </div>
         
        </div>
      </div>
      <div className='absolute top-20 -right-32 animate-spin-slow'>
        <img src={weBest} alt="text-circle" className='w-[300px]'/>
      </div>
    </div>
  );
};

export default Vision;
