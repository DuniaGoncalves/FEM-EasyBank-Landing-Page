import Button from "./Button";

// export default function Hero() {
//   return (
//     <section className="hero flex h-96 w-full bg-auto bg-no-repeat bg-[bottom_-10rem_right_-10rem] bg-slate-50">
//       <div className="m-auto w-1/3 px-8">
//         <h1 className="text-6xl font-medium text-slate-900 text-left mb-4">Next generation digital banking</h1>
//         <p className="mb-4 text-zinc-400">
//           Take your financial life online. Your Easybank account will be a one-stop-shop 
//           for spending, saving, budgeting, investing, and much more.
//         </p>
//         <Button />
//       </div>
//       <div className="w-1/2 ">
//         <img className="pop-out" src="../../images/image-mockups.png" alt="" />
//       </div>
//     </section>
//   );
// }


export default function Hero() {
  return (
    <section className="hero flex flex-col flex-col-reverse md:flex-row h-auto w-full bg-slate-50">
      <div className="mt-96 mb-20 md:m-20 md:w-1/3 px-4 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-medium text-slate-900 mb-4">Next generation digital banking</h1>
        <p className="mb-6 text-zinc-400">
          Take your financial life online. Your Easybank account will be a one-stop-shop 
          for spending, saving, budgeting, investing, and much more.
        </p>
        <Button />
      </div>
      <div className="pop-out w-full md:w-1/2 flex justify-center items-center">
        <img className="mx-auto w-80 md:w-9/12 md:mx-0" src="../../images/image-mockups.png" alt="" />
      </div>
    </section>
  );
}