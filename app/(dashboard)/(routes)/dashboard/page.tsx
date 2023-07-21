'use client';

import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from 'lucide-react';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { TOOLS as tools } from '@/constants';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-0 space-y-2 md:space-y-4">
        <header className="md:px-20 lg:px-32">
          <h2 className="text-3xl md:text-4xl lg:text-8xl font-black text-center ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Explore the power of AI
            </span>
          </h2>
          <p className="text-lg text-muted-foreground font-light text-center">
            Chat with the smartest AI
          </p>
        </header>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((tool) => (
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.label}
              className={cn(
                'p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer group',
              )}
            >
              <div className="flex items-center gap-x-4">
                <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                  <tool.icon className={cn('w-8 h-8', tool.color)} />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
