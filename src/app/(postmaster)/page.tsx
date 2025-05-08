
import { Counter, GridSpeakers, HeroSection } from '@/components';
import { getBasePath } from '@/lib';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';

export default function Home() {

  return (
    <>
      <HeroSection />
      <GridSpeakers />
    </>
  );
}
