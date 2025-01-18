export const catApiService = {
  getCatFacts: async () => {
    try {
      const response = await fetch("https://catfact.ninja/facts");
      if (!response.ok) {
        return "Error fetching data from the server";
      }
      return response.json();
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw err;
        return err;
      }
      return "Unknown error occurred";
    }
  },
};
