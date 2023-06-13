import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  userName: {
    type: String,
    required: [true, 'userName is required.'],
  },
  position: {
    type: String,
    required: [true, 'position is required.'],
  },
  
  userEmail: {
    type: String,
    required: [true, 'userEmail is required.'],
  },
  experience: {
    type: String,
    required: [true, 'experience is required.'],
  },
  location: {
    type: String,
    required: [true, 'location is required.'],
  },
  employment: {
    type: String,
    required: [true, 'employment is required.'],
  },
  department: {
    type: String,
    required: [true, 'department is required.'],
  },
  telephone: {
    type: String,
    required: [true, 'telephone is required.'],
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;