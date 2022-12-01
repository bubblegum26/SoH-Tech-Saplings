import React from 'react'

const Navbar = () => {
  return (
    <nav class="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 w-screen">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div class="flex items-center lg:order-2">
              <div className="flex rounded">
                <input
                  type="text"
                  className="block w-full px-6 mr-5 py-2 text-purple-700 bg-white rounded-md "
                  placeholder="Location..."
                />
              </div>
              <a href="/login" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">Log in</a>
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a href="/" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="/store" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">Store</a>
                </li>
                <li>
                  <a href="/volunteer" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">Volunteers</a>
                </li>
                <li>
                  <a href="/dashboard" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">Dashboard</a>
                </li>
                {/* <li>
                  <a href="/about" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">About</a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
  )
}

export default Navbar