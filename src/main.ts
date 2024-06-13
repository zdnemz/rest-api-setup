import generate from "../lib/autoGenerate";
import { logger } from "@/utils";
import { env, app /* connectDatabase */ } from "@/config";

// make sure routes are generated in development
if (env.NODE_ENV === "development" && generate) {
  generate(__dirname);
}

app.listen(3000, async () => {
  // connectDatabase()
  logger.info(`Server running on port ${3000}`);
});
