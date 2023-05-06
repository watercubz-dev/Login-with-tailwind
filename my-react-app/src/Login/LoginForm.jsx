import React from "react";

function LoginForm() {
  return (
     <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
        <h1 className="text-5xl font-semibold">welcome back</h1>
        <p  className="font-medium textlg text-gray-500 mt-4"> welcome back please your details</p>
        <div className="mt-8">
          <div>
               <label className="text-lg font-medium">Email</label>
               <input 
                   className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" 
                   placeholder="Enter your email"
                   type="email"
                />
          </div>
          <div>
               <label className="text-lg font-medium">Password</label>
               <input 
                   className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" 
                   placeholder="Enter your password"
                   type="password"
                />
          </div>
            <div className="mt-8 flex justify-between items-center">
                <div>
                   <input 
                      type="checkbox"
                      id="remember"
                   />
                   <label form="remeber" className="ml-2 font-medium text-base">Remember me</label>
                </div>
                  <button className="font-medium text-base text-violet-500">Forgot password</button>
            </div>
             <div className="mt-8 flex flex-col gap-y-4">
                  <button className="active:scale-[.98] active:duration-75 transition-all hover:sclale-[1.01] ease-in-out py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">Sing in</button>
                  <button className="active:scale-[.98] active:duration-75 transition-all hover:sclale-[1.01] ease-in-out py-3 rounded-xl  bg-gray-500 text-white">Sing in whith Google</button>
             </div>
        </div>
     </div>
  );
}

export default LoginForm;
