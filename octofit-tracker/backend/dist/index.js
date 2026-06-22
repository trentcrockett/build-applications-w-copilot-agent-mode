"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = __importDefault(require("./routes/users"));
const teams_1 = __importDefault(require("./routes/teams"));
const activities_1 = __importDefault(require("./routes/activities"));
const leaderboard_1 = __importDefault(require("./routes/leaderboard"));
const workouts_1 = __importDefault(require("./routes/workouts"));
const app = (0, express_1.default)();
const PORT = 8000;
const MONGODB_URI = 'mongodb://localhost:27017/octofit_db';
// Codespaces-aware API URL support
const getApiUrl = () => {
    const codespaceName = process.env.CODESPACE_NAME;
    if (codespaceName) {
        return `https://${codespaceName}-${PORT}.preview.app.github.dev`;
    }
    return `http://localhost:${PORT}`;
};
// Middleware
app.use(express_1.default.json());
// CORS (if needed for development)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// MongoDB Connection
mongoose_1.default.connect(MONGODB_URI)
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
    console.error('MongoDB connection error:', error);
});
// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'OctoFit Tracker API',
        apiUrl: getApiUrl(),
        endpoints: {
            users: '/api/users',
            teams: '/api/teams',
            activities: '/api/activities',
            leaderboard: '/api/leaderboard',
            workouts: '/api/workouts',
            health: '/health'
        }
    });
});
app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});
// API Routes
app.use('/api/users', users_1.default);
app.use('/api/teams', teams_1.default);
app.use('/api/activities', activities_1.default);
app.use('/api/leaderboard', leaderboard_1.default);
app.use('/api/workouts', workouts_1.default);
// 404 Handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});
// Start Server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 OctoFit Tracker API Server`);
    console.log(`📍 Running on http://0.0.0.0:${PORT}`);
    console.log(`🌐 API URL: ${getApiUrl()}`);
    console.log(`📚 Endpoints: http://localhost:${PORT}/`);
});
//# sourceMappingURL=index.js.map