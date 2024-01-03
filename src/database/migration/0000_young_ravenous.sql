CREATE TABLE `todos` (
	`id` char NOT NULL,
	`title` char NOT NULL,
	`description` char NOT NULL,
	`done` boolean NOT NULL,
	CONSTRAINT `todos_id` PRIMARY KEY(`id`)
);
