import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

import * as Fathom from "fathom-client";
import { useLocation } from "react-router-dom";

import styles from "~/styles/global.css";
import galleryStyle from "~/styles/image-gallery.css";
import { useEffect, useRef } from "react";

export const meta: MetaFunction = () => {
  return { title: "Macro Product Photos" };
};

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: galleryStyle },
  ];
}

export default function App() {
  let fathomLoaded = useRef(false);
  let location = useLocation();

  useEffect(
    function setupFathom() {
      if (!fathomLoaded.current) {
        Fathom.load("XRYUVLYQ", { includedDomains: ["macro.roush.io"] });
        fathomLoaded.current = true;
      } else {
        Fathom.trackPageview();
      }
    },
    [location]
  );

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
