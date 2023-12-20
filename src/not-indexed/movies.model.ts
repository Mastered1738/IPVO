import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId },
  plot: { type: String },
  title: { type: String },
  genres: { type: [String] },
  awards: {
    nominations: { type: Number },
  },
  year: { type: Number },
});

export class Movie {
  constructor(
    public id: string,
    public plot: string,
    public genres: Array<string>,
  ) {}
}
