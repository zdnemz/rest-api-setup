import supertest from "supertest";
import { app } from "../src/config";

const request = supertest(app);

describe("Health", () => {
  it("should return 200", async () => {
    const response = await request.get("/api/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      code: 200,
      message: "OK",
    });
  });
});
