const api = require("../utils/apiClient");

describe("User API Full Flow", () => {
  const user = {
    id: Date.now(),
    username: `n26qauser1-${Date.now()}`,
    firstName: "QAC",
    lastName: "User1",
    email: "qa1.user@n26.com",
    password: "pass12312",
    phone: "12345657890",
    userStatus: 2
  };

  it("POST - Create new request", async () => {
    // CREATE
    const createResponse = await api.post("/user").send(user);
    expect(createResponse.statusCode).toBe(200);

  });

  //UPADTE
  it("Update request", async () => {

  const updatedUser = { ...user, lastName: "Updated" };
  const updateRes = await api.put(`/user/${user.username}`).send(updatedUser);
  expect(updateRes.statusCode).toBe(200);
  });


    // GET
    it("GET user details", async () => {

    const getRes = await api.get(`/user/${user.username}`);
    expect(getRes.statusCode).toBe(200);
    expect(getRes.body.username).toBe(user.username);
    });

    // // UPDATE
    // const updatedUser = { ...user, lastName: "Updated" };
    // const updateRes = await api.put(`/user/${user.username}`).send(updatedUser);
    // expect(updateRes.statusCode).toBe(200);

    // DELETE
    it("Delete user details", async () => {
    const deleteRes = await api.delete(`/user/${user.username}`);
    expect(deleteRes.statusCode).toBe(200);
  });



describe("User API Negative Tests", () => {
    it("should return 404 for non-existent user", async () => {
      const res = await api.get("/user/nonexistinguser123456");
      expect(res.statusCode).toBe(404);
      expect(res.body.message).toBe("User not found");
    });
  
    it("should accept empty payload (expected 200, even though it's not ideal)", async () => {
      const res = await api.post("/user").send({});
      expect(res.statusCode).toBe(200); // Or adjust based on actual response
    });
  
    it("should return 404 when deleting a non-existent user", async () => {
      const res = await api.delete("/user/fakeuser123456");
      expect(res.statusCode).toBe(404);
    });
  });
});


