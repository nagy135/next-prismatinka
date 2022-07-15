import Image from 'next/image'
import { TImageFlipper as TImageSetup } from '../types/common';


const imagesLeft: Array<TImageSetup> = [
  {
    path: '/leg.svg',
  },
  {
    path: '/sit.svg',
  }
];
const imagesRight: Array<TImageSetup> = [
  {
    path: '/sit.svg',
  },
  {
    path: '/leg.svg',
  }
];
const Header = () => {
  return (
    <div className="flex justify-between mt-3">
      {imagesLeft.map(e =>
        <div className="h-32 w-96 relative">
          <Image
            src={e.path}
            alt="Picture of the author"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
      <h1 className="text-5xl pt-9">Matinka</h1>
      {imagesRight.map(e =>
        <div className="h-32 w-96 relative">
          <Image
            src={e.path}
            alt="Picture of the author"
            layout="fill"
            objectFit="contain"
            className="scale-x-[-1]"
          />
        </div>
      )}
    </div>
  );
}
export default Header;
