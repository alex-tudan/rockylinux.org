import React from 'react';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Translate } from '../../i18n/utils/translate';
import { LocalizedLink } from 'gatsby-theme-i18n';

const Header = ({ pageContext: { locale: language } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const translate = Translate();

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <LocalizedLink
          to="/"
          aria-label="Rocky Linux"
          title="Rocky Linux"
          className="inline-flex items-center"
        >
          <svg
            className="mt-2 h-8 w-auto sm:h-10"
            width={1104}
            height={256}
            viewBox="0 0 1104 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M186.658 128.658C190.119 118.746 192 108.093 192 97c0-53.02-42.981-96-96-96C42.98 1 0 43.98 0 97c0 26.234 10.523 50.011 27.578 67.338l97.38-97.38L149 91l37.658 37.658zm-17.536 30.547l-44.164-44.163-69.16 69.16C68.027 189.849 81.645 193 96 193c29.288 0 55.514-13.116 73.122-33.795z"
              fill="#10B981"
            />
            <path
              d="M251.072 147V46.2h49.248c5.088 0 9.744.768 13.968 2.304 4.32 1.536 8.016 3.696 11.088 6.48 3.072 2.688 5.472 5.952 7.2 9.792 1.728 3.84 2.592 8.064 2.592 12.672 0 6.336-1.824 12-5.472 16.992-3.552 4.992-8.304 8.688-14.256 11.088L337.76 147h-23.328l-19.728-38.592h-22.752V147h-20.88zm47.376-82.8h-26.496v27.072h26.496c4.704 0 8.448-1.248 11.232-3.744 2.88-2.496 4.32-5.76 4.32-9.792s-1.44-7.296-4.32-9.792c-2.784-2.496-6.528-3.744-11.232-3.744zm41.247 45.36c0-5.472 1.008-10.56 3.024-15.264 2.112-4.8 4.944-8.928 8.496-12.384 3.648-3.552 7.92-6.336 12.816-8.352 4.896-2.016 10.128-3.024 15.696-3.024s10.8 1.008 15.696 3.024c4.896 2.016 9.12 4.8 12.672 8.352 3.648 3.456 6.48 7.584 8.496 12.384 2.112 4.704 3.168 9.792 3.168 15.264 0 5.472-1.056 10.608-3.168 15.408-2.016 4.704-4.848 8.784-8.496 12.24-3.552 3.456-7.776 6.192-12.672 8.208-4.896 2.016-10.128 3.024-15.696 3.024s-10.8-1.008-15.696-3.024c-4.896-2.016-9.168-4.752-12.816-8.208-3.552-3.456-6.384-7.536-8.496-12.24-2.016-4.8-3.024-9.936-3.024-15.408zm40.032 21.744c5.76 0 10.656-2.112 14.688-6.336s6.048-9.36 6.048-15.408c0-6.144-2.016-11.328-6.048-15.552s-8.928-6.336-14.688-6.336-10.656 2.112-14.688 6.336-6.048 9.408-6.048 15.552c0 6.048 2.016 11.184 6.048 15.408s8.928 6.336 14.688 6.336zm89.441-.144c3.36 0 6.48-.672 9.36-2.016 2.976-1.344 5.808-3.456 8.496-6.336l11.808 12.24c-3.84 4.224-8.448 7.536-13.824 9.936-5.376 2.304-10.944 3.456-16.704 3.456-5.472 0-10.656-1.008-15.552-3.024-4.8-2.016-8.976-4.752-12.528-8.208-3.456-3.456-6.192-7.536-8.208-12.24-2.016-4.8-3.024-9.936-3.024-15.408 0-5.472 1.008-10.56 3.024-15.264 2.016-4.8 4.752-8.928 8.208-12.384 3.552-3.552 7.728-6.336 12.528-8.352 4.896-2.016 10.08-3.024 15.552-3.024 5.952 0 11.664 1.2 17.136 3.6 5.472 2.304 10.128 5.568 13.968 9.792l-12.096 12.816c-2.688-2.976-5.568-5.232-8.64-6.768-3.072-1.536-6.384-2.304-9.936-2.304-5.664 0-10.464 2.112-14.4 6.336-3.84 4.224-5.76 9.408-5.76 15.552s1.968 11.28 5.904 15.408c4.032 4.128 8.928 6.192 14.688 6.192zM509.089 147V46.2l19.728-4.32v61.776l32.4-31.68h22.32l-35.136 34.416L585.697 147h-25.2l-31.68-34.272V147h-19.728zm103.554 3.456l1.152-2.736-29.233-75.744h21.745l18.576 51.12 21.312-51.12h21.312l-34.56 80.928c-3.84 9.024-8.304 15.456-13.392 19.296-5.088 3.84-11.712 5.76-19.872 5.76-1.728 0-3.408-.096-5.04-.288-1.536-.096-2.784-.288-3.744-.576v-16.992c.96.192 1.968.336 3.024.432 1.056.096 2.352.144 3.888.144 3.552 0 6.528-.864 8.928-2.592 2.496-1.728 4.464-4.272 5.904-7.632zM706.744 147V46.2h11.088v90.864h60.048V147h-71.136zm90.219-85.968c-1.92 0-3.6-.72-5.04-2.16-1.44-1.44-2.16-3.12-2.16-5.04 0-2.016.72-3.696 2.16-5.04 1.44-1.44 3.12-2.16 5.04-2.16 2.016 0 3.696.72 5.04 2.16 1.44 1.344 2.16 3.024 2.16 5.04 0 1.92-.72 3.6-2.16 5.04-1.344 1.44-3.024 2.16-5.04 2.16zm5.328 13.824V147h-10.656V74.856h10.656zM820.463 147V74.856h10.656v8.496c2.784-3.264 6.096-5.712 9.936-7.344 3.84-1.728 8.112-2.592 12.816-2.592 8.16 0 14.832 2.592 20.016 7.776 5.184 5.184 7.776 11.904 7.776 20.16V147h-10.512v-43.488c0-6.336-1.824-11.376-5.472-15.12-3.648-3.744-8.544-5.616-14.688-5.616-4.32 0-8.208.96-11.664 2.88-3.36 1.92-6.096 4.656-8.208 8.208V147h-10.656zm88.552-72.144v43.488c0 6.336 1.824 11.376 5.472 15.12 3.648 3.744 8.544 5.616 14.688 5.616 4.32 0 8.16-.96 11.52-2.88 3.456-2.016 6.24-4.8 8.352-8.352V74.856h10.656V147h-10.656v-8.352c-2.784 3.264-6.096 5.712-9.936 7.344-3.744 1.632-7.968 2.448-12.672 2.448-8.256 0-14.976-2.592-20.16-7.776-5.184-5.184-7.776-11.904-7.776-20.16V74.856h10.512zM969.47 147l28.368-37.152-26.928-34.992h12.672l20.448 27.072 20.45-27.072h12.24l-26.64 34.848L1038.59 147h-12.67l-22.03-29.376L981.566 147H969.47zM1048 70.624V54.976h-5.18v-3.024h5.18v-6.096l3.5-.912v7.008h7.25v3.024h-7.25v14.736c0 1.28.29 2.208.87 2.784.57.544 1.52.816 2.83.816.67 0 1.26-.048 1.78-.144a9.924 9.924 0 001.72-.48v3.12c-.6.224-1.29.384-2.06.48-.74.096-1.46.144-2.16.144-2.08 0-3.68-.496-4.8-1.488-1.12-.992-1.68-2.432-1.68-4.32zM1062.56 76V51.952h3.55v2.64c.89-1.024 1.93-1.792 3.12-2.304 1.18-.544 2.49-.816 3.93-.816 1.67 0 3.16.4 4.47 1.2a8.08 8.08 0 013.12 3.168c.99-1.472 2.17-2.56 3.55-3.264 1.41-.736 2.98-1.104 4.7-1.104 2.6 0 4.71.864 6.34 2.592 1.66 1.728 2.5 3.968 2.5 6.72V76h-3.51V61.504c0-2.112-.56-3.792-1.68-5.04-1.12-1.248-2.64-1.872-4.56-1.872-1.31 0-2.51.336-3.6 1.008-1.09.672-2.01 1.648-2.78 2.928.06.352.11.72.14 1.104.07.352.1.736.1 1.152V76h-3.51V61.504c0-2.112-.56-3.792-1.68-5.04-1.12-1.248-2.62-1.872-4.51-1.872-1.28 0-2.45.304-3.5.912-1.03.576-1.91 1.44-2.64 2.592V76h-3.55z"
              className="logo-text"
            />
          </svg>
        </LocalizedLink>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <LocalizedLink
            to="/news/1/"
            className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
          >
            {translate('links.posts')}
          </LocalizedLink>
          <a
            href="https://wiki.rockylinux.org/"
            className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
          >
            {translate('links.wiki')}
          </a>
          <a
            href="https://docs.rockylinux.org/"
            className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
          >
            {translate('links.documentation')}
          </a>
          <a
            href="https://forums.rockylinux.org/"
            className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
          >
            {translate('socials.forums')}
          </a>
          <a
            href="https://www.mucklesu.com/collections/rocky-linux"
            className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
          >
            {translate('links.store')}
          </a>
          <a
            href="https://rockylinux.z2systems.com/np/clients/rockylinux/donation.jsp"
            className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
          >
            {translate('links.donate')}
          </a>
        </ul>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <LocalizedLink
              to="/download"
              className="inline-flex items-center justify-center w-full h-10 px-5 font-medium tracking-wide text-white dark:text-black transition duration-200 rounded-md shadow-md bg-green-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              aria-label="Download"
              title="Download"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />{' '}
              </svg>
              {translate('links.download')}
              <span className="ml-2 font-normal">8.5</span>
            </LocalizedLink>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          <Transition
            show={isOpen}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <LocalizedLink
                      to="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="mt-2 h-8 w-auto sm:h-10"
                        width={1104}
                        height={256}
                        viewBox="0 0 1104 256"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M186.658 128.658C190.119 118.746 192 108.093 192 97c0-53.02-42.981-96-96-96C42.98 1 0 43.98 0 97c0 26.234 10.523 50.011 27.578 67.338l97.38-97.38L149 91l37.658 37.658zm-17.536 30.547l-44.164-44.163-69.16 69.16C68.027 189.849 81.645 193 96 193c29.288 0 55.514-13.116 73.122-33.795z"
                          fill="#10B981"
                        />
                        <path
                          d="M251.072 147V46.2h49.248c5.088 0 9.744.768 13.968 2.304 4.32 1.536 8.016 3.696 11.088 6.48 3.072 2.688 5.472 5.952 7.2 9.792 1.728 3.84 2.592 8.064 2.592 12.672 0 6.336-1.824 12-5.472 16.992-3.552 4.992-8.304 8.688-14.256 11.088L337.76 147h-23.328l-19.728-38.592h-22.752V147h-20.88zm47.376-82.8h-26.496v27.072h26.496c4.704 0 8.448-1.248 11.232-3.744 2.88-2.496 4.32-5.76 4.32-9.792s-1.44-7.296-4.32-9.792c-2.784-2.496-6.528-3.744-11.232-3.744zm41.247 45.36c0-5.472 1.008-10.56 3.024-15.264 2.112-4.8 4.944-8.928 8.496-12.384 3.648-3.552 7.92-6.336 12.816-8.352 4.896-2.016 10.128-3.024 15.696-3.024s10.8 1.008 15.696 3.024c4.896 2.016 9.12 4.8 12.672 8.352 3.648 3.456 6.48 7.584 8.496 12.384 2.112 4.704 3.168 9.792 3.168 15.264 0 5.472-1.056 10.608-3.168 15.408-2.016 4.704-4.848 8.784-8.496 12.24-3.552 3.456-7.776 6.192-12.672 8.208-4.896 2.016-10.128 3.024-15.696 3.024s-10.8-1.008-15.696-3.024c-4.896-2.016-9.168-4.752-12.816-8.208-3.552-3.456-6.384-7.536-8.496-12.24-2.016-4.8-3.024-9.936-3.024-15.408zm40.032 21.744c5.76 0 10.656-2.112 14.688-6.336s6.048-9.36 6.048-15.408c0-6.144-2.016-11.328-6.048-15.552s-8.928-6.336-14.688-6.336-10.656 2.112-14.688 6.336-6.048 9.408-6.048 15.552c0 6.048 2.016 11.184 6.048 15.408s8.928 6.336 14.688 6.336zm89.441-.144c3.36 0 6.48-.672 9.36-2.016 2.976-1.344 5.808-3.456 8.496-6.336l11.808 12.24c-3.84 4.224-8.448 7.536-13.824 9.936-5.376 2.304-10.944 3.456-16.704 3.456-5.472 0-10.656-1.008-15.552-3.024-4.8-2.016-8.976-4.752-12.528-8.208-3.456-3.456-6.192-7.536-8.208-12.24-2.016-4.8-3.024-9.936-3.024-15.408 0-5.472 1.008-10.56 3.024-15.264 2.016-4.8 4.752-8.928 8.208-12.384 3.552-3.552 7.728-6.336 12.528-8.352 4.896-2.016 10.08-3.024 15.552-3.024 5.952 0 11.664 1.2 17.136 3.6 5.472 2.304 10.128 5.568 13.968 9.792l-12.096 12.816c-2.688-2.976-5.568-5.232-8.64-6.768-3.072-1.536-6.384-2.304-9.936-2.304-5.664 0-10.464 2.112-14.4 6.336-3.84 4.224-5.76 9.408-5.76 15.552s1.968 11.28 5.904 15.408c4.032 4.128 8.928 6.192 14.688 6.192zM509.089 147V46.2l19.728-4.32v61.776l32.4-31.68h22.32l-35.136 34.416L585.697 147h-25.2l-31.68-34.272V147h-19.728zm103.554 3.456l1.152-2.736-29.233-75.744h21.745l18.576 51.12 21.312-51.12h21.312l-34.56 80.928c-3.84 9.024-8.304 15.456-13.392 19.296-5.088 3.84-11.712 5.76-19.872 5.76-1.728 0-3.408-.096-5.04-.288-1.536-.096-2.784-.288-3.744-.576v-16.992c.96.192 1.968.336 3.024.432 1.056.096 2.352.144 3.888.144 3.552 0 6.528-.864 8.928-2.592 2.496-1.728 4.464-4.272 5.904-7.632zM706.744 147V46.2h11.088v90.864h60.048V147h-71.136zm90.219-85.968c-1.92 0-3.6-.72-5.04-2.16-1.44-1.44-2.16-3.12-2.16-5.04 0-2.016.72-3.696 2.16-5.04 1.44-1.44 3.12-2.16 5.04-2.16 2.016 0 3.696.72 5.04 2.16 1.44 1.344 2.16 3.024 2.16 5.04 0 1.92-.72 3.6-2.16 5.04-1.344 1.44-3.024 2.16-5.04 2.16zm5.328 13.824V147h-10.656V74.856h10.656zM820.463 147V74.856h10.656v8.496c2.784-3.264 6.096-5.712 9.936-7.344 3.84-1.728 8.112-2.592 12.816-2.592 8.16 0 14.832 2.592 20.016 7.776 5.184 5.184 7.776 11.904 7.776 20.16V147h-10.512v-43.488c0-6.336-1.824-11.376-5.472-15.12-3.648-3.744-8.544-5.616-14.688-5.616-4.32 0-8.208.96-11.664 2.88-3.36 1.92-6.096 4.656-8.208 8.208V147h-10.656zm88.552-72.144v43.488c0 6.336 1.824 11.376 5.472 15.12 3.648 3.744 8.544 5.616 14.688 5.616 4.32 0 8.16-.96 11.52-2.88 3.456-2.016 6.24-4.8 8.352-8.352V74.856h10.656V147h-10.656v-8.352c-2.784 3.264-6.096 5.712-9.936 7.344-3.744 1.632-7.968 2.448-12.672 2.448-8.256 0-14.976-2.592-20.16-7.776-5.184-5.184-7.776-11.904-7.776-20.16V74.856h10.512zM969.47 147l28.368-37.152-26.928-34.992h12.672l20.448 27.072 20.45-27.072h12.24l-26.64 34.848L1038.59 147h-12.67l-22.03-29.376L981.566 147H969.47zM1048 70.624V54.976h-5.18v-3.024h5.18v-6.096l3.5-.912v7.008h7.25v3.024h-7.25v14.736c0 1.28.29 2.208.87 2.784.57.544 1.52.816 2.83.816.67 0 1.26-.048 1.78-.144a9.924 9.924 0 001.72-.48v3.12c-.6.224-1.29.384-2.06.48-.74.096-1.46.144-2.16.144-2.08 0-3.68-.496-4.8-1.488-1.12-.992-1.68-2.432-1.68-4.32zM1062.56 76V51.952h3.55v2.64c.89-1.024 1.93-1.792 3.12-2.304 1.18-.544 2.49-.816 3.93-.816 1.67 0 3.16.4 4.47 1.2a8.08 8.08 0 013.12 3.168c.99-1.472 2.17-2.56 3.55-3.264 1.41-.736 2.98-1.104 4.7-1.104 2.6 0 4.71.864 6.34 2.592 1.66 1.728 2.5 3.968 2.5 6.72V76h-3.51V61.504c0-2.112-.56-3.792-1.68-5.04-1.12-1.248-2.64-1.872-4.56-1.872-1.31 0-2.51.336-3.6 1.008-1.09.672-2.01 1.648-2.78 2.928.06.352.11.72.14 1.104.07.352.1.736.1 1.152V76h-3.51V61.504c0-2.112-.56-3.792-1.68-5.04-1.12-1.248-2.62-1.872-4.51-1.872-1.28 0-2.45.304-3.5.912-1.03.576-1.91 1.44-2.64 2.592V76h-3.55z"
                          className="logo-text"
                        />
                      </svg>
                    </LocalizedLink>
                  </div>
                  <div>
                    <button
                      aria-label="Close menu"
                      onClick={() => setIsOpen(!isOpen)}
                      title="Close menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 dark:hover:bg-gray-700 dark:focus:bg-gray-700 focus:outline-none focus:shadow-outline"
                    >
                      <svg
                        className="w-5 text-gray-600 dark:text-white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <LocalizedLink
                        to="/news/1/"
                        aria-label="News"
                        title="News"
                        className="font-medium tracking-wide text-gray-700 dark:text-white transition-colors duration-200 hover:text-green-500"
                      >
                        {translate('links.news')}
                      </LocalizedLink>
                    </li>
                    <li>
                      <a
                        href="https://wiki.rockylinux.org/"
                        aria-label="Wiki"
                        title="Wiki"
                        className="font-medium tracking-wide text-gray-700 dark:text-white transition-colors duration-200 hover:text-green-500"
                      >
                        {translate('links.wiki')}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://forums.rockylinux.org/"
                        aria-label="Forums"
                        title="Forums"
                        className="font-medium tracking-wide text-gray-700 dark:text-white transition-colors duration-200 hover:text-green-500"
                      >
                        {translate('links.forums')}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.mucklesu.com/collections/rocky-linux"
                        aria-label="Store"
                        title="Store"
                        className="font-medium tracking-wide text-gray-700 dark:text-white transition-colors duration-200 hover:text-green-500"
                      >
                        {translate('links.store')}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://rockylinux.z2systems.com/np/clients/rockylinux/donation.jsp"
                        aria-label="Donate"
                        title="Donate"
                        className="font-medium tracking-wide text-gray-700 dark:text-white transition-colors duration-200 hover:text-green-500"
                      >
                        {translate('links.donate')}
                      </a>
                    </li>
                    <li>
                      <LocalizedLink
                        to="/download"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white dark:text-black transition duration-200 rounded shadow-md bg-green-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Download"
                        title="Download"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {' '}
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />{' '}
                        </svg>
                        {translate('links.download')}
                        <span className="ml-2 font-normal">8.5</span>
                      </LocalizedLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default Header;
