import React, { useState } from "react";
import Head from "next/head";
import Navigation from "../components/Navigation/navigation";
import SimpleSlider from "../components/Testimonials/testimonials";
import { ICONS } from "../components//Icon/icons";
import Icon from "../components//Icon/icon";

export default function Index() {
  const [stateMenu, setStateMenu] = useState(false);
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
      <header className="z-50 flex items-center justify-between w-full px-2 py-3 bg-white md:p-3 shadow-line">
        <div className="items-center justify-between flex-1 px-4 py-2 pl-0 pr-2 lg:flex-none xl:px-8 lg:pl-4 md:pr-4">
          <a href="/">
            <img
              className="h-8 md:h-10 xl:h-10"
              src="./static/images/ctoq-logo.svg"
              alt="CTOQ Logo"
            />
          </a>
        </div>
        <Navigation stateMenu={stateMenu} />
        <a
          href="#"
          className="px-3 py-2 mr-2 font-mono text-xs font-bold text-white rounded shadow-lg bg-webBlue sm:px-4 lg:px-8 sm:py-2 lg:py-3 sm:text-base lg:text-sm hover:no-underline lg:mr-10"
        >
          Apply for Membership
        </a>
        <button
          onClick={() => setStateMenu(!stateMenu)}
          type="button"
          className="lg:hidden"
        >
          <Icon icon={ICONS.hamburger} />
        </button>
      </header>
      {/* Header */}
      <section className="block w-full pt-10 pb-48 text-center bg-gray-200 md:pt-20">
        <div className="container px-4 mx-auto lg:px-0">
          <h3 className="pb-5 font-mono text-sm font-normal text-gray-700 uppercase lg:text-base">
            <span className="text-webPurple"> &#60;</span> From the creators of
            InfoQ and QCon <span className="text-webPurple">&#47;&#62;</span>
          </h3>
          <h1 className="text-3xl font-bold leading-tight lg:text-7xl md:text-5xl">
            You're a great engineer.<br></br>Become a{" "}
            <span className="pb-2 pl-3 pr-3 bg-webYellow">
              great engineering leader.
            </span>
          </h1>
          <p className="max-w-screen-md mx-auto mt-4 mb-10 text-base md:text-2xl">
            Short sentence supporting the value proposition. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <a
            href="#"
            className="px-6 py-3 font-mono text-base font-bold text-white rounded shadow-lg md:px-12 md:py-4 bg-webBlue lg:text-lg hover:no-underline"
          >
            Apply for Membership
          </a>
        </div>
      </section>
      {/* Header */}
      {/* Video */}
      <section className="container px-4 mx-auto lg:px-0">
        <div className="flex items-center content-center justify-center w-full h-64 m-auto -mt-32 bg-center bg-cover md:w-11/12 video-cover lg:w-8/12">
          <div className="flex content-center justify-center w-12 h-12 px-2 bg-white rounded-full md:w-24 md:h-24 play_container lg:px-0">
            <span className="inline-block play"></span>
          </div>
        </div>
      </section>
      <section className="container px-4 mx-auto mt-10 mb-10 lg:px-0 md:mb-24 md:mt-24">
        <div className="lg:flex">
          <div className="w-full lg:w-5/12">
            <h3 className="text-3xl lg:text-5xl">
              <span className="text-webGreen">CTOQ</span> leads to better
              leaders, better decisions, better results.
            </h3>
          </div>
          <div className="w-full lg:w-7/12">
            <p className="text-base md:text-xl">
              In-depth Value proposition paragraph(s). It’s still a human world
              where integrity, experience and relationships matter. We’re here
              to connect the most successful CEOs of small and midsize
              businesses so — together — we can share expertise, challenge one
              another to think critically and arrive at better decisions.
            </p>
            <p className="text-base md:text-xl">
              Through this ongoing collaboration, we build lifelong leadership
              excellence that elevates companies, strengthens communities,
              delivers meaningful results and fosters sustainable growth.
            </p>
          </div>
        </div>
      </section>
      {/* Video */}
      <section className="relative mt-10 mb-10 md:mb-24 md:mt-24 bg-lightBlue blueShape">
        <div className="container relative z-50 px-4 pt-10 pb-10 mx-auto md:pt-24 md:pb-24 lg:px-0">
          <span className="block font-mono text-base text-center text-webPurple">
            HOW CTOQ CAN HELP YOU
          </span>
          <h2 className="z-50 pb-3 pb-10 text-3xl text-center lg:pb-20 lg:text-7xl md:text-5xl">
            Our Solutions
          </h2>
          <div className="relative z-50 flex flex-col-reverse flex-wrap items-center content-center justify-center pb-10 md:pt-10 lg:flex-row">
            <div className="w-full pt-10 lg:p-10 lg:w-7/12 lg:pr-32 lg:pt-0">
              <h3 className="text-3xl lg:text-5xl">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-base md:text-xl">
                It’s still a human world where integrity, experience and
                relationships matter. We’re here to connect the most successful
                CEOs of small and midsize businesses so — together — we can
                share expertise, challenge one another to think critically and
                arrive at better decisions.
              </p>
            </div>
            <div className="w-full lg:w-5/12">
              <img src="./static/images/image1.png"></img>
            </div>
          </div>
          <div className="z-50 items-center content-center justify-center pb-10 md:pt-10 lg:flex">
            <div className="w-full lg:w-5/12">
              <img src="./static/images/image2.png"></img>
            </div>
            <div className="w-full pt-10 lg:p-10 lg:w-7/12 lg:pl-32 lg:pt-0">
              <h3 className="text-3xl lg:text-5xl">
                Proin laoreet leo ut mattis consectetur
              </h3>
              <p className="text-base md:text-xl">
                It’s still a human world where integrity, experience and
                relationships matter. We’re here to connect the most successful
                CEOs of small and midsize businesses so — together — we can
                share expertise, challenge one another to think critically and
                arrive at better decisions.
              </p>
            </div>
          </div>
          <div className="relative z-50 flex flex-col-reverse flex-wrap items-center content-center justify-center pb-10 md:pt-10 lg:flex-row">
            <div className="w-full pt-10 lg:p-10 lg:w-7/12 lg:pr-32 lg:pt-0">
              <h3 className="text-3xl lg:text-5xl">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-base md:text-xl">
                It’s still a human world where integrity, experience and
                relationships matter. We’re here to connect the most successful
                CEOs of small and midsize businesses so — together — we can
                share expertise, challenge one another to think critically and
                arrive at better decisions.
              </p>
            </div>
            <div className="w-full lg:w-5/12">
              <img src="./static/images/image3.png"></img>
            </div>
          </div>
        </div>
        <div className="divshaped bg-lightBlue"></div>
      </section>
      <section className="relative mt-10 mb-10 bg-white md:mb-24 md:mt-24">
        <div className="container px-4 pt-10 pb-10 mx-auto md:pt-24 md:pb-10 lg:px-0">
          <span className="block font-mono text-base text-center text-webPurple">
            HOW CTOQ HELPED OTHERS
          </span>
          <h2 className="text-3xl text-center lg:text-7xl md:text-5xl">
            Testimonials
          </h2>
        </div>
        <SimpleSlider />
      </section>
      <section className="relative pb-24 mt-10 bg-white bg-gray-200 md:pb-24 md:mt-24">
        <div className="container px-4 pt-10 pb-10 mx-auto md:pt-24 md:pb-24 lg:px-0">
          <span className="block font-mono text-base text-center uppercase text-webPurple">
            From the creators of InfoQ and QCon
          </span>
          <h2 className="pt-5 pb-10 text-3xl leading-none text-center lg:text-7xl md:text-5xl">
            Brought to you by a<br></br>tusted partner
          </h2>
          <p className="w-full m-auto text-base text-center md:text-xl lg:w-8/12">
            Sed lorem mi, venenatis a varius eu, cursus eu justo. Suspendisse
            eros turpis, ultricies luctus ipsum condimentum, malesuada dapibus
            urna. Integer sed quam non neque rhoncus porta id eget augue. Nunc
            vel leo in turpis pulvinar fringilla. Ut ornare rutrum diam ut
            ornare. Mauris fringilla accumsan lectus nec cursus. Integer sed
            ante non augue convallis congue. Suspendisse iaculis a nibh ac
            scelerisque. Proin interdum id sem non sollicitudin.
          </p>
          <div className="relative flex flex-wrap justify-center w-6/12 mx-auto mt-20 grid-bg-img">
            <div className="w-3/5 pb-5 md:pb-0 md:w-1/2 lg:pr-0">
              <img src="./static/images/infoQ.svg" className="mx-auto"></img>
            </div>
            <div className="w-3/5 md:w-1/2 lg:pl-0">
              <img src="./static/images/Qcon.svg" className="mx-auto"></img>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pb-0 mt-24 -mt-1 bg-black ">
        <div className="bg-black divshapedLeft"></div>
        <div className="container px-4 pt-20 pb-10 mx-auto md:pb-32 lg:px-0">
          <span className="block font-mono text-base text-center uppercase text-lightPurple">
            JOIN THE CTOQ COMMUNITY
          </span>
          <h2 className="pb-10 text-3xl leading-none text-center text-white md:pb-20 lg:text-7xl md:text-5xl">
            Empower your team
          </h2>

          <div className="relative flex flex-col-reverse flex-wrap pb-10 bg-white rounded md:pb-10 lg:pb-0 lg:flex-row">
            <div className="w-full p-3 lg:w-7/12 lg:p-20">
              <p className="block pb-10 text-base md:text-xl lg:pr-20 ">
                Sed lorem mi, venenatis a varius eu, cursus eu justo.
                Suspendisse eros turpis, ultricies luctus ipsum condimentum,
                malesuada dapibus urna. Integer sed quam non neque rhoncus porta
                id eget augue. Nunc vel leo in turpis pulvinar fringilla. Ut
                ornare rutrum diam ut ornare. Mauris fringilla accumsan lectus
                nec cursus. Integer sed ante non augue convallis congue.
              </p>
              <a
                href="#"
                className="px-6 py-3 font-mono text-base font-bold text-white rounded shadow-lg md:py-4 md:px-12 bg-webBlue hover:no-underline"
              >
                Apply for Membership
              </a>
            </div>
            <div className="w-full bg-center bg-cover lg:w-5/12 community-bg"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
