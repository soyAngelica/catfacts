import { RANDOM_DATA } from "@/utils/randomData";
import ListItem from "../ListItem";
import { ListItemProps } from "../ListItem/ListItem";

interface ListViewProps {
  listItems: string[];
}

const getRandomItem = (arr: typeof RANDOM_DATA) =>
  arr[Math.floor(Math.random() * arr.length)];

const ListView = ({ listItems }: ListViewProps) => {
  const getFactWithProfile: ListItemProps[] = listItems.map((fact) => {
    const randomPerson = getRandomItem(RANDOM_DATA);
    return { fact, ...randomPerson };
  });

  return (
    <div
      className="w-full h-[550px] mx-auto overflow-y-auto"
      style={{
        scrollbarWidth: "thin",
      }}
    >
      {getFactWithProfile.map((item, index) => (
        <ListItem
          key={index}
          fact={item.fact}
          name={item.name}
          profile={item.profile}
        />
      ))}
    </div>
  );
};

export default ListView;
