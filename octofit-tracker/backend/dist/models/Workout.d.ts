import mongoose, { Document } from 'mongoose';
export interface IWorkout extends Document {
    userId: mongoose.Types.ObjectId;
    name: string;
    type: string;
    exercises: Array<{
        name: string;
        sets: number;
        reps: number;
        weight?: number;
    }>;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    estimatedDuration: number;
    targetMuscles: string[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const Workout: mongoose.Model<IWorkout, {}, {}, {}, mongoose.Document<unknown, {}, IWorkout, {}, mongoose.DefaultSchemaOptions> & IWorkout & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IWorkout>;
//# sourceMappingURL=Workout.d.ts.map