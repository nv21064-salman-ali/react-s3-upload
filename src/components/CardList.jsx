import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

const languages = {
  Arabic: 'text-amber-700 bg-amber-50 ring-amber-600/20',
}
const clients = [
  {
    id: 1,
    name: 'hello.txt',
    details: { date: '2/21/2024, 12:07:30 PM', dateTime: '2022-12-13',  language: 'Arabic' },
  },
  {
    id: 2,
    name: 'hello2.txt',
    details: { date: '2/21/2024, 12:07:30 PM', dateTime: '2023-01-22',  language: 'Arabic' },
  },
  {
    id: 3,
    name: 'hello3.txt',
    details: { date: '2/21/2024, 12:07:30 PM', dateTime: '2023-01-23',  language: 'Arabic' },
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function CardList() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
      {clients.map((client) => (
        <li key={client.id} className="overflow-hidden rounded-xl border border-gray-200">
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
            <div className="text-sm font-medium leading-6 text-gray-900">{client.name}</div>
            <Menu as="div" className="relative ml-auto">
              <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Open options</span>
                <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-green-700'
                        )}
                      >
                        Download<span className="sr-only">, {client.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6  text-red-700'
                        )}
                      >
                        Delete<span className="sr-only">, {client.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Last Modified</dt>
              <dd className="text-gray-700">
                <time dateTime={client.details.dateTime}>{client.details.date}</time>
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Language Translated</dt>
              <dd className="flex items-start gap-x-2">
                <div
                  className={classNames(
                    languages[client.details.language],
                    'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                  )}
                >
                  {client.details.language}
                </div>
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  )
}

export default CardList