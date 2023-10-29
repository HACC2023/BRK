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
CREATE TABLE `brk_organization` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`token` varchar(255) NOT NULL,
	CONSTRAINT `brk_organization_id` PRIMARY KEY(`id`)
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
	`id` varchar(255) NOT NULL,
	`name` varchar(255),
	`email` varchar(255) NOT NULL,
	`emailVerified` timestamp(3) DEFAULT (now()),
	`image` varchar(255),
	`organization_id` bigint,
	`role_id` bigint,
	CONSTRAINT `brk_user_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `brk_verificationToken` (
	`identifier` varchar(255) NOT NULL,
	`token` varchar(255) NOT NULL,
	`expires` timestamp NOT NULL,
	CONSTRAINT `brk_verificationToken_identifier_token` PRIMARY KEY(`identifier`,`token`)
);
