ALTER TABLE `brk_user` MODIFY COLUMN `id` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `brk_user` ADD `organization_id` bigint;--> statement-breakpoint
ALTER TABLE `brk_user` ADD `role_id` bigint;