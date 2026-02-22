import { useSignOut } from "@/hooks/useSignOut";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";

const SignOutButton = () => {
  const { handleSignOut } = useSignOut();

  return (
    <Pressable onPress={handleSignOut}>
      <Feather name="log-out" size={24} color={"#E0245E"} />
    </Pressable>
  );
};

export default SignOutButton;
