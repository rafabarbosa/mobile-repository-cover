import BACKGROUNDS from "../../contants/colors.json";
import { useGeneral } from "../../contexts/GeneralContext";

export default function BackgroundPicker() {
  const { background, setBackground } = useGeneral();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const title = e.target.value;
    const element = BACKGROUNDS.find((bg) => bg.title === title);

    setBackground(element);
  };

  return (
    <div>
      <select defaultValue={background.title} onChange={handleChange}>
        <option value="">-</option>

        {BACKGROUNDS.map((background) => (
          <option key={background.title} value={background.title}>
            {background.title}
          </option>
        ))}
      </select>
    </div>
  );
}
