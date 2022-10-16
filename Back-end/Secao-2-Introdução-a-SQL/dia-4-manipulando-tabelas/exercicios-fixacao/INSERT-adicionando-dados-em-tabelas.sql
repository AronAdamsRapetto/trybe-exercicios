-- Insira um novo funcionário na tabela sakila.staff.
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione Table Inspector.
-- Clique na aba columns e verifique quais campos aceitam nulos para te guiar.
-- Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa exploração!
INSERT INTO staff (first_name, last_name, address_id, store_id, active, username)
VALUES ('Aron', 'Adams', 1, 1, 1, 'Pira');

SELECT * FROM staff;

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO staff (first_name, last_name, address_id, store_id, active, username) VALUES 
('Andrea', 'Lages', 1, 1, 1, 'Déia'),
('Laura', 'Lages', 1, 1, 1, 'Lola');

SELECT * FROM staff;

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM customer
LIMIT 5;

SELECT * FROM actor;

-- Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO category (name) VALUES
('Pastelão'),
('Trash');

SELECT * FROM category;

-- Cadastre uma nova loja na tabela sakila.store.
INSERT INTO store (manager_staff_id, address_id)
VALUES (3, 3);

SELECT * FROM store;