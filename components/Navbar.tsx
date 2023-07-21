import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Logo from './Logo';
import { Menu } from 'lucide-react';
import MobileSidebar from '@/components/MobileSidebar';
import { UserButton } from '@clerk/nextjs';
import { checkSubscription } from '@/lib/subscription';
import { getApiLimitCount } from '@/lib/api-limit';

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="flex items-center p-4 justify-between bg-gray-900 mb-8 md:mb-0 text-white md:bg-transparent md:text-black sticky top-0 md:static">
      <MobileSidebar
        apiLimitCount={apiLimitCount}
        isPro={isPro}
      />
      <Link
        href="/"
        className="flex items-center md:hidden"
      >
        <div className="relative w-6 h-6 mr-2">
          <Logo />
        </div>
        <div className="text-xl font-bold">Livepixelz</div>
      </Link>
      <div className="flex md:w-full md:justify-end h-8">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
