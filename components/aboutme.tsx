import React from "react";

export default function Aboutme() {
  return (
    <>
      <div id="aboutus" className="bg-red-900 w-full"></div>
      <div className="lg:w-[1140px] mx-auto lg:px-0 px-3">
        <div className="md:mb-4 mt-20 flex flex-col md:flex-row items-start">
          <span className="md:bg-orange-500 text-orange-500 font-bold text-xl py-1 md:text-white px-[10px] rounded-l-[20px] w-[300px]">
            O nas
          </span>
          <span className="text-white md:text-3xl text-[24px] font-[600] py-1 bg-blue-400 px-[10px] leading-7 rounded-r-[20px]">
            Kim jesteśmy i dlaczego możemy Ci pomóc?
          </span>
          <p className="mt-4 md:text-2xl pb-20 font-[300] md:ml-[40px] ">
            Pasjonaci marketingu, wieloletni przesiębiorcy, programiści, kreatywni i ściśli.{" "}
            <br></br>Nasza wiedza i działania, które oferujemy na zewnątrz została zdobyta i
            wypracowana na własnym podwórku (podwórkach) w oparciu o przetestowanie dziesiątek
            strategii oraz wielu tysiącach złotych wydanych na budżety mediowe, napisaniu
            pozycjinerskich artykułów i finalnie wyciągnięciu wniosków, metodyk, strategi, które
            przyniosły efekty.<br></br>
            <br></br>Zależy nam aby to doświadczenie móc przełożyć na inne branże, nowe projekty i
            tym samym pomóc innym firmom borykającym się z np. brakiem wystarczającej sprzedaży lub
            chcących dopiero tę sprzedaż rozwinąć owe problemy rozwiązać.
          </p>
        </div>
        <div className="border-b w-[500px] mx-auto"></div>
      </div>
    </>
  );
}
