import pages from "@/constants/pages";
import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href={pages.dashboard} className="hidden lg:flex">
      <div className="items-center flex">
        <Image
          src="/logo.png"
          alt="Logo"
          className="flex-shrink-0 w-16 h-auto object-contain"
          height={64}
          width={39}
        />
      </div>
    </Link>
  );
};
