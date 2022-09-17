import { Switch as PaperSwitch } from "react-native-paper";

export const Switch = ({
  isActive,
  onToggle,
}: {
  isActive?: boolean;
  onToggle: () => void;
}) => {
  return <PaperSwitch value={isActive} onChange={onToggle} />;
};
