import express from "express";
import usersRouter from "./routes/users.js";
import bookingsRouter from "./routes/bookings.js";
import propertiesRouter from "./routes/properties.js";
import reviewsRouter from "./routes/reviews.js";
import hostsRouter from "./routes/hosts.js";
import amenitiesRouter from "./routes/amenities.js";
import loginRouter from "./routes/login.js";
import errorHandler from "./middleware/errorHandler.js";
import log from "./middleware/logMiddleware.js";

const app = express();

// Global middleware
app.use(express.json());
app.use(log);

// Resource routes
app.use("/users", usersRouter);
app.use("/bookings", bookingsRouter);
app.use("/properties", propertiesRouter);
app.use("/reviews", reviewsRouter);
app.use("/hosts", hostsRouter);
app.use("/amenities", amenitiesRouter);

// Login route
app.use("/login", loginRouter);

// Error handling
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
