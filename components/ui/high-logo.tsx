import Link from "next/link";
import Image from "next/image";
import logo from "@/public/highLogo.png";

export default function HighLogo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Cruip Logo" width={100} height={100} />
    </Link>
  );
}
