import Head from "next/head";
import Navigation from "../components/Navigation/navigation";
export default function NotFound() {
  return (
    <div>
      <Head>
        <title>
          CTOQ - You're a great engineer. Become a great engineering leader.
        </title>
        <meta
          name="Description"
          content="You're a great engineer. Become a great engineering leader."
        />
        <link rel="icon" href="./static/qcon-favicon.ico" />
      </Head>
      <Navigation />
      <section className="bg-gray-200 w-full h-screen text-center pt-10 pb-48  flex items-center content-center justify-center">
        <div className="container mx-auto">

        <img src="./static/images/404.svg" className="mx-auto notFound-image"></img>
          <h1 className="font-bold text-5xl leading-tight">
            Sorry We Can't Find That Page!
          </h1>
          <p className="max-w-screen-md mx-auto text-xl mb-10 mt-4">
            The page you are looking for was moved, removed, renamed or never
            existed.
          </p>
          <a
            href="/"
            className="text-white bg-webBlue rounded px-12 py-4 text-base font-mono hover:no-underline shadow-lg font-bold"
          >
            Back to home
          </a>
        </div>
      </section>
    </div>
  );
}
