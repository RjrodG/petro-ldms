-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2025 at 09:46 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `petroldms`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dep_id` int(11) NOT NULL,
  `dep_name` char(50) NOT NULL,
  `dep_division` char(12) NOT NULL,
  `dep_head_emp_id` int(11) NOT NULL,
  `dep_ldo_emp_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dep_id`, `dep_name`, `dep_division`, `dep_head_emp_id`, `dep_ldo_emp_id`) VALUES
(1, 'Accounting Section', 'FINANCE', 0, 0),
(2, 'Admitting Unit', 'MEDICAL', 0, 0),
(3, 'Billing and Claims Unit', 'FINANCE', 0, 0),
(4, 'Nursing Service - Orthopedic Ward (Ward 2/3)', 'NURSING', 0, 0),
(5, 'Anesthesia Department', 'MEDICAL', 0, 0),
(6, 'Rehabilitation Medicine Department', 'MEDICAL', 0, 0),
(7, 'Health Information Management (HIM)', 'MEDICAL', 0, 0),
(8, 'Dept Of Pathology & Lab. Medicine', 'MEDICAL', 0, 0),
(9, 'Blood Bank Unit', 'MEDICAL', 0, 0),
(10, 'Brain & Spine Center', 'MEDICAL', 0, 0),
(11, 'Budget Section', 'FINANCE', 0, 0),
(12, 'Burn Unit', 'NURSING', 0, 0),
(13, 'Cancer Center', 'MEDICAL', 0, 0),
(14, 'Nuclear Medicine', 'MEDICAL', 0, 0),
(15, 'Pediatrics Department', 'MEDICAL', 0, 0),
(16, 'Radio-Onco Unit', 'MEDICAL', 0, 0),
(17, 'Emergency Room', 'NURSING', 0, 0),
(18, 'Oncology Unit', 'NURSING', 0, 0),
(19, 'OB-Gyne Department', 'MEDICAL', 0, 0),
(20, 'Cashier Section', 'FINANCE', 0, 0),
(21, 'Central Supply and Sterilization (CSS)', 'NURSING', 0, 0),
(22, 'Pharmacy Section', 'MEDICAL', 0, 0),
(23, 'Claims Medical Unit', 'OMCC', 0, 0),
(24, 'Office of the Chief Of Medical Professional Staff', 'MEDICAL', 0, 0),
(25, 'COA', 'NOT APPLICAB', 0, 0),
(26, 'Nursing Service - Communicable Unit (Ward 7)', 'NURSING', 0, 0),
(27, 'Out-Patient Department', 'NURSING', 0, 0),
(28, 'Complementary And Alternative Medicine Clinic', 'MEDICAL', 0, 0),
(29, 'CT Scan/MRI/2 D Echo', 'MEDICAL', 0, 0),
(30, 'Data Protection Unit', 'HOPSS', 0, 0),
(31, 'Nursing Service - Delivery Room (DR)', 'NURSING', 0, 0),
(32, 'Dental Unit', 'MEDICAL', 0, 0),
(33, 'Psychiatry Department', 'MEDICAL', 0, 0),
(34, 'Surgery Department', 'MEDICAL', 0, 0),
(35, 'Engineering Facilities Management (EFM)', 'HOPSS', 0, 0),
(36, 'Document Control Office', 'OMCC', 0, 0),
(37, 'Ears, Nose and Throat (ENT)', 'MEDICAL', 0, 0),
(38, 'Emergency Room Doctors', 'MEDICAL', 0, 0),
(39, 'Nursing Service - Operating Room (OR)', 'NURSING', 0, 0),
(40, 'Nursing Service - Pediatric Ward (Ward 8)', 'NURSING', 0, 0),
(41, 'Nursing Service - Endoscopy Unit', 'NURSING', 0, 0),
(42, 'Nursing Service - Optha Ward & OR & PACU', 'NURSING', 0, 0),
(43, 'Family And Community Medicine', 'MEDICAL', 0, 0),
(44, 'Family Planning', 'NURSING', 0, 0),
(45, 'Finance Division', 'FINANCE', 0, 0),
(46, 'Nursing Service - Gyne-Onco', 'NURSING', 0, 0),
(47, 'Hemodialysis Unit', 'NURSING', 0, 0),
(48, 'Operation Center-Health Emergency Medical Staff (O', 'NURSING', 0, 0),
(49, 'Health Operation and Patient Support Service (HOPS', 'HOPSS', 0, 0),
(50, 'Hospice & Pallative Home Care Program', 'NURSING', 0, 0),
(51, 'Housekeeping Unit (HKU)', 'HOPSS', 0, 0),
(52, 'Nursing Service - Infectious Unit (Ward 6)', 'NURSING', 0, 0),
(53, 'Housekeeping Unit / Surgery Ward', 'NURSING', 0, 0),
(54, 'Housekeeping Unit / Communicable Ward', 'NURSING', 0, 0),
(55, 'Housekeeping Unit / Delivery Room', 'NURSING', 0, 0),
(56, 'Housekeeping Unit / Dialysis Unit', 'NURSING', 0, 0),
(57, 'Housekeeping Unit / Emergency Room', 'NURSING', 0, 0),
(58, 'Housekeeping Unit / Infectious Ward', 'NURSING', 0, 0),
(59, 'Housekeeping Unit / Medical ICU', 'NURSING', 0, 0),
(60, 'Housekeeping Unit / Medical Ward', 'NURSING', 0, 0),
(61, 'Housekeeping Unit / OB-Gyne Ward', 'NURSING', 0, 0),
(62, 'Housekeeping Unit / Orthopedic Ward', 'NURSING', 0, 0),
(63, 'Housekeeping Unit / Pediatric Ward', 'NURSING', 0, 0),
(64, 'Human Resource Management Office (HRMO)', 'HOPSS', 0, 0),
(65, 'Human Milk Bank', 'NURSING', 0, 0),
(66, 'Public Affairs and Customer Care Unit (PACCU)', 'HOPSS', 0, 0),
(67, 'Out-Patient Department', 'HOPSS', 0, 0),
(68, 'Integrated Hospital Operations and Management Prog', 'OMCC', 0, 0),
(69, 'Infection Prevention and Control Committee (IPCC)', 'NURSING', 0, 0),
(70, 'Treatment Hub', 'NURSING', 0, 0),
(71, 'Information and Innovation System Unit (IISU)', 'OMCC', 0, 0),
(72, 'Internal Control (IC)', 'OMCC', 0, 0),
(73, 'Internal Medicine Department', 'MEDICAL', 0, 0),
(74, 'OPD-TeleMedicine', 'MEDICAL', 0, 0),
(75, 'Nursing Service - Medical Ward (Ward 5)', 'NURSING', 0, 0),
(76, 'Radiology Department', 'MEDICAL', 0, 0),
(77, 'Nursing Service - Isolation Facility', 'NURSING', 0, 0),
(78, 'Legal Section', 'OMCC', 0, 0),
(79, 'Linen and Laundry Unit', 'HOPSS', 0, 0),
(80, 'Clinical Laboratory Department', 'MEDICAL', 0, 0),
(81, 'Material Management Section (MMS)', 'HOPSS', 0, 0),
(82, 'Nursing Service - Medical Intensive Care Unit (MIC', 'NURSING', 0, 0),
(83, 'Medical Social Services (MSS)', 'MEDICAL', 0, 0),
(84, 'Nursing Service - Neonatal Intensive Care Unit (NI', 'NURSING', 0, 0),
(85, 'Nursing Service - Newborn Screening', 'NURSING', 0, 0),
(86, 'Nursing Service Office (NSO)', 'NURSING', 0, 0),
(87, 'Nutrition and Dietetics Department', 'MEDICAL', 0, 0),
(88, 'Nursing Service - Ob-Gyne Ward (Ward 1)', 'NURSING', 0, 0),
(89, 'OB-Gyne Department', 'NURSING', 0, 0),
(90, 'Nursing Service - OB-OR Complex', 'NURSING', 0, 0),
(91, 'Office for Institutional Strategy and Excellence (', 'OMCC', 0, 0),
(92, 'Office of the Medical Center Chief (OMCC)', 'OMCC', 0, 0),
(93, 'Nursing Service - Surgical Ward (Ward 4)', 'NURSING', 0, 0),
(94, 'Operation Center-Health Emergency Medical Staff (O', 'MEDICAL', 0, 0),
(95, 'OPD-TeleConsult', 'MEDICAL', 0, 0),
(96, 'Quality Improvement, Infection, Prevention and Con', 'OMCC', 0, 0),
(97, 'Opthalmology Department', 'MEDICAL', 0, 0),
(98, 'Orthopedics Department', 'MEDICAL', 0, 0),
(99, 'TB Dots/PMDT', 'NURSING', 0, 0),
(100, 'Public Affairs and Customer Care Unit (PACCU)', 'OMCC', 0, 0),
(101, 'Nursing Service - Post Anesthesia Care Unit (PACU)', 'NURSING', 0, 0),
(102, 'Nursing Service - Pediatric Intensive Care Unit (P', 'NURSING', 0, 0),
(103, 'Nursing Service - Pediatric Ward (Ward 8)', 'MEDICAL', 0, 0),
(104, 'Peritoneal Dialysis', 'NURSING', 0, 0),
(105, 'Professional Education Training & Research Office', 'OMCC', 0, 0),
(106, 'Planning Unit', 'OMCC', 0, 0),
(107, 'Poison Control Center', 'NURSING', 0, 0),
(108, 'Procurement Unit', 'HOPSS', 0, 0),
(109, 'Nursing Service - Psychiatric Ward (Ward 9)', 'NURSING', 0, 0),
(110, 'Public Health Unit (PHU)', 'OMCC', 0, 0),
(111, 'Pulmonary Unit', 'MEDICAL', 0, 0),
(112, 'Nursing Service - Infectious Unit (Ward 6)', 'OMCC', 0, 0),
(113, 'Safety and Environment Unit', 'OMCC', 0, 0),
(114, 'Security', 'HOPSS', 0, 0),
(115, 'Surgery / Orthopedic / ENT Wards', 'NURSING', 0, 0),
(116, 'Nursing Service - Surgical Intensive Care Unit (SI', 'NURSING', 0, 0),
(117, 'Women and Child Protection Unit (WCPU)', 'OMCC', 0, 0),
(118, 'Treatment Hub', 'MEDICAL', 0, 0),
(119, 'Detailed DOH', 'HOPSS', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `emp_id` int(11) NOT NULL,
  `dep_id` int(11) NOT NULL,
  `prof_id` int(11) NOT NULL,
  `emp_name` varchar(50) NOT NULL,
  `emp_position` varchar(20) NOT NULL,
  `emp_sg` varchar(5) NOT NULL,
  `emp_yearscurrentpos` varchar(11) NOT NULL,
  `emp_yearsplantpos` varchar(11) NOT NULL,
  `emp_sex` varchar(5) NOT NULL,
  `emp_contact` varchar(11) NOT NULL,
  `emp_classification` varchar(12) NOT NULL,
  `emp_yearperiod` int(11) NOT NULL,
  `emp_idnumber` varchar(11) NOT NULL,
  `emp_sdatecurrentpos` date NOT NULL,
  `emp_sdateplantpos` date DEFAULT NULL,
  `emp_email` varchar(32) NOT NULL,
  `emp_status` varchar(12) NOT NULL,
  `emp_dateofentry` date NOT NULL,
  `emp_dateofbirth` date NOT NULL,
  `emp_prcid` int(11) NOT NULL,
  `emp_prcexpdate` date DEFAULT NULL,
  `emp_cpdunits` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`emp_id`, `dep_id`, `prof_id`, `emp_name`, `emp_position`, `emp_sg`, `emp_yearscurrentpos`, `emp_yearsplantpos`, `emp_sex`, `emp_contact`, `emp_classification`, `emp_yearperiod`, `emp_idnumber`, `emp_sdatecurrentpos`, `emp_sdateplantpos`, `emp_email`, `emp_status`, `emp_dateofentry`, `emp_dateofbirth`, `emp_prcid`, `emp_prcexpdate`, `emp_cpdunits`) VALUES
(1, 1, 1, 'Michael Leonardo Kay Smith', 'Manager', '24', '5', '10', 'Male', '09171234567', 'Regular', 2024, 'EMP001', '2019-01-01', '2014-01-01', 'john.doe@email.com', 'Active', '2014-01-01', '1985-03-15', 0, NULL, 0),
(2, 2, 0, 'bolaboa', 'Developer', '18', '3', '5', 'Femal', '09181234567', 'Job Order', 2024, 'EMP002', '2021-06-15', '2019-06-15', 'jane.smith@email.com', 'Active', '2019-06-15', '1990-07-22', 0, NULL, 0),
(3, 1, 0, 'Michael Johnson', 'Designer', '15', '2', '2', 'Male', '09191234567', 'Temporary', 2024, 'EMP003', '2023-03-10', '2022-03-10', 'michaeladds.j@email.com', 'Inactive', '2022-03-10', '1992-11-05', 0, NULL, 0),
(4, 1, 0, 'Rodelio Gucela Jr.', 'Manager', '11', '1', '0', 'Male', '09265012716', 'Administrati', 2025, '2024010456', '0000-00-00', '0000-00-00', 'rjrodeliogucela@gmail.com', 'Temporary', '0000-00-00', '0000-00-00', 0, NULL, 0),
(5, 2, 0, 'JECJEC', 'Manager', '11', '1', '0', 'Male', '09265012716', 'Administrati', 2025, '2024010456', '0000-00-00', '0000-00-00', 'rjrodeliogucela@gmail.com', 'Job Order', '0000-00-00', '0000-00-00', 0, NULL, 0),
(6, 3, 0, 'JECJECzzz', 'Manager', '11', '1', '0', 'Male', '09265012716', 'Administrati', 2025, '2024010456', '0000-00-00', '0000-00-00', 'rjrodeliogucela@gmail.com', 'Permanent', '0000-00-00', '0000-00-00', 0, NULL, 0),
(7, 1, 0, 'JECJECzzz', 'Manager', '11', '1', '0', '', '09265012716', 'Administrati', 2025, '2024010456', '0000-00-00', '0000-00-00', 'rjrodeliogucela@gmail.com', 'Temporary', '0000-00-00', '0000-00-00', 0, NULL, 0),
(8, 1, 0, 'JECJECzzz', 'Manager', '11', '1', '0', 'Male', '09265012716', 'Administrati', 2025, '2024010456', '0000-00-00', '0000-00-00', 'rjrodeliogucela@gmail.com', 'Permanent', '0000-00-00', '0000-00-00', 0, NULL, 0),
(9, 2, 0, 'Rodelio Gucela Jr.D', 'Manager', '11', '1', '0', 'Male', '09265012716', 'Administrati', 2025, '2024010456', '0000-00-00', '0000-00-00', 'rjrodeliogucela@gmail.com', 'Permanent', '0000-00-00', '0000-00-00', 0, NULL, 0),
(10, 1, 0, 'Rodelio Gucela Jr.', 'Manager', '11', '1', '0', 'Male', '09265012716', 'Administrati', 2025, '2024010456', '0000-00-00', '0000-00-00', 'rjrodeliogucela@gmail.com', 'Permanent', '0000-00-00', '0000-00-00', 0, NULL, 0),
(11, 1, 0, 'ZXXCC', 'Manager', '11', '1', '0', 'Male', '09265012716', 'Administrati', 2025, '2024010456', '0000-00-00', '0000-00-00', 'rjrodeliogucela@gmail.com', 'Permanent', '0000-00-00', '0000-00-00', 0, NULL, 0),
(12, 1, 0, 'ZXXCC', 'Manager', '11', '1', '0', '', '09265012716', 'Administrati', 2025, '2024010456', '0000-00-00', '0000-00-00', 'rjrodeliogucela@gmail.com', 'Temporary', '0000-00-00', '0000-00-00', 0, NULL, 0),
(13, 2, 0, 'asd', 'asd', '22', '1', '1', '', '09265012716', 'Department M', 2, '232', '0000-00-00', '0000-00-00', 'rjrodeliogucela@gmail.com', 'Permanent', '0000-00-00', '0000-00-00', 0, NULL, 0),
(14, 1, 0, 'asd', 'asd', '22', '1', '1', '', '09265012716', 'Administrati', 2, '232', '0000-00-00', '0000-00-00', 'rjrodeliogucela@gmail.com', 'Permanent', '0000-00-00', '0000-00-00', 0, NULL, 0),
(15, 1, 0, 'asdidinggg', 'asd', '22', '1', '1', 'Male', '09265012716', 'Administrati', 2, '232', '0000-00-00', '0000-00-00', 'rjrodeliogucela@gmail.com', 'Temporary', '0000-00-00', '0000-00-00', 0, NULL, 0),
(16, 1, 0, 'GUCELA, RODELIO JR. B.', 'asd', '22', '1', '1', 'Male', '09265012716', 'Permanent', 2, '232', '0000-00-00', '0000-00-00', 'rjrodeliogucela@gmail.com', 'Active', '0000-00-00', '0000-00-00', 0, NULL, 0),
(17, 1, 0, 'zxczxccxczc', 'asd', '22', '1', '1', 'Male', '09265012716', 'Permanent', 2, '232', '0000-00-00', '0000-00-00', 'rjrodeliogucela@gmail.com', 'Active', '0000-00-00', '0000-00-00', 0, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `employee_ca_description`
--

CREATE TABLE `employee_ca_description` (
  `empc_id` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL,
  `empc_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employee_ca_gap`
--

CREATE TABLE `employee_ca_gap` (
  `empg_id` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL,
  `empg_gap` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employee_ca_strength`
--

CREATE TABLE `employee_ca_strength` (
  `emps_id` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL,
  `emps_strength` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employee_ldplan`
--

CREATE TABLE `employee_ldplan` (
  `empl_id` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL,
  `empl_development` text NOT NULL,
  `empl_expected` text NOT NULL,
  `empl_support` text NOT NULL,
  `empl_budget` text NOT NULL,
  `empl_resources` text NOT NULL,
  `empl_datecompleteed` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `position`
--

CREATE TABLE `position` (
  `pos_id` int(11) NOT NULL,
  `pos_name` text NOT NULL,
  `pos_sg` tinyint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `position`
--

INSERT INTO `position` (`pos_id`, `pos_name`, `pos_sg`) VALUES
(1, 'ACCOUNTANT III', 19),
(2, 'ACCOUNTANT IV', 22),
(3, 'ADMINISTRATIVE AIDE I', 1),
(4, 'ADMINISTRATIVE AIDE I (ELEVATOR OPERATOR)', 0),
(5, 'ADMINISTRATIVE AIDE I (FOOD SERVER WORKER)', 0),
(6, 'ADMINISTRATIVE AIDE I (LAUNDRY WORKER)', 0),
(7, 'ADMINISTRATIVE AIDE I (OXYGEN TANK MOVER)', 0),
(8, 'ADMINISTRATIVE AIDE I (SEAMSTER)', 0),
(9, 'ADMINISTRATIVE AIDE I (TANK MOVER)', 0),
(10, 'ADMINISTRATIVE AIDE I,  EO 366', 1),
(11, 'ADMINISTRATIVE AIDE III', 3),
(12, 'ADMINISTRATIVE AIDE III (AIRCON TECHNICIAN)', 0),
(13, 'ADMINISTRATIVE AIDE III (AUTOCLAVE OPERATOR)', 0),
(14, 'ADMINISTRATIVE AIDE III (ELECTRICIAN)', 0),
(15, 'ADMINISTRATIVE AIDE III (FINISHING CARPENTER)', 0),
(16, 'ADMINISTRATIVE AIDE III (MASON/CARPENTER)', 0),
(17, 'ADMINISTRATIVE AIDE III (OXYGEN PLANT OPERATOR)', 0),
(18, 'ADMINISTRATIVE AIDE III (PAINTER)', 0),
(19, 'ADMINISTRATIVE AIDE III (PLUMBER)', 0),
(20, 'ADMINISTRATIVE AIDE III (STP/ WASTE AUTOCLAVE OPERATOR)', 0),
(21, 'ADMINISTRATIVE AIDE III (WELDER)', 0),
(22, 'ADMINISTRATIVE AIDE III,  EO 366', 3),
(23, 'ADMINISTRATIVE AIDE IV', 4),
(24, 'ADMINISTRATIVE AIDE IV (AMBULANCE DRIVER)', 0),
(25, 'ADMINISTRATIVE AIDE V', 5),
(26, 'ADMINISTRATIVE AIDE VI', 6),
(27, 'ADMINISTRATIVE ASSISTANT I', 7),
(28, 'ADMINISTRATIVE ASSISTANT I (CUSTOMER CARE OFFICER)', 0),
(29, 'ADMINISTRATIVE ASSISTANT II', 8),
(30, 'ADMINISTRATIVE ASSISTANT III', 9),
(31, 'ADMINISTRATIVE OFFICER I', 10),
(32, 'ADMINISTRATIVE OFFICER II', 11),
(33, 'ADMINISTRATIVE OFFICER III', 14),
(34, 'ADMINISTRATIVE OFFICER IV', 15),
(35, 'ADMINISTRATIVE OFFICER V', 18),
(36, 'ARCHITECT I', 0),
(37, 'ATTORNEY II (PART-TIME)', 0),
(38, 'ATTORNEY IV', 23),
(39, 'AUDIOLOGIST', 0),
(40, 'CHEMIST I', 0),
(41, 'CHEMIST III', 18),
(42, 'CHIEF ADMINISTRATIVE OFFICER', 24),
(43, 'CHIEF OF MEDICAL PROFESSIONAL STAFF II', 26),
(44, 'CLINICAL CARE ASSOCIATE', 0),
(45, 'COMPUTER MAINTENANCE TECHNICIAN (COMPUTER OPERATOR II)', 0),
(46, 'COMPUTER MAINTENANCE TECHNOLOGIST II', 15),
(47, 'COMPUTER MAINTENANCE TECHNOLOGIST III', 17),
(48, 'COMPUTER PROGRAMMER I', 0),
(49, 'COMPUTER PROGRAMMER II', 0),
(50, 'COOK II', 5),
(51, 'DENTAL AIDE', 4),
(52, 'DENTIST II', 0),
(53, 'DENTIST III', 20),
(54, 'DENTIST V', 24),
(55, 'EEG TECHNICIAN', 0),
(56, 'ENGINEER I', 0),
(57, 'ENGINEER I (CIVIL)', 0),
(58, 'ENGINEER I (ELECTRICAL)', 0),
(59, 'ENGINEER I (MECHANICAL)', 0),
(60, 'ENGINEER I (SANITARY)', 0),
(61, 'ENGINEER II', 16),
(62, 'ENGINEER III', 19),
(63, 'ENGINEER IV', 22),
(64, 'ENVIRONMENTAL ENGINEER', 0),
(65, 'FINANCIAL AND MANAGEMENT OFFICER II', 24),
(66, 'HEALTH EDUCATION AND PROMOTION OFFICER II', 14),
(67, 'HEALTH EDUCATION AND PROMOTION OFFICER III', 18),
(68, 'HEALTH PHYSICIST II', 18),
(69, 'HEALTH PHYSICIST III', 22),
(70, 'HOSPITAL HOUSEKEEPER', 8),
(71, 'INFORMATION SYSTEM ANALYST III', 0),
(72, 'LABORATORY AIDE II', 4),
(73, 'LABORATORY AIDE II,  EO 366', 4),
(74, 'LABORATORY TECHNICIAN I', 0),
(75, 'LAUNDRY WORKER I', 1),
(76, 'LAUNDRY WORKER II', 3),
(77, 'LIBRARIAN I', 11),
(78, 'MAINTENANCE HELPER (INDUSTRIAL ELECTRICIAN)', 0),
(79, 'MAINTENANCE HELPER (INDUSTRIAL MECHANIC)', 0),
(80, 'MEDICAL CENTER CHIEF II', 27),
(81, 'MEDICAL EQUIPMENT TECHNICIAN I', 6),
(82, 'MEDICAL EQUIPMENT TECHNICIAN II', 8),
(83, 'MEDICAL EQUIPMENT TECHNICIAN III', 11),
(84, 'MEDICAL EQUIPMENT TECHNICIAN IV', 13),
(85, 'MEDICAL LABORATORY TECHNICIAN III', 10),
(86, 'MEDICAL OFFICER III', 21),
(87, 'MEDICAL OFFICER IV', 21),
(88, 'MEDICAL SPECIALIST II', 23),
(89, 'MEDICAL SPECIALIST II (PART TIME)', 23),
(90, 'MEDICAL SPECIALIST III', 24),
(91, 'MEDICAL SPECIALIST III (PART TIME)', 24),
(92, 'MEDICAL SPECIALIST IV', 25),
(93, 'MEDICAL TECHNOLOGIST I', 11),
(94, 'MEDICAL TECHNOLOGIST I (SWABBER)', 0),
(95, 'MEDICAL TECHNOLOGIST II', 15),
(96, 'MEDICAL TECHNOLOGIST III', 18),
(97, 'MEDICAL TECHNOLOGIST IV', 20),
(98, 'MEDICAL TECHNOLOGIST V', 22),
(99, 'MIDWIFE I', 9),
(100, 'MIDWIFE II', 11),
(101, 'MIDWIFE III', 13),
(102, 'MIDWIFE IV', 15),
(103, 'NURSE I', 15),
(104, 'NURSE II', 16),
(105, 'NURSE III', 17),
(106, 'NURSE IV', 19),
(107, 'NURSE V', 20),
(108, 'NURSE VI', 22),
(109, 'NURSE VII', 24),
(110, 'NURSING ATTENDANT I', 4),
(111, 'NURSING ATTENDANT II', 6),
(112, 'NURSING ATTENDANT II (MEDICAL RESPONDER)', 0),
(113, 'NUTRITIONIST DIETITIAN II', 15),
(114, 'NUTRITIONIST DIETITIAN III', 18),
(115, 'NUTRITIONIST DIETITIAN IV', 20),
(116, 'NUTRITIONIST DIETITIAN V', 22),
(117, 'NUTRITIONIST-DIETITIAN III', 0),
(118, 'OCCUPATIONAL THERAPIST II', 0),
(119, 'OCCUPATIONAL THERAPIST III', 0),
(120, 'PHARMACIST I', 11),
(121, 'PHARMACIST II', 15),
(122, 'PHARMACIST III', 18),
(123, 'PHARMACIST IV', 20),
(124, 'PHARMACIST V', 22),
(125, 'PHYSICAL THERAPIST I', 11),
(126, 'PHYSICAL THERAPIST II', 15),
(127, 'PHYSICAL THERAPIST III', 18),
(128, 'PHYSICAL THERAPY TECHNICIAN I', 6),
(129, 'PLANNING OFFICER III', 18),
(130, 'PSYCHOLOGIST II', 15),
(131, 'PSYCHOLOGIST III', 18),
(132, 'RADIOLOGIC TECHNOLOGIST I', 11),
(133, 'RADIOLOGIC TECHNOLOGIST II', 15),
(134, 'RADIOLOGIC TECHNOLOGIST III', 18),
(135, 'RADIOLOGIC TECHNOLOGIST IV', 20),
(136, 'RECORDS OFFICER III', 18),
(137, 'RESPIRATORY THERAPIST I', 10),
(138, 'RESPIRATORY THERAPIST II', 14),
(139, 'RESPIRATORY THERAPIST III', 17),
(140, 'SEAMSTRESS', 2),
(141, 'SECURITY AIDE', 0),
(142, 'SECURITY GUARD I', 3),
(143, 'SECURITY GUARD II,  EO 366', 5),
(144, 'SENIOR HEALTH PROGRAM OFFICER', 18),
(145, 'SOCIAL WELFARE ASSISTANT', 8),
(146, 'SOCIAL WELFARE OFFICER I', 11),
(147, 'SOCIAL WELFARE OFFICER II', 15),
(148, 'SOCIAL WELFARE OFFICER III', 18),
(149, 'SOCIAL WELFARE OFFICER IV', 22),
(150, 'STATISTICIAN II', 15),
(151, 'STATISTICIAN III', 18),
(152, 'SUPERVISING ADMINISTRATIVE OFFICER', 22),
(153, 'TRAINING ASSISTANT', 8),
(154, 'TRAINING SPECIALIST IV', 22),
(155, 'WARD ASSISTANT', 7),
(156, 'WARD ASSISTANT (CUSTOMER CARE OFFICER)', 0),
(157, 'WARD ASSISTANT (PHARMACY ASSISTANT)', 0),
(158, 'WARD ASSISTANT (Z PACKAGE PATIENT NAVIGATOR)', 0),
(159, 'WAREHOUSEMAN III', 11);

-- --------------------------------------------------------

--
-- Table structure for table `post_training_evaluation`
--

CREATE TABLE `post_training_evaluation` (
  `pte_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `training_id` int(11) NOT NULL,
  `speaker_id` int(11) NOT NULL,
  `rating_no1a` int(11) NOT NULL,
  `rating_no1b` int(11) NOT NULL,
  `rating_no1c` int(11) NOT NULL,
  `rating_no2a` int(11) NOT NULL,
  `rating_no2b` int(11) NOT NULL,
  `rating_no3a` int(11) NOT NULL,
  `rating_no3b` int(11) NOT NULL,
  `rating_no4a` int(11) NOT NULL,
  `rating_no4b` int(11) NOT NULL,
  `rating_no5a` int(11) NOT NULL,
  `rating_no5b` int(11) NOT NULL,
  `rating_no6a` int(11) NOT NULL,
  `rating_no6b` int(11) NOT NULL,
  `rating_no6c` int(11) NOT NULL,
  `rating_no7a` int(11) NOT NULL,
  `rating_no8a` int(11) NOT NULL,
  `rating_no8b` int(11) NOT NULL,
  `rating_no8c` int(11) NOT NULL,
  `pte_satisfied` tinyint(1) NOT NULL,
  `pte_moreinfo` text NOT NULL,
  `pte_omitted` text NOT NULL,
  `pte_strengimp` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `profession`
--

CREATE TABLE `profession` (
  `prof_id` int(11) NOT NULL,
  `prof_alphaname` varchar(20) NOT NULL,
  `prof_name` varchar(20) NOT NULL,
  `prof_code` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profession`
--

INSERT INTO `profession` (`prof_id`, `prof_alphaname`, `prof_name`, `prof_code`) VALUES
(1, 'Accountancy (ACC)', 'Certified Public Acc', '100'),
(2, 'Aeronautical Enginee', 'Aeronautical Enginee', '3400'),
(3, 'Agricultural & Biosy', 'Agricultural And Bio', '200'),
(4, 'Agriculture (AGR)', 'Agriculturist', '4200'),
(5, 'Architecture (ARC)', 'Architect', '300'),
(6, 'Chemical Engineering', 'Chemical Engineer', '410'),
(7, 'Chemistry (CHM)', 'Chemist', '510'),
(8, 'Chemistry (CHM)', 'Chemical Technician', '520'),
(9, 'Civil Engineering (O', 'Civil Engineer', '600'),
(10, 'Criminology (CRM)', 'Criminologist', '3500'),
(11, 'Customs Broker (OCB)', 'Customs Broker', '800'),
(12, 'Dentistry (DNT)', 'Dentist', '910'),
(13, 'Dentistry (DNT)', 'Dental Hygienist', '920'),
(14, 'Dentistry (DNT)', 'Dental Technologist', '930'),
(15, 'Electrical Engineeri', 'Registered Electrica', '1100'),
(16, 'Electrical Engineeri', 'Professional Electri', '1110'),
(17, 'Electrical Engineeri', 'Registered Master El', '1150'),
(18, 'Electronics Engineer', 'Electronics And Comm', '1200'),
(19, 'Electronics Engineer', 'Professional Electro', '1201'),
(20, 'Electronics Engineer', 'Electronics Engineer', '1202'),
(21, 'Electronics Engineer', 'Electronics Technici', '1203'),
(22, 'Environmental Planni', 'Environmental Planne', '3600'),
(23, 'Fisheries (FIS)', 'Fisheries Technologi', '4300'),
(24, 'Food Technology (OFT', 'Food Technologist', '4540'),
(25, 'Forestry (FRT)', 'Forester', '1300'),
(26, 'Geodetic Engineering', 'Geodetic Engineer', '1410'),
(27, 'Geology (GEO)', 'Geologist', '1510'),
(28, 'Geology (GEO)', 'Geologic Aide', '1520'),
(29, 'Guidance & Counselin', 'Guidance Counselor', '4100'),
(30, 'Interior Design (OID', 'Interior Designer', '310'),
(31, 'Landscape Architectu', 'Landscape Architect', '320'),
(32, 'Librarian (LIB)', 'Librarian', '3800'),
(33, 'Master Plumbing (OMP', 'Master Plumber', '1900'),
(34, 'Mechanical Engineeri', 'Professional Mechani', '2010'),
(35, 'Mechanical Engineeri', 'Mechanical Engineer', '2040'),
(36, 'Mechanical Engineeri', 'Certified Plant Mech', '2060'),
(37, 'Medical Technology (', 'Medical Technologist', '2110'),
(38, 'Medical Technology (', 'Medical Laboratory T', '2120'),
(39, 'Medicine (MED)', 'Physician', '2200'),
(40, 'Metallurgical Engine', 'Metallurgical Engine', '1810'),
(41, 'Metallurgical Engine', 'Metallurgical Plant ', '1820'),
(42, 'Midwifery (MDW)', 'Midwife (Ra 2382)', '2310'),
(43, 'Midwifery (MDW)', 'Midwife', '2320'),
(44, 'Mining Engineering (', 'Mining Engineer', '2410'),
(45, 'Mining Engineering (', 'Certified Mine Forem', '2420'),
(46, 'Mining Engineering (', 'Certified Quarry For', '2440'),
(47, 'Naval Architecture (', 'Naval Architect & Ma', '2500'),
(48, 'Nursing (NRS)', 'Nurse', '2600'),
(49, 'Nutrition & Dietetic', 'Nutritionist Dietiti', '1010'),
(50, 'Occupational Therapy', 'Occupational Therapi', '2920'),
(51, 'Optometry (OPT)', 'Optometrist', '2700'),
(52, 'Optometry (OPT)', 'Ocular Pharmacologis', '2710'),
(53, 'Pharmacy (PHA)', 'Pharmacist', '2810'),
(54, 'Pharmacy (PHA)', 'Chinese Druggist', '2820'),
(55, 'Physical Therapy (PH', 'Physical Therapist', '2910'),
(56, 'Professional Teacher', 'Professional Teacher', '4000'),
(57, 'Psychology (PSYCH)', 'Psychologist', '4520'),
(58, 'Psychology (PSYCH)', 'Psychometrician', '4530'),
(59, 'Radiologic Technolog', 'Radiologic Technolog', '3710'),
(60, 'Radiologic Technolog', 'X-Ray Technologist', '3720'),
(61, 'Real Estate Service ', 'Real Estate Consulta', '4410'),
(62, 'Real Estate Service ', 'Real Estate Appraise', '4420'),
(63, 'Real Estate Service ', 'Real Estate Broker', '4430'),
(64, 'Real Estate Service ', 'Real Estate Sales Pe', 'NA'),
(65, 'Respiratory Therapy ', 'Respiratory Therapis', '4510'),
(66, 'Sanitary Engineering', 'Sanitary Engineer', '3000'),
(67, 'Social Workers (OSW)', 'Social Worker', '3200'),
(68, 'Speech-Language Path', 'Speech-Language Path', '4550'),
(69, 'Veterinary Medicine ', 'Veterinarian', '3300');

-- --------------------------------------------------------

--
-- Table structure for table `speaker`
--

CREATE TABLE `speaker` (
  `speaker_id` int(11) NOT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `speaker_isemp` tinyint(1) NOT NULL,
  `speaker_agency` varchar(50) NOT NULL,
  `speaker_name` varchar(50) NOT NULL,
  `speaker_position` varchar(20) NOT NULL,
  `speaker_department` varchar(50) NOT NULL,
  `speaker_credpdf` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `training`
--

CREATE TABLE `training` (
  `training_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `profession_id` int(11) NOT NULL,
  `training_title` text NOT NULL,
  `training_objectives` text NOT NULL,
  `training_frdate` datetime NOT NULL,
  `training_todate` datetime NOT NULL,
  `training_nodays` int(11) NOT NULL,
  `training_nohours` int(11) NOT NULL,
  `training_two` varchar(12) NOT NULL,
  `training_iscpd` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `training_cpdunit` int(11) NOT NULL,
  `training_comptitle` varchar(12) NOT NULL,
  `training_comparea` varchar(12) NOT NULL,
  `training_type` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `training_idp`
--

CREATE TABLE `training_idp` (
  `training_id` int(11) NOT NULL,
  `idp_recinter` varchar(50) NOT NULL,
  `idp_status` varchar(10) NOT NULL,
  `idp_ldnapdf` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `training_ldnonld`
--

CREATE TABLE `training_ldnonld` (
  `training_id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  `ldnonld_reqdept` varchar(50) NOT NULL,
  `ldnonld_assignedts` varchar(50) NOT NULL,
  `ldnonld_status` varchar(10) NOT NULL,
  `ldnonld_venue` varchar(50) NOT NULL,
  `ldnonld_category` varchar(10) NOT NULL,
  `ldnonld_nomcc` int(11) NOT NULL,
  `ldnonld_nodmts` int(11) NOT NULL,
  `ldnonld_noadmin` int(11) NOT NULL,
  `ldnonld_nospeaker` int(11) NOT NULL,
  `ldnonld_nofacili` int(11) NOT NULL,
  `ldnonld_totalno` int(11) NOT NULL,
  `ldnonld_femaleno` int(11) NOT NULL,
  `ldnonld_maleno` int(11) NOT NULL,
  `ldnonld_pono` varchar(10) NOT NULL,
  `ldnonld_popdf` blob NOT NULL,
  `lldnonld_approveddate` date NOT NULL,
  `ldnonld_pte` text NOT NULL,
  `ldnonld_pteowner` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `training_obot`
--

CREATE TABLE `training_obot` (
  `training_id` int(11) NOT NULL,
  `obot_category` varchar(10) NOT NULL,
  `obot_status` varchar(10) NOT NULL,
  `obot_venue` varchar(50) NOT NULL,
  `obot_pono` varchar(10) NOT NULL,
  `obot_popdf` blob DEFAULT NULL,
  `obot_ptrpdf` blob DEFAULT NULL,
  `obot_dateptrreceived` varchar(20) NOT NULL,
  `obot_remarks` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dep_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `employee_ca_description`
--
ALTER TABLE `employee_ca_description`
  ADD PRIMARY KEY (`empc_id`);

--
-- Indexes for table `employee_ca_gap`
--
ALTER TABLE `employee_ca_gap`
  ADD PRIMARY KEY (`empg_id`);

--
-- Indexes for table `employee_ca_strength`
--
ALTER TABLE `employee_ca_strength`
  ADD PRIMARY KEY (`emps_id`);

--
-- Indexes for table `employee_ldplan`
--
ALTER TABLE `employee_ldplan`
  ADD PRIMARY KEY (`empl_id`);

--
-- Indexes for table `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`pos_id`);

--
-- Indexes for table `post_training_evaluation`
--
ALTER TABLE `post_training_evaluation`
  ADD PRIMARY KEY (`pte_id`);

--
-- Indexes for table `profession`
--
ALTER TABLE `profession`
  ADD PRIMARY KEY (`prof_id`);

--
-- Indexes for table `speaker`
--
ALTER TABLE `speaker`
  ADD PRIMARY KEY (`speaker_id`);

--
-- Indexes for table `training`
--
ALTER TABLE `training`
  ADD PRIMARY KEY (`training_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `dep_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `emp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `employee_ca_description`
--
ALTER TABLE `employee_ca_description`
  MODIFY `empc_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employee_ca_gap`
--
ALTER TABLE `employee_ca_gap`
  MODIFY `empg_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employee_ca_strength`
--
ALTER TABLE `employee_ca_strength`
  MODIFY `emps_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employee_ldplan`
--
ALTER TABLE `employee_ldplan`
  MODIFY `empl_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `position`
--
ALTER TABLE `position`
  MODIFY `pos_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=160;

--
-- AUTO_INCREMENT for table `post_training_evaluation`
--
ALTER TABLE `post_training_evaluation`
  MODIFY `pte_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `profession`
--
ALTER TABLE `profession`
  MODIFY `prof_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `speaker`
--
ALTER TABLE `speaker`
  MODIFY `speaker_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `training`
--
ALTER TABLE `training`
  MODIFY `training_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
