INSERT INTO wizard_user (name, patronus, username, password)
VALUES
($1, $2, $3, $4)
RETURNING *;
