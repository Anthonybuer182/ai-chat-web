'use client';
import Session from './session';
import Explore from './explore';
import Tool from './tool';
import My from './my';
import { useAppStore } from '@/zustand/store';
export default function Content() {
  const {tabNow} = useAppStore();
  return (
    <>
      <Session isDisplay={tabNow === 'Session'}/>
      <Explore isDisplay={tabNow === 'Explore'}/>
      <Tool isDisplay={tabNow === 'Tool'}/>
      <My isDisplay={tabNow === 'My'}/>
    </>
  );
}
