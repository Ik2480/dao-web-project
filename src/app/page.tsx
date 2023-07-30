"use client"
import Image from 'next/image'
import Hero from '@/components/widgets/Hero'
import Core from '@/components/widgets/Core'

import Wrapper from '@/components/shared/Wrapper'
import SpecializedTracks from '@/components/widgets/specializedTracks'
import Hero1 from '@/components/shared/Hero1'
export default function Home() {
  return (
    <main >
      <div >
       <Hero />
       <Core />
       <SpecializedTracks />
       <Hero1 />

      </div>
    </main>
  )
}
