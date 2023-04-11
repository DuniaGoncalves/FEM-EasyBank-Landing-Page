import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyleURL from './styles/global.css';
import tailwindStylesheetUrl from "./styles/app.css";

export const links = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: 'stylesheet', href: globalStyleURL }, 
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
