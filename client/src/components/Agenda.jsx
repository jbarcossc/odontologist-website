import React from 'react'

const Agenda = () => {
    return (
      <div id="agenda-section">
          <section className="text-center h-dvh flex flex-col justify-center">
            
            <i className={"fa-solid fa-calendar-days text-8xl text-dr-blue-dark mb-10"}></i>
            <h1 className="text-3xl font-basic font-bold tracking-normal text-dr-black sm:text-5xl md:text-5xl md:leading-none">
                <span className="block">Agendá una consulta</span>
            </h1>
            <p
                className="max-w-sm mx-auto mt-1 font-basic font-normal text-dr-gray-dark sm:mt-5 sm:text-md md:mt-5 md:text-xl sm:max-w-2xl md:max-w-2xl">
                Create ad previews with fewer steps so you can focus on what you do best.</p>
            <div className="max-w-md mx-auto mt-3 sm:flex sm:justify-center md:mt-6">
                <div className="rounded-full shadow">
                    <button type="button" className="flex items-center justify-center w-full px-8 py-3 text-base font-basic font-normal text-dr-white bg-dr-blue-dark border border-transparent rounded-full text-md hover:bg-dr-blue-light md:py-4 md:text-2xl md:px-10">Reservar un turno</button>
                </div>
            </div>
        </section>
      </div>
    )
}

export default Agenda;