import Link from "next/link";

export function GroupItem({ label, data }: { label: string; data: string | [] }) {
  if (typeof data === "string") {
    return (
      <Link 
        href={data} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:underline text-center block rounded-xl border py-2 px-4 text-gray-800 hover:bg-gray-600 hover:text-white"
      >
        👥 {label}
      </Link>
    );
  }

  return (
    <Link 
      href={`/gruppi/${encodeURIComponent(label)}`} 
      className="font-semibold text-gray-800 hover:bg-gray-600 hover:text-white transition-colors border py-2 px-4 text-center block rounded-xl"
    >
      📁 {label}
    </Link>
  );
}