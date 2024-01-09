"use client";
import { type } from "os";
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import img from "../public/bg-home-1.jpeg";
import { BsBoxArrowInRight } from "react-icons/bs";

export default function Mainview() {
  type Works = {
    text: string;
    status: boolean;
  };

  // const [actualWork, setAcutalWork] = useState<number>(1)
  const [MyWork, setMyWork] = useState<Works[]>([
    {
      text: "Stworzymy stronę internetową",
      status: true,
    },
    {
      text: "Poprowadzimy Social Media",
      status: false,
    },
    {
      text: "Poprowadzimy Google Ads",
      status: false,
    },
    {
      text: "Poprowadzimy Facebook Ads",
      status: false,
    },
    {
      text: "Zoptymalizujemy stronę",
      status: false,
    },
    {
      text: "Napiszemy artykuły",
      status: false,
    },
  ]);

  const handleArray = () => {
    let actualWork: number = 0;

    setInterval(() => {
      actualWork = actualWork + 1;

      const newMyWorkArray = MyWork.map((w, index) => {
        if (actualWork < MyWork.length) {
          if (w.status === true) {
            return {
              ...w,
              status: false,
            };
          }
          if (index === actualWork) {
            return {
              ...w,
              status: true,
            };
          } else return w;
        } else {
          actualWork = 0;
          if (index === 0) {
            return {
              ...w,
              status: true,
            };
          } else {
            return {
              ...w,
              status: false,
            };
          }
        }
      });
      setMyWork(newMyWorkArray);
    }, 1500);
  };

  useEffect(() => {
    handleArray();
  }, []);

  return (
    <>
      <span id="start"></span>
      <div className="bg-[url('/background_man_2.jpeg')] lg:bg-[length:1900px] md:bg-[length:1000px] bg-[length:900px] bg-center bg-no-repeat md:bg-left h-screen flex justify-center items-center mr-24 -mt-12 rounded-r-[50px]">
        <div className="absolute right-0 w-24 h-full flex items-end justify-center mb-[190px] md:mb-0 pb-20">
          <div className="flex justify-center items-center text-3xl whitespace-nowrap rotate-90 duration-300 hover:pl-10 cursor-pointer">
            <Link href="/#aboutus" scroll={false}>
              <p className="px-3 smooth relative">Czytam dalej</p>
            </Link>
            <BsBoxArrowInRight className="w-[40px] h-[40px]" />
          </div>
        </div>
        <div className=" text-white w-[1140px] lg:h-auto h-[130px] flex flex-col items-start">
          <span className="md:text-5xl text-[30px] font-[500] md:pl-0 pl-2 mb-[5px] bg-orange-500 leading-5 md:h-[50px] min-h-[40px]">
            Dla Ciebie&nbsp;
          </span>
          {MyWork.map((w) => {
            if (w.status === true) {
              return (
                <span
                  key={w.text}
                  className="md:pl-0 pl-2 px-[15px] text-[20px] sm:text-[55px] md:leading-[55px] md:text-5xl font-[200] text-shadow-[10px] duration-150 bg-blue-500"
                >
                  &nbsp;{w.text}
                </span>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
