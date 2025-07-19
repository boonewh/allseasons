'use client'
import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Protective Coatings', href: '/coatings' },
  { name: 'Containments', href: '/containments' },
  { name: 'Rentals', href: '/rentals' },
  { name: 'Painting Services', href: '/painting'},
  { name: 'Contact', href: '/contact' }
]

export default function Navigation() {
  return (
    <>
      <div className="bg-blue-100 text-blue-900 text-sm py-1 px-4 text-right font-semibold">
        📞 940-458-9078
      </div>
      <Disclosure as="nav" className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-black">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-20">                     {/* Height of the nav area */}
                <div className="flex items-center">
                  <div className="relative h-24 w-32">
                    <Link href="/" className="absolute -top-6 left-0">
                      <Image
                        src="/images/logo-all-seasons-foam.png"
                        alt="All Season Construction Logo"
                        width={110}
                        height={35}
                        className="object-contain"
                        priority
                      />
                    </Link>
                  </div>

                </div>
                
                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-2 py-2 text-lg font-medium ${
                        item.name === 'Contact'
                          ? 'bg-blue-600 text-white border-2 border-black rounded-md hover:bg-black'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}

                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                  <Disclosure.Button className="text-gray-700 hover:text-blue-600 p-2">
                    {open ? (
                      <XMarkIcon className="h-6 w-6" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile menu */}
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}