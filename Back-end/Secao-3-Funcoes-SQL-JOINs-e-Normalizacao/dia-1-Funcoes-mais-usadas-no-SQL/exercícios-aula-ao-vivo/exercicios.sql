-- Média de dias que uma pessoa usuária permanece com o produto alugado
SELECT AVG(DATEDIFF(return_date, rental_date)) FROM rental
GROUP BY customer_id;

-- Tempo máximo, mínimo e a média de tempo dos filmes lançados em 2006 por rating
SELECT rating, release_year, MAX(length), MIN(length), AVG(length) FROM film
GROUP BY rating, release_year HAVING release_year = '2006';

-- Quantas pessoas usuárias temos por cidade?
SELECT city_id, COUNT(*) FROM address
GROUP BY city_id;

-- Qual o valor total recebido dentro de cada mês?
SELECT YEAR(payment_date), MONTH(payment_date), SUM(amount) FROM payment 
GROUP BY YEAR(payment_date), MONTH(payment_date);

-- Quantidade de itens alugados pelo preço
SELECT amount, COUNT(amount) FROM payment
GROUP BY amount;

-- Qual valor total arrecadado agrupado por mês, ano e `amount`?
SELECT MONTH(payment_date), YEAR(payment_date), amount, SUM(amount) FROM payment
GROUP BY MONTH(payment_date), YEAR(payment_date), amount;
