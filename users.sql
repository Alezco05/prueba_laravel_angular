-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-01-2020 a las 13:37:20
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `users`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(2, '2020_01_10_170053_create_users_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cedula` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `pais` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ciudad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellidos`, `cedula`, `fechaNacimiento`, `pais`, `ciudad`, `created_at`, `updated_at`) VALUES
(3, 'DASFA', 'Alezco', '133', '1990-10-05', 'Åland Islands', 'Finström', '2020-01-12 08:42:16', '2020-01-12 17:18:35'),
(4, 'ZASFA', 'Alezco', '133', '1990-10-05', 'Colombia', 'Barranquilla', '2020-01-12 08:42:22', '2020-01-12 08:42:22'),
(5, 'FAS', 'Alezco', '133', '1990-10-05', 'Colombia', 'Barranquilla', '2020-01-12 08:42:27', '2020-01-12 08:42:27'),
(6, 'GA', 'Alezco', '133', '1990-10-05', 'Colombia', 'Barranquilla', '2020-01-12 08:42:32', '2020-01-12 08:42:32'),
(7, 'GA', 'Alezco', '133', '1993-10-05', 'Colombia', 'Barranquilla', '2020-01-12 08:44:20', '2020-01-12 08:44:20'),
(8, 'GA', 'Alezco', '133', '0120-10-05', 'Colombia', 'Barranquilla', '2020-01-12 08:44:28', '2020-01-12 08:44:28'),
(9, 'GA', 'Alezco', '200', '0120-10-05', 'Colombia', 'Barranquilla', '2020-01-12 08:45:38', '2020-01-12 08:45:38'),
(10, 'GA', 'Alezco', '9', '0120-10-05', 'Colombia', 'Barranquilla', '2020-01-12 08:45:49', '2020-01-12 08:45:49'),
(12, 'Jhon Mario', 'Calderon', '1140881283', '1995-10-05', 'Colombia', 'Barranquilla', '2020-01-12 17:26:01', '2020-01-12 17:26:01');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
