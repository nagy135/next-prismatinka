import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="h-32 w-96 relative">
        <Image
          src="/leg.svg"
          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
          className=""
        />
      </div>
      <h1 className="text-5xl ">Matinka</h1>
      <div className="h-64 w-96 relative">
        <Image
          src="/leg.svg"
          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
          className="scale-x-[-1]"
        />
      </div>
    </div>
  );
}
export default Header;
