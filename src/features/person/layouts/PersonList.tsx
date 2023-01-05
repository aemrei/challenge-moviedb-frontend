import { PersonCard } from "../components/PersonCard";

interface PersonListProps {
  people: Person[];
  title?: string;
  assetUrl?: string;
}

export const PersonList: React.FC<PersonListProps> = ({
  assetUrl = process.env.REACT_APP_ASSET_ROOT_URL,
  title,
  people,
}) => {
  return (
    <div>
      {title && <h2 className="text-3xl font-bold mb-3">{title}</h2>}
      <ul className="flex flex-col gap-y-4">
        {people.map((person) => (
          <li key={person.id}>
            <PersonCard person={person} assetUrl={assetUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
};
