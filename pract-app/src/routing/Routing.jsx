import * as React from "react";
import "../assets/common/style.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import "../index.css";
import Home from "../pages/Home";
import Tooltippage from "../pages/Tooltippage";
import About from "../pages/About";
import Login from "../components/Login";
import Forms from "../pages/Forms";
import ChatRoom from "../pages/chat/ChatRoom";
import AppChat from "../pages/chat/AppChat";
import IpApp from "../pages/chat/IpApp";
import FlowCustome from "../pages/flowChart/FlowCustome";
import FlowChartPgae from "../pages/flowChart/FlowChartPgae";
import MyComponent from "../pages/flowChart/MyComponent";
// import ChatComponent from "../pages/chat/ChatComponent";

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <> <Home /> </>,
    children: [
      {
        path: "/Tooltippage",
        element: <Tooltippage />,
        // children: [{ path: "/t", element: <Tooltippage /> }],
      },
      {
        path: "/Login",
        element: <Login />,
        // children: [{ path: "/t", element: <Tooltippage /> }],
      },
      {
        path: "/forms",
        element: <Forms />,
        // children: [{ path: "/ts", element: <>ts</> }],
      },
      // {
      //   path: "/chatComponent",
      //   element: <ChatComponent />,
      //   // children: [{ path: "/ts", element: <>ts</> }],
      // },
      {
        path: "/ChatRoom",
        element: <ChatRoom />,
        // children: [{ path: "/ts", element: <>ts</> }],
      },
      {
        path: "/MyComponent",
        element: <MyComponent />,
        // children: [{ path: "/ts", element: <>ts</> }],
      },
      {
        path: "/IpApp",
        element: <IpApp />,
        // children: [{ path: "/ts", element: <>ts</> }],
      },
      {
        path: "/Appchat",
        element: <AppChat />,
        // children: [{ path: "/ts", element: <>ts</> }],
      },
      
      {
        path: "/FlowCharts",
        element: <><b>FlowCharts</b> <Outlet/></>,
        children: [
          {
            path: "FlowCustome",
            element: <FlowCustome />,
          },
          {
            path: "FlowChartPgae",
            element: <FlowChartPgae />,
          },
        ],
      },

      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "v",
            element: "v",
          },
          {
            path: "vv",
            element: "vv",
          },
        ],
      },
    ],
  },
]);

export default Routing;
