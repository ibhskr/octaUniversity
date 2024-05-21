import React from "react";
import admission from "../assets/admission.png";
import pay from "../assets/hand.png";
import login from "../assets/profile.png";
import branch from "../assets/structure.png";

function Home() {
  return (
    <div className=" h-fit block">
      <div className="  top-[500px] w-auto relative bg-white px-2 sm:px-20">
        {/* Quick Access */}
        <div>
          <div className="  flex justify-center -top-10 relative ">
            <div className="w-[100px] h-[100px] bg-white mx-2 sm:mx-10 flex flex-col justify-center items-center rounded-md shadow-md shadow-slate-300 hover:bg-red-200 hover:cursor-pointer duration-500">
              <img className="w-[50px]" src={admission} alt="" />
              <p className=" text-sm">Admission</p>
            </div>
            <div className="w-[100px] h-[100px] bg-white mx-2 sm:mx-10 flex flex-col justify-center items-center rounded-md shadow-md shadow-slate-300 hover:bg-green-200 hover:cursor-pointer duration-500">
              <img className="w-[50px]" src={pay} alt="" />
              <p className=" text-sm">Pay fees</p>
            </div>
            <div className="w-[100px] h-[100px] bg-white mx-2 sm:mx-10 flex flex-col justify-center items-center rounded-md shadow-md shadow-slate-300 hover:bg-yellow-200 hover:cursor-pointer duration-500">
              <img className="w-[50px]" src={branch} alt="" />
              <p className=" text-sm">Courses</p>
            </div>
            <div className="w-[100px] h-[100px] bg-white mx-2 sm:mx-10 flex flex-col justify-center items-center rounded-md shadow-md shadow-slate-300 hover:bg-indigo-200 hover:cursor-pointer duration-500">
              <img className="w-[50px]" src={login} alt="" />
              <p className=" text-sm">Login</p>
            </div>
          </div>
        </div>
        {/*welcome note*/}
        <div className=" flex  items-center">
          <div className=" hidden sm:block shadow-md ">
            <img
              className="w-full h-full object-cover rounded-xl "
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="ml-10">
            <h1 className=" font-bold text-xl underline">
              Welcome Note for You
            </h1>
            <p className="mt-2 ">
              Welcome to Octa University – where innovation meets excellence in
              engineering education. With cutting-edge facilities, experienced
              faculty, and a commitment to hands-on learning, we empower
              students to thrive in the rapidly evolving world of engineering.
              Join us and embark on a journey of discovery and achievement at
              Octa University.
            </p>
          </div>
        </div>
        {/*news and notice*/}
        <div className="mt-10">
          <div className="flex flex-col sm:flex-row ">
            <div className="sm:w-1/2 m-4 flex flex-col items-center  border-indigo-600 border-dashed border-2 shadow-2xl shadow-indigo-400">
              <h1 className="font-bold text-xl text-center border-b-2 border-indigo-400 ">
                Notice
              </h1>
              <ul>
                <li className=" bg-gray-200 p-2 m-2 text-sm">
                  <p>EVEN SEMESTER BACKLOG EXAMINATION ROUTINE 2023-24</p>
                  <p className=" text-yellow-600">03-05-2024</p>
                </li>
                <li className=" bg-gray-200 p-2 m-2 text-sm">
                  <p>Notice for semester fees collection</p>
                  <p className=" text-yellow-600">01-05-2024</p>
                </li>
              </ul>
              <button className=" bg-indigo-500 rounded-lg w-fit px-4 mb-4">
                More
              </button>
            </div>
            <div className="sm:w-1/2  m-4 flex flex-col items-center   border-green-600 border-dashed border-2 shadow-2xl shadow-green-600">
              <h1 className="font-bold text-xl text-center border-b-2 border-green-400 ">
                News and Events
              </h1>
              <ul className=" w-full p-2 ">
                <li className=" flex  bg-gray-200 my-2   text-sm w-full">
                  <div className=" w-[100px]">
                    <img
                      className="w-full h-full object-cover"
                      src="https://plus.unsplash.com/premium_photo-1661670160319-f54b8d711eeb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div className=" text-sm ml-2">
                    <p className="font-semibold">Blood donation camp</p>
                    <p>Organize by: <span className=" text-blue-600 font-semibold">Octa Faundation</span></p>
                    <p>Event Date: <span className=" bg-green-300 font-semibold">15/05/2024</span></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*OUR COURSES */}
        <div className="w-full">
          <h1 className="text-center font-bold text-2xl pt-20">
            Courses we Offer
          </h1>
          <div className="my-4 w-full overflow-x-auto">
            <div className="flex">
              <div className="w-64 h-[200px] mx-4 rounded-lg overflow-hidden shadow-md flex-shrink-0 bg-green-200">
                <img
                  className="w-full h-[80%] object-cover"
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <p className="text-center">Computer Science</p>
              </div>
              <div className="w-64 h-[200px] mx-4 rounded-lg overflow-hidden shadow-md flex-shrink-0 bg-indigo-200">
                <img
                  className="w-full h-[80%] object-cover"
                  src="https://images.unsplash.com/photo-1573167101669-476636b96cea?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <p className="text-center">Information Technology</p>
              </div>
              <div className="w-64 h-[200px] mx-4 rounded-lg overflow-hidden shadow-md flex-shrink-0 bg-yellow-200">
                <img
                  className="w-full h-[80%] object-cover"
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <p className="text-center">CS with AI ML</p>
              </div>
              <div className="w-64 h-[200px] mx-4 rounded-lg overflow-hidden shadow-md flex-shrink-0 bg-orange-200">
                <img
                  className="w-full h-[80%] object-cover"
                  src="https://plus.unsplash.com/premium_photo-1682126325927-0e6399d5d170?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <p className="text-center">CS with Data Science</p>
              </div>
              <div className="w-64 h-[200px] mx-4 rounded-lg overflow-hidden shadow-md flex-shrink-0 bg-purple-200">
                <img
                  className="w-full h-[80%] object-cover"
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <p className="text-center">CS with Big Data</p>
              </div>
              {/* Repeat the above div for other courses */}
            </div>
          </div>
        </div>
        {/**OUR OFFERINGS */}

        {/*our student work at */}
        <div className="w-full py-10">
          <div>
            <h1 className=" text-center font-bold text-xl mb-4">
              Our students work for
            </h1>
            <div className=" flex flex-wrap">
              <img
                className="h-[15px] sm:h-[30px] m-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/330px-Google_2015_logo.svg.png"
                alt=""
              />
              <img
                className="h-[15px] sm:h-[30px] m-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/300px-Amazon_logo.svg.png"
                alt=""
              />
              <img
                className="h-[15px] sm:h-[40px] m-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/375px-Tata_Consultancy_Services_Logo.svg.png"
                alt=""
              />
              <img
                className="h-[15px] sm:h-[20px] m-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samsung_wordmark.svg/360px-Samsung_wordmark.svg.png"
                alt=""
              />
              <img
                className="h-[15px] sm:h-[40px] m-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Bharti_Airtel_Logo.svg/800px-Bharti_Airtel_Logo.svg.png"
                alt=""
              />
              <img
                className="h-[15px] sm:h-[40px] m-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/800px-Reliance_Jio_Logo.svg.png"
                alt=""
              />
              <img
                className="h-[15px] sm:h-[20px] m-4"
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
                alt=""
              />
              <img
                className="h-[15px] sm:h-[30px] m-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1920px-Infosys_logo.svg.png"
                alt=""
              />
              <img
                className="h-[15px] sm:h-[40px] m-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/ZOHO_logo_2023.svg/1920px-ZOHO_logo_2023.svg.png"
                alt=""
              />
              <img
                className="h-[15px] sm:h-[30px] m-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/1920px-Adobe_Corporate_logo.svg.png"
                alt=""
              />
              <img
                className="h-[15px] sm:h-[20px] m-4"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Flipkart_logo.svg/1920px-Flipkart_logo.svg.png"
                alt=""
              />
              <img
                className="h-[15px] sm:h-[20px] m-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/1920px-PhonePe_Logo.svg.png"
                alt=""
              />
              <img
                className="h-[15px] sm:h-[20px] m-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Zerodha_logo.svg/1920px-Zerodha_logo.svg.png"
                alt=""
              />
              <img
                className="h-[15px] sm:h-[20px] m-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/State_Bank_of_India.svg/1920px-State_Bank_of_India.svg.png"
                alt=""
              />
              <img
                className="h-[15px] sm:h-[20px] m-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1280px-Mastercard_2019_logo.svg.png"
                alt=""
              />
              <img
                className="h-[15px] sm:h-[20px] m-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1920px-Uber_logo_2018.svg.png"
                alt=""
              />
              <img
                className="h-[15px] sm:h-[20px] m-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1920px-Oracle_logo.svg.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/*footer */}
        
      </div>
    </div>
  );
}

export default Home;
