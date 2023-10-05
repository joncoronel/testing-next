"use client";

import { useRouter } from "next/navigation";

export default function ClientComponent() {
  const router = useRouter();
  return <div>Client Component</div>;
}
