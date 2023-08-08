// links
import Link from 'next/link';

// icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
  
} from 'react-icons/ri';
import {
  SiGmail
} from 'react-icons/si';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.facebook.com/abdo.karam19/'} className='hover:text-accent transition-all duration-300' target='_blank'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.instagram.com/karam_768/'} className='hover:text-accent transition-all duration-300' target='_blank'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/abdelrahman-salam-08a202236/'} className='hover:text-accent transition-all duration-300' target='_blank'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://github.com/Abdelrahmansalam'} className='hover:text-accent transition-all duration-300' target='_blank'>
        <RiGithubLine />
      </Link>
      <Link href={'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=rhman.karam@gmail.com'} className='hover:text-accent transition-all duration-300' target='_blank'>
        <SiGmail />
      </Link>

    </div>
  );
};

export default Socials;
