import Formulaire from '@/components/ui/custom/Formulaire';
import LeftSide from '@/components/ui/custom/LeftSide';
import RightSide from '@/components/ui/custom/RightSide';

import Header from './header';

export default function Home() {
  return (
    <>
      <Header />

      <div className="grid gap-16 grid-cols-2 py-28  md:container">
        <LeftSide />
        <RightSide />
      </div>
      <Formulaire />
    </>
  );
}
