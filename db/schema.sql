DROP DATABASE IF EXISTS techblog_db;
CREATE DATABASE techblog_db;

USE techblog_db;

/**Create user account table to represent
 the participants' account in the crowd funding project*/
-- CREATE TABLE user_account (
--   user_id int NOT NULL auto_increment,
--   last_name varchar(64),
--   first_name varchar(64),
--   user_name varchar(128) NOT NULL,
--   password varchar(255),
--   email varchar(120),
--   projects_supported int,
--   total_amount decimal(12, 2),
--   country_id int,
--   PRIMARY KEY (user_id),
--   FOREIGN KEY (country_id) REFERENCES country(country_id)
-- );
-- /**Create the organization table, then alter the 
--  participant table to create a foreign key for organization_id*/
-- CREATE TABLE post (
--   post_id int NOT NULL,
--   post_name varchar(255),
--   PRIMARY KEY (post_id)
--   post_description text,
--   start_date date,
--   FOREIGN KEY (post_id) REFERENCES user_account(user_id)
-- );
-- CREATE TABLE comment(
--   comment_id int NOT NULL,
--   project_id int,
--   user_account_id int,
--   FOREIGN KEY(user_account_id) REFERENCES user_account (user_id),
--   time_stamp timestamp,
--   PRIMARY KEY(comment_id)
-- );
