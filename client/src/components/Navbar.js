import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3CenterLeftIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  ChatBubbleLeftEllipsisIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { usePassageUserInfo } from "../hooks";
import LogoutButton from "./LogoutButton";
import logo from "../logo.png";

const products = [
  {
    name: "Mission",
    description: "Get a better understanding of your traffic",
    href: "/",
    icon: ChartPieIcon,
  },
  {
    name: "Meet the Team",
    description: "Speak directly to your customers",
    href: "/team",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "FAQS",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const profileMenu = [
  {
    name: "Dashboard",
    description: "Build strategic funnels that will convert",
    href: "/dashboard",
    icon: ArrowPathIcon,
  },
  {
    name: "Search for Clothes",
    description: "Search for Clothes",
    href: "/clothes",
    icon: ChartPieIcon,
  },
  {
    name: "Create Clothing Listing",
    description: "Speak directly to your customers",
    href: "/create",
    icon: CursorArrowRaysIcon,
  },
];
const callsToAction = [
  { name: "How you can help!", href: "/educate", icon: PlayCircleIcon },
  { name: "Support", href: "/support", icon: ChatBubbleLeftEllipsisIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { userInfo } = usePassageUserInfo();

  return (
    <header className='bg-emo-teal'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 nav'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>EcoModa</span>
            <img className='w-1/2' src={logo} alt='EcoModa' />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-emo-tan'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3CenterLeftIcon className='h-10 w-10' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-md font-semibold leading-6'>
              About
              <ChevronDownIcon
                className='h-6 w-6 flex-none text-emo-black'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gray-100 shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <a
                          href={item.href}
                          className='block font-semibold text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center justify-center gap-x-2.5 p-3 text-md font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                    >
                      <item.icon
                        className='h-5 w-5 flex-none text-gray-400'
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href='/guidelines'
            className='text-md font-semibold leading-6 text-gray-900'
          >
            Community Guidelines
          </a>
          <a
            href='/educate'
            className='text-md font-semibold leading-6 text-gray-900'
          >
            How You Can Help!
          </a>
          <a
            href='/support'
            className='text-md font-semibold leading-6 text-gray-900'
          >
            Support
          </a>
          <Popover className='relative'>
            {userInfo && (
              <Popover.Button className='flex items-center gap-x-1 text-md font-semibold leading-6'>
                Profile
                <ChevronDownIcon
                  className='h-6 w-6 flex-none text-emo-black'
                  aria-hidden='true'
                />
              </Popover.Button>
            )}

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gray-100 shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {profileMenu.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <a
                          href={item.href}
                          className='block font-semibold text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center justify-center gap-x-2.5 p-3 text-md font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                    >
                      <item.icon
                        className='h-5 w-5 flex-none text-gray-400'
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          {/* {userInfo && (
            <a
              href='/clothes'
              className='text-md font-semibold leading-6 text-gray-900'
            >
              Search For Clothes
            </a>
          )}
          {userInfo && (
            <a
              href='/create'
              className='text-md font-semibold leading-6 text-gray-900'
            >
              Create Clothing Listing
            </a>
          )}
          {userInfo && (
            <a
              href='/dashboard'
              className='text-md font-semibold leading-6 text-gray-900'
            >
              Profile
            </a>
          )} */}
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          {!userInfo && (
            <a
              href='/login'
              className='text-md font-semibold leading-6 text-gray-900'
            >
              Log in <span aria-hidden='true'>&rarr;</span>
            </a>
          )}
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-emo-teal px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>EcoModa</span>
              <img className='w-1/2' src={logo} alt='EcoModa' />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-10 w-10' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        About
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
                <a
                  href='/guidelines'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Community Guidelines
                </a>
                <a
                  href='/educate'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  How You Can Help!
                </a>
                <a
                  href='/team'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Support
                </a>
                {/* {userInfo && (
                  <a
                    href='/clothes'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Search For Clothes
                  </a>
                )}
                {userInfo && (
                  <a
                    href='/create'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Create Clothing Listing
                  </a>
                )}
                {userInfo && (
                  <a
                    href='/dashboard'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Profile
                  </a>
                )}
              </div>
              <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                {userInfo ? (
                  <LogoutButton /> // Render the LogoutButton component
                ) : (
                  <a
                    href='/login'
                    className='text-md font-semibold leading-6 text-gray-900'
                  >
                    Log in <span aria-hidden='true'>&rarr;</span>
                  </a>
                )} */}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
