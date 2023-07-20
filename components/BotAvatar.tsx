import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

import { Avatar } from '@/components/ui/avatar';

const BotAvatar = () => {
  return (
    <Avatar className="h-10 w-10">
      <AvatarImage src="/images/logo_dark.png" />
    </Avatar>
  );
};

export default BotAvatar;
