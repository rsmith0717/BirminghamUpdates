-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 20, 2017 at 04:20 AM
-- Server version: 10.1.24-MariaDB
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `final_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `alembic_version`
--

CREATE TABLE `alembic_version` (
`version_num` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `alembic_version`
--

INSERT INTO `alembic_version` (`version_num`) VALUES
('d65dd9942503');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `name`, `description`) VALUES
(1, 'Test', 'Event'),
(4, 'Another Test', 'Test Event for Now');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `table 5`
--

CREATE TABLE `table 5` (
  `event_id` int(11) NOT NULL,
  `Event` varchar(71) DEFAULT NULL,
  `Start time` varchar(22) DEFAULT NULL,
  `End time` varchar(22) DEFAULT NULL,
  `Event Description/Agenda` varchar(72) DEFAULT NULL,
  `Venue` varchar(19) DEFAULT NULL,
  `Street Address` varchar(37) DEFAULT NULL,
  `Latitude` varchar(7) DEFAULT NULL,
  `Longitude` varchar(9) DEFAULT NULL,
  `Location` varchar(22) DEFAULT NULL,
  `Event Info Url` varchar(98) DEFAULT NULL,
  `Classification` varchar(10) DEFAULT NULL,
  `Audience` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `table 5`
--

INSERT INTO `table 5` (`event_id`, `Event`, `Start time`, `End time`, `Event Description/Agenda`, `Venue`, `Street Address`, `Latitude`, `Longitude`, `Location`, `Event Info Url`, `Classification`, `Audience`) VALUES
(1, 'Council Briefing', '07/17/2017 09:30:00 AM', '07/17/2017 09:30:00 AM', 'Council Briefing', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552003', '', ''),
(2, 'Full Council', '07/17/2017 02:00:00 PM', '07/17/2017 02:00:00 PM', 'Full Council', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552055', '', ''),
(3, 'Planning, Land Use & Zoning Committee', '07/18/2017 09:30:00 AM', '07/18/2017 09:30:00 AM', 'Planning, Land Use & Zoning Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551907', '', ''),
(4, 'Sustainability & Transportation Committee', '07/18/2017 02:00:00 PM', '07/18/2017 02:00:00 PM', 'Sustainability & Transportation Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551967', '', ''),
(5, 'Planning, Land Use & Zoning Committee - Special Meeting', '07/18/2017 05:00:00 PM', '07/18/2017 05:00:00 PM', 'Planning, Land Use & Zoning Committee - Special Meeting', 'Nisei Veterans Hall', '1212 South King Street', '47.5985', '-122.3165', '(47.59859, -122.31654)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d124386493', '', ''),
(6, 'Affordable Housing, Neigborhoods & Finance Committee', '07/19/2017 09:30:00 AM', '07/19/2017 09:30:00 AM', 'Affordable Housing, Neigborhoods & Finance Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551708', '', ''),
(7, 'Education, Equity & Governance', '07/19/2017 02:00:00 PM', '07/19/2017 02:00:00 PM', 'Education, Equity & Governance', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694379', '', ''),
(8, 'Parks, Seattle Center, Libraries & Waterfront Committee', '07/20/2017 09:30:00 AM', '07/20/2017 09:30:00 AM', 'Parks, Seattle Center, Libraries & Waterfront Committee', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694584', '', ''),
(9, 'Council Briefing', '07/24/2017 09:30:00 AM', '07/24/2017 09:30:00 AM', 'Council Briefing', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552004', '', ''),
(10, 'Full Council', '07/24/2017 02:00:00 PM', '07/24/2017 02:00:00 PM', 'Full Council', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552056', '', ''),
(11, 'Planning, Land Use & Zoning Committee? Public Hearing - Special Meeting', '07/24/2017 05:30:00 PM', '07/24/2017 05:30:00 PM', 'Planning, Land Use & Zoning Committee? Public Hearing  - Special Meeting', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d124407943', '', ''),
(12, 'Civil Rights, Utilities, Economic Development & Arts Committee', '07/25/2017 09:30:00 AM', '07/25/2017 09:30:00 AM', 'Civil Rights, Utilities, Economic Development & Arts Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121690755', '', ''),
(13, 'Energy & Environment', '07/25/2017 02:00:00 PM', '07/25/2017 02:00:00 PM', 'Energy & Environment', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551803', '', ''),
(14, 'Gender Equity, Safe Communities & New Americans', '07/26/2017 09:30:00 AM', '07/26/2017 09:30:00 AM', 'Gender Equity, Safe Communities & New Americans', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551748', '', ''),
(15, 'Human Services & Public Health Committee', '07/26/2017 02:00:00 PM', '07/26/2017 02:00:00 PM', 'Human Services & Public Health Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551854', '', ''),
(16, 'Councilmember Lisa Herbold\'s In-District Office Hours', '07/28/2017 02:00:00 PM', '07/28/2017 07:00:00 PM', 'Councilmember Lisa Herbold\'s In-District Office Hours', '', 'Southwest Neighborhood Service Center', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d122873863', '', ''),
(17, 'Council Briefing', '07/31/2017 09:30:00 AM', '07/31/2017 09:30:00 AM', 'Council Briefing', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552005', '', ''),
(18, 'Full Council', '07/31/2017 02:00:00 PM', '07/31/2017 02:00:00 PM', 'Full Council', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552057', '', ''),
(19, 'Planning, Land Use & Zoning Committee', '08/01/2017 09:30:00 AM', '08/01/2017 09:30:00 AM', 'Planning, Land Use & Zoning Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551881', '', ''),
(20, 'Sustainability & Transportation', '08/01/2017 02:00:00 PM', '08/01/2017 02:00:00 PM', 'Sustainability & Transportation', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551921', '', ''),
(21, 'Affordable Housing, Neigborhoods & Finance', '08/02/2017 09:30:00 AM', '08/02/2017 09:30:00 AM', 'Affordable Housing, Neigborhoods & Finance', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551675', '', ''),
(22, 'Education, Equity & Governance', '08/02/2017 02:00:00 PM', '08/02/2017 02:00:00 PM', 'Education, Equity & Governance', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551762', '', ''),
(23, 'Parks, Seattle Center, Libraries & Waterfront Committee', '08/03/2017 09:30:00 AM', '08/03/2017 09:30:00 AM', 'Parks, Seattle Center, Libraries & Waterfront Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552103', '', ''),
(24, 'Council Briefing', '08/07/2017 09:30:00 AM', '08/07/2017 09:30:00 AM', 'Council Briefing', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552006', '', ''),
(25, 'Full Council', '08/07/2017 02:00:00 PM', '08/07/2017 02:00:00 PM', 'Full Council', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552058', '', ''),
(26, 'Civil Rights, Utilities, Economic Development & Arts Committee', '08/08/2017 09:30:00 AM', '08/08/2017 09:30:00 AM', 'Civil Rights, Utilities, Economic Development & Arts Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551721', '', ''),
(27, 'Energy & Environment Committee', '08/08/2017 02:00:00 PM', '08/08/2017 02:00:00 PM', 'Energy & Environment Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551791', '', ''),
(28, 'Gender Equity, Safe Communities & New Americans', '08/09/2017 09:30:00 AM', '08/09/2017 09:30:00 AM', 'Gender Equity, Safe Communities & New Americans', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694477', '', ''),
(29, 'Human Services & Public Health Committee', '08/09/2017 02:00:00 PM', '08/09/2017 02:00:00 PM', 'Human Services & Public Health Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551843', '', ''),
(30, 'Council Briefing', '08/14/2017 09:30:00 AM', '08/14/2017 09:30:00 AM', 'Council Briefing', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552007', '', ''),
(31, 'Full Council', '08/14/2017 02:00:00 PM', '08/14/2017 02:00:00 PM', 'Full Council', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552059', '', ''),
(32, 'Planning, Land Use & Zoning Committee', '08/15/2017 09:30:00 AM', '08/15/2017 09:30:00 AM', 'Planning, Land Use & Zoning Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551908', '', ''),
(33, 'Sustainability & Transportation Committee', '08/15/2017 02:00:00 PM', '08/15/2017 02:00:00 PM', 'Sustainability & Transportation Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551968', '', ''),
(34, 'Affordable Housing, Neigborhoods & Finance Committee', '08/16/2017 09:30:00 AM', '08/16/2017 09:30:00 AM', 'Affordable Housing, Neigborhoods & Finance Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551709', '', ''),
(35, 'Education, Equity & Governance', '08/16/2017 02:00:00 PM', '08/16/2017 02:00:00 PM', 'Education, Equity & Governance', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694380', '', ''),
(36, 'Parks, Seattle Center, Libraries & Waterfront Committee', '08/17/2017 09:30:00 AM', '08/17/2017 09:30:00 AM', 'Parks, Seattle Center, Libraries & Waterfront Committee', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694585', '', ''),
(37, 'Councilmember Lisa Herbold\'s In-District Office Hours', '08/18/2017 02:00:00 PM', '08/18/2017 07:00:00 PM', 'Councilmember Lisa Herbold\'s In-District Office Hours', '', 'Senior Center of West Seattle', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d122873990', '', ''),
(38, 'Council Briefing', '08/21/2017 09:30:00 AM', '08/21/2017 09:30:00 AM', 'Council Briefing', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552008', '', ''),
(39, 'Full Council', '08/21/2017 02:00:00 PM', '08/21/2017 02:00:00 PM', 'Full Council', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552060', '', ''),
(40, 'Civil Rights, Utilities, Economic Development & Arts Committee', '08/22/2017 09:30:00 AM', '08/22/2017 09:30:00 AM', 'Civil Rights, Utilities, Economic Development & Arts Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121690756', '', ''),
(41, 'Energy & Environment', '08/22/2017 02:00:00 PM', '08/22/2017 02:00:00 PM', 'Energy & Environment', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551804', '', ''),
(42, 'Gender Equity, Safe Communities & New Americans', '08/23/2017 09:30:00 AM', '08/23/2017 09:30:00 AM', 'Gender Equity, Safe Communities & New Americans', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551749', '', ''),
(43, 'Human Services & Public Health Committee', '08/23/2017 02:00:00 PM', '08/23/2017 02:00:00 PM', 'Human Services & Public Health Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551855', '', ''),
(44, 'Council Briefing', '08/28/2017 09:30:00 AM', '08/28/2017 09:30:00 AM', 'Council Briefing', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552009', '', ''),
(45, 'Full Council', '08/28/2017 02:00:00 PM', '08/28/2017 02:00:00 PM', 'Full Council', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552061', '', ''),
(46, 'Council Briefing', '09/05/2017 09:30:00 AM', '09/05/2017 09:30:00 AM', 'Council Briefing', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552010', '', ''),
(47, 'Full Council', '09/05/2017 02:00:00 PM', '09/05/2017 02:00:00 PM', 'Full Council', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552062', '', ''),
(48, 'Affordable Housing, Neigborhoods & Finance', '09/06/2017 09:30:00 AM', '09/06/2017 09:30:00 AM', 'Affordable Housing, Neigborhoods & Finance', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551676', '', ''),
(49, 'Education, Equity & Governance', '09/06/2017 02:00:00 PM', '09/06/2017 02:00:00 PM', 'Education, Equity & Governance', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551763', '', ''),
(50, 'Parks, Seattle Center, Libraries & Waterfront Committee', '09/07/2017 09:30:00 AM', '09/07/2017 09:30:00 AM', 'Parks, Seattle Center, Libraries & Waterfront Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552104', '', ''),
(51, 'Planning, Land Use & Zoning Committee', '09/08/2017 09:30:00 AM', '09/08/2017 09:30:00 AM', 'Planning, Land Use & Zoning Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551882', '', ''),
(52, 'Sustainability & Transportation', '09/08/2017 02:00:00 PM', '09/08/2017 02:00:00 PM', 'Sustainability & Transportation', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551922', '', ''),
(53, 'Council Briefing', '09/11/2017 09:30:00 AM', '09/11/2017 09:30:00 AM', 'Council Briefing', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552011', '', ''),
(54, 'Full Council', '09/11/2017 02:00:00 PM', '09/11/2017 02:00:00 PM', 'Full Council', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552063', '', ''),
(55, 'Civil Rights, Utilities, Economic Development & Arts Committee', '09/12/2017 09:30:00 AM', '09/12/2017 09:30:00 AM', 'Civil Rights, Utilities, Economic Development & Arts Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551722', '', ''),
(56, 'Energy & Environment Committee', '09/12/2017 02:00:00 PM', '09/12/2017 02:00:00 PM', 'Energy & Environment Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551792', '', ''),
(57, 'Gender Equity, Safe Communities & New Americans', '09/13/2017 09:30:00 AM', '09/13/2017 09:30:00 AM', 'Gender Equity, Safe Communities & New Americans', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694478', '', ''),
(58, 'Human Services & Public Health Committee', '09/13/2017 02:00:00 PM', '09/13/2017 02:00:00 PM', 'Human Services & Public Health Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551844', '', ''),
(59, 'Council Briefing', '09/18/2017 09:30:00 AM', '09/18/2017 09:30:00 AM', 'Council Briefing', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552012', '', ''),
(60, 'Full Council', '09/18/2017 02:00:00 PM', '09/18/2017 02:00:00 PM', 'Full Council', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552064', '', ''),
(61, 'Planning, Land Use & Zoning Committee', '09/19/2017 09:30:00 AM', '09/19/2017 09:30:00 AM', 'Planning, Land Use & Zoning Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551909', '', ''),
(62, 'Sustainability & Transportation Committee', '09/19/2017 02:00:00 PM', '09/19/2017 02:00:00 PM', 'Sustainability & Transportation Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551969', '', ''),
(63, 'Affordable Housing, Neigborhoods & Finance Committee', '09/20/2017 09:30:00 AM', '09/20/2017 09:30:00 AM', 'Affordable Housing, Neigborhoods & Finance Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551710', '', ''),
(64, 'Education, Equity & Governance', '09/20/2017 02:00:00 PM', '09/20/2017 02:00:00 PM', 'Education, Equity & Governance', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694381', '', ''),
(65, 'Parks, Seattle Center, Libraries & Waterfront Committee', '09/21/2017 09:30:00 AM', '09/21/2017 09:30:00 AM', 'Parks, Seattle Center, Libraries & Waterfront Committee', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694586', '', ''),
(66, 'Councilmember Lisa Herbold\'s In-District Office Hours', '09/22/2017 02:00:00 PM', '09/22/2017 07:00:00 PM', 'Councilmember Lisa Herbold\'s In-District Office Hours', '', 'South Park Community Center', '47.5283', '-122.3243', '(47.52832, -122.32431)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d122873991', '', ''),
(67, 'Council Briefing', '09/25/2017 09:30:00 AM', '09/25/2017 09:30:00 AM', 'Council Briefing', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552013', '', ''),
(68, 'Full Council', '09/25/2017 02:00:00 PM', '09/25/2017 02:00:00 PM', 'Full Council', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552065', '', ''),
(69, 'Civil Rights, Utilities, Economic Development & Arts Committee', '09/26/2017 09:30:00 AM', '09/26/2017 09:30:00 AM', 'Civil Rights, Utilities, Economic Development & Arts Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121690757', '', ''),
(70, 'Energy & Environment', '09/26/2017 02:00:00 PM', '09/26/2017 02:00:00 PM', 'Energy & Environment', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551805', '', ''),
(71, 'Gender Equity, Safe Communities & New Americans', '09/27/2017 09:30:00 AM', '09/27/2017 09:30:00 AM', 'Gender Equity, Safe Communities & New Americans', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551750', '', ''),
(72, 'Human Services & Public Health Committee', '09/27/2017 02:00:00 PM', '09/27/2017 02:00:00 PM', 'Human Services & Public Health Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551856', '', ''),
(73, 'Council Briefing', '10/02/2017 09:30:00 AM', '10/02/2017 09:30:00 AM', 'Council Briefing', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552014', '', ''),
(74, 'Full Council', '10/02/2017 02:00:00 PM', '10/02/2017 02:00:00 PM', 'Full Council', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552066', '', ''),
(75, 'Planning, Land Use & Zoning Committee', '10/03/2017 09:30:00 AM', '10/03/2017 09:30:00 AM', 'Planning, Land Use & Zoning Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551883', '', ''),
(76, 'Sustainability & Transportation', '10/03/2017 02:00:00 PM', '10/03/2017 02:00:00 PM', 'Sustainability & Transportation', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551923', '', ''),
(77, 'Affordable Housing, Neigborhoods & Finance', '10/04/2017 09:30:00 AM', '10/04/2017 09:30:00 AM', 'Affordable Housing, Neigborhoods & Finance', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551677', '', ''),
(78, 'Education, Equity & Governance', '10/04/2017 02:00:00 PM', '10/04/2017 02:00:00 PM', 'Education, Equity & Governance', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551764', '', ''),
(79, 'Parks, Seattle Center, Libraries & Waterfront Committee', '10/05/2017 09:30:00 AM', '10/05/2017 09:30:00 AM', 'Parks, Seattle Center, Libraries & Waterfront Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552105', '', ''),
(80, 'Council Briefing', '10/09/2017 09:30:00 AM', '10/09/2017 09:30:00 AM', 'Council Briefing', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552015', '', ''),
(81, 'Full Council', '10/09/2017 02:00:00 PM', '10/09/2017 02:00:00 PM', 'Full Council', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552067', '', ''),
(82, 'Civil Rights, Utilities, Economic Development & Arts Committee', '10/10/2017 09:30:00 AM', '10/10/2017 09:30:00 AM', 'Civil Rights, Utilities, Economic Development & Arts Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551723', '', ''),
(83, 'Energy & Environment Committee', '10/10/2017 02:00:00 PM', '10/10/2017 02:00:00 PM', 'Energy & Environment Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551793', '', ''),
(84, 'Gender Equity, Safe Communities & New Americans', '10/11/2017 09:30:00 AM', '10/11/2017 09:30:00 AM', 'Gender Equity, Safe Communities & New Americans', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694479', '', ''),
(85, 'Human Services & Public Health Committee', '10/11/2017 02:00:00 PM', '10/11/2017 02:00:00 PM', 'Human Services & Public Health Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551845', '', ''),
(86, 'Council Briefing', '10/16/2017 09:30:00 AM', '10/16/2017 09:30:00 AM', 'Council Briefing', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552016', '', ''),
(87, 'Full Council', '10/16/2017 02:00:00 PM', '10/16/2017 02:00:00 PM', 'Full Council', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552068', '', ''),
(88, 'Planning, Land Use & Zoning Committee', '10/17/2017 09:30:00 AM', '10/17/2017 09:30:00 AM', 'Planning, Land Use & Zoning Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551910', '', ''),
(89, 'Sustainability & Transportation Committee', '10/17/2017 02:00:00 PM', '10/17/2017 02:00:00 PM', 'Sustainability & Transportation Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551970', '', ''),
(90, 'Affordable Housing, Neigborhoods & Finance Committee', '10/18/2017 09:30:00 AM', '10/18/2017 09:30:00 AM', 'Affordable Housing, Neigborhoods & Finance Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551711', '', ''),
(91, 'Education, Equity & Governance', '10/18/2017 02:00:00 PM', '10/18/2017 02:00:00 PM', 'Education, Equity & Governance', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694382', '', ''),
(92, 'Parks, Seattle Center, Libraries & Waterfront Committee', '10/19/2017 09:30:00 AM', '10/19/2017 09:30:00 AM', 'Parks, Seattle Center, Libraries & Waterfront Committee', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694587', '', ''),
(93, 'Council Briefing', '10/23/2017 09:30:00 AM', '10/23/2017 09:30:00 AM', 'Council Briefing', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552017', '', ''),
(94, 'Full Council', '10/23/2017 02:00:00 PM', '10/23/2017 02:00:00 PM', 'Full Council', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552069', '', ''),
(95, 'Civil Rights, Utilities, Economic Development & Arts Committee', '10/24/2017 09:30:00 AM', '10/24/2017 09:30:00 AM', 'Civil Rights, Utilities, Economic Development & Arts Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121690758', '', ''),
(96, 'Energy & Environment', '10/24/2017 02:00:00 PM', '10/24/2017 02:00:00 PM', 'Energy & Environment', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551806', '', ''),
(97, 'Gender Equity, Safe Communities & New Americans', '10/25/2017 09:30:00 AM', '10/25/2017 09:30:00 AM', 'Gender Equity, Safe Communities & New Americans', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551751', '', ''),
(98, 'Human Services & Public Health Committee', '10/25/2017 02:00:00 PM', '10/25/2017 02:00:00 PM', 'Human Services & Public Health Committee', 'Council Chambers', '600 Fourth Avenue', '47.6037', '-122.3297', '(47.60377, -122.32971)', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551857', '', ''),
(99, 'Councilmember Lisa Herbold\'s In-District Office Hours', '10/27/2017 02:00:00 PM', '10/27/2017 07:00:00 PM', 'Councilmember Lisa Herbold\'s In-District Office Hours', '', 'Southwest Neighborhood Service Center', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d122873996', '', ''),
(100, 'Council Briefing', '10/30/2017 09:30:00 AM', '10/30/2017 09:30:00 AM', 'Council Briefing', 'Council Chambers', '600 Fourth Ave., Floor 2', '', '', '', 'http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552018', '', ''),
(101, 'HelloWorld', NULL, NULL, NULL, 'Hoover', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `username` varchar(60) DEFAULT NULL,
  `first_name` varchar(60) DEFAULT NULL,
  `last_name` varchar(60) DEFAULT NULL,
  `password_hash` varchar(128) DEFAULT NULL,
  `event_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `is_admin` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `first_name`, `last_name`, `password_hash`, `event_id`, `role_id`, `is_admin`) VALUES
(1, 'test@uab.edu', 'tester', 'test', 'testington', 'pbkdf2:sha256:50000$RpXqHogY$6eccfbaec899c96615f769896bee03eaa2b8a77e57da08ef3bbb29fa4b95b460', NULL, NULL, 0),
(2, 'admin@admin.com', 'admin', NULL, NULL, 'pbkdf2:sha256:50000$ARJFGdfV$d21f55e2e646011a233cfe3d33549df209627fc6b274974391382d09788a2ac5', NULL, NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alembic_version`
--
ALTER TABLE `alembic_version`
  ADD PRIMARY KEY (`version_num`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `table 5`
--
ALTER TABLE `table 5`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ix_users_email` (`email`),
  ADD UNIQUE KEY `ix_users_username` (`username`),
  ADD KEY `event_id` (`event_id`),
  ADD KEY `role_id` (`role_id`),
  ADD KEY `ix_users_first_name` (`first_name`),
  ADD KEY `ix_users_last_name` (`last_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `table 5`
--
ALTER TABLE `table 5`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
