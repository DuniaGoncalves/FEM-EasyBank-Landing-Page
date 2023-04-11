export default function NavMobile() {
  return (
    <nav className="flex flex-col items-center justify-center w-full h-full space-y-4">
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
        className="block py-2 px-4 text-zinc-400 font-medium hover:text-slate-600"
        onClick={() => setIsNavOpen(false)}
      >
        {title}
      </a>
    ))}
    </nav>
  )
};