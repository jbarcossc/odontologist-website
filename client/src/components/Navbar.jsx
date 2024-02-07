import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Sobre mí', href: '#sobre-mi', current: true, urgencia: false },
  { name: 'Servicios', href: '#servicios', current: false, urgencia: false },
  { name: 'Agenda', href: '#agenda', current: false, urgencia: false },
  { name: 'Contacto', href: '#contacto', current: false, urgencia: false },
  { name: 'URGENCIAS 24HS', href: '#contacto', current: false, urgencia: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    return (
      <Disclosure as="nav" className="bg-dr-blue-dark sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-dr-white hover:bg-dr-white hover:text-dr-blue-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dr-blue-light">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <a href="" className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="icons/LogoBlanco.svg"
                    alt="Dr. Eduardo Barcos Odontólogo"
                  />
                </div>
              </a>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-dr-blue-light text-dr-blue-dark' : 'text-dr-white hover:text-dr-blue-light',
                          item.urgencia ? 'bg-dr-urgent text-dr-white hover:text-dr-urgent hover:bg-dr-white font-bold' : '',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-dr-blue-light text-dr-blue-dark' : 'text-dr-white hover:text-dr-blue-light',
                    item.urgencia ? 'bg-dr-urgent text-dr-white font-bold' : '',
                    'block rounded-md px-3 py-2 text-base font-medium text-center '
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    )
}

export default Navbar;