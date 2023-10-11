import Features from '@/components/Features';
import Hero from '@/components/Hero';

export default function Home() {
  const images = [
    { id: 1, thumbnail: '/BG.png', full: '/BG.png', title: 'TULIP' },
    { id: 2, thumbnail: '/BG2.png', full: '/BG2.png', title: 'ORCHID' },
    { id: 3, thumbnail: '/BG3.png', full: '/BG3.png', title: 'IRIS' },
    // ...
  ];
  const featuresImage = [
    { id: 1, thumbnail: '/features/features_1.png', full: '/features/features_1.png', title: 'Park1' },
    { id: 2, thumbnail: '/features/features_2.png', full: '/features/features_2.png', title: 'Park2' },
    { id: 3, thumbnail: '/features/features_3.png', full: '/features/features_3.png', title: 'Park3' },
    { id: 3, thumbnail: '/features/features_4.png', full: '/features/features_4.png', title: 'Park4' },
    // ...
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Hero images={images} />
      <Features featuresImage={featuresImage} />
    </main>
  )
}
