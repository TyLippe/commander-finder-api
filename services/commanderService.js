const axios = require("axios");

class CommanderService {
  apiUrl = "https://api.scryfall.com";

  constructor() {}

  async getCommanders(next_page) {
    try {
      const headers = { "User-Agent": "CommanderCollector/1.0" };

      if (next_page) {
        const response = await axios.get(next_page, {
          headers,
        });
        return response.data;
      } else {
        const params = { q: "is:commander" };

        const response = await axios.get(this.apiUrl + "/cards/search", {
          headers,
          params,
        });
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching commanders:", error);
      throw error;
    }
  }

  async getFilteredCommanders(next_page, filterString) {
    const headers = { "User-Agent": "CommanderCollector/1.0" };

    try {
      if (next_page) {
        const response = await axios.get(next_page, {
          headers,
        });
        return response.data;
      } else {
        const response = await axios.get(this.apiUrl + "/cards/search", {
          headers,
          params: {
            q: filterString,
          },
        });
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching commanders:", error);
      throw error;
    }
  }

  async getRandomCommanders(count) {
    const headers = { "User-Agent": "CommanderCollector/1.0" };

    try {
      const randomCards = [];
      const params = { q: "is:commander legal:commander" };

      for (let i = 0; i < count; i++) {
        const response = await axios.get(this.apiUrl + "/cards/random", {
          headers,
          params,
        });
        randomCards.push(response.data);
      }
      return randomCards;
    } catch (error) {
      console.error("Error fetching commanders:", error);
      throw error;
    }
  }
}

module.exports = CommanderService;
