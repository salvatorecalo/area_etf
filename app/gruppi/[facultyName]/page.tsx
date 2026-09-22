import Link from "next/link";
import { RecursiveList } from "../components/recursive_list/recursive_list";
import GetGroupJson from "../server_functions/get_groups_json/get_group_json";

function findFacultyData(allGroups: any, facultyName: string) {
  console.log(`faculty name ${facultyName}`)
  for (const group of allGroups?.bachelor || []) {
    console.log(group)
    if (group[facultyName]) return group[facultyName];
  }
  for (const group of allGroups?.master || []) {
    console.log(group)
    if (group[facultyName]) return group[facultyName];
  }
  return null;
}

export default async function FacultyPage({
  params,
}: {
  params: Promise<{ facultyName: string }>;
}) {
  const { facultyName } = await params;
  const decodedName = decodeURIComponent(facultyName);

  const allGroups = GetGroupJson()
  const facultyData = findFacultyData(allGroups, decodedName)

  if (!facultyData) {
    return (
      <section className="p-6">
        <h1 className="text-2xl font-bold text-red-500 text-center">Nessun gruppo trovato</h1>
        <Link href="/gruppi" className="text-sm text-gray-500 hover:text-gray-900 mb-6 inline-block">
          &larr; Torna ai gruppi
        </Link>
      </section>
    );
  }

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <Link href="/gruppi" className="text-sm text-gray-500 hover:text-gray-900 mb-6 inline-block">
        &larr; Torna ai gruppi
      </Link>

      <h1 className="text-3xl font-bold mb-6 text-center">{decodedName}</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm ">
        <RecursiveList data={facultyData} />
      </div>
    </section>
  );
}