-- Script DDL

CREATE TABLE cardapio (
    cod_cardapio SERIAL PRIMARY KEY,
    nome_cafe VARCHAR(100) UNIQUE NOT NULL,
    descricao TEXT,
    preco_unitario NUMERIC(10,2) NOT NULL CHECK (preco_unitario > 0)
);


-- Tabela: Comanda

CREATE TABLE comanda (
    cod_comanda SERIAL PRIMARY KEY,
    data_comanda TIMESTAMP NOT NULL DEFAULT NOW(),
    numero_mesa INTEGER NOT NULL CHECK (numero_mesa > 0),
    nome_cliente VARCHAR(100) NOT NULL
);


-- Tabela: Item da Comanda

CREATE TABLE item_comanda (
    cod_comanda INTEGER NOT NULL REFERENCES comanda(cod_comanda) ON DELETE CASCADE,
    cod_cardapio INTEGER NOT NULL REFERENCES cardapio(cod_cardapio),
    quantidade INTEGER NOT NULL CHECK (quantidade > 0),
    PRIMARY KEY (cod_comanda, cod_cardapio) 
);

--========================================================================================================

--Inserts

-- ====== CARDÁPIO ======
INSERT INTO cardapio (nome_cafe, descricao, preco_unitario) VALUES
('Espresso', 'Café puro e concentrado', 5.00),
('Cappuccino', 'Café com leite vaporizado e espuma', 7.50),
('Mocha', 'Café com chocolate e chantilly', 8.00),
('Latte', 'Café com leite vaporizado', 6.50),
('Macchiato', 'Café espresso com pequena dose de leite', 6.00);

-- ====== COMANDA ======
INSERT INTO comanda (data_comanda, numero_mesa, nome_cliente) VALUES
('2025-10-22 08:15:00', 1, 'Ana Souza'),
('2025-10-22 09:00:00', 2, 'Carlos Lima'),
('2025-10-22 10:30:00', 3, 'Fernanda Alves'),
('2025-10-22 11:15:00', 4, 'João Pereira'),
('2025-10-22 14:00:00', 5, 'Mariana Torres');

-- ====== ITENS DE COMANDA ======
INSERT INTO item_comanda (cod_comanda, cod_cardapio, quantidade) VALUES
(1, 1, 2),
(1, 4, 1),
(2, 2, 1),
(2, 3, 2),
(3, 1, 1),
(3, 5, 1),
(4, 4, 2),
(5, 2, 1),
(5, 3, 1),
(5, 5, 2);


--1) Faça uma listagem do cardápio ordenada por nome;
SELECT * FROM cardapio ORDER BY nome_cafe 

-- 2) Apresente todas as comandas (código, data, mesa e nome do cliente) 
-- e os itens da comanda (código comanda, nome do café, descricão, quantidade, preço unitário e preço total do café) 
-- destas ordenados data e código da comanda e, também o nome do café;


SELECT
    c.cod_comanda,
    c.data_comanda,
    c.numero_mesa,
    c.nome_cliente,
    i.cod_comanda AS cod_comanda_item,
    p.nome_cafe,
    p.descricao,
    i.quantidade,
    p.preco_unitario,
    (i.quantidade * p.preco_unitario) AS preco_total_cafe
FROM comanda c
JOIN item_comanda i ON c.cod_comanda = i.cod_comanda
JOIN cardapio p ON i.cod_cardapio = p.cod_cardapio
ORDER BY c.data_comanda, c.cod_comanda, p.nome_cafe;


-- 3) Liste todas as comandas (código, data, mesa e nome do cliente) 
-- mais uma coluna com o valor total da comanda. Ordene por data esta listagem;

SELECT 
	c.cod_comanda, 
	c.data_comanda, 
	c.numero_mesa, 
	c.nome_cliente,
	SUM(i.quantidade * p.preco_unitario) AS preco_total_comanda
FROM comanda c
JOIN item_comanda i ON c.cod_comanda = i.cod_comanda
JOIN cardapio p ON i.cod_cardapio = p.cod_cardapio
GROUP BY c.cod_comanda, c.data_comanda, c.numero_mesa, c.nome_cliente
ORDER BY data_comanda


-- 4) Faça a mesma listagem das comandas da questão anterior (6), 
-- mas traga apenas as comandas que possuem mais do que um tipo de café na comanda;

SELECT 
	c.cod_comanda, 
	c.data_comanda, 
	c.numero_mesa, 
	c.nome_cliente,
	SUM(i.quantidade * p.preco_unitario) AS preco_total_comanda
FROM comanda c
JOIN item_comanda i ON c.cod_comanda = i.cod_comanda
JOIN cardapio p ON i.cod_cardapio = p.cod_cardapio
GROUP BY c.cod_comanda, c.data_comanda, c.numero_mesa, c.nome_cliente
HAVING COUNT(DISTINCT i.cod_cardapio) > 1
ORDER BY c.data_comanda;

-- 5) Qual o total de faturamento por data? ordene por data esta consulta.

SELECT 
	c.data_comanda::date AS data,
	SUM(i.quantidade * p.preco_unitario) AS faturamento_total
FROM comanda c
JOIN item_comanda i ON c.cod_comanda = i.cod_comanda
JOIN cardapio p ON i.cod_cardapio = p.cod_cardapio
GROUP BY c.data_comanda::date
ORDER BY data;
