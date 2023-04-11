import { Link } from "@remix-run/react";
import Button from "./Button";
import { social } from "./data";

export default function Footer() {
  return (
    <footer className="bg-slate-300">
      <section className="px-4 py-8 mx-auto max-w-screen-xl lg:px-6 lg:flex lg:justify-between">
        <div className="mb-8 lg:mb-0">
          <img src="../../images/logo.svg" alt="company logo" className="w-36 h-auto mb-6 m-auto" />
          <nav className="flex justify-center lg:justify-start">
            {social.map((icon) => (
              <Link to={"/"} prefetch="none" key={icon.image}>
                <img className="mr-4 lg:mr-6" src={icon.image} alt={icon.imageAlt} />
              </Link>
            ))}
          </nav>
        </div>
        <nav className="block md:flex">
          <div className="flex flex-col text-center">
            {[
              ['About Us', '/'],
              ['Contact', '/contact'],
              ['Blog', '/blog'],
            ].map(([title, url]) => (
              <a href={url} key={title} className="px-2 py-2 text-white font-medium hover:text-green-500">{title}</a>
            ))}
          </div>
          <div className="flex flex-col text-center md:ml-8">
            {[
              ['Careers', '/careers'],
              ['Support', '/support'],
              ['Privacy Policy', '/privacy'],
            ].map(([title, url]) => (
              <a href={url} key={title} className="px-2 py-2 text-white font-medium hover:text-green-500">{title}</a>
            ))}
          </div>
        </nav>
        <div className="text-center mt-8 lg:mt-0">
          <Button />
          <p className="mt-6 text-center lg:text-left text-zinc-600 lg:mt-8">© Easybank. All Rights Reserved</p>
        </div>
      </section>
      <div className="px-4 py-8 text-center text-zinc-600 lg:py-4">
        Challenge by <a className="hover:text-white" href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
        Coded by <a className="hover:text-white" href="https://github.com/DuniaGoncalves" rel="noopener noreferrer">Dunia Goncalves</a>.
      </div>
    </footer>
  );
}