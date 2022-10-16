USE sakila;

-- Adicione os dois principais atores filme Matrix na tabela actor;
INSERT INTO actor (first_name, last_name)
VALUES ('Keanu', 'Reeves'),
('Laurence', 'Fishburne');
-- 201 ,202

-- Adicione o filme Matrix 4 na tabela film;
INSERT INTO film (title, language_id, rental_duration, rental_rate, replacement_cost)
VALUE ('Matrix 4', 1, 6, 0.99, 20.99);
-- 1001

-- Faça a ligação na tabela film_actor destes registros inseridos anteriormente;
INSERT INTO film_actor (actor_id, film_id)
VALUES (201, 1001),
(202, 1001);


-- Insira na tabela inventory um registro com o id deste filme para a loja com id igual a 1;
INSERT INTO inventory (film_id, store_id)
VALUES (1001, 1);


-- Crie você como pessoa usuária na tabela customer (faça a associação do seu cadastro com um registro já existente na tabela address);
INSERT INTO customer (store_id, first_name, last_name, address_id, active, create_date)
VALUES (1, 'Aron', 'Adams', 1, 1, DATE(now()));


-- Insira os dados de aluguel na tabela rental deste filme, como sendo realizado a retirada do filme no dia 09/08/2022;
INSERT INTO rental (rental_date, inventory_id, customer_id, staff_id)
VALUES (DATE(now()), 4582, 600, 1);


-- Faça a atualização com a devolução do filme no dia de hoje (09/08/2022) na tabela rental, no registro que foi inserido anteriormente (return_date);
UPDATE rental
SET return_date = DATE(now())
WHERE rental_id = 16050;


-- Faça o delete lógico (update) do seu usuário na tabela customer (mudar o status de active para 0);
UPDATE customer
SET active = 0
WHERE customer_id = 600;

-- Bônus: deletar todos registros inseridos anteriormente;
DELETE FROM rental
WHERE rental_id = 16050;

DELETE FROM customer
WHERE customer_id = 600;

DELETE FROM inventory
WHERE inventory_id = 4582;

DELETE FROM film_actor
WHERE film_id = 1001;

DELETE FROM film
WHERE film_id = 1001;

DELETE FROM actor
WHERE actor_id IN (201, 202);
