CREATE DATABASEdb: golf_girls_blog

CREATE TABLE blog_user (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  img VARCHAR(255) NOT NULL,
  google_id INT NOT NULL UNIQUE
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  body VARCHAR(255) NOT NULL,
  author_id INT references blog_user(id) NOT NULL
);

