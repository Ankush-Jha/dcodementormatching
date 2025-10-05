-- DCODE Platform Database Schema

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(20) CHECK (role IN ('mentor', 'mentee', 'admin')) NOT NULL,
    avatar_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT true
);

-- Mentor profiles
CREATE TABLE IF NOT EXISTS mentor_profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE UNIQUE,
    bio TEXT,
    expertise_areas TEXT[], -- Array of technologies they can mentor
    experience_years INTEGER,
    max_mentees INTEGER DEFAULT 3,
    current_mentees INTEGER DEFAULT 0,
    teaching_style VARCHAR(50), -- 'hands-on', 'theory-first', 'project-based', 'adaptive'
    github_username VARCHAR(255),
    linkedin_url TEXT,
    timezone VARCHAR(50),
    rating DECIMAL(3,2) DEFAULT 0.0,
    total_reviews INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Mentee profiles  
CREATE TABLE IF NOT EXISTS mentee_profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE UNIQUE,
    bio TEXT,
    current_skills JSONB, -- {skill: level} pairs, e.g., {"JavaScript": "intermediate", "React": "beginner"}
    skills_to_learn TEXT[], -- Array of skills they want to learn
    coding_goals TEXT,
    timeline VARCHAR(20), -- '3-months', '6-months', '1-year'
    learning_approach VARCHAR(50), -- 'visual', 'hands-on', 'reading', 'discussion'
    feedback_style VARCHAR(30), -- 'immediate', 'weekly', 'milestone'
    learning_pace VARCHAR(20), -- 'fast', 'moderate', 'slow'
    hours_per_week INTEGER,
    github_username VARCHAR(255),
    timezone VARCHAR(50),
    onboarding_completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Matches table
CREATE TABLE IF NOT EXISTS matches (
    id SERIAL PRIMARY KEY,
    mentor_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    mentee_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    compatibility_score INTEGER CHECK (compatibility_score >= 0 AND compatibility_score <= 100),
    status VARCHAR(20) CHECK (status IN ('pending', 'accepted', 'declined', 'active', 'completed')) DEFAULT 'pending',
    requested_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    responded_at TIMESTAMP,
    started_at TIMESTAMP,
    ended_at TIMESTAMP,
    feedback TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(mentor_id, mentee_id)
);

-- Messages table
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    match_id INTEGER REFERENCES matches(id) ON DELETE CASCADE,
    sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_read BOOLEAN DEFAULT false
);

-- Sessions/Meetings table
CREATE TABLE IF NOT EXISTS sessions (
    id SERIAL PRIMARY KEY,
    match_id INTEGER REFERENCES matches(id) ON DELETE CASCADE,
    scheduled_at TIMESTAMP NOT NULL,
    duration_minutes INTEGER DEFAULT 60,
    meeting_url TEXT,
    meeting_type VARCHAR(20) DEFAULT 'google-meet', -- 'google-meet', 'zoom', 'other'
    notes TEXT,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Progress tracking
CREATE TABLE IF NOT EXISTS progress_metrics (
    id SERIAL PRIMARY KEY,
    match_id INTEGER REFERENCES matches(id) ON DELETE CASCADE,
    metric_type VARCHAR(20) CHECK (metric_type IN ('meeting', 'contribution', 'skill', 'goal')),
    metric_name VARCHAR(255),
    value INTEGER,
    notes TEXT,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_mentor_profiles_user_id ON mentor_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_mentee_profiles_user_id ON mentee_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_matches_mentor_id ON matches(mentor_id);
CREATE INDEX IF NOT EXISTS idx_matches_mentee_id ON matches(mentee_id);
CREATE INDEX IF NOT EXISTS idx_matches_status ON matches(status);
CREATE INDEX IF NOT EXISTS idx_messages_match_id ON messages(match_id);
CREATE INDEX IF NOT EXISTS idx_sessions_match_id ON sessions(match_id);
