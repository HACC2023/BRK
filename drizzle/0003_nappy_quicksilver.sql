CREATE TABLE `brk_debris_Description` (
	`id` tinyint AUTO_INCREMENT NOT NULL,
	`value` varchar(256),
	CONSTRAINT `brk_debris_Description_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
DROP TABLE `brk_account`;--> statement-breakpoint
DROP TABLE `brk_organization`;--> statement-breakpoint
DROP TABLE `brk_roles`;--> statement-breakpoint
DROP TABLE `brk_session`;--> statement-breakpoint
DROP TABLE `brk_user`;--> statement-breakpoint
DROP TABLE `brk_verificationToken`;