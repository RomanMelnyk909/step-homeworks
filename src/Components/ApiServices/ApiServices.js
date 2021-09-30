class ApiService {
  URL = "https://step-contacts-default-rtdb.firebaseio.com/list.json";

  async getContactList() {
    const list = await fetch(this.URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data === null) {
          return [];
        } else {
          return data;
        }
      })
      .catch((err) => console.log(err));
    return list;
  }
  async updateDatabase(list) {
    const result = await fetch(this.URL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(list),
    });
    return result;
  }
}

const API = new ApiService();
export default API;
