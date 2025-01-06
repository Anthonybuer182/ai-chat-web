'use client';
import Explore from './explore';
import Tool from './tool';
import My from './my';
import { useAppStore } from '@/zustand/store';
export default function Content() {
  const {tabNow} = useAppStore();
  return (
    <>
      <Explore isDisplay={tabNow === 'Explore'}/>
      <Tool isDisplay={tabNow === 'Tool'}/>
      <My isDisplay={tabNow === 'My'}/>
    </>
  );
}
