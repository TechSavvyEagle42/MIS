-- Table to store information about provinces.
CREATE TABLE provinces (
    province_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    province_name VARCHAR(255) UNIQUE NOT NULL COMMENT 'Name of the province'
);

-- Table to store information about municipalities, linked to provinces.
CREATE TABLE municipalities (
    municipality_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    municipality_name VARCHAR(255) UNIQUE NOT NULL COMMENT 'Name of the municipality',
    province_id INT UNSIGNED NOT NULL COMMENT 'ID of the associated province',
    FOREIGN KEY (province_id) REFERENCES provinces(province_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Table to store information about barangays, linked to municipalities.
CREATE TABLE barangays (
    barangay_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    barangay_name VARCHAR(255) UNIQUE NOT NULL COMMENT 'Name of the barangay',
    municipality_id INT UNSIGNED NOT NULL COMMENT 'ID of the associated municipality',
    FOREIGN KEY (municipality_id) REFERENCES municipalities(municipality_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Table to store information about streets, linked to barangays.
CREATE TABLE streets (
    street_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    street_name VARCHAR(255) UNIQUE NOT NULL COMMENT 'Name of the street',
    barangay_id INT UNSIGNED NOT NULL COMMENT 'ID of the associated barangay',
    FOREIGN KEY (barangay_id) REFERENCES barangays(barangay_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Table to store information about house numbers, linked to streets.
CREATE TABLE house_numbers (
    house_number_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    house_number VARCHAR(20) UNIQUE NOT NULL COMMENT 'House number',
    street_id INT UNSIGNED NOT NULL COMMENT 'ID of the associated street',
    FOREIGN KEY (street_id) REFERENCES streets(street_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Table to store status options.
CREATE TABLE status (
    status_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    status_name VARCHAR(255) UNIQUE NOT NULL COMMENT 'Name of the status (e.g., active, inactive)'
);

-- Table to store detailed addresses, including house number, street, barangay, municipality, and province.
CREATE TABLE addresses (
    address_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    house_number_id INT UNSIGNED COMMENT 'ID of the house number',
    street_id INT UNSIGNED COMMENT 'ID of the street',
    barangay_id INT UNSIGNED COMMENT 'ID of the barangay',
    municipality_id INT UNSIGNED COMMENT 'ID of the municipality',
    province_id INT UNSIGNED COMMENT 'ID of the province',
    FOREIGN KEY (house_number_id) REFERENCES house_numbers(house_number_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (street_id) REFERENCES streets(street_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (barangay_id) REFERENCES barangays(barangay_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (municipality_id) REFERENCES municipalities(municipality_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (province_id) REFERENCES provinces(province_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Table to store contact information.
CREATE TABLE contacts (
    contact_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE COMMENT 'Email address',
    mobile VARCHAR(20) UNIQUE COMMENT 'Mobile number'
);

-- Table to store occupation options.
CREATE TABLE occupations (
    occupation_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    occupation_name VARCHAR(255) UNIQUE NOT NULL COMMENT 'Name of the occupation'
);

-- Table to store nationality options.
CREATE TABLE nationalities (
    nationality_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nationality_name VARCHAR(255) UNIQUE NOT NULL COMMENT 'Name of the nationality'
);

-- Table to store religion options.
CREATE TABLE religions (
    religion_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    religion_name VARCHAR(255) UNIQUE NOT NULL COMMENT 'Name of the religion'
);

-- Table to store benefits information.
CREATE TABLE benefits (
    benefit_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    benefit_name VARCHAR(255) NOT NULL COMMENT 'Name of the benefit'
);

-- Table to store information about citizens, including personal details and linked entities like status, address, contact, etc.
CREATE TABLE citizens (
    citizen_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL COMMENT 'Full name of the citizen',
    first_name VARCHAR(255) NOT NULL COMMENT 'First name',
    last_name VARCHAR(255) NOT NULL COMMENT 'Last name',
    middle_name VARCHAR(255) NOT NULL COMMENT 'Middle name',
    gender ENUM('Male', 'Female', 'Other') COMMENT 'Gender of the citizen',
    date_of_birth DATE COMMENT 'Date of birth',
    status_id INT UNSIGNED COMMENT 'ID of the status',
    address_id BIGINT UNSIGNED COMMENT 'ID of the address',
    contact_id BIGINT UNSIGNED COMMENT 'ID of the contact',
    occupation_id INT UNSIGNED COMMENT 'ID of the occupation',
    nationality_id INT UNSIGNED COMMENT 'ID of the nationality',
    religion_id INT UNSIGNED COMMENT 'ID of the religion',
    benefit_id INT UNSIGNED COMMENT 'ID of the benefit',
    FOREIGN KEY (status_id) REFERENCES status(status_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (address_id) REFERENCES addresses(address_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (contact_id) REFERENCES contacts(contact_id) ON DELETE CASCADE ON UPDATE CASCADE,    
    FOREIGN KEY (occupation_id) REFERENCES occupations(occupation_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (nationality_id) REFERENCES nationalities(nationality_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (religion_id) REFERENCES religions(religion_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (benefit_id) REFERENCES benefits(benefit_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Table to store types of documents.
CREATE TABLE documents (
    document_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL COMMENT 'Title of the document'
);

-- Table to store information about issued documents, including document type, citizen ID, and issuance date.
CREATE TABLE issued_documents (
    issued_document_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    document_id INT UNSIGNED NOT NULL COMMENT 'ID of the document type',
    citizen_id BIGINT UNSIGNED NOT NULL COMMENT 'ID of the citizen',
    issued_date DATE NOT NULL COMMENT 'Date of issuance',
    FOREIGN KEY (document_id) REFERENCES documents(document_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (citizen_id) REFERENCES citizens(citizen_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Table to store user roles.
CREATE TABLE roles (
    role_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(255) UNIQUE NOT NULL COMMENT 'Name of the role (e.g., admin, user)'
);

-- Table to store user authentication information, including username, password, role, and linked location IDs.
CREATE TABLE auth (
    user_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL COMMENT 'Username for authentication',
    password VARCHAR(255) NOT NULL COMMENT 'Password for authentication',
    role_id INT UNSIGNED NOT NULL COMMENT 'ID of the role',
    barangay_id INT UNSIGNED NOT NULL COMMENT 'ID of the barangay',
    municipality_id INT UNSIGNED NOT NULL COMMENT 'ID of the municipality',
    province_id INT UNSIGNED NOT NULL COMMENT 'ID of the province',
    FOREIGN KEY (role_id) REFERENCES roles(role_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (barangay_id) REFERENCES barangays(barangay_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (municipality_id) REFERENCES municipalities(municipality_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (province_id) REFERENCES provinces(province_id) ON DELETE CASCADE ON UPDATE CASCADE
);
