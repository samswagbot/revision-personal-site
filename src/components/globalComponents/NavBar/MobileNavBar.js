import { useState } from 'react';
import { MobileMenuOpen } from 'Components/components';
import { CloseMenu, Menu } from 'Assets/svgs/svgs';

export default function MobileNavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex sticky overflow-auto top-0 p-4 bg-primary z-10">
        <button
          className="bg-transparent border-none cursor-pointer outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseMenu /> : <Menu />}
        </button>
      </nav>
      <MobileMenuOpen open={open} />
    </>
  );
}
