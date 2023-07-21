import Image from 'next/image';
import Logo from '@/components/Logo';

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-8 items-center justify-center">
      <div className="w-10 h-10 relative animate-pulse">
        <Logo />
      </div>
      <p className="text-sm text-muted-foreground"> Livepixelz is working...</p>
    </div>
  );
};

export default Loader;
