import mongoose, { Document } from 'mongoose';
export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    profile: {
        firstName: string;
        lastName: string;
        avatar?: string;
    };
    stats: {
        totalActivities: number;
        totalDistance: number;
        totalDuration: number;
        score: number;
    };
    teams: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IUser>;
//# sourceMappingURL=User.d.ts.map