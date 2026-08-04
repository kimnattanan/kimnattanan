import Contact from "@/components/Contact";
import DSA from "@/components/dsa/DSA";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';

function LinkContainer() {
  return (
    <div className="flex justify-center lg:justify-start flex-wrap items-center gap-y-2">
      <Link
        className="content-center hover:opacity-50 sm:text-2xl"
        href={"/files/resume_nattanan.pdf"}
        download="resume_nattanan.pdf"
      >
        <div className='font-black w-fit border border-dashed rounded-lg px-4 sm:px-8 sm:py-1 sm:border-2 mx-2'>
          Resume
          <FaFilePdf className='inline-block ml-2 mb-1'/>
        </div>
      </Link>
      <div className="flex">
        <Link
          className="mx-2 content-center hover:opacity-50"
          href='https://github.com/KimNattanan'
          target='_blank'
          id='github-link'
        >
          <div className='relative w-6 aspect-square sm:w-8'>
            <SiGithub size={'100%'}/>
          </div>
        </Link>
        <Link
          className="mx-2 content-center hover:opacity-50"
          href='https://www.linkedin.com/in/kimnattanan/'
          target='_blank'
          id='linkedin-link'
        >
          <div className='relative w-6 aspect-square sm:w-8 text-cyan-600'>
            <FaLinkedin size={'100%'}/>
          </div>
        </Link>
        <Link
          className="mx-2 content-center hover:opacity-50"
          href='https://www.facebook.com/nattanan.jeungtanasirikul.1'
          target='_blank'
          id='fb-link'
        >
          <div className='relative w-6 aspect-square sm:w-8 text-blue1'>
            <FaFacebook size={'100%'}/>
          </div>
        </Link>
        <Link
          className="mx-2 content-center hover:opacity-50"
          href='https://www.instagram.com/kimnattanan/'
          target='_blank'
          id='ig-link'
        >
          <div className='relative w-6 aspect-square sm:w-8 text-red1'>
            <FaInstagram size={'100%'}/>
          </div>
        </Link>
      </div>
    </div>
  );
}

function HeroImage({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden shrink-0 ${className ?? ''}`}>
      <Image
        alt="profile"
        src="/img/prof2.jpg"
        fill
        className="object-cover object-top"
        priority
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="lg:mx-10 xl:mx-20 px-4 sm:px-6">
        <div className="lg:flex lg:items-center lg:gap-12 xl:gap-20 lg:min-h-[calc(100vh-5rem)]">
          <div className="grow flex flex-col justify-center lg:py-16 pt-6 pb-10 lg:pr-6 xl:pr-12">
            <HeroImage className="lg:hidden mx-auto mb-8 w-44 sm:w-52 aspect-3/4 rounded-4xl sm:rounded-[2.5rem] shadow-lg shadow-black/10" />

            <h1 className="text-[1.75rem] sm:text-4xl xl:text-5xl font-black text-center lg:text-left text-glow leading-tight">
              Nattanan Jeungtanasirikul
            </h1>
            <p className="mt-2 text-sm sm:text-base lg:text-xl font-bold text-blue1 text-center lg:text-left text-glow">
              Computer Engineering student at{' '}
              <span className="text-nowrap">Chulalongkorn University</span>
            </p>

            <p className="mt-8 sm:mt-10 font-black text-2xl sm:text-3xl text-center lg:text-left text-glow">
              {`I'm Kim`}
            </p>
            <div className="mt-4 space-y-2 text-sm sm:text-lg text-center lg:text-left text-glow max-w-md mx-auto lg:mx-0">
              <p>Interest in building reliable, efficient software.</p>
              <p>Love practicing competitive programming.</p>
            </div>

            <div className="mt-10 sm:mt-12">
              <LinkContainer />
            </div>
          </div>

          <HeroImage className="hidden lg:block aspect-9/16 h-[min(calc(100vh-5rem),820px)] rounded-[4rem] shadow-xl shadow-black/10" />
        </div>
      </section>
      <Work/>
      <Projects/>
      <DSA/>
      <Contact/>
      <div className="w-fit mx-auto text-center mb-12 mt-20">
        <p>© KimNattanan</p>
      </div>
    </>
  );
}
