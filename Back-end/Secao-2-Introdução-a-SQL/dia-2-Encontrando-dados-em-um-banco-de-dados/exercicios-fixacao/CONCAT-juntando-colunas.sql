SELECT CONCAT(first_name, last_name) FROM sakila.actor;

-- Seu resultado ficou estranho? Eu também achei! Tente agora a query a seguir.

SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor;

-- Muito melhor, certo? Mas dá para melhorar? Dá!

SELECT CONCAT(first_name, ' ', last_name) AS 'nome_completo' FROM sakila.actor;

-- Exercícios

SELECT CONCAT(title, ' ', release_year) AS lançamento_do_filme FROM film;

SELECT CONCAT(address, ' ', district) AS endereço FROM address;