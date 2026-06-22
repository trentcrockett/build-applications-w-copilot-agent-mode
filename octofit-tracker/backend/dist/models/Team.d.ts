import mongoose, { Document } from 'mongoose';
export interface ITeam extends Document {
    name: string;
    description: string;
    members: mongoose.Types.ObjectId[];
    stats: {
        totalScore: number;
        totalDistance: number;
        totalActivities: number;
    };
    createdBy: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Team: mongoose.Model<ITeam, {}, {}, {}, mongoose.Document<unknown, {}, ITeam, {}, mongoose.DefaultSchemaOptions> & ITeam & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ITeam>;
//# sourceMappingURL=Team.d.ts.map