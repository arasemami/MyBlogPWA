import Link from "next/link";

export default function Offline() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>You are offline 😔</h1>
      <p>Some content is available from cache. Please check your connection.</p>
      <Link href="/">Go home</Link>
    </div>
  );
}