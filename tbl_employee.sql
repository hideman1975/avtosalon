-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Дек 05 2016 г., 17:53
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `myclass`
--

-- --------------------------------------------------------

--
-- Структура таблицы `tbl_employee`
--

CREATE TABLE IF NOT EXISTS `tbl_employee` (
  `employee_id` int(4) NOT NULL AUTO_INCREMENT,
  `employee_name` varchar(60) CHARACTER SET utf8 NOT NULL,
  `designation` varchar(30) CHARACTER SET utf8 NOT NULL,
  `hired_date` date NOT NULL,
  `salary` int(10) NOT NULL,
  `pic` varchar(100) CHARACTER SET utf8 NOT NULL,
  `className` varchar(20) CHARACTER SET utf8 NOT NULL,
  `seconds` int(11) NOT NULL,
  PRIMARY KEY (`employee_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Дамп данных таблицы `tbl_employee`
--

INSERT INTO `tbl_employee` (`employee_id`, `employee_name`, `designation`, `hired_date`, `salary`, `pic`, `className`, `seconds`) VALUES
(1, 'Кузнецова Маргарита', 'менеджер ', '2013-08-01', 12, 'img/face2.png', 'free', 0),
(2, 'Романова Ксения', 'менеджер', '2014-10-09', 2, 'img/face3.png', 'free', 0),
(3, 'Фролов Олег', 'старший менеджер', '2013-08-20', 7, 'img/face4.png', 'free', 0),
(4, 'Митрохина Юлия', 'старший менеджер', '2013-06-01', 10, 'img/face1.png', 'free', 0),
(5, 'Поляков Евгений', 'менеджер', '2014-10-01', 3, 'img/face5.png', 'free', 0),
(6, 'Кузякин Дмитрий', 'помощник менеджера', '0000-00-00', 11, 'img/face6.png', 'free', 0),
(7, 'Мезенцев Василий', 'менеджер', '0000-00-00', 9, 'img/face7.png', 'free', 0),
(8, 'Васюков Николай', 'старший менеджер', '0000-00-00', 5, 'img/face8.png', 'free', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
