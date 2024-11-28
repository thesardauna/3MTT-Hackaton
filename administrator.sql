CREATE TABLE Administrator (
    admin_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role ENUM('SuperAdmin', 'Admin', 'Moderator') DEFAULT 'Admin',
    last_login TIMESTAMP,
    account_status ENUM('Active', 'Inactive', 'Suspended') DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    permissions JSONB,
    super_admin_id INT REFERENCES Administrator(admin_id)
);
