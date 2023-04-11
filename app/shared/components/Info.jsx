import { bankingOptions } from "./data";

export default function Info() {
  return (
    <section className="bg-slate-100 h-full w-full">
      <div className="px-6 md:ml-36 pt-20 md:w-1/3">
        <h2 className="text-4xl font-normal text-slate-900 text-center md:text-left mb-4">Why choose Easybank?</h2>
        <p className="text-center md:text-left text-zinc-400">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-around px-6 md:mx-36 md:my-20">
        {bankingOptions.map((option) => (
          <article key={option.title} className="my-6 md:w-3/12 md:px-10">
            <img className="mb-6 h-20 w-20 md:h-32 md:w-32 mx-auto" src={option.icon} alt="" />
            <h4 className="mb-2 text-lg font-medium text-gray-900 text-center md:text-left">{option.title}</h4>
            <p className="text-sm text-gray-500 text-center md:text-left">{option.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}