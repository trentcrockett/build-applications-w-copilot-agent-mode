import mongoose, { Document } from 'mongoose';
export interface ILeaderboardEntry extends Document {
    userId?: mongoose.Types.ObjectId;
    teamId?: mongoose.Types.ObjectId;
    rank: number;
    score: number;
    type: 'individual' | 'team';
    period: 'weekly' | 'monthly' | 'alltime';
    updatedAt: Date;
}
export declare const Leaderboard: mongoose.Model<ILeaderboardEntry, {}, {}, {}, mongoose.Document<unknown, {}, ILeaderboardEntry, {}, mongoose.DefaultSchemaOptions> & ILeaderboardEntry & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ILeaderboardEntry>;
//# sourceMappingURL=Leaderboard.d.ts.map