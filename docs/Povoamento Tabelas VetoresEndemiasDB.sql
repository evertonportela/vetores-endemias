/* Script Povoamento do Banco Vetores-Endemias*/

/* Insert at Atividade_do_Dias*/
INSERT INTO public.atividade_do_dias(atv_dia_sigla, atv_dia_descricao) VALUES ('LI', 'Levantamento de Indice');
INSERT INTO public.atividade_do_dias(atv_dia_sigla, atv_dia_descricao) VALUES ('LI + T', 'Levantamento de Indice + Tratamento');
INSERT INTO public.atividade_do_dias(atv_dia_sigla, atv_dia_descricao) VALUES ('PE', 'Ponto Estratégico');
INSERT INTO public.atividade_do_dias(atv_dia_sigla, atv_dia_descricao) VALUES ('T', 'Tratamento');
INSERT INTO public.atividade_do_dias(atv_dia_sigla, atv_dia_descricao) VALUES ('DF', 'Delimitação de Foco');
INSERT INTO public.atividade_do_dias(atv_dia_sigla, atv_dia_descricao) VALUES ('PVE', 'Pesquisa Vetorial Especial');

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

/* Insert at Visita_Tipos*/
INSERT INTO public.localidades(localidade_municipio, localidade_nome_localidade) VALUES ('Santa Luzia do Itanhy', 'Areia Branca');
INSERT INTO public.localidades(localidade_municipio, localidade_nome_localidade) VALUES ('Santa Luzia do Itanhy', 'Botequim');
INSERT INTO public.localidades(localidade_municipio, localidade_nome_localidade) VALUES ('Santa Luzia do Itanhy', 'Cajazeiras');