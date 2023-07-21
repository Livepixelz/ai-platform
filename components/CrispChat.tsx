'use client';

import { Crisp } from 'crisp-sdk-web';
import { useEffect } from 'react';

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('e2848d1f-d74c-4c3b-99a7-310c4f171eed');
  }, []);
  return null;
};

export default CrispChat;
