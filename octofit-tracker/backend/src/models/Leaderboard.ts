import mongoose, { Schema, Document } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  userId?: mongoose.Types.ObjectId;
  teamId?: mongoose.Types.ObjectId;
  rank: number;
  score: number;
  type: 'individual' | 'team';
  period: 'weekly' | 'monthly' | 'alltime';
  updatedAt: Date;
}

const leaderboardSchema = new Schema<ILeaderboardEntry>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
    rank: { type: Number, required: true },
    score: { type: Number, required: true },
    type: { type: String, required: true, enum: ['individual', 'team'] },
    period: { type: String, required: true, enum: ['weekly', 'monthly', 'alltime'] },
  },
  { timestamps: true }
);

export const Leaderboard = mongoose.model<ILeaderboardEntry>('Leaderboard', leaderboardSchema);
