import { GroupItem } from "./components/group_item/group_item";
import GetGroupJson from "./server_functions/get_groups_json/get_group_json";

export default function GroupsPage() {
  const allGroups = GetGroupJson()

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">AREA ETF - GRUPPI</h1>

      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">BACHELOR/TRIENNALE:</h2>
          <ul className="space-y-3">
            {allGroups?.bachelor?.map((currentGroup, index) => (
              Object.entries(currentGroup).map(([key, val]) => (
                <li key={`bach-${index}-${key}`}>
                  <GroupItem label={key} data={val} />
                </li>
              ))
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">MASTER/MAGISTRALE</h2>
          <ul className="space-y-3">
            {allGroups?.master?.map((currentGroup, index) => (
              Object.entries(currentGroup).map(([key, val]) => (
                <li key={`mast-${index}-${key}`}>
                  <GroupItem label={key} data={val} />
                </li>
              ))
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}