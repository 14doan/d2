import Image from 'next/image';
import Link from 'next/link';
function Nav() {
  return (
    <div className="z-[1000]">
      <nav className=" text-white fixed top-0 w-full z-[1000]">
        <div className=" flex items-center sm:justify-around justify-center w-full mx-auto h-[7rem] bg-[#f8fdff]">
          {/* Logo or Branding */}

          <div className="hidden sm:flex sm:max-w-[200px] ">
            <div className="navBtn ">
              <Link href="#">Chat</Link>
            </div>
            <div className="navBtn ">
              <Link href="#">Shop</Link>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Link href="#">
              <Image
                className="rounded-full object-cover h-[6rem] w-[6rem]"
                src="/dwanLogo.png"
                alt="profile pic"
                width="150"
                height="150"
              />
            </Link>
          </div>

          <div className="hidden sm:flex sm:max-w-[200px]">
            <div className="navBtn ">
              <Link href="#">Account</Link>
            </div>
            <div className="navBtn ">
              <Link href="#">basket</Link>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
      </nav>
      <nav className="sm:hidden flex justify-around items-center h-[3rem] text-white fixed bottom-0 w-full z-[1000] bg-[#f8fdff]">
        <div className="navBtn ">
          <Link href="#">Chat</Link>
        </div>
        <div className="navBtn ">
          <Link href="#">Shop</Link>
        </div>
        <div className="navBtn">
          <Link href="#">AwarenessOn</Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
