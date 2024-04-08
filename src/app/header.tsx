import { Button } from '@/components/ui/button';

/* eslint-disable @next/next/no-img-element */
export default function Header() {
  return (
    <>
      <nav className="bg-white shadow-xl  fixed w-full z-50 shadow-slate-200/80">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-6">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-12"
                  src="images/logo.png"
                  alt="Your Company"
                />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative">
                <Button className="primary-gradiant">Nous-contactez</Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}