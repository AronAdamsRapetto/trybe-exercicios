DROP DATABASE IF EXISTS normalization;
CREATE DATABASE normalization;

USE normalization;

CREATE TABLE Funcionarios (
	Funcionario_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Nome VARCHAR(20) NOT NULL,
    Sobrenome VARCHAR(40) NOT NULL,
    Email VARCHAR(30) NOT NULL,
    Contato VARCHAR(20) NOT NULL,
    Data_cadastro VARCHAR(30) NOT NULL
);

INSERT INTO Funcionarios (Nome, Sobrenome, Email, Contato, Data_cadastro) VALUES
('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
('André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
('Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

CREATE TABLE Setores (
	Setor_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Setor VARCHAR(30) NOT NULL
);

INSERT INTO Setores (Setor) VALUES
('Administração'),
('Vendas'),
('Operacional'),
('Estratégico'),
('Marketing');

CREATE TABLE Funcionario_setor (
	Setor_id INT NOT NULL,
    Funcionario_id INT NOT NULL,
	CONSTRAINT PRIMARY KEY (Setor_id, Funcionario_id),
    FOREIGN KEY (Setor_id) REFERENCES Setores (Setor_id),
    FOREIGN KEY (Funcionario_id) REFERENCES Funcionarios (Funcionario_id)
);

INSERT INTO Funcionario_setor (Setor_id, Funcionario_id) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 3),
(2, 3),
(5, 4);
