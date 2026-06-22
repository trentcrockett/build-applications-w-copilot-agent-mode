"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = require("../models/User");
const Team_1 = require("../models/Team");
const Activity_1 = require("../models/Activity");
const Leaderboard_1 = require("../models/Leaderboard");
const Workout_1 = require("../models/Workout");
/**
 * Seed the octofit_db database with test data
 *
 * This script populates the database with realistic sample data for:
 * - Users
 * - Teams
 * - Activities
 * - Leaderboard entries
 * - Workouts
 */
const MONGODB_URI = 'mongodb://localhost:27017/octofit_db';
async function seedDatabase() {
    try {
        console.log('🌱 Seeding the octofit_db database with test data...\n');
        await mongoose_1.default.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB\n');
        // Clear existing data
        console.log('🗑️  Clearing existing collections...');
        await User_1.User.deleteMany({});
        await Team_1.Team.deleteMany({});
        await Activity_1.Activity.deleteMany({});
        await Leaderboard_1.Leaderboard.deleteMany({});
        await Workout_1.Workout.deleteMany({});
        console.log('✅ Collections cleared\n');
        // Create Users
        console.log('👥 Creating users...');
        const users = await User_1.User.create([
            {
                username: 'alex_runner',
                email: 'alex@example.com',
                password: 'hashed_password_1',
                profile: {
                    firstName: 'Alex',
                    lastName: 'Johnson',
                },
                stats: {
                    totalActivities: 25,
                    totalDistance: 156.5,
                    totalDuration: 18000,
                    score: 1200,
                },
            },
            {
                username: 'jordan_cyclist',
                email: 'jordan@example.com',
                password: 'hashed_password_2',
                profile: {
                    firstName: 'Jordan',
                    lastName: 'Smith',
                },
                stats: {
                    totalActivities: 18,
                    totalDistance: 342.8,
                    totalDuration: 16200,
                    score: 1100,
                },
            },
            {
                username: 'sam_swimmer',
                email: 'sam@example.com',
                password: 'hashed_password_3',
                profile: {
                    firstName: 'Sam',
                    lastName: 'Williams',
                },
                stats: {
                    totalActivities: 22,
                    totalDistance: 89.3,
                    totalDuration: 14400,
                    score: 950,
                },
            },
            {
                username: 'taylor_fitness',
                email: 'taylor@example.com',
                password: 'hashed_password_4',
                profile: {
                    firstName: 'Taylor',
                    lastName: 'Brown',
                },
                stats: {
                    totalActivities: 30,
                    totalDistance: 125.6,
                    totalDuration: 21600,
                    score: 1350,
                },
            },
        ]);
        console.log(`✅ Created ${users.length} users\n`);
        // Create Teams
        console.log('🏆 Creating teams...');
        const teams = await Team_1.Team.create([
            {
                name: 'Morning Warriors',
                description: 'Early risers committed to fitness',
                members: [users[0]._id, users[1]._id],
                stats: {
                    totalScore: 2300,
                    totalDistance: 499.3,
                    totalActivities: 43,
                },
                createdBy: users[0]._id,
            },
            {
                name: 'Fitness Legends',
                description: 'Elite athletes pushing their limits',
                members: [users[2]._id, users[3]._id],
                stats: {
                    totalScore: 2300,
                    totalDistance: 214.9,
                    totalActivities: 52,
                },
                createdBy: users[2]._id,
            },
        ]);
        console.log(`✅ Created ${teams.length} teams\n`);
        // Create Activities
        console.log('🏃 Creating activities...');
        const activities = await Activity_1.Activity.create([
            {
                userId: users[0]._id,
                type: 'running',
                title: 'Morning Run',
                description: 'Great run around the park',
                distance: 5.2,
                duration: 1800,
                calories: 520,
                date: new Date('2026-06-22'),
                location: 'Central Park',
            },
            {
                userId: users[0]._id,
                type: 'running',
                title: 'Evening Speed Work',
                description: 'Tempo run with intervals',
                distance: 8.5,
                duration: 2700,
                calories: 850,
                date: new Date('2026-06-21'),
                location: 'Riverside Trail',
            },
            {
                userId: users[1]._id,
                type: 'cycling',
                title: 'Long Distance Ride',
                description: 'Scenic bike tour',
                distance: 45.3,
                duration: 7200,
                calories: 1200,
                date: new Date('2026-06-20'),
                location: 'Mountain Route',
            },
            {
                userId: users[2]._id,
                type: 'swimming',
                title: 'Pool Laps',
                description: 'Endurance swimming session',
                distance: 2.4,
                duration: 3600,
                calories: 400,
                date: new Date('2026-06-22'),
                location: 'Municipal Pool',
            },
            {
                userId: users[3]._id,
                type: 'gym',
                title: 'Chest and Triceps',
                description: 'Upper body strength training',
                distance: 0,
                duration: 3600,
                calories: 450,
                date: new Date('2026-06-22'),
                location: 'Fitness Hub Gym',
            },
        ]);
        console.log(`✅ Created ${activities.length} activities\n`);
        // Create Leaderboard Entries
        console.log('📊 Creating leaderboard entries...');
        const leaderboardEntries = await Leaderboard_1.Leaderboard.create([
            // Individual leaderboard
            {
                userId: users[3]._id,
                rank: 1,
                score: 1350,
                type: 'individual',
                period: 'alltime',
            },
            {
                userId: users[0]._id,
                rank: 2,
                score: 1200,
                type: 'individual',
                period: 'alltime',
            },
            {
                userId: users[1]._id,
                rank: 3,
                score: 1100,
                type: 'individual',
                period: 'alltime',
            },
            {
                userId: users[2]._id,
                rank: 4,
                score: 950,
                type: 'individual',
                period: 'alltime',
            },
            // Team leaderboard
            {
                teamId: teams[0]._id,
                rank: 1,
                score: 2300,
                type: 'team',
                period: 'alltime',
            },
            {
                teamId: teams[1]._id,
                rank: 2,
                score: 2300,
                type: 'team',
                period: 'alltime',
            },
        ]);
        console.log(`✅ Created ${leaderboardEntries.length} leaderboard entries\n`);
        // Create Workouts
        console.log('💪 Creating workouts...');
        const workouts = await Workout_1.Workout.create([
            {
                userId: users[0]._id,
                name: 'Beginner Running Plan',
                type: 'cardio',
                exercises: [
                    { name: 'Warm-up jog', sets: 1, reps: 5 },
                    { name: 'Steady run', sets: 1, reps: 30 },
                    { name: 'Cool-down walk', sets: 1, reps: 5 },
                ],
                difficulty: 'beginner',
                estimatedDuration: 40,
                targetMuscles: ['legs', 'cardio'],
            },
            {
                userId: users[1]._id,
                name: 'Advanced Cycling Intervals',
                type: 'cardio',
                exercises: [
                    { name: 'Easy pace', sets: 1, reps: 10 },
                    { name: 'High intensity intervals', sets: 8, reps: 1 },
                    { name: 'Recovery pace', sets: 1, reps: 10 },
                ],
                difficulty: 'advanced',
                estimatedDuration: 60,
                targetMuscles: ['legs', 'cardio'],
            },
            {
                userId: users[2]._id,
                name: 'Swimming Endurance',
                type: 'cardio',
                exercises: [
                    { name: 'Freestyle laps', sets: 1, reps: 40 },
                    { name: 'Backstroke laps', sets: 1, reps: 20 },
                ],
                difficulty: 'intermediate',
                estimatedDuration: 60,
                targetMuscles: ['full-body', 'cardio'],
            },
            {
                userId: users[3]._id,
                name: 'Full Body Strength',
                type: 'strength',
                exercises: [
                    { name: 'Squats', sets: 4, reps: 8, weight: 185 },
                    { name: 'Bench press', sets: 4, reps: 8, weight: 225 },
                    { name: 'Deadlifts', sets: 3, reps: 5, weight: 315 },
                    { name: 'Pull-ups', sets: 3, reps: 10 },
                ],
                difficulty: 'advanced',
                estimatedDuration: 90,
                targetMuscles: ['chest', 'back', 'legs', 'shoulders'],
            },
        ]);
        console.log(`✅ Created ${workouts.length} workouts\n`);
        console.log('🎉 Database seeding completed successfully!');
        console.log(`\n📈 Summary:`);
        console.log(`   - Users: ${users.length}`);
        console.log(`   - Teams: ${teams.length}`);
        console.log(`   - Activities: ${activities.length}`);
        console.log(`   - Leaderboard entries: ${leaderboardEntries.length}`);
        console.log(`   - Workouts: ${workouts.length}`);
        await mongoose_1.default.disconnect();
        console.log('\n✅ Disconnected from MongoDB');
    }
    catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
//# sourceMappingURL=seed.js.map