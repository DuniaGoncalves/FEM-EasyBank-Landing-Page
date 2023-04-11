import { useState } from "react";
import Button from "./Button";

export default function NavMobile() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className={`${
      isNavOpen ? "flex" : "hidden"
    } md:flex flex-wrap justify-center space-x-4 md:space-x-0 md:justify-end md:flex-1`}>
      {[
        ['Home', '/'],
        ['About', '/about'],
        ['Contact', '/contact'],
        ['Blog', '/blog'],
        ['Careers', '/careers'],
      ].map(([title, url]) => (
        <a
          key={title}
          href={url}
          className="block py-2 px-4 text-zinc-400 font-medium hover:text-slate-600 hover:underline hover:underline-offset-8 hover:decoration-green-500"
          onClick={() => setIsNavOpen(false)}
        >
          {title}
        </a>
      ))}
      <Button />
    </nav>
  )
};