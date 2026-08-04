"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";

export default function Work(){
  return (
    <div id="work" className="lg:mt-0 mt-20">
      <div className="h-20 lg:block hidden"></div>
      <div className="bg-white/66 w-fit mx-auto rounded-[4rem] sm:rounded-[8rem] px-8 sm:px-12 pb-16">
        <div className="topic">
          WORK
        </div>
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <FourPlusIntern />
          <FeCamp19 />
          <PosnBuuTA />
        </div>
      </div>
    </div>
  )
}

function ExperienceBullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-left text-[14px] leading-6 tracking-normal font-normal font-[system-ui,sans-serif]">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

function WorkEntry({
  logo,
  company,
  date,
  role,
  bullets,
}: {
  logo: ReactNode;
  company: string;
  date: string;
  role: string;
  bullets: ReactNode[];
}) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-5">
      <div className="shrink-0">{logo}</div>
      <div className="w-full bg-white py-4 px-5 sm:px-6 rounded-md border border-stone-200">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <div className="text-lg sm:text-xl font-bold">{company}</div>
          <div className="text-sm text-gray-500 font-medium shrink-0">{date}</div>
        </div>
        <div className="text-base sm:text-lg font-medium mt-0.5">{role}</div>
        <ExperienceBullets items={bullets} />
      </div>
    </div>
  )
}

function FourPlusIntern(){
  return (
    <WorkEntry
      company="4Plus Consulting Co., Ltd."
      date="Jun. 2026 – Present"
      role="Fullstack Developer Internship"
      logo={
        <div className="relative h-24 w-24 sm:h-28 sm:w-28">
          <Image
            src={"/img/work/4plus.png"}
            width={112}
            height={112}
            alt="4Plus Consulting"
            style={{ objectFit: "contain" }}
            className="h-full w-full border rounded-xl border-black"
          />
        </div>
      }
      bullets={[
        <>
          Built the full-stack AI water-management web application, collaborating with the data engineering team, owning the <span className="text-red2 font-bold">React</span>/<span className="text-red2 font-bold">Express</span> UI and API layer, implementing auth, RBAC, and data ingestion workflows, and working directly with the client to gather requirements and feedback.
        </>,
        <>
          Contributed to a multi-tenant AI knowledge full-stack development, designed the database schema and sync flow for multi-provider cloud-drive integration, optimized document-processing costs for Google Vision OCR.
        </>,
      ]}
    />
  )
}

function FeCamp19(){
  return (
    <WorkEntry
      company="FECamp19"
      date="Oct. 2025 – May. 2026"
      role="Senior Backend"
      logo={
        <div className="relative h-24 w-24 sm:h-28 sm:w-28">
          <Image
            src={"/img/work/fecamp.jpg"}
            width={112}
            height={112}
            alt="FE Camp 19"
            style={{ objectFit: "contain" }}
            className="h-full w-full border rounded-xl border-black"
          />
        </div>
      }
      bullets={[
        <>
          Led backend development of a Learning Management System using <span className="text-red2 font-bold">Java</span> and <span className="text-red2 font-bold">Spring Boot</span>, designing RESTful APIs, role-based access control, and course management modules for a platform used by approximately 500 users.
        </>,
      ]}
    />
  )
}

function PosnBuuTA(){
  const [imageToggle, setImageToggle] = useState(false);
  return (
    <WorkEntry
      company="BUU POSN Camp"
      date="Oct. 2023 – Present"
      role="Teaching Assistant"
      logo={
        <div className="relative h-24 w-24 sm:h-28 sm:w-28">
          <div
            className="absolute inset-0"
            style={imageToggle ? {opacity: "0%", zIndex: "-10"} : {opacity: "100%", zIndex: "20"}}
          >
            <Image
              src={"/img/work/posnbuuta1.png"}
              width={112}
              height={112}
              alt="posnbuuta1"
              style={{ objectFit: "cover" }}
              className="h-full w-full border border-black rounded-xl"
            />
          </div>
          <div
            className="absolute inset-0"
            style={imageToggle ? {opacity: "100%", zIndex: "20"} : {opacity: "0%", zIndex: "-10"}}
          >
            <Image
              src={"/img/work/posnbuuta2.jpg"}
              width={112}
              height={112}
              alt="posnbuuta2"
              style={{ objectFit: "cover" }}
              className="h-full w-full border border-black rounded-xl"
            />
          </div>
          <button
            type="button"
            className="absolute -bottom-1 -right-1 h-10 w-10 cursor-pointer overflow-hidden rounded-lg border border-black shadow-sm"
            style={{ zIndex: 40 }}
            onClick={() => setImageToggle(!imageToggle)}
            aria-label="Toggle POSN photo"
          >
            <Image
              src={imageToggle ? "/img/work/posnbuuta1.png" : "/img/work/posnbuuta2.jpg"}
              width={40}
              height={40}
              alt=""
              style={{ objectFit: "cover" }}
              className="h-full w-full"
            />
          </button>
        </div>
      }
      bullets={[
        <>Instructed high school students from Eastern Thailand in data structures and algorithms.</>,
        <>Designed competitive programming problems and comprehensive test cases for contestant selection.</>,
      ]}
    />
  )
}
