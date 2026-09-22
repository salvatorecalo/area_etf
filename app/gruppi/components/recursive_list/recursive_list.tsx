import Link from "next/link";

interface GroupItemProp {
  nome: string,
  url: string
}

export function RecursiveList({ data }: { data: string | GroupItemProp | [] }) {
  if (!data) return null;

  if (Array.isArray(data)) {
    return (
      <ul className="pl-4 space-y-2 mt-2 mb-4">
        {data.map((item, idx) => (
          <li key={idx}>
            <RecursiveList data={item} />
          </li>
        ))}
      </ul>
    );
  }

  if (typeof data === "object" && data.nome && data.url) {
    return (
      <Link 
        href={data.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:underline text-center block rounded-xl border py-2 px-4 text-gray-800 hover:bg-gray-600 hover:text-white"
      >
        👥 {data.nome}
      </Link>
    );
  }

  if (typeof data === "object") {
    
    if (data.nome && data.url) {
      return (
        <Link 
          href={data.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:underline text-center block rounded-xl border py-2 px-4 text-gray-800 hover:bg-gray-600 hover:text-white transition-colors"
        >
          👥 {data.nome}
        </Link>
      );
    }

    return (
      <ul className="space-y-2">
        {Object.entries(data).map(([key, val]) => (
          <li key={key}>
            {typeof val === "string" ? (
              <Link
                href={val}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-center block rounded-xl border py-2 px-4 text-gray-800 hover:bg-gray-600 hover:text-white transition-colors"
              >
                👥 {key}
              </Link>
            ) : (
              <div>
                <span className="font-bold text-gray-900 block mb-2">{key}</span>
                <RecursiveList data={val} />
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  }

  // Fallback se arriva direttamente una stringa isolata
  if (typeof data === "string") {
    return <Link 
        href={data} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:underline text-center block rounded-xl border py-2 px-4 text-gray-800 hover:bg-gray-600 hover:text-white"
      >
        👥 {data}
      </Link>
  }

  return null;
}