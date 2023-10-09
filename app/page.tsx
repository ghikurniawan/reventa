import Carousel from '@/components/Carousel';

export default function Home() {
  const images = [
    { id: 1, thumbnail: '/BG.png', full: '/BG.png', title: 'TULIP' },
    { id: 2, thumbnail: '/BG2.png', full: '/BG2.png', title: 'ROSE' },
    { id: 3, thumbnail: '/BG3.png', full: '/BG3.png', title: 'LILY' },
    // ...
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Carousel images={images} />
    </main>
  )
}
