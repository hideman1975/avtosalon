-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Дек 15 2016 г., 12:25
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
-- Структура таблицы `tbl_car`
--

CREATE TABLE IF NOT EXISTS `tbl_car` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `gos` varchar(20) NOT NULL,
  `car_marka` varchar(50) NOT NULL,
  `car_vin` varchar(50) NOT NULL,
  `master` varchar(50) CHARACTER SET koi8r NOT NULL,
  `status` varchar(50) CHARACTER SET koi8r NOT NULL,
  `time` datetime NOT NULL,
  `state` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=koi8u AUTO_INCREMENT=17 ;

--
-- Дамп данных таблицы `tbl_car`
--

INSERT INTO `tbl_car` (`id`, `gos`, `car_marka`, `car_vin`, `master`, `status`, `time`, `state`) VALUES
(1, 'C723AH', 'BMW Z4 3.0i', '4USBT53544LT26841', 'Колесов Валерий', 'выполнено', '2016-12-14 12:30:00', 'free'),
(2, 'O611PT', 'CHEVROLET Rezzo', ' KL1UF756E6B195928', 'Рогулько Пётр', 'отменен', '2016-12-14 12:50:00', 'cancel'),
(3, 'C723AH', 'FIAT Punto 80 ELX', 'ZFA18800004473122', 'Леонтьев Михаил', 'выполнено', '2016-12-14 13:15:00', 'free'),
(4, 'O611PT', 'HONDA CR-V 2.4 RVSi', ' JHLRE48577C415490', 'Ринатов Тимур', 'выполнено', '2016-12-14 14:00:00', 'free'),
(5, 'O611KK', 'HYUNDAI Getz GL', 'KMHBT31GP3U013758', 'Колесов Валерий', 'в работе', '2016-12-14 14:30:00', 'bizy'),
(6, 'E771MM', 'KIA Sorento GL 4WD', 'KNDJC733545301768', 'Леонтьев Михаил', 'отменен', '2016-12-14 14:45:00', 'cancel'),
(7, 'O611KK', 'LAND-ROVER Freelander 2.2 TD4', 'SALFA28B57H011265', 'Орехов Роман', 'в работе', '2016-12-14 15:00:00', 'bizy'),
(8, 'E771MM', 'MAZDDA 6', 'JMZGG128241207606', 'Рогов Сергей', 'в работе', '2016-12-14 15:30:00', 'bizy'),
(9, 'O777MM', 'MERCEDES-BENZ GL 450 4Matic', '4JGBF71E47A278782', 'Орехов Роман', 'в работе', '2016-12-14 15:50:00', 'bizy'),
(10, 'P811KP', 'MINI Cooper', 'WMWRC31060TB95535', 'Рогулько Пётр', 'ожидание', '2016-12-14 16:20:00', 'wait'),
(11, 'A717EB', 'MITSUBISHI Outlander M-Line 2WD', 'JA4LX31G93U065670', 'Ринатов Тимур', 'ожидание', '2016-12-14 16:40:00', 'wait'),
(12, 'P121TT', 'NISSAN T30', ' JN1TBNT30U0124100', 'Леонтьев Михаил', 'ожидание', '2016-12-14 17:00:00', 'wait'),
(13, 'Е711РО', 'PORSCHE CAYENNE S', 'WP1AB29P66LA68044', 'Колесов Валерий', 'ожидание', '2016-12-14 17:40:00', 'wait'),
(14, 'K815MM', 'RENAULT Clio II', ' VF1LB0K0525551701', 'Березовский Борис', 'отменен', '2016-12-14 18:10:00', 'cancel'),
(15, 'Е722KA', 'SUBARU Impreza WRX 4WD', 'JF1GGGKD37G038841', 'Шилов Валерий', 'ожидание', '2016-12-14 18:30:00', 'wait'),
(16, 'P821OO', 'TOYOTA Land Cruiser', 'JT111TJ8007010945', 'Ломов Борис', 'ожидание', '2016-12-14 18:50:00', 'wait');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
