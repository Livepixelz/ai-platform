import { Check, Zap } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from './ui/card';
import axios from 'axios';
import { cn } from '@/lib/utils';
import { TOOLS as tools } from '@/constants';
import { useProModal } from '@/hooks/use-pro-modal';
import { useState } from 'react';

const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);
  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/stripe/');

      window.location.href = response.data.url;
    } catch (error) {
      console.log('[STRIPE_CLIENT_ERROR]', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog
      open={proModal.isOpen}
      onOpenChange={proModal.onOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to Livepixelz
              <Badge
                variant="premium"
                className="uppercase text-sm py-1"
              >
                pro
              </Badge>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
          {tools.map((tool) => (
            <Card
              key={tool.label}
              className="p-3 border-black/5 flex items-center justify-between"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                  <tool.icon className={cn('w-6 h-6', tool.color)} />
                </div>
                <div className="font-semibold text-sm">{tool.label}</div>
              </div>
              <Check className="text-primary w-5 h-5" />
            </Card>
          ))}
        </div>
        <DialogFooter>
          <Button
            onClick={onSubscribe}
            size="lg"
            variant="premium"
            className="w-full"
          >
            Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
