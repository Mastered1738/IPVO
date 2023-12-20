import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, indexed: 1 },
  plot: { type: String },
  title: { type: String, indexed: true },
  genres: { type: [String], indexed: 1 },
  awards: {
    nominations: { type: Number, indexed: 1 },
  },
  year: { type: Number, indexed: 1 },
});

export class Movie {
  constructor(
    public id: string,
    public plot: string,
    public genres: Array<string>,
  ) {}
}
