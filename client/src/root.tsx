// @refresh reload
import { Suspense } from "solid-js";
import { trpc, client, queryClient } from "./trpc";
import { useLocation, Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from "solid-start";
import "./root.css";
import Sidebar from "./components/Sidebar";

export default function Root() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="flex h-screen bg-slate-700 text-white">
        <trpc.Provider client={client} queryClient={queryClient}>
          <Suspense>
            <ErrorBoundary>
              {/* <nav class="bg-sky-800">
                <ul class="container flex items-center p-3 text-gray-200">
                  <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
                    <A href="/">Home</A>
                  </li>
                  <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
                    <A href="/about">About</A>
                  </li>
                </ul>
              </nav> */}
              <Sidebar />
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </trpc.Provider>
        <Scripts />
      </Body>
    </Html>
  );
}
