import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello from home</h1>
      <Link href="/dogs/henry">Henry</Link>
      <Link prefetch={false} href="/dogs/henry">
        Henry
      </Link>

      <a href="/dogs/henry">Henry</a>
    </>
  );
}
