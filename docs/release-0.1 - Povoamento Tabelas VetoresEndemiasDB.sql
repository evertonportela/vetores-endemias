/* Script Povoamento do Banco Vetores-Endemias*/

/* Insert at Atividade_do_Dias*/
INSERT INTO public.atividade_do_dias(atv_dia_sigla, atv_dia_descricao) VALUES ('LI', 'Levantamento de Indice');
INSERT INTO public.atividade_do_dias(atv_dia_sigla, atv_dia_descricao) VALUES ('LI + T', 'Levantamento de Indice + Tratamento');
INSERT INTO public.atividade_do_dias(atv_dia_sigla, atv_dia_descricao) VALUES ('PE', 'Ponto Estratégico');
INSERT INTO public.atividade_do_dias(atv_dia_sigla, atv_dia_descricao) VALUES ('T', 'Tratamento');
INSERT INTO public.atividade_do_dias(atv_dia_sigla, atv_dia_descricao) VALUES ('DF', 'Delimitação de Foco');
INSERT INTO public.atividade_do_dias(atv_dia_sigla, atv_dia_descricao) VALUES ('PVE', 'Pesquisa Vetorial Especial');

/* Insert at Depositos*/
INSERT INTO public.depositos(depositos_sigla, depositos_descricao) VALUES ('A1', 'Caixa D`Água');
INSERT INTO public.depositos(depositos_sigla, depositos_descricao) VALUES ('A2', 'Outros depósitos');
INSERT INTO public.depositos(depositos_sigla, depositos_descricao) VALUES ('B', 'Pequenos depósitos móveis');
INSERT INTO public.depositos(depositos_sigla, depositos_descricao) VALUES ('C', 'Depósitos fixos');
INSERT INTO public.depositos(depositos_sigla, depositos_descricao) VALUES ('D1', 'Pneus e outros materiais rodantes');
INSERT INTO public.depositos(depositos_sigla, depositos_descricao) VALUES ('D2', 'Lixos, sucatas e entulhos');
INSERT INTO public.depositos(depositos_sigla, depositos_descricao) VALUES ('E', 'Depósitos naturais');

/* Insert at Imovel_Tipos*/
INSERT INTO public.imovel_tipos(imovel_tipo_descricao) VALUES ('R - Residencial');
INSERT INTO public.imovel_tipos(imovel_tipo_descricao) VALUES ('C - Comércio');
INSERT INTO public.imovel_tipos(imovel_tipo_descricao) VALUES ('TB - Terreno Baldio');
INSERT INTO public.imovel_tipos(imovel_tipo_descricao) VALUES ('PE - Ponto Estratégico');
INSERT INTO public.imovel_tipos(imovel_tipo_descricao) VALUES ('Outros');

/* Insert at Visita_Statuses*/
INSERT INTO public.visita_statuses(visita_status_descricao) VALUES ('Fechado');
INSERT INTO public.visita_statuses(visita_status_descricao) VALUES ('Recusado');
INSERT INTO public.visita_statuses(visita_status_descricao) VALUES ('Presente');

/* Insert at Visita_Tipos*/
INSERT INTO public.visita_tipos(visita_tipo_descricao) VALUES ('Revisado');
INSERT INTO public.visita_tipos(visita_tipo_descricao) VALUES ('Recuperado');
INSERT INTO public.visita_tipos(visita_tipo_descricao) VALUES ('Primeira visita');

/* Insert at Municipios */
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2800100,'Amparo de São Francisco', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2800209,'Aquidabã', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2800308,'Aracaju', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2800407,'Arauá', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2800506,'Areia Branca', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2800605,'Barra dos Coqueiros', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2800670,'Boquim', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2800704,'Brejo Grande', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2801009,'Campo do Brito', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2801108,'Canhoba', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2801207,'Canindé de São Francisco', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2801306,'Capela', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2801405,'Carira', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2801504,'Carmópolis', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2801603,'Cedro de São João', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2801702,'Cristinápolis', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2801900,'Cumbe', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2802007,'Divina Pastora', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2802106,'Estância', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2802205,'Feira Nova', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2802304,'Frei Paulo', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2802403,'Gararu', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2802502,'General Maynard', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2802601,'Gracho Cardoso', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2802700,'Ilha das Flores', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2802809,'Indiaroba', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2802908,'Itabaiana', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2803005,'Itabaianinha', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2803104,'Itabi', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2803203,'Itaporanga D''Ajuda', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2803302,'Japaratuba', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2803401,'Japoatã', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2803500,'Lagarto', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2803609,'Laranjeiras', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2803708,'Macambira', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2803807,'Malhada dos Bois', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2803906,'Malhador', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2804003,'Maruim', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2804102,'Moita Bonita', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2804201,'Monte Alegre de Sergipe', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2804300,'Muribeca', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2804409,'Neópolis', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2804458,'Nossa Senhora Aparecida', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2804508,'Nossa Senhora da Glória', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2804607,'Nossa Senhora das Dores', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2804706,'Nossa Senhora de Lourdes', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2804805,'Nossa Senhora do Socorro', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2804904,'Pacatuba', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2805000,'Pedra Mole', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2805109,'Pedrinhas', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2805208,'Pinhão', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2805307,'Pirambu', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2805406,'Poço Redondo', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2805505,'Poço Verde', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2805604,'Porto da Folha', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2805703,'Propriá', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2805802,'Riachão do Dantas', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2805901,'Riachuelo', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2806008,'Ribeirópolis', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2806107,'Rosário do Catete', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2806206,'Salgado', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2806305,'Santa Luzia do Itanhy', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2806404,'Santana do São Francisco', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2806503,'Santa Rosa de Lima', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2806602,'Santo Amaro das Brotas', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2806701,'São Cristóvão', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2806800,'São Domingos', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2806909,'São Francisco', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2807006,'São Miguel do Aleixo', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2807105,'Simão Dias', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2807204,'Siriri', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2807303,'Telha', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2807402,'Tobias Barreto', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2807501,'Tomar do Geru', 'SE');
INSERT INTO public.municipios (municipio_cod_ibge, municipio_nome, municipio_sigla_uf) VALUES ( 2807600,'Umbaúba', 'SE');