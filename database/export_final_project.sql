-- MySQL dump 10.13  Distrib 5.7.19, for Linux (x86_64)
--
-- Host: localhost    Database: final_project
-- ------------------------------------------------------
-- Server version	5.7.19-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alembic_version`
--

DROP TABLE IF EXISTS `alembic_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alembic_version` (
  `version_num` varchar(32) NOT NULL,
  PRIMARY KEY (`version_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alembic_version`
--

LOCK TABLES `alembic_version` WRITE;
/*!40000 ALTER TABLE `alembic_version` DISABLE KEYS */;
INSERT INTO `alembic_version` VALUES ('d65dd9942503');
/*!40000 ALTER TABLE `alembic_version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'Test','Event'),(4,'Another Test','Test Event for Now');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table 5`
--

DROP TABLE IF EXISTS `table 5`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `table 5` (
  `event_id` int(11) NOT NULL AUTO_INCREMENT,
  `Event` varchar(71) DEFAULT NULL,
  `Start time` varchar(22) DEFAULT NULL,
  `End time` varchar(22) DEFAULT NULL,
  `Event Description/Agenda` varchar(72) DEFAULT NULL,
  `Venue` varchar(19) DEFAULT NULL,
  `Street Address` varchar(37) DEFAULT NULL,
  `Latitude` varchar(20) DEFAULT NULL,
  `Longitude` varchar(20) DEFAULT NULL,
  `Location` varchar(22) DEFAULT NULL,
  `Event Info Url` varchar(98) DEFAULT NULL,
  `Classification` varchar(10) DEFAULT NULL,
  `users_id` int(11) NOT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table 5`
--

LOCK TABLES `table 5` WRITE;
/*!40000 ALTER TABLE `table 5` DISABLE KEYS */;
INSERT INTO `table 5` VALUES (1,'Council Briefing','07/17/2017 09:30:00 AM','07/17/2017 09:30:00 AM','Council Briefing','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552003','',0),(2,'Full Council','07/17/2017 02:00:00 PM','07/17/2017 02:00:00 PM','Full Council','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552055','',0),(3,'Planning, Land Use & Zoning Committee','07/18/2017 09:30:00 AM','07/18/2017 09:30:00 AM','Planning, Land Use & Zoning Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551907','',0),(4,'Sustainability & Transportation Committee','07/18/2017 02:00:00 PM','07/18/2017 02:00:00 PM','Sustainability & Transportation Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551967','',0),(6,'Affordable Housing, Neigborhoods & Finance Committee','07/19/2017 09:30:00 AM','07/19/2017 09:30:00 AM','Affordable Housing, Neigborhoods & Finance Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551708','',0),(7,'Education, Equity & Governance','07/19/2017 02:00:00 PM','07/19/2017 02:00:00 PM','Education, Equity & Governance','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694379','',4),(8,'Parks, Seattle Center, Libraries & Waterfront Committee','07/20/2017 09:30:00 AM','07/20/2017 09:30:00 AM','Parks, Seattle Center, Libraries & Waterfront Committee','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694584','',0),(9,'Council Briefing','07/24/2017 09:30:00 AM','07/24/2017 09:30:00 AM','Council Briefing','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552004','',0),(10,'Full Council','07/24/2017 02:00:00 PM','07/24/2017 02:00:00 PM','Full Council','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552056','',0),(11,'Planning, Land Use & Zoning Committee? Public Hearing - Special Meeting','07/24/2017 05:30:00 PM','07/24/2017 05:30:00 PM','Planning, Land Use & Zoning Committee? Public Hearing  - Special Meeting','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d124407943','',4),(12,'Civil Rights, Utilities, Economic Development & Arts Committee','07/25/2017 09:30:00 AM','07/25/2017 09:30:00 AM','Civil Rights, Utilities, Economic Development & Arts Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121690755','',0),(13,'Energy & Environment','07/25/2017 02:00:00 PM','07/25/2017 02:00:00 PM','Energy & Environment','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551803','',0),(14,'Gender Equity, Safe Communities & New Americans','07/26/2017 09:30:00 AM','07/26/2017 09:30:00 AM','Gender Equity, Safe Communities & New Americans','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551748','',0),(15,'Human Services & Public Health Committee','07/26/2017 02:00:00 PM','07/26/2017 02:00:00 PM','Human Services & Public Health Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551854','',0),(16,'Councilmember Lisa Herbold\'s In-District Office Hours','07/28/2017 02:00:00 PM','07/28/2017 07:00:00 PM','Councilmember Lisa Herbold\'s In-District Office Hours','','Southwest Neighborhood Service Center','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d122873863','',0),(17,'Council Briefing','07/31/2017 09:30:00 AM','07/31/2017 09:30:00 AM','Council Briefing','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552005','',0),(18,'Full Council','07/31/2017 02:00:00 PM','07/31/2017 02:00:00 PM','Full Council','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552057','',0),(19,'Planning, Land Use & Zoning Committee','08/01/2017 09:30:00 AM','08/01/2017 09:30:00 AM','Planning, Land Use & Zoning Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551881','',0),(20,'Sustainability & Transportation','08/01/2017 02:00:00 PM','08/01/2017 02:00:00 PM','Sustainability & Transportation','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551921','',0),(21,'Affordable Housing, Neigborhoods & Finance','08/02/2017 09:30:00 AM','08/02/2017 09:30:00 AM','Affordable Housing, Neigborhoods & Finance','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551675','',0),(22,'Education, Equity & Governance','08/02/2017 02:00:00 PM','08/02/2017 02:00:00 PM','Education, Equity & Governance','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551762','',0),(23,'Parks, Seattle Center, Libraries & Waterfront Committee','08/03/2017 09:30:00 AM','08/03/2017 09:30:00 AM','Parks, Seattle Center, Libraries & Waterfront Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552103','',0),(24,'Council Briefing','08/07/2017 09:30:00 AM','08/07/2017 09:30:00 AM','Council Briefing','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552006','',0),(25,'Full Council','08/07/2017 02:00:00 PM','08/07/2017 02:00:00 PM','Full Council','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552058','',0),(26,'Civil Rights, Utilities, Economic Development & Arts Committee','08/08/2017 09:30:00 AM','08/08/2017 09:30:00 AM','Civil Rights, Utilities, Economic Development & Arts Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551721','',0),(27,'Energy & Environment Committee','08/08/2017 02:00:00 PM','08/08/2017 02:00:00 PM','Energy & Environment Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551791','',0),(28,'Gender Equity, Safe Communities & New Americans','08/09/2017 09:30:00 AM','08/09/2017 09:30:00 AM','Gender Equity, Safe Communities & New Americans','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694477','',0),(29,'Human Services & Public Health Committee','08/09/2017 02:00:00 PM','08/09/2017 02:00:00 PM','Human Services & Public Health Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551843','',0),(30,'Council Briefing','08/14/2017 09:30:00 AM','08/14/2017 09:30:00 AM','Council Briefing','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552007','',0),(31,'Full Council','08/14/2017 02:00:00 PM','08/14/2017 02:00:00 PM','Full Council','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552059','',0),(32,'Planning, Land Use & Zoning Committee','08/15/2017 09:30:00 AM','08/15/2017 09:30:00 AM','Planning, Land Use & Zoning Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551908','',0),(33,'Sustainability & Transportation Committee','08/15/2017 02:00:00 PM','08/15/2017 02:00:00 PM','Sustainability & Transportation Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551968','',0),(34,'Affordable Housing, Neigborhoods & Finance Committee','08/16/2017 09:30:00 AM','08/16/2017 09:30:00 AM','Affordable Housing, Neigborhoods & Finance Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551709','',0),(35,'Education, Equity & Governance','08/16/2017 02:00:00 PM','08/16/2017 02:00:00 PM','Education, Equity & Governance','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694380','',0),(36,'Parks, Seattle Center, Libraries & Waterfront Committee','08/17/2017 09:30:00 AM','08/17/2017 09:30:00 AM','Parks, Seattle Center, Libraries & Waterfront Committee','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694585','',0),(37,'Councilmember Lisa Herbold\'s In-District Office Hours','08/18/2017 02:00:00 PM','08/18/2017 07:00:00 PM','Councilmember Lisa Herbold\'s In-District Office Hours','','Senior Center of West Seattle','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d122873990','',0),(38,'Council Briefing','08/21/2017 09:30:00 AM','08/21/2017 09:30:00 AM','Council Briefing','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552008','',0),(39,'Full Council','08/21/2017 02:00:00 PM','08/21/2017 02:00:00 PM','Full Council','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552060','',0),(40,'Civil Rights, Utilities, Economic Development & Arts Committee','08/22/2017 09:30:00 AM','08/22/2017 09:30:00 AM','Civil Rights, Utilities, Economic Development & Arts Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121690756','',0),(41,'Energy & Environment','08/22/2017 02:00:00 PM','08/22/2017 02:00:00 PM','Energy & Environment','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551804','',0),(42,'Gender Equity, Safe Communities & New Americans','08/23/2017 09:30:00 AM','08/23/2017 09:30:00 AM','Gender Equity, Safe Communities & New Americans','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551749','',0),(43,'Human Services & Public Health Committee','08/23/2017 02:00:00 PM','08/23/2017 02:00:00 PM','Human Services & Public Health Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551855','',0),(44,'Council Briefing','08/28/2017 09:30:00 AM','08/28/2017 09:30:00 AM','Council Briefing','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552009','',0),(45,'Full Council','08/28/2017 02:00:00 PM','08/28/2017 02:00:00 PM','Full Council','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552061','',0),(46,'Council Briefing','09/05/2017 09:30:00 AM','09/05/2017 09:30:00 AM','Council Briefing','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552010','',0),(47,'Full Council','09/05/2017 02:00:00 PM','09/05/2017 02:00:00 PM','Full Council','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552062','',0),(48,'Affordable Housing, Neigborhoods & Finance','09/06/2017 09:30:00 AM','09/06/2017 09:30:00 AM','Affordable Housing, Neigborhoods & Finance','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551676','',0),(49,'Education, Equity & Governance','09/06/2017 02:00:00 PM','09/06/2017 02:00:00 PM','Education, Equity & Governance','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551763','',0),(50,'Parks, Seattle Center, Libraries & Waterfront Committee','09/07/2017 09:30:00 AM','09/07/2017 09:30:00 AM','Parks, Seattle Center, Libraries & Waterfront Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552104','',0),(51,'Planning, Land Use & Zoning Committee','09/08/2017 09:30:00 AM','09/08/2017 09:30:00 AM','Planning, Land Use & Zoning Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551882','',0),(52,'Sustainability & Transportation','09/08/2017 02:00:00 PM','09/08/2017 02:00:00 PM','Sustainability & Transportation','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551922','',0),(53,'Council Briefing','09/11/2017 09:30:00 AM','09/11/2017 09:30:00 AM','Council Briefing','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552011','',0),(54,'Full Council','09/11/2017 02:00:00 PM','09/11/2017 02:00:00 PM','Full Council','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552063','',0),(55,'Civil Rights, Utilities, Economic Development & Arts Committee','09/12/2017 09:30:00 AM','09/12/2017 09:30:00 AM','Civil Rights, Utilities, Economic Development & Arts Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551722','',0),(56,'Energy & Environment Committee','09/12/2017 02:00:00 PM','09/12/2017 02:00:00 PM','Energy & Environment Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551792','',0),(57,'Gender Equity, Safe Communities & New Americans','09/13/2017 09:30:00 AM','09/13/2017 09:30:00 AM','Gender Equity, Safe Communities & New Americans','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694478','',0),(58,'Human Services & Public Health Committee','09/13/2017 02:00:00 PM','09/13/2017 02:00:00 PM','Human Services & Public Health Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551844','',0),(59,'Council Briefing','09/18/2017 09:30:00 AM','09/18/2017 09:30:00 AM','Council Briefing','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552012','',0),(60,'Full Council','09/18/2017 02:00:00 PM','09/18/2017 02:00:00 PM','Full Council','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552064','',0),(61,'Planning, Land Use & Zoning Committee','09/19/2017 09:30:00 AM','09/19/2017 09:30:00 AM','Planning, Land Use & Zoning Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551909','',0),(62,'Sustainability & Transportation Committee','09/19/2017 02:00:00 PM','09/19/2017 02:00:00 PM','Sustainability & Transportation Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551969','',0),(63,'Affordable Housing, Neigborhoods & Finance Committee','09/20/2017 09:30:00 AM','09/20/2017 09:30:00 AM','Affordable Housing, Neigborhoods & Finance Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551710','',0),(64,'Education, Equity & Governance','09/20/2017 02:00:00 PM','09/20/2017 02:00:00 PM','Education, Equity & Governance','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694381','',0),(65,'Parks, Seattle Center, Libraries & Waterfront Committee','09/21/2017 09:30:00 AM','09/21/2017 09:30:00 AM','Parks, Seattle Center, Libraries & Waterfront Committee','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694586','',0),(66,'Councilmember Lisa Herbold\'s In-District Office Hours','09/22/2017 02:00:00 PM','09/22/2017 07:00:00 PM','Councilmember Lisa Herbold\'s In-District Office Hours','','South Park Community Center','47.5283','-122.3243','(47.52832, -122.32431)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d122873991','',0),(67,'Council Briefing','09/25/2017 09:30:00 AM','09/25/2017 09:30:00 AM','Council Briefing','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552013','',0),(68,'Full Council','09/25/2017 02:00:00 PM','09/25/2017 02:00:00 PM','Full Council','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552065','',0),(69,'Civil Rights, Utilities, Economic Development & Arts Committee','09/26/2017 09:30:00 AM','09/26/2017 09:30:00 AM','Civil Rights, Utilities, Economic Development & Arts Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121690757','',0),(70,'Energy & Environment','09/26/2017 02:00:00 PM','09/26/2017 02:00:00 PM','Energy & Environment','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551805','',0),(71,'Gender Equity, Safe Communities & New Americans','09/27/2017 09:30:00 AM','09/27/2017 09:30:00 AM','Gender Equity, Safe Communities & New Americans','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551750','',0),(72,'Human Services & Public Health Committee','09/27/2017 02:00:00 PM','09/27/2017 02:00:00 PM','Human Services & Public Health Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551856','',0),(73,'Council Briefing','10/02/2017 09:30:00 AM','10/02/2017 09:30:00 AM','Council Briefing','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552014','',0),(74,'Full Council','10/02/2017 02:00:00 PM','10/02/2017 02:00:00 PM','Full Council','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552066','',0),(75,'Planning, Land Use & Zoning Committee','10/03/2017 09:30:00 AM','10/03/2017 09:30:00 AM','Planning, Land Use & Zoning Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551883','',0),(76,'Sustainability & Transportation','10/03/2017 02:00:00 PM','10/03/2017 02:00:00 PM','Sustainability & Transportation','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551923','',0),(77,'Affordable Housing, Neigborhoods & Finance','10/04/2017 09:30:00 AM','10/04/2017 09:30:00 AM','Affordable Housing, Neigborhoods & Finance','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551677','',0),(78,'Education, Equity & Governance','10/04/2017 02:00:00 PM','10/04/2017 02:00:00 PM','Education, Equity & Governance','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551764','',0),(79,'Parks, Seattle Center, Libraries & Waterfront Committee','10/05/2017 09:30:00 AM','10/05/2017 09:30:00 AM','Parks, Seattle Center, Libraries & Waterfront Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552105','',0),(80,'Council Briefing','10/09/2017 09:30:00 AM','10/09/2017 09:30:00 AM','Council Briefing','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552015','',0),(81,'Full Council','10/09/2017 02:00:00 PM','10/09/2017 02:00:00 PM','Full Council','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552067','',0),(82,'Civil Rights, Utilities, Economic Development & Arts Committee','10/10/2017 09:30:00 AM','10/10/2017 09:30:00 AM','Civil Rights, Utilities, Economic Development & Arts Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551723','',0),(83,'Energy & Environment Committee','10/10/2017 02:00:00 PM','10/10/2017 02:00:00 PM','Energy & Environment Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551793','',0),(84,'Gender Equity, Safe Communities & New Americans','10/11/2017 09:30:00 AM','10/11/2017 09:30:00 AM','Gender Equity, Safe Communities & New Americans','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694479','',0),(85,'Human Services & Public Health Committee','10/11/2017 02:00:00 PM','10/11/2017 02:00:00 PM','Human Services & Public Health Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551845','',0),(86,'Council Briefing','10/16/2017 09:30:00 AM','10/16/2017 09:30:00 AM','Council Briefing','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552016','',0),(87,'Full Council','10/16/2017 02:00:00 PM','10/16/2017 02:00:00 PM','Full Council','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552068','',0),(88,'Planning, Land Use & Zoning Committee','10/17/2017 09:30:00 AM','10/17/2017 09:30:00 AM','Planning, Land Use & Zoning Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551910','',0),(89,'Sustainability & Transportation Committee','10/17/2017 02:00:00 PM','10/17/2017 02:00:00 PM','Sustainability & Transportation Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551970','',0),(90,'Affordable Housing, Neigborhoods & Finance Committee','10/18/2017 09:30:00 AM','10/18/2017 09:30:00 AM','Affordable Housing, Neigborhoods & Finance Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551711','',0),(91,'Education, Equity & Governance','10/18/2017 02:00:00 PM','10/18/2017 02:00:00 PM','Education, Equity & Governance','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694382','',0),(92,'Parks, Seattle Center, Libraries & Waterfront Committee','10/19/2017 09:30:00 AM','10/19/2017 09:30:00 AM','Parks, Seattle Center, Libraries & Waterfront Committee','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121694587','',0),(93,'Council Briefing','10/23/2017 09:30:00 AM','10/23/2017 09:30:00 AM','Council Briefing','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552017','',0),(94,'Full Council','10/23/2017 02:00:00 PM','10/23/2017 02:00:00 PM','Full Council','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552069','',0),(95,'Civil Rights, Utilities, Economic Development & Arts Committee','10/24/2017 09:30:00 AM','10/24/2017 09:30:00 AM','Civil Rights, Utilities, Economic Development & Arts Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d121690758','',0),(96,'Energy & Environment','10/24/2017 02:00:00 PM','10/24/2017 02:00:00 PM','Energy & Environment','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551806','',0),(97,'Gender Equity, Safe Communities & New Americans','10/25/2017 09:30:00 AM','10/25/2017 09:30:00 AM','Gender Equity, Safe Communities & New Americans','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551751','',0),(98,'Human Services & Public Health Committee','10/25/2017 02:00:00 PM','10/25/2017 02:00:00 PM','Human Services & Public Health Committee','Council Chambers','600 Fourth Avenue','47.6037','-122.3297','(47.60377, -122.32971)','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117551857','',0),(99,'Councilmember Lisa Herbold\'s In-District Office Hours','10/27/2017 02:00:00 PM','10/27/2017 07:00:00 PM','Councilmember Lisa Herbold\'s In-District Office Hours','','Southwest Neighborhood Service Center','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d122873996','',0),(100,'Council Briefing','10/30/2017 09:30:00 AM','10/30/2017 09:30:00 AM','Council Briefing','Council Chambers','600 Fourth Ave., Floor 2','','','','http://www.seattle.gov/council/calendar/default.htm?trumbaEmbed=view%3devent%26eventid%3d117552018','',0),(101,'HelloWorld',NULL,NULL,NULL,'Hoover',NULL,NULL,NULL,NULL,NULL,NULL,0),(102,'Party at UAB2','7/29/2017/2:53PM','7/29/2017/8:53PM',NULL,NULL,'Party at UAB','-86.80224','33.504931',NULL,NULL,NULL,4),(103,'Party at UAB3','07/18/2017 09:30:00 AM','07/18/2017 12:30:00 PM',NULL,NULL,'Super Random Event','33.543682','-86.779',NULL,NULL,NULL,4),(104,'Test Event 17','07/18/2017 09:30:00 AM','07/18/2017 12:30:00 PM',NULL,NULL,'Test Event for Now','-86.779','33.543682',NULL,NULL,NULL,2),(105,'Hey EDIT EVENT 20170803','08/03/17 17:33','08/03/17 18:33',NULL,NULL,'test event','33.502478','-86.810194',NULL,NULL,NULL,4),(106,'Test2 Event at Birmingham ','08/03/2017 09.00 pm.','08/03/2017 11.00 pm.',NULL,NULL,'UAB CIS LAB','33.497015','-86.804159',NULL,NULL,NULL,5);
/*!40000 ALTER TABLE `table 5` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(60) DEFAULT NULL,
  `username` varchar(60) DEFAULT NULL,
  `first_name` varchar(60) DEFAULT NULL,
  `last_name` varchar(60) DEFAULT NULL,
  `password_hash` varchar(128) DEFAULT NULL,
  `event_id` int(11) DEFAULT NULL,
  `is_admin` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ix_users_email` (`email`),
  UNIQUE KEY `ix_users_username` (`username`),
  KEY `event_id` (`event_id`),
  KEY `ix_users_first_name` (`first_name`),
  KEY `ix_users_last_name` (`last_name`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test@uab.edu','tester','test','testington','pbkdf2:sha256:50000$RpXqHogY$6eccfbaec899c96615f769896bee03eaa2b8a77e57da08ef3bbb29fa4b95b460',NULL,0),(2,'admin@admin.com','admin',NULL,NULL,'pbkdf2:sha256:50000$ARJFGdfV$d21f55e2e646011a233cfe3d33549df209627fc6b274974391382d09788a2ac5',NULL,1),(3,'tester@test.com','tester17','test','teston','pbkdf2:sha256:50000$b8G20R1O$66edcbcdefbbb313f2ba45de9fddbed1436642f9cec26a6ac636aecabab734aa',NULL,0),(4,'smithroderick17@gmail.com','smithroderick17','Roderick','Smith','pbkdf2:sha256:50000$Awe2CYZK$cd6fcad4baf9562b8e894663cb8a0ef76243cce75f803ea370063c8210c6883b',NULL,0),(5,'test2@uab.edu','test2','test2','last','pbkdf2:sha1:1000$6Oqtd7Fk$e0917dbe60c6faa765cd83042f69c5140c21d1f1',NULL,0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-05 20:01:40
