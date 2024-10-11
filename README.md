create database diario;

use diario;

create table usuario (
id_usuario int primary key auto_increment,
nome    varchar(200),
senha  varchar(255)
);

create table tb_diario(
id_diario   int primary key auto_increment,
conteudo text,
data_dt  date,
id_usuario int,
foreign key(id_usuario) references usuario(id_usuario)
);
