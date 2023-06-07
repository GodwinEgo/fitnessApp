import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
const app = express();

// Middleware
app.use(express.json());
dotenv.config();

// MONGOOSE SETUP
const PORT = process.env.PORT || 6001;
mongoose
  .connect( process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } ).then( () =>
  {
    app.listen( PORT, () => console.log( `SERVER PORT: ${ PORT }` ) );
  } ).catch( ( error ) => console.log( `${ error } did not connect` ) ); 


// Define Workout model
const Workout = mongoose.model('Workout', {
  exercise: String,
  duration: Number,
});

// Define API routes
app.post('/workouts', async (req, res) => {
  try {
    const { exercise, duration } = req.body;
    const workout = new Workout({ exercise, duration });
    await workout.save();
    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({ error: 'Failed to log workout' });
  }
});

app.get('/workouts', async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
