import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/health", (_req, res) => {
  res.json({ status: "ok", note: "TODO add real routes later" });
});

// TODO: add controllers + services once we remember the pattern
app.listen(PORT, () => {
  console.log("Server kinda started on", PORT);
});
import employeesRouter from './routes/employees.routes';
// TODO: import requireAuth middleware once Clerk is set up
// app.use('/api', requireAuth); // Protect all API routes

app.use('/api/employees', employeesRouter);

