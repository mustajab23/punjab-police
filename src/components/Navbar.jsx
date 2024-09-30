'use client';
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = ({ className }) => {
  const [active, setActive] = useState(null);
  return (
    <div className={cn('sticky top-0 w-full z-50', className)}>
      <Menu setActive={setActive}>
        <Link href={'/'}>
          <Image src={'/logo.png'} width={180} height={550} />
        </Link>
        <div className="flex space-x-4 pr-44">
          <MenuItem setActive={setActive} active={active} item="Info">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">About Us</HoveredLink>
              <HoveredLink href="/">Media Room</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Public Services"
                href="https://algochurn.com"
                src="/public-service.png"
                description="Explore essential public services like online licensing..."
              />
              <ProductItem
                title="Police Initiatives"
                href="https://tailwindmasterkit.com"
                src="/police-initiatives.jpg"
                description="Discover key police initiatives, including mobile apps, FIR..."
              />
              <ProductItem
                title="Welfare Mous"
                href="https://gomoonbeam.com"
                src="/welfare-mous.png"
                description="covering education, healthcare, transportation, and housing finance..."
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Reports">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/igp-complaints">IGP Complaints</HoveredLink>
              <HoveredLink href="/rti">RTI</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Data">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/statistics">Statistics</HoveredLink>
              <HoveredLink
                href="https://dlims.punjab.gov.pk/"
                target={'_blank'}
              >
                Online License
              </HoveredLink>
            </div>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
