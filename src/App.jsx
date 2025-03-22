import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./page/Home/Home";
import NizamAldirasih from "./page/NizamAldirasih/NizamAldirasih";
import Almaehad from "./page/Almaehad/Almaehad";
import ExamPage from "./page/ExamPage/ExamPage";
import LmsPage from "./page/LmsPage/LmsPage";
import EmailPage from "./page/EmailPage/EmailPage";
import LibraryPage from "./page/LibraryPage/LibraryPage";
import AlaqisamAleilamiih from "./page/AlaqisamAleilamiih/AlaqisamAleilamiih";
import AlhaykalAltanzimiu from "./page/AlhaykalAltanzimiu/AlhaykalAltanzimiu";
import ContactUs from "./page/ContactUs/ContactUs";
import WahdatAljawdih from "./page/WahdatAljawdih/WahdatAljawdih";
import WahdatAlazimat from "./page/WahdatAlazimat/WahdatAlazimat";
import WahdatAltadrib from "./page/WahdatAltadrib/WahdatAltadrib";
import WahdatAlqias from "./page/WahdatAlqias/WahdatAlqias";
import WahdatAlkhiriyjin from "./page/WahdatAlkhiriyjin/WahdatAlkhiriyjin";
import AljadawilAldirasia from "./page/AljadawilAldirasia/AljadawilAldirasia";
import AljadawilAlaimtihanat from "./page/AljadawilAlaimtihanat/AljadawilAlaimtihanat";
import NatayijAlaimtihanat from "./page/NatayijAlaimtihanat/NatayijAlaimtihanat";
import AllNews from "./page/AllNews/AllNews";
import NewsDetails from "./page/NewsDetails/NewsDetails";
import Alianshita from "./page/Alianshita/Alianshita";

function App() {
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/", element: <Home /> },
        { path: "nizamAldirasih", element: <NizamAldirasih /> },
        { path: "almaehad", element: <Almaehad /> },
        { path: "alaqisamAleilamiih", element: <AlaqisamAleilamiih /> },
        { path: "alhaykalAltanzimiu", element: <AlhaykalAltanzimiu /> },
        { path: "alianshita", element: <Alianshita /> },
        { path: "contactUs", element: <ContactUs /> },
        { path: "wahdatAljawdih", element: <WahdatAljawdih /> },
        { path: "wahdatAlazimat", element: <WahdatAlazimat /> },
        { path: "wahdatAltadrib", element: <WahdatAltadrib /> },
        { path: "wahdatAlqias", element: <WahdatAlqias /> },
        { path: "wahdatAlkhiriyjin", element: <WahdatAlkhiriyjin /> },
        { path: "aljadawilAldirasia", element: <AljadawilAldirasia /> },
        { path: "aljadawilAlaimtihanat", element: <AljadawilAlaimtihanat /> },
        { path: "natayijAlaimtihanat", element: <NatayijAlaimtihanat /> },
        { path: "examPage", element: <ExamPage /> },
        { path: "allNews", element: <AllNews /> },
        { path: "newsDetails", element: <NewsDetails /> },
        { path: "lmsPage", element: <LmsPage /> },
        { path: "libraryPage", element: <LibraryPage /> },
        { path: "emailPage", element: <EmailPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
