-- Application initialization migration
-- This migration runs after all module migrations

-- List all tables (SQLite equivalent of SHOW TABLES)
SELECT name FROM sqlite_master WHERE type='table' ORDER BY name;