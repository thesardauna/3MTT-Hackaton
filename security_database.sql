CREATE DATABASE SecurityDatabase;
CREATE TABLE Building (
    building_id SERIAL PRIMARY KEY,
    location POINT NOT NULL,
    size_sqft INT NOT NULL,
    security_level VARCHAR(50),
    access_points JSONB,
    camera_coverage BOOLEAN DEFAULT FALSE,
    other_attributes JSONB
);
CREATE TABLE Household (
    household_id SERIAL PRIMARY KEY,
    building_id INT NOT NULL REFERENCES Building(building_id) ON DELETE CASCADE,
    household_size INT NOT NULL,
    registered_weapons JSONB,
    emergency_contacts JSONB,
    security_incidents JSONB,
    other_attributes JSONB
);
CREATE TABLE Individual (
    individual_id SERIAL PRIMARY KEY,
    household_id INT NOT NULL REFERENCES Household(household_id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    nin VARCHAR(11) UNIQUE NOT NULL,
    criminal_record BOOLEAN DEFAULT FALSE,
    security_clearance VARCHAR(50),
    recent_activity_log JSONB,
    contact_number VARCHAR(15),
    other_attributes JSONB
);
