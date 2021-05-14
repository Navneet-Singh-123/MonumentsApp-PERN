CREATE TABLE monuments(
    id BIGSERIAL NOT NULL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL, 
    entry_fees INT NOT NULL check(entry_fees >= 1 and entry_fees <=5)
);


