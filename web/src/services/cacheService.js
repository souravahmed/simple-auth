const url = "http://localhost:3000/";
class CacheService {
  static async getCached(key) {
    const cache = await caches.open(url);
    const response = await cache.match(key);
    if (response) {
      const parsedResponse = await response.json();
      return parsedResponse.user;
    }
    return null;
  }
  static async writeCached(key, data) {
    const cache = await caches.open(url);
    await cache.put(key, new Response(JSON.stringify({ user: { ...data } })));
  }

  static clearCache() {
    caches.delete(url);
  }
}

export default CacheService;
