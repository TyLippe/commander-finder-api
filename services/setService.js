const axios = require("axios");

class SetService {
  apiUrl = "https://api.scryfall.com";

  constructor() {}

  async getSets() {
    try {
      const headers = { "User-Agent": "CommanderCollector/1.0" };

      const response = await axios.get(
        this.apiUrl + "/sets?type=" + "expansion",
        {
          headers,
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching sets:", error);
      throw error;
    }
  }
}

module.exports = SetService;
