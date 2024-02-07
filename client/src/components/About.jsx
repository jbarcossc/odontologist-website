import React from 'react'

const About = () => {
    return (
      <div id="sobre-mi">
        <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-basic-bold leading-tight text-black sm:text-4xl lg:text-5xl">Hola! Soy el
                    <br className="block" /> <span className='text-dr-blue-light'> Dr. Eduardo Barcos</span>
                </h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                    Amet minim mollit non deserunt
                    ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet.
                </p>
                <p className="mt-4 text-xl text-gray-600 md:mt-8">
                    <span className="relative inline-block">
                        <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                    <span className="relative"> ¿Tenés alguna duda? </span>
                    </span>
                    <br className="block sm:hidden" /> Preguntame por  <a href="#" title=""
                        className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">Whatsapp</a>
                </p>
              </div>
              <div className="relative">
                <img className="select-none relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default About;