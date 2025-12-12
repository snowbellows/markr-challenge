import express from "express";
import type { Request, Response, NextFunction, Express } from "express";
const app: Express = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.get(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.status(200).json({
      message: "Hello World!",
      success: true,
    });
  }
);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
