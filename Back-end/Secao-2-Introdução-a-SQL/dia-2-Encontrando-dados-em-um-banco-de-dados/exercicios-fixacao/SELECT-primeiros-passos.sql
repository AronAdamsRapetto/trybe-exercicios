SELECT 'Olá, bem-vindo ao SQL!';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'area_de_atuacao';

-- Exercícios

SELECT 'Aron', 'Adams', 'Porto Alegre', 24; 
SELECT 'Aron' AS name, 'Adams' AS last_name, 'Porto Alegre' AS native_city, 24 AS idade;
SELECT 13 * 8;
SELECT now() AS data_atual;

USE sakila;

SELECT * FROM city;
SELECT first_name, last_name FROM customer;
SELECT * FROM rental;
SELECT title, description, release_year FROM film;
SELECT table_schema, table_name, table_type FROM information_schema.tables;