import Amenities from '@/components/Amenities';
import Explore from '@/components/Explore';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Spesification from '@/components/Spesification';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
  const cards = [
    {id: 1, image : '/spesification/structure.png', title: 'Structure', description : "Earthquake Resistant Structure with attractive elevation as per Architecture's Design."},
    {id: 1, image : '/spesification/wall_finish.png', title: 'Wall Finish', description : "Inside Wall Plaster with Double Coat Putty Finish. Double Coat Plaster with Texture and Acrylic Paint on Exterior Walls."},
    {id: 1, image : '/spesification/door_windows.png', title: 'Doors & Windows', description : "Main Door Designer Flush Door with Wooden Frame & Natural Veneer. Motorized Main Door Lock. All Internal Door Locks, Stoppers and Hinges (Godrej or Equivalent Brand) . Internal Laminated Flush Doors. Premium Quality UPVC Windows."},
    {id: 1, image : '/spesification/door_windows.png', title: 'Doors & Windows', description : "Main Door Designer Flush Door with Wooden Frame & Natural Veneer. Motorized Main Door Lock. All Internal Door Locks, Stoppers and Hinges (Godrej or Equivalent Brand) . Internal Laminated Flush Doors. Premium Quality UPVC Windows."},
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Hero images={images} />
      <Features featuresImage={featuresImage} />
      <Explore />
      <Spesification cards={cards}/>
      <Amenities />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}
