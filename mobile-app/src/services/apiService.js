//const API_BASE_URL = 'http://10.0.2.2:3000/api/'; // for a web display 
import { API_KEY_IPV4 } from "../../config";
const API_BASE_URL =`http://${API_KEY_IPV4}:3000/api` // résolution: https://stackoverflow.com/questions/60639983/react-native-expo-fetch-throws-network-request-failed

export const apiService = async (endpoint, method = 'GET', data = null) => {
  const headers = {
    'Content-Type': 'application/json',
    // Ajoutez des en-têtes supplémentaires si nécessaire
  };

  const config = {
    method,
    headers,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }
  console.log("je suis DEDANS", `${API_BASE_URL}/${endpoint}`);

  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, config);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(`Erreur lors de l'appel à ${endpoint}:`, error);
    throw error; // Vous pouvez personnaliser la gestion des erreurs selon vos besoins
  }
};