import AsyncStorage from "@react-native-async-storage/async-storage";

import { REPO_COLLECTION } from "../storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(repoDeleted: string) {
  try {
    const storedGroups = await groupsGetAll();

    const groups = storedGroups.filter((repo: string) => repo !== repoDeleted);

    await AsyncStorage.setItem(REPO_COLLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${REPO_COLLECTION}-${repoDeleted}`);
  } catch (error) {
    throw error;
  }
}
