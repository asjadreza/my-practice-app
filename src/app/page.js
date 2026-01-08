import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="d-flex flex-column">
        <div className="mt-2">
          <Link href="/counter-app" className="">
            Counter App
          </Link>
        </div>
        <div className="mt-2">
          <Link href="/users-app" className="">
            User List App
          </Link>
        </div>
        <div className="mt-2">
          <Link href="/redux-counter-app" className="">
            Redux counter app
          </Link>
        </div>

      </div>
    </div>
  );
}
