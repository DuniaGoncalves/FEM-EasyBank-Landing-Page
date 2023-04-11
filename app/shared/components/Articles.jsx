import { blog } from "./data"

export default function Articles() {
  return (
    <section className="bg-slate-50">
      <h2 className="text-4xl font-normal text-slate-900 text-center md:text-left mb-10 px-6 md:ml-36 pt-20 md:w-1/3">
        Latest Articles
      </h2>
      <div className="flex flex-col md:flex-row mx-4 my-10  md:my-20 md:mx-36">
        {blog.map((post) => (
          <article key={post.title} className="w-full lg:w-5/12 px-4 mb-8">
            <div className="relative h-56 lg:h-72">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white pb-6 pt-2 px-4 lg:px-10">
              <span className="mb-2 text-xs text-gray-500 block">{post.author}</span>
              <h5 className="mb-2 text-sm font-medium text-gray-900">{post.title}</h5>
              <p className="text-xs text-gray-500">{post.content}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}