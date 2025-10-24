const CLIENT_ID = "fbd9f551ab954f219d1cb751e9ee910c";
const CLIENT_SECRET = "e875203532574b6db787e5d2894bd789";

let accessToken: string | null = null;
let tokenExpiry: number | null = null;

/**
 * Obtém um novo access token usando o Client Credentials Flow
 */
async function getAccessToken() {
  // Verifica se o token ainda é válido
  if (accessToken && tokenExpiry && Date.now() < tokenExpiry) {
    return accessToken;
  }

  const url = "https://accounts.spotify.com/api/token";
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch access token: ${response.statusText}`);
  }

  const data = await response.json();
  accessToken = data.access_token;
  // Definir expiração para 55 minutos para garantir margem de segurança
  tokenExpiry = Date.now() + (data.expires_in - 300) * 1000;

  return accessToken;
}

/**
 * Busca as playlists públicas de um usuário específico
 */
export async function getUserPlaylists(
  userId: string,
  limit: number = 10,
  offset: number = 0
) {
  const token = await getAccessToken();

  const url = `https://api.spotify.com/v1/users/${userId}/playlists?limit=${limit}&offset=${offset}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      // Token expirado ou inválido, limpar e tentar novamente
      accessToken = null;
      tokenExpiry = null;
      return getUserPlaylists(userId, limit, offset); // Tentar novamente
    }
    throw new Error(`Failed to fetch playlists: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
