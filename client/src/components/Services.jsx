import React from 'react'

const services = [
  {name: 'Endodoncia', icon: 'fa-chart-column'},
  {name: 'Cirugía', icon: 'fa-chart-column'},
  {name: 'Implantes', icon: 'fa-chart-column'},
  {name: 'Limpieza', icon: 'fa-chart-column'},
  {name: 'Tratamientos', icon: 'fa-chart-column'},
  {name: 'Estética', icon: 'fa-chart-column'},
  {name: 'Tratamiento de ATM', icon: 'fa-chart-column'},
  {name: 'Prótesis', icon: 'fa-chart-column'},
  {name: 'Coronas Cerámicas', icon: 'fa-chart-column'},
  {name: 'Blanqueamiento', icon: 'fa-chart-column'},
  {name: 'Periodoncia', icon: 'fa-chart-column'},
  {name: 'Placas de Miorrelajación', icon: 'fa-chart-column'},
  {name: 'Neuralgia del Trigémino', icon: 'fa-chart-column'}
]

const Services = () => {
    return (
      <div id="services-section">

        <section id="new-features" className="py-8 bg-dr-blue-dark sm:py-10 lg:py-16">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-basic font-bold leading-tight text-dr-white sm:text-4xl xl:text-5xl">
                Servicios </h2>
              <p className="mt-4 text-base leading-7 text-dr-white sm:mt-8">
                Enhance your workflow with advanced features
              </p>
            </div>
            <div className="grid grid-cols-2 mt-10 text-center sm:mt-16 sm:grid-cols-3 sm:gap-x-12 gap-y-12 md:grid-cols-5 md:gap-0 xl:mt-24">
              {/*Features*/}
                {services.map((item) => (
                  <div className="md:p-8 lg:p-14 flex flex-col justify-start items-center">
                    <div className="w-14 h-14 rounded-full bg-dr-blue-light flex justify-center items-center">
                      <i className={`fa-solid ${item.icon} text-3xl text-dr-white`}></i>
                    </div>
                    <h3 className="mt-12 text-xl font-basic text-dr-white">{item.name}</h3>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    )
}

export default Services;