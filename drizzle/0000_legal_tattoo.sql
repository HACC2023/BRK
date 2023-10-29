CREATE TABLE `brk_account` (
	`userId` varchar(255) NOT NULL,
	`type` varchar(255) NOT NULL,
	`provider` varchar(255) NOT NULL,
	`providerAccountId` varchar(255) NOT NULL,
	`refresh_token` varchar(255),
	`access_token` varchar(255),
	`expires_at` int,
	`token_type` varchar(255),
	`scope` varchar(255),
	`id_token` varchar(255),
	`session_state` varchar(255),
	CONSTRAINT `brk_account_provider_providerAccountId` PRIMARY KEY(`provider`,`providerAccountId`)
);
--> statement-breakpoint
CREATE TABLE `brk_debris_Description` (
	`id` tinyint AUTO_INCREMENT NOT NULL,
	`value` varchar(256),
	CONSTRAINT `brk_debris_Description_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `brk_debris_location` (
	`id` tinyint AUTO_INCREMENT NOT NULL,
	`value` varchar(256),
	CONSTRAINT `brk_debris_location_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `brk_drum_option` (
	`id` tinyint AUTO_INCREMENT NOT NULL,
	`value` varchar(256),
	CONSTRAINT `brk_drum_option_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `brk_island_options` (
	`id` tinyint AUTO_INCREMENT NOT NULL,
	`value` varchar(256),
	CONSTRAINT `brk_island_options_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `brk_debris_found` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`item` varchar(256),
	CONSTRAINT `brk_debris_found_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `brk_marine_growth` (
	`id` tinyint AUTO_INCREMENT NOT NULL,
	`value` varchar(256),
	CONSTRAINT `brk_marine_growth_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `brk_organization` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`token` varchar(255) NOT NULL,
	CONSTRAINT `brk_organization_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `brk_report_images` (
	`id` bigint,
	`picture_location` text,
	CONSTRAINT `brk_report_images_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `brk_reports` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`last_name` varchar(256),
	`first_name` varchar(256),
	`email` varchar(256),
	`mailing_address` varchar(256),
	`city` varchar(256),
	`state` varchar(256),
	`zipcode` varchar(6),
	`phone` varchar(20),
	`description` text,
	`drum_id` tinyint,
	`YN_boat` boolean,
	`marine_growth_id` tinyint,
	`debris_location_id` tinyint,
	`island_location` tinyint,
	`latitude` double,
	`longitude` double,
	`land_mark` varchar(256),
	`distance` bigint,
	`debris_description_id` tinyint,
	`debris_description` text,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `brk_reports_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `brk_reports_to_debris` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`item_id` bigint,
	`report_id` bigint,
	CONSTRAINT `brk_reports_to_debris_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `brk_roles` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`token` varchar(255) NOT NULL,
	CONSTRAINT `brk_roles_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `brk_session` (
	`sessionToken` varchar(255) NOT NULL,
	`userId` varchar(255) NOT NULL,
	`expires` timestamp NOT NULL,
	CONSTRAINT `brk_session_sessionToken` PRIMARY KEY(`sessionToken`)
);
--> statement-breakpoint
CREATE TABLE `brk_user` (
	`id` bigint,
	`name` varchar(255),
	`email` varchar(255) NOT NULL,
	`emailVerified` timestamp(3) DEFAULT (now()),
	`image` varchar(255),
	CONSTRAINT `brk_user_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `brk_verificationToken` (
	`identifier` varchar(255) NOT NULL,
	`token` varchar(255) NOT NULL,
	`expires` timestamp NOT NULL,
	CONSTRAINT `brk_verificationToken_identifier_token` PRIMARY KEY(`identifier`,`token`)
);
--> statement-breakpoint
CREATE INDEX `email_idx` ON `brk_reports` (`email`);--> statement-breakpoint
CREATE INDEX `lat_idx` ON `brk_reports` (`latitude`);--> statement-breakpoint
CREATE INDEX `lng_idx` ON `brk_reports` (`longitude`);--> statement-breakpoint
CREATE INDEX `item_idx` ON `brk_reports_to_debris` (`item_id`);--> statement-breakpoint
CREATE INDEX `report_idx` ON `brk_reports_to_debris` (`report_id`);