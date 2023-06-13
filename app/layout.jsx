
import "@styles/globals.css";

import NavBar from "@components/NavBar";
import LeftSide from "@components/LeftSide";
import Inbox from "@components/Inbox";
// import Nav from "@components/Nav";
 import Provider from "@components/Provider";

export const metadata = {
  title: "hrbuddy",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  
  <html lang="en">
    <body>
      <Provider>
      {/* <div className='main'> */}
      <div className="gradient"/>
      {/* </div> */}

      <main className="flex  max-w-7xl mx-auto  sm:px-16 px-6" >
        {/* <NavBar /> */}
        <LeftSide />

        <div className="sm:px-6 px-3  w-full">
          {/* <LeftSide /> */}
          <NavBar />
          <div className="w-full">
          {/* Inbox */}
          <Inbox />
          {/* Emails */}
          {/* <Test /> */}
          {/* Footer */}
          {/* <Footer /> */}
        </div>
          {children}
        </div>
      </main>
      </Provider>
    </body>
  </html>
);




// const RootLayout = ({ children }) => {
//   const [selectedButtonTitle, setSelectedButtonTitle] = useState("");
//   const temp= {title: "my title"};

//   const handleButtonSelect = (title) => {
//     setSelectedButtonTitle(title);
//   };

//   return (
//     <html lang="en">
//       <body>
//         <Provider>
//           <div className="gradient" />
//           <main className="flex max-w-7xl mx-auto sm:px-16 px-6">
//             <LeftSide onButtonSelect={handleButtonSelect} />
//             <div className="sm:px-6 px-3 w-full">
//               <NavBar selectedButtonTitle={temp} />
//               <div className="w-full">
//                 <Inbox />
//               </div>
//               {children}
//             </div>
//           </main>
//         </Provider>
//       </body>
//     </html>
//   );
// };

export default RootLayout;
