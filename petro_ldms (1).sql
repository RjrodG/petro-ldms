-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 02, 2025 at 09:09 AM
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
-- Database: `petro_ldms`
--

-- --------------------------------------------------------

--
-- Table structure for table `affiliation_types`
--

CREATE TABLE `affiliation_types` (
  `aff_type_id` int(11) NOT NULL,
  `aff_type_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `classification`
--

CREATE TABLE `classification` (
  `class_id` int(11) NOT NULL,
  `class_name` varchar(20) NOT NULL,
  `class_description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classification`
--

INSERT INTO `classification` (`class_id`, `class_name`, `class_description`) VALUES
(1, 'ADMINISTRATIVE STAFF', 'Administrative Staffs is composed of Administrative Assistants, Officers etc.'),
(2, 'DM/TS', 'Development Managers or Training Specialists, Nurses, Doctors and other Technical Staffs');

-- --------------------------------------------------------

--
-- Table structure for table `competency`
--

CREATE TABLE `competency` (
  `comp_id` int(11) NOT NULL,
  `comp_title` text NOT NULL,
  `comp_area` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `competency`
--

INSERT INTO `competency` (`comp_id`, `comp_title`, `comp_area`) VALUES
(1, 'Accounting Proficiency', 'Technical Competency'),
(2, 'Achieving High Standards', 'Technical Competency'),
(3, 'Advocating Public Health', 'Technical Competency'),
(4, 'Attention to Details', 'Technical Competency'),
(5, 'Audit Planning', 'Technical Competency'),
(6, 'Benefits, Compensation and Welfare Management', 'Technical Competency'),
(7, 'Biomedical/Biobehavioral Research Expertise', 'Technical Competency'),
(8, 'Building a Successful Team', 'Technical Competency'),
(9, 'Building Collaborative and Inclusive Working Relationship', 'Leadership Competency'),
(10, 'Building Relationship with Stakeholders', 'Technical Competency'),
(11, 'Care Management', 'Technical Competency'),
(12, 'Case Management', 'Technical Competency'),
(13, 'Cash Management', 'Technical Competency'),
(14, 'Change Management', 'Technical Competency'),
(15, 'Computer Skills', 'Technical Competency'),
(16, 'Conceptual Thinking', 'Technical Competency'),
(17, 'Continuous Development', 'Technical Competency'),
(18, 'Contract Management', 'Technical Competency'),
(19, 'Data Management', 'Technical Competency'),
(20, 'Data Recording and Reporting', 'Technical Competency'),
(21, 'Decision Quality', 'Technical Competency'),
(22, 'Developing Personal and Organizational Capability', 'Technical Competency'),
(23, 'Diplomacy', 'Technical Competency'),
(24, 'Diversity Management', 'Technical Competency'),
(25, 'Dormitory Management', 'Technical Competency'),
(26, 'Driving and Transportation Proficiency', 'Technical Competency'),
(27, 'Drugs and Medicines Management', 'Technical Competency'),
(28, 'Effective Communication Skills', 'Organizational Competency'),
(29, 'Effective Interpersonal Relations', 'Organizational Competency'),
(30, 'Effective Presentation Skills', 'Technical Competency'),
(31, 'Employee Relations and Events', 'Technical Competency'),
(32, 'Energy to Work', 'Technical Competency'),
(33, 'Enterprise Resource Planning', 'Technical Competency'),
(34, 'Equipment, Materials and Supplies Management', 'Technical Competency'),
(35, 'Exemplifying Integrity', 'Core Competency'),
(36, 'Facility and Equipment Maintenance', 'Technical Competency'),
(37, 'Financial Acumen', 'Technical Competency'),
(38, 'Financial Budget and Program Analysis', 'Technical Competency'),
(39, 'Financial Management', 'Technical Competency'),
(40, 'Government Accounting and Budgeting', 'Technical Competency'),
(41, 'Government and Departmental Policies and Procedures', 'Technical Competency'),
(42, 'Health Promotion and Health Education', 'Technical Competency'),
(43, 'Implementing Health Policies and Regulations', 'Technical Competency'),
(44, 'Influencing and Negotiating', 'Technical Competency'),
(45, 'Information Management', 'Technical Competency'),
(46, 'Information Technology Policy and Planning', 'Technical Competency'),
(47, 'Information, Security, Risk Management, and Assurance', 'Technical Competency'),
(48, 'Instructional Design', 'Technical Competency'),
(49, 'Labor Relations', 'Technical Competency'),
(50, 'Leading Change', 'Leadership Competency'),
(51, 'Learning and Development', 'Technical Competency'),
(52, 'Learning Facilitation', 'Technical Competency'),
(53, 'Legal Proficiency', 'Technical Competency'),
(54, 'Management Acumen', 'Technical Competency'),
(55, 'Managing Conflict', 'Technical Competency'),
(56, 'Managing Performance and Coaching for Results', 'Leadership Competency'),
(57, 'Managing Work', 'Technical Competency'),
(58, 'Manpower Acquisition and Development', 'Technical Competency'),
(59, 'Maternal and Newborn Care', 'Technical Competency'),
(60, 'Media and Public Relations', 'Technical Competency'),
(61, 'Medical Knowledge', 'Technical Competency'),
(62, 'Medical Social Services', 'Technical Competency'),
(63, 'Monitoring and Evaluating Skills', 'Technical Competency'),
(64, 'Networks, Telecommunication, Wireless and Mobility Knowledge', 'Technical Competency'),
(65, 'Nursing Care', 'Technical Competency'),
(66, 'Nutrition and Dietetics Services', 'Technical Competency'),
(67, 'Occupational Safety and Health Knowledge', 'Technical Competency'),
(68, 'Operating Medical Machines, Equipment and Tools', 'Technical Competency'),
(69, 'Organizational Awareness and Commitment', 'Organizational Competency'),
(70, 'Organizing Communities', 'Technical Competency'),
(71, 'Patient–Centered Care', 'Technical Competency'),
(72, 'People Management', 'Technical Competency'),
(73, 'Performance Management Standards', 'Technical Competency'),
(74, 'Planning, Organizing and Delivering', 'Technical Competency'),
(75, 'Policy Development', 'Technical Competency'),
(76, 'Political Savvy', 'Technical Competency'),
(77, 'Preparation of Budget Plans and Annual Budget Submissions', 'Technical Competency'),
(78, 'Process Management', 'Technical Competency'),
(79, 'Procurement Planning and Management', 'Technical Competency'),
(80, 'Professionalism', 'Core Competency'),
(81, 'Program / Project Planning and Management', 'Technical Competency'),
(82, 'Promoting Innovation', 'Organizational Competency'),
(83, 'Providing Support and Services', 'Technical Competency'),
(84, 'Records Management', 'Technical Competency'),
(85, 'Research and Analysis', 'Technical Competency'),
(86, 'Resilience', 'Technical Competency'),
(87, 'Respecting and Caring for Patients', 'Technical Competency'),
(88, 'Risk Management', 'Technical Competency'),
(89, 'Scientific Knowledge for Health/Medical Staff', 'Technical Competency'),
(90, 'Scientific Review Management', 'Technical Competency'),
(91, 'Service Excellence', 'Core Competency'),
(92, 'Statistical Research for Health', 'Technical Competency'),
(93, 'Supply Chain Management', 'Technical Competency'),
(94, 'Systems Administration and Data Management', 'Technical Competency'),
(95, 'Technical Consulting', 'Technical Competency'),
(96, 'Technical Writing', 'Technical Competency'),
(97, 'Therapy, Consulting and Behavioral Assessment', 'Technical Competency'),
(98, 'Thinking Strategically and Creatively', 'Leadership Competency'),
(99, 'Training Program Administration', 'Technical Competency'),
(100, 'Workforce Planning', 'Technical Competency');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dep_id` int(11) NOT NULL,
  `dep_name` varchar(50) NOT NULL,
  `dep_division` varchar(20) NOT NULL,
  `dep_head` text NOT NULL,
  `dep_ldo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dep_id`, `dep_name`, `dep_division`, `dep_head`, `dep_ldo`) VALUES
(1, 'Accounting Section', 'FINANCE', '', NULL),
(2, 'Admitting Unit', 'MEDICAL', '', NULL),
(3, 'Billing and Claims Unit', 'FINANCE', '', NULL),
(4, 'Nursing Service - Orthopedic Ward (Ward 2/3)', 'NURSING', '', NULL),
(5, 'Anesthesia Department', 'MEDICAL', '', NULL),
(6, 'Rehabilitation Medicine Department', 'MEDICAL', '', NULL),
(7, 'Health Information Management (HIM)', 'MEDICAL', '', NULL),
(8, 'Dept Of Pathology & Lab. Medicine', 'MEDICAL', '', NULL),
(9, 'Blood Bank Unit', 'MEDICAL', '', NULL),
(10, 'Brain & Spine Center', 'MEDICAL', '', NULL),
(11, 'Budget Section', 'FINANCE', '', NULL),
(12, 'Burn Unit', 'NURSING', '', NULL),
(13, 'Cancer Center', 'MEDICAL', '', NULL),
(14, 'Nuclear Medicine', 'MEDICAL', '', NULL),
(15, 'Pediatrics Department', 'MEDICAL', '', NULL),
(16, 'Radio-Onco Unit', 'MEDICAL', '', NULL),
(17, 'Emergency Room', 'NURSING', '', NULL),
(18, 'Oncology Unit', 'NURSING', '', NULL),
(19, 'OB-Gyne Department', 'MEDICAL', '', NULL),
(20, 'Cashier Section', 'FINANCE', '', NULL),
(21, 'Central Supply and Sterilization (CSS)', 'NURSING', '', NULL),
(22, 'Pharmacy Section', 'MEDICAL', '', NULL),
(23, 'Claims Medical Unit', 'OMCC', '', NULL),
(24, 'Office of the Chief Of Medical Professional Staff', 'MEDICAL', '', NULL),
(25, 'COA', 'NOT APPLICABLE', '', NULL),
(26, 'Nursing Service - Communicable Unit (Ward 7)', 'NURSING', '', NULL),
(27, 'Out-Patient Department', 'NURSING', '', NULL),
(28, 'Complementary And Alternative Medicine Clinic', 'MEDICAL', '', NULL),
(29, 'CT Scan/MRI/2 D Echo', 'MEDICAL', '', NULL),
(30, 'Data Protection Unit', 'HOPSS', '', NULL),
(31, 'Nursing Service - Delivery Room (DR)', 'NURSING', '', NULL),
(32, 'Dental Unit', 'MEDICAL', '', NULL),
(33, 'Psychiatry Department', 'MEDICAL', '', NULL),
(34, 'Surgery Department', 'MEDICAL', '', NULL),
(35, 'Engineering Facilities Management (EFM)', 'HOPSS', '', NULL),
(36, 'Document Control Office', 'OMCC', '', NULL),
(37, 'Ears, Nose and Throat (ENT)', 'MEDICAL', '', NULL),
(38, 'Emergency Room Doctors', 'MEDICAL', '', NULL),
(39, 'Nursing Service - Operating Room (OR)', 'NURSING', '', NULL),
(40, 'Nursing Service - Pediatric Ward (Ward 8)', 'NURSING', '', NULL),
(41, 'Nursing Service - Endoscopy Unit', 'NURSING', '', NULL),
(42, 'Nursing Service - Optha Ward & OR & PACU', 'NURSING', '', NULL),
(43, 'Family And Community Medicine', 'MEDICAL', '', NULL),
(44, 'Family Planning', 'NURSING', '', NULL),
(45, 'Finance Division', 'FINANCE', '', NULL),
(46, 'Nursing Service - Gyne-Onco', 'NURSING', '', NULL),
(47, 'Hemodialysis Unit', 'NURSING', '', NULL),
(48, 'Operation Center-Health Emergency Medical Staff (O', 'NURSING', '', NULL),
(49, 'Health Operation and Patient Support Service (HOPS', 'HOPSS', '', NULL),
(50, 'Hospice & Pallative Home Care Program', 'NURSING', '', NULL),
(51, 'Housekeeping Unit (HKU)', 'HOPSS', '', NULL),
(52, 'Nursing Service - Infectious Unit (Ward 6)', 'NURSING', '', NULL),
(53, 'Housekeeping Unit / Surgery Ward', 'NURSING', '', NULL),
(54, 'Housekeeping Unit / Communicable Ward', 'NURSING', '', NULL),
(55, 'Housekeeping Unit / Delivery Room', 'NURSING', '', NULL),
(56, 'Housekeeping Unit / Dialysis Unit', 'NURSING', '', NULL),
(57, 'Housekeeping Unit / Emergency Room', 'NURSING', '', NULL),
(58, 'Housekeeping Unit / Infectious Ward', 'NURSING', '', NULL),
(59, 'Housekeeping Unit / Medical ICU', 'NURSING', '', NULL),
(60, 'Housekeeping Unit / Medical Ward', 'NURSING', '', NULL),
(61, 'Housekeeping Unit / OB-Gyne Ward', 'NURSING', '', NULL),
(62, 'Housekeeping Unit / Orthopedic Ward', 'NURSING', '', NULL),
(63, 'Housekeeping Unit / Pediatric Ward', 'NURSING', '', NULL),
(64, 'Human Resource Management Office (HRMO)', 'HOPSS', '', NULL),
(65, 'Human Milk Bank', 'NURSING', '', NULL),
(66, 'Public Affairs and Customer Care Unit (PACCU)', 'HOPSS', '', NULL),
(67, 'Out-Patient Department', 'HOPSS', '', NULL),
(68, 'Integrated Hospital Operations and Management Prog', 'OMCC', '', NULL),
(69, 'Infection Prevention and Control Committee (IPCC)', 'NURSING', '', NULL),
(70, 'Treatment Hub', 'NURSING', '', NULL),
(71, 'Information and Innovation System Unit (IISU)', 'OMCC', '', NULL),
(72, 'Internal Control (IC)', 'OMCC', '', NULL),
(73, 'Internal Medicine Department', 'MEDICAL', '', NULL),
(74, 'OPD-TeleMedicine', 'MEDICAL', '', NULL),
(75, 'Nursing Service - Medical Ward (Ward 5)', 'NURSING', '', NULL),
(76, 'Radiology Department', 'MEDICAL', '', NULL),
(77, 'Nursing Service - Isolation Facility', 'NURSING', '', NULL),
(78, 'Legal Section', 'OMCC', '', NULL),
(79, 'Linen and Laundry Unit', 'HOPSS', '', NULL),
(80, 'Clinical Laboratory Department', 'MEDICAL', '', NULL),
(81, 'Material Management Section (MMS)', 'HOPSS', '', NULL),
(82, 'Nursing Service - Medical Intensive Care Unit (MIC', 'NURSING', '', NULL),
(83, 'Medical Social Services (MSS)', 'MEDICAL', '', NULL),
(84, 'Nursing Service - Neonatal Intensive Care Unit (NI', 'NURSING', '', NULL),
(85, 'Nursing Service - Newborn Screening', 'NURSING', '', NULL),
(86, 'Nursing Service Office (NSO)', 'NURSING', '', NULL),
(87, 'Nutrition and Dietetics Department', 'MEDICAL', '', NULL),
(88, 'Nursing Service - Ob-Gyne Ward (Ward 1)', 'NURSING', '', NULL),
(89, 'OB-Gyne Department', 'NURSING', '', NULL),
(90, 'Nursing Service - OB-OR Complex', 'NURSING', '', NULL),
(91, 'Office for Institutional Strategy and Excellence (', 'OMCC', '', NULL),
(92, 'Office of the Medical Center Chief (OMCC)', 'OMCC', '', NULL),
(93, 'Nursing Service - Surgical Ward (Ward 4)', 'NURSING', '', NULL),
(94, 'Operation Center-Health Emergency Medical Staff (O', 'MEDICAL', '', NULL),
(95, 'OPD-TeleConsult', 'MEDICAL', '', NULL),
(96, 'Quality Improvement, Infection, Prevention and Con', 'OMCC', '', NULL),
(97, 'Opthalmology Department', 'MEDICAL', '', NULL),
(98, 'Orthopedics Department', 'MEDICAL', '', NULL),
(99, 'TB Dots/PMDT', 'NURSING', '', NULL),
(100, 'Public Affairs and Customer Care Unit (PACCU)', 'OMCC', '', NULL),
(101, 'Nursing Service - Post Anesthesia Care Unit (PACU)', 'NURSING', '', NULL),
(102, 'Nursing Service - Pediatric Intensive Care Unit (P', 'NURSING', '', NULL),
(103, 'Nursing Service - Pediatric Ward (Ward 8)', 'MEDICAL', '', NULL),
(104, 'Peritoneal Dialysis', 'NURSING', '', NULL),
(105, 'Professional Education Training & Research Office', 'OMCC', '', NULL),
(106, 'Planning Unit', 'OMCC', '', NULL),
(107, 'Poison Control Center', 'NURSING', '', NULL),
(108, 'Procurement Unit', 'HOPSS', '', NULL),
(109, 'Nursing Service - Psychiatric Ward (Ward 9)', 'NURSING', '', NULL),
(110, 'Public Health Unit (PHU)', 'OMCC', '', NULL),
(111, 'Pulmonary Unit', 'MEDICAL', '', NULL),
(112, 'Nursing Service - Infectious Unit (Ward 6)', 'OMCC', '', NULL),
(113, 'Safety and Environment Unit', 'OMCC', '', NULL),
(114, 'Security', 'HOPSS', '', NULL),
(115, 'Surgery / Orthopedic / ENT Wards', 'NURSING', '', NULL),
(116, 'Nursing Service - Surgical Intensive Care Unit (SI', 'NURSING', '', NULL),
(117, 'Women and Child Protection Unit (WCPU)', 'OMCC', '', NULL),
(118, 'Detailed DOH', 'HOPSS', '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `emp_id` int(11) NOT NULL,
  `emp_name` varchar(50) NOT NULL,
  `emp_position` varchar(50) NOT NULL,
  `emp_sg` varchar(5) NOT NULL,
  `emp_yearscurrentpos` varchar(11) NOT NULL,
  `emp_yearsplantpos` varchar(11) DEFAULT NULL,
  `emp_dep` text NOT NULL,
  `emp_sex` varchar(6) NOT NULL,
  `emp_contact` varchar(11) NOT NULL,
  `emp_classification` varchar(32) NOT NULL,
  `emp_yearperiod` int(11) NOT NULL,
  `emp_div` varchar(16) NOT NULL,
  `emp_idnumber` varchar(11) DEFAULT NULL,
  `emp_sdatecurrentpos` date DEFAULT NULL,
  `emp_sdateplantpos` date DEFAULT NULL,
  `emp_super` varchar(50) NOT NULL,
  `emp_email` varchar(32) NOT NULL,
  `emp_status` varchar(12) NOT NULL,
  `emp_dateofbirth` date DEFAULT NULL,
  `emp_dateofentry` date DEFAULT NULL,
  `with_prof` varchar(3) NOT NULL,
  `emp_prof` varchar(50) DEFAULT NULL,
  `emp_cpdunits` int(11) DEFAULT NULL,
  `emp_prcid` int(11) DEFAULT NULL,
  `emp_prcexpdate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`emp_id`, `emp_name`, `emp_position`, `emp_sg`, `emp_yearscurrentpos`, `emp_yearsplantpos`, `emp_dep`, `emp_sex`, `emp_contact`, `emp_classification`, `emp_yearperiod`, `emp_div`, `emp_idnumber`, `emp_sdatecurrentpos`, `emp_sdateplantpos`, `emp_super`, `emp_email`, `emp_status`, `emp_dateofbirth`, `emp_dateofentry`, `with_prof`, `emp_prof`, `emp_cpdunits`, `emp_prcid`, `emp_prcexpdate`) VALUES
(1, 'Lorem Ipsum', 'Dolor Sit Amet', '10', '2', '1', 'Consectetur Dept', 'Male', '0000000000', 'ADMINISTRATIVE STAFF', 2025, 'FINANCE', 'EMP001', '2025-01-01', '2025-02-01', 'Supervisor Lorem', 'lorem@ipsum.com', 'Active', '1990-01-01', '2020-01-01', 'Yes', 'Placeholder Profession', 10, 123456, '2030-01-01'),
(2, 'Ipsum Dolor', 'Adipiscing Elit', '11', '3', '2', 'Sed Department', 'Female', '1111111111', 'DM/TS', 2025, 'MEDICAL', 'EMP002', '2025-03-01', '2025-04-01', 'Supervisor Ipsum', 'ipsum@lorem.com', 'Job Order', '1992-02-02', '2021-02-02', 'No', 'Sample Profession', 20, 654321, '2031-02-02'),
(3, 'Sit Amet', 'Consectetur Position', '12', '5', '4', 'Adipiscing Dept', 'Male', '2222222222', 'ADMINISTRATIVE STAFF', 2025, 'NURSING', 'EMP003', '2025-05-01', '2025-06-01', 'Supervisor Dolor', 'sit@amet.com', 'Permanent', '1995-03-03', '2022-03-03', 'Yes', 'Example Profession', 15, 789012, '2032-03-03');

-- --------------------------------------------------------

--
-- Table structure for table `employee_ca_description`
--

CREATE TABLE `employee_ca_description` (
  `empd_id` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL,
  `empd_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee_ca_description`
--

INSERT INTO `employee_ca_description` (`empd_id`, `emp_id`, `empd_description`) VALUES
(3, 2242, ''),
(4, 2243, ''),
(5, 2244, ''),
(6, 2245, 'asdasdazcx'),
(7, 2246, 'yuyuyu'),
(9, 24, 'werrrre'),
(10, 3, 'wzzz'),
(11, 4, 'luilulul'),
(15, 2, 'zzzz'),
(16, 1, 'assezzz'),
(17, 21, 'zczczcccc'),
(18, 2247, ''),
(19, 1791, 'zczxcs');

-- --------------------------------------------------------

--
-- Table structure for table `employee_ca_gap`
--

CREATE TABLE `employee_ca_gap` (
  `empg_id` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL,
  `empg_gap` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee_ca_gap`
--

INSERT INTO `employee_ca_gap` (`empg_id`, `emp_id`, `empg_gap`) VALUES
(6, 2247, 'Building a Succe'),
(10, 4, 'Advocating Publi'),
(11, 1791, 'Advocating Publi'),
(12, 1791, 'Building a Succe'),
(74, 2, 'Change Management'),
(75, 2, 'Data Recording and Reporting'),
(76, 2, 'Data Management'),
(77, 2, 'Diversity Management'),
(78, 2, 'Equipment, Materials and Supplies Management'),
(95, 1, 'Advocating Public Health'),
(96, 1, 'Computer Skills'),
(97, 1, 'Conceptual Thinking'),
(98, 1, 'Drugs and Medicines Management');

-- --------------------------------------------------------

--
-- Table structure for table `employee_ca_strength`
--

CREATE TABLE `employee_ca_strength` (
  `emps_id` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL,
  `emps_strength` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee_ca_strength`
--

INSERT INTO `employee_ca_strength` (`emps_id`, `emp_id`, `emps_strength`) VALUES
(8, 2247, 'Achieving High S'),
(11, 4, 'Achieving High S'),
(12, 4, 'Accounting Profi'),
(13, 1791, 'Achieving High S'),
(74, 2, 'Benefits, Compensation and Welfare Management'),
(75, 2, 'Achieving High Standards'),
(76, 2, 'Advocating Public Health'),
(77, 2, 'Attention to Details'),
(85, 1, 'Contract Management');

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
  `empl_datecompleteed` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee_ldplan`
--

INSERT INTO `employee_ldplan` (`empl_id`, `emp_id`, `empl_development`, `empl_expected`, `empl_support`, `empl_budget`, `empl_resources`, `empl_datecompleteed`) VALUES
(21, 2, 'wewewiiiii', '', '', '', 'kll', '2025-07-17'),
(26, 1, 'ccccc', '', '', '', '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `position`
--

CREATE TABLE `position` (
  `pos_id` int(11) NOT NULL,
  `pos_name` varchar(50) NOT NULL,
  `pos_sg` varchar(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `position`
--

INSERT INTO `position` (`pos_id`, `pos_name`, `pos_sg`) VALUES
(1, 'ACCOUNTANT III', '19'),
(2, 'ACCOUNTANT IV', '22'),
(3, 'ADMINISTRATIVE AIDE I', '01'),
(4, 'ADMINISTRATIVE AIDE I (ELEVATOR OPERATOR)', ''),
(5, 'ADMINISTRATIVE AIDE I (FOOD SERVER WORKER)', ''),
(6, 'ADMINISTRATIVE AIDE I (LAUNDRY WORKER)', ''),
(7, 'ADMINISTRATIVE AIDE I (OXYGEN TANK MOVER)', ''),
(8, 'ADMINISTRATIVE AIDE I (SEAMSTER)', ''),
(9, 'ADMINISTRATIVE AIDE I (TANK MOVER)', ''),
(10, 'ADMINISTRATIVE AIDE I,  EO 366', '1'),
(11, 'ADMINISTRATIVE AIDE III', '03'),
(12, 'ADMINISTRATIVE AIDE III (AIRCON TECHNICIAN)', ''),
(13, 'ADMINISTRATIVE AIDE III (AUTOCLAVE OPERATOR)', ''),
(14, 'ADMINISTRATIVE AIDE III (ELECTRICIAN)', ''),
(15, 'ADMINISTRATIVE AIDE III (FINISHING CARPENTER)', ''),
(16, 'ADMINISTRATIVE AIDE III (MASON/CARPENTER)', ''),
(17, 'ADMINISTRATIVE AIDE III (OXYGEN PLANT OPERATOR)', ''),
(18, 'ADMINISTRATIVE AIDE III (PAINTER)', ''),
(19, 'ADMINISTRATIVE AIDE III (PLUMBER)', ''),
(20, 'ADMINISTRATIVE AIDE III (STP/ WASTE AUTOCLAVE OPER', ''),
(21, 'ADMINISTRATIVE AIDE III (WELDER)', ''),
(22, 'ADMINISTRATIVE AIDE III,  EO 366', '3'),
(23, 'ADMINISTRATIVE AIDE IV', '4'),
(24, 'ADMINISTRATIVE AIDE IV (AMBULANCE DRIVER)', ''),
(25, 'ADMINISTRATIVE AIDE V', '5'),
(26, 'ADMINISTRATIVE AIDE VI', '6'),
(27, 'ADMINISTRATIVE ASSISTANT I', '7'),
(28, 'ADMINISTRATIVE ASSISTANT I (CUSTOMER CARE OFFICER)', ''),
(29, 'ADMINISTRATIVE ASSISTANT II', '8'),
(30, 'ADMINISTRATIVE ASSISTANT III', '9'),
(31, 'ADMINISTRATIVE OFFICER I', '10'),
(32, 'ADMINISTRATIVE OFFICER II', '11'),
(33, 'ADMINISTRATIVE OFFICER III', '14'),
(34, 'ADMINISTRATIVE OFFICER IV', '15'),
(35, 'ADMINISTRATIVE OFFICER V', '18'),
(36, 'ARCHITECT I', ''),
(37, 'ATTORNEY II (PART-TIME)', ''),
(38, 'ATTORNEY IV', '23'),
(39, 'AUDIOLOGIST', ''),
(40, 'CHEMIST I', ''),
(41, 'CHEMIST III', '18'),
(42, 'CHIEF ADMINISTRATIVE OFFICER', '24'),
(43, 'CHIEF OF MEDICAL PROFESSIONAL STAFF II', '26'),
(44, 'CLINICAL CARE ASSOCIATE', ''),
(45, 'COMPUTER MAINTENANCE TECHNICIAN (COMPUTER OPERATOR', ''),
(46, 'COMPUTER MAINTENANCE TECHNOLOGIST II', '15'),
(47, 'COMPUTER MAINTENANCE TECHNOLOGIST III', '17'),
(48, 'COMPUTER PROGRAMMER I', ''),
(49, 'COMPUTER PROGRAMMER II', ''),
(50, 'COOK II', '5'),
(51, 'DENTAL AIDE', '4'),
(52, 'DENTIST II', ''),
(53, 'DENTIST III', '20'),
(54, 'DENTIST V', '24'),
(55, 'EEG TECHNICIAN', ''),
(56, 'ENGINEER I', ''),
(57, 'ENGINEER I (CIVIL)', ''),
(58, 'ENGINEER I (ELECTRICAL)', ''),
(59, 'ENGINEER I (MECHANICAL)', ''),
(60, 'ENGINEER I (SANITARY)', ''),
(61, 'ENGINEER II', '16'),
(62, 'ENGINEER III', '19'),
(63, 'ENGINEER IV', '22'),
(64, 'ENVIRONMENTAL ENGINEER', ''),
(65, 'FINANCIAL AND MANAGEMENT OFFICER II', '24'),
(66, 'HEALTH EDUCATION AND PROMOTION OFFICER II', '14'),
(67, 'HEALTH EDUCATION AND PROMOTION OFFICER III', '18'),
(68, 'HEALTH PHYSICIST II', '18'),
(69, 'HEALTH PHYSICIST III', '22'),
(70, 'HOSPITAL HOUSEKEEPER', '8'),
(71, 'INFORMATION SYSTEM ANALYST III', ''),
(72, 'LABORATORY AIDE II', '4'),
(73, 'LABORATORY AIDE II,  EO 366', '4'),
(74, 'LABORATORY TECHNICIAN I', ''),
(75, 'LAUNDRY WORKER I', '01'),
(76, 'LAUNDRY WORKER II', '3'),
(77, 'LIBRARIAN I', '11'),
(78, 'MAINTENANCE HELPER (INDUSTRIAL ELECTRICIAN)', ''),
(79, 'MAINTENANCE HELPER (INDUSTRIAL MECHANIC)', ''),
(80, 'MEDICAL CENTER CHIEF II', '27'),
(81, 'MEDICAL EQUIPMENT TECHNICIAN I', '6'),
(82, 'MEDICAL EQUIPMENT TECHNICIAN II', '8'),
(83, 'MEDICAL EQUIPMENT TECHNICIAN III', '11'),
(84, 'MEDICAL EQUIPMENT TECHNICIAN IV', '13'),
(85, 'MEDICAL LABORATORY TECHNICIAN III', '10'),
(86, 'MEDICAL OFFICER III', '21'),
(87, 'MEDICAL OFFICER IV', '21'),
(88, 'MEDICAL SPECIALIST II', '23'),
(89, 'MEDICAL SPECIALIST II (PART TIME)', '23'),
(90, 'MEDICAL SPECIALIST III', '24'),
(91, 'MEDICAL SPECIALIST III (PART TIME)', '24'),
(92, 'MEDICAL SPECIALIST IV', '25'),
(93, 'MEDICAL TECHNOLOGIST I', '11'),
(94, 'MEDICAL TECHNOLOGIST I (SWABBER)', ''),
(95, 'MEDICAL TECHNOLOGIST II', '15'),
(96, 'MEDICAL TECHNOLOGIST III', '18'),
(97, 'MEDICAL TECHNOLOGIST IV', '20'),
(98, 'MEDICAL TECHNOLOGIST V', '22'),
(99, 'MIDWIFE I', '9'),
(100, 'MIDWIFE II', '11'),
(101, 'MIDWIFE III', '13'),
(102, 'MIDWIFE IV', '15'),
(103, 'NURSE I', '15'),
(104, 'NURSE II', '16'),
(105, 'NURSE III', '17'),
(106, 'NURSE IV', '19'),
(107, 'NURSE V', '20'),
(108, 'NURSE VI', '22'),
(109, 'NURSE VII', '24'),
(110, 'NURSING ATTENDANT I', '4'),
(111, 'NURSING ATTENDANT II', '6'),
(112, 'NURSING ATTENDANT II (MEDICAL RESPONDER)', ''),
(113, 'NUTRITIONIST DIETITIAN II', '15'),
(114, 'NUTRITIONIST DIETITIAN III', '18'),
(115, 'NUTRITIONIST DIETITIAN IV', '20'),
(116, 'NUTRITIONIST DIETITIAN V', '22'),
(117, 'NUTRITIONIST-DIETITIAN III', ''),
(118, 'OCCUPATIONAL THERAPIST II', ''),
(119, 'OCCUPATIONAL THERAPIST III', ''),
(120, 'PHARMACIST I', '11'),
(121, 'PHARMACIST II', '15'),
(122, 'PHARMACIST III', '18'),
(123, 'PHARMACIST IV', '20'),
(124, 'PHARMACIST V', '22'),
(125, 'PHYSICAL THERAPIST I', '11'),
(126, 'PHYSICAL THERAPIST II', '15'),
(127, 'PHYSICAL THERAPIST III', '18'),
(128, 'PHYSICAL THERAPY TECHNICIAN I', '06'),
(129, 'PLANNING OFFICER III', '18'),
(130, 'PSYCHOLOGIST II', '15'),
(131, 'PSYCHOLOGIST III', '18'),
(132, 'RADIOLOGIC TECHNOLOGIST I', '11'),
(133, 'RADIOLOGIC TECHNOLOGIST II', '15'),
(134, 'RADIOLOGIC TECHNOLOGIST III', '18'),
(135, 'RADIOLOGIC TECHNOLOGIST IV', '20'),
(136, 'RECORDS OFFICER III', '18'),
(137, 'RESPIRATORY THERAPIST I', '10'),
(138, 'RESPIRATORY THERAPIST II', '14'),
(139, 'RESPIRATORY THERAPIST III', '17'),
(140, 'SEAMSTRESS', '2'),
(141, 'SECURITY AIDE', ''),
(142, 'SECURITY GUARD I', '03'),
(143, 'SECURITY GUARD II,  EO 366', '5'),
(144, 'SENIOR HEALTH PROGRAM OFFICER', '18'),
(145, 'SOCIAL WELFARE ASSISTANT', '8'),
(146, 'SOCIAL WELFARE OFFICER I', '11'),
(147, 'SOCIAL WELFARE OFFICER II', '15'),
(148, 'SOCIAL WELFARE OFFICER III', '18'),
(149, 'SOCIAL WELFARE OFFICER IV', '22'),
(150, 'STATISTICIAN II', '15'),
(151, 'STATISTICIAN III', '18'),
(152, 'SUPERVISING ADMINISTRATIVE OFFICER', '22'),
(153, 'TRAINING ASSISTANT', '8'),
(154, 'TRAINING SPECIALIST IV', '22'),
(155, 'WARD ASSISTANT', '7'),
(156, 'WARD ASSISTANT (CUSTOMER CARE OFFICER)', ''),
(157, 'WARD ASSISTANT (PHARMACY ASSISTANT)', ''),
(158, 'WARD ASSISTANT (Z PACKAGE PATIENT NAVIGATOR)', ''),
(159, 'WAREHOUSEMAN III', '11');

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
  `prof_alphaname` varchar(50) NOT NULL,
  `prof_name` varchar(50) NOT NULL,
  `prof_code` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profession`
--

INSERT INTO `profession` (`prof_id`, `prof_alphaname`, `prof_name`, `prof_code`) VALUES
(1, 'Accountancy (ACC)', 'Certified Public Accountant', '100'),
(2, 'Aeronautical Engineering (AER)', 'Aeronautical Engineer', '3400'),
(3, 'Agricultural & Biosystems Engineering (ABE)', 'Agricultural And Biosystems Engineer', '200'),
(4, 'Agriculture (AGR)', 'Agriculturist', '4200'),
(5, 'Architecture (ARC)', 'Architect', '300'),
(6, 'Chemical Engineering (CHE)', 'Chemical Engineer', '410'),
(7, 'Chemistry (CHM)', 'Chemist', '510'),
(8, 'Chemistry (CHM)', 'Chemical Technician', '520'),
(9, 'Civil Engineering (OCE)', 'Civil Engineer', '600'),
(10, 'Criminology (CRM)', 'Criminologist', '3500'),
(11, 'Customs Broker (OCB)', 'Customs Broker', '800'),
(12, 'Dentistry (DNT)', 'Dentist', '910'),
(13, 'Dentistry (DNT)', 'Dental Hygienist', '920'),
(14, 'Dentistry (DNT)', 'Dental Technologist', '930'),
(15, 'Electrical Engineering (OEE)', 'Registered Electrical Engineer', '1100'),
(16, 'Electrical Engineering (OEE)', 'Professional Electrical Engineer', '1110'),
(17, 'Electrical Engineering (OEE)', 'Registered Master Electrician', '1150'),
(18, 'Electronics Engineering (ECE)', 'Electronics And Communications Engineer', '1200'),
(19, 'Electronics Engineering (ECE)', 'Professional Electronics Engineer', '1201'),
(20, 'Electronics Engineering (ECE)', 'Electronics Engineer', '1202'),
(21, 'Electronics Engineering (ECE)', 'Electronics Technician', '1203'),
(22, 'Environmental Planning (OEP)', 'Environmental Planner', '3600'),
(23, 'Fisheries (FIS)', 'Fisheries Technologist', '4300'),
(24, 'Food Technology (OFT)', 'Food Technologist', '4540'),
(25, 'Forestry (FRT)', 'Forester', '1300'),
(26, 'Geodetic Engineering (OGE)', 'Geodetic Engineer', '1410'),
(27, 'Geology (GEO)', 'Geologist', '1510'),
(28, 'Geology (GEO)', 'Geologic Aide', '1520'),
(29, 'Guidance & Counseling (OGC)', 'Guidance Counselor', '4100'),
(30, 'Interior Design (OID)', 'Interior Designer', '310'),
(31, 'Landscape Architecture (OLA)', 'Landscape Architect', '320'),
(32, 'Librarian (LIB)', 'Librarian', '3800'),
(33, 'Master Plumbing (OMP)', 'Master Plumber', '1900'),
(34, 'Mechanical Engineering (MEE)', 'Professional Mechanical Engineer', '2010'),
(35, 'Mechanical Engineering (MEE)', 'Mechanical Engineer', '2040'),
(36, 'Mechanical Engineering (MEE)', 'Certified Plant Mechanic', '2060'),
(37, 'Medical Technology (OMT)', 'Medical Technologist', '2110'),
(38, 'Medical Technology (OMT)', 'Medical Laboratory Technician', '2120'),
(39, 'Medicine (MED)', 'Physician', '2200'),
(40, 'Metallurgical Engineering (OME)', 'Metallurgical Engineer', '1810'),
(41, 'Metallurgical Engineering (OME)', 'Metallurgical Plant Foreman', '1820'),
(42, 'Midwifery (MDW)', 'Midwife (Ra 2382)', '2310'),
(43, 'Midwifery (MDW)', 'Midwife', '2320'),
(44, 'Mining Engineering (MIN)', 'Mining Engineer', '2410'),
(45, 'Mining Engineering (MIN)', 'Certified Mine Foreman', '2420'),
(46, 'Mining Engineering (MIN)', 'Certified Quarry Foreman', '2440'),
(47, 'Naval Architecture (NAME)', 'Naval Architect & Marine Engineer', '2500'),
(48, 'Nursing (NRS)', 'Nurse', '2600'),
(49, 'Nutrition & Dietetics (NAD)', 'Nutritionist Dietitian', '1010'),
(50, 'Occupational Therapy (OCT)', 'Occupational Therapist', '2920'),
(51, 'Optometry (OPT)', 'Optometrist', '2700'),
(52, 'Optometry (OPT)', 'Ocular Pharmacologist', '2710'),
(53, 'Pharmacy (PHA)', 'Pharmacist', '2810'),
(54, 'Pharmacy (PHA)', 'Chinese Druggist', '2820'),
(55, 'Physical Therapy (PHT)', 'Physical Therapist', '2910'),
(56, 'Professional Teachers (PTR)', 'Professional Teacher', '4000'),
(57, 'Psychology (PSYCH)', 'Psychologist', '4520'),
(58, 'Psychology (PSYCH)', 'Psychometrician', '4530'),
(59, 'Radiologic Technology (RAD)', 'Radiologic Technologist', '3710'),
(60, 'Radiologic Technology (RAD)', 'X-Ray Technologist', '3720'),
(61, 'Real Estate Service (RAE)', 'Real Estate Consultant', '4410'),
(62, 'Real Estate Service (RAE)', 'Real Estate Appraiser', '4420'),
(63, 'Real Estate Service (RAE)', 'Real Estate Broker', '4430'),
(64, 'Real Estate Service (RAE)', 'Real Estate Sales Person', 'NA'),
(65, 'Respiratory Therapy (RES)', 'Respiratory Therapist', '4510'),
(66, 'Sanitary Engineering (SAN)', 'Sanitary Engineer', '3000'),
(67, 'Social Workers (OSW)', 'Social Worker', '3200'),
(68, 'Speech-Language Pathology (SLP)', 'Speech-Language Pathologist', '4550'),
(69, 'Veterinary Medicine (VET)', 'Veterinarian', '3300');

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
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `stat_id` int(11) NOT NULL,
  `stat_name` varchar(20) NOT NULL,
  `stat_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`stat_id`, `stat_name`, `stat_description`) VALUES
(1, 'Permanent', 'Regular Employees with Plantilla'),
(2, 'Job Order', 'Contractual Employees'),
(3, 'Temporary', 'Part-Time positions'),
(4, 'Separated', 'Resigned, Retired or Terminated Employees');

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
-- Table structure for table `training_inhouse`
--

CREATE TABLE `training_inhouse` (
  `training_inhouse_id` int(11) NOT NULL,
  `training_id` int(11) NOT NULL,
  `training_inhouse_two` varchar(255) DEFAULT NULL,
  `training_inhouse_reqdep` varchar(255) DEFAULT NULL,
  `training_inhouse_category` varchar(255) DEFAULT NULL,
  `training_inhouse_venue` varchar(255) DEFAULT NULL,
  `training_inhouse_iscpd` tinyint(1) DEFAULT NULL,
  `training_inhouse_members` text DEFAULT NULL,
  `training_inhouse_title` varchar(255) DEFAULT NULL,
  `training_inhouse_description` text DEFAULT NULL,
  `training_inhouse_objectives` text DEFAULT NULL,
  `training_inhouse_outcome` text DEFAULT NULL,
  `training_inhouse_competency_area` varchar(255) DEFAULT NULL,
  `training_inhouse_competency_title` varchar(255) DEFAULT NULL,
  `training_inhouse_conductdate` date DEFAULT NULL,
  `training_inhouse_paxcategory` varchar(255) DEFAULT NULL,
  `training_inhouse_nodays` int(11) DEFAULT NULL,
  `training_inhouse_nohours` int(11) DEFAULT NULL,
  `training_inhouse_noomcc` int(11) DEFAULT NULL,
  `training_inhouse_nodmts` int(11) DEFAULT NULL,
  `training_inhouse_noadmin` int(11) DEFAULT NULL,
  `training_inhouse_noresourcepersons` int(11) DEFAULT NULL,
  `training_inhouse_totalpax` int(11) DEFAULT NULL,
  `training_inhouse_totalfemale` int(11) DEFAULT NULL,
  `training_inhouse_totalmale` int(11) DEFAULT NULL,
  `training_inhouse_totalcost` decimal(10,2) DEFAULT NULL,
  `training_inhouse_fundingsource` varchar(255) DEFAULT NULL,
  `training_inhouse_pono` varchar(255) DEFAULT NULL,
  `training_inhouse_dateapproved` date DEFAULT NULL,
  `training_inhouse_pdfpo` varchar(255) DEFAULT NULL,
  `training_inhouse_pdfattendance` varchar(255) DEFAULT NULL,
  `training_inhouse_pdfpostactivity` varchar(255) DEFAULT NULL,
  `training_inhouse_pte` text DEFAULT NULL,
  `training_inhouse_linkowner` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `training_outhouse`
--

CREATE TABLE `training_outhouse` (
  `training_outhouse_id` int(11) NOT NULL,
  `training_id` int(11) NOT NULL,
  `training_outhouse_title` text NOT NULL,
  `training_outhouse_type` varchar(24) NOT NULL,
  `training_outhouse_fromdate` date NOT NULL,
  `training_outhouse_todate` date NOT NULL,
  `training_outhouse_venue` text NOT NULL,
  `training_outhouse_receiveddate` date NOT NULL,
  `training_outhouse_remarks` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `affiliation_types`
--
ALTER TABLE `affiliation_types`
  ADD PRIMARY KEY (`aff_type_id`);

--
-- Indexes for table `classification`
--
ALTER TABLE `classification`
  ADD PRIMARY KEY (`class_id`);

--
-- Indexes for table `competency`
--
ALTER TABLE `competency`
  ADD PRIMARY KEY (`comp_id`);

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
  ADD PRIMARY KEY (`empd_id`);

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
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`stat_id`);

--
-- Indexes for table `training`
--
ALTER TABLE `training`
  ADD PRIMARY KEY (`training_id`);

--
-- Indexes for table `training_inhouse`
--
ALTER TABLE `training_inhouse`
  ADD PRIMARY KEY (`training_inhouse_id`);

--
-- Indexes for table `training_outhouse`
--
ALTER TABLE `training_outhouse`
  ADD PRIMARY KEY (`training_outhouse_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `affiliation_types`
--
ALTER TABLE `affiliation_types`
  MODIFY `aff_type_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `classification`
--
ALTER TABLE `classification`
  MODIFY `class_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `competency`
--
ALTER TABLE `competency`
  MODIFY `comp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `dep_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `emp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `employee_ca_description`
--
ALTER TABLE `employee_ca_description`
  MODIFY `empd_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `employee_ca_gap`
--
ALTER TABLE `employee_ca_gap`
  MODIFY `empg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `employee_ca_strength`
--
ALTER TABLE `employee_ca_strength`
  MODIFY `emps_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `employee_ldplan`
--
ALTER TABLE `employee_ldplan`
  MODIFY `empl_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

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
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `stat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `training`
--
ALTER TABLE `training`
  MODIFY `training_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `training_outhouse`
--
ALTER TABLE `training_outhouse`
  MODIFY `training_outhouse_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
