CREATE DATABASE golf_blog;

CREATE TABLE golf_blogger(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  img VARCHAR(255),
  google_id VARCHAR NOT NULL UNIQUE
  email VARCHAR(40))



                                     Table "public.golf_blogger"
  Column   |          Type          | Collation | Nullable |                 Default
-----------+------------------------+-----------+----------+------------------------------------------
 id        |
 username  |
 img       |
 google_id |
 email     |




CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author INT references golf_blogger(id) NOT NULL,
  posting_date DATE NOT NULL);


CREATE TABLE golf_courses (
  id INT,
  name VARCHAR(255) NOT NULL,
  location VARCHAR,
  price_range INT,
  ratings INT);
