DROP DATABASE IF EXISTS `around-the-globe`;

CREATE DATABASE `around-the-globe`;
USE `around-the-globe`;

CREATE TABLE usernames
(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR
(90) UNIQUE
);