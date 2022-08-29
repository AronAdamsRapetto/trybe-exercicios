USE sakila;
-- Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
SELECT ac.actor_id, CONCAT(ac.first_name, ' ', ac.last_name) AS name, fi.film_id FROM actor AS ac
JOIN film_actor AS fi ON fi.actor_id = ac.actor_id;

-- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT st.first_name, st.last_name, ad.address FROM staff AS st
JOIN address AS ad ON st.address_id = ad.address_id;

-- Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do
-- endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT cu.customer_id, cu.first_name, cu.email, ad.address_id, ad.address FROM customer AS cu
JOIN address AS ad ON cu.address_id = ad.address_id
ORDER BY cu.first_name DESC
LIMIT 100;

-- Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene"
-- em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT cu.first_name, cu.email, cu.address_id, ad.address, ad.district FROM customer AS cu
JOIN address AS ad ON cu.address_id = ad.address_id
WHERE ad.district = 'California' AND cu.first_name LIKE '%rene%';

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente.
-- Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
SELECT cu.first_name, COUNT(ad.address), cu.active FROM customer AS cu
JOIN address AS ad ON cu.address_id = ad.address_id
GROUP BY cu.first_name, cu.active HAVING cu.active = 1
ORDER BY cu.first_name DESC;

-- Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas
-- payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT st.first_name, st.last_name, AVG(pa.amount) FROM staff AS st
JOIN payment AS pa ON st.staff_id = pa.staff_id
GROUP BY st.first_name, st.last_name;

-- Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. 
-- Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT ac.actor_id, ac.first_name, fi_ac.film_id, fi.title FROM actor AS ac
JOIN film_actor AS fi_ac ON ac.actor_id = fi_ac.actor_id
JOIN film AS fi ON fi.film_id = fi_ac.film_id;




