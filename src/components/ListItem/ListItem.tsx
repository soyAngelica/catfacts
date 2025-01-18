export interface ListItemProps {
  fact: string;
  name: string;
  profile: string;
}

const ListItem = ({ fact, name, profile }: ListItemProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center">
      <img src={profile} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="text-gray-600 font-semibold font-lg">{name}</p>
        <p className="text-gray-500 italic">{fact}</p>
      </div>
    </div>
  );
};

export default ListItem;
