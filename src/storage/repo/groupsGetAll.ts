import AsyncStorage from "@react-native-async-storage/async-storage";

import { REPO_COLLECTION } from "../storageConfig";

export async function groupsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(REPO_COLLECTION);

    const repo: string[] = storage ? JSON.parse(storage) : [];

    return repo;
  } catch (error) {
    throw error;
  }
}
