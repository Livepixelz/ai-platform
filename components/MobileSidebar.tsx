'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0"
      >
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
